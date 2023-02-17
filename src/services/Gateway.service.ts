import { ConfigService } from '$/services/Config.service.ts'
import { WebSocketService } from '$/services/WebSocket.service.ts'
import { GatewayDispatchEvents, GatewayIntentBits, GatewayOpcodes } from '$/typing.ts'

export class GatewayService {
	private readonly config = new ConfigService()
	private readonly ws: WebSocketService['ws']
	private readonly send: WebSocketService['sendPayloadList']

	constructor() {
		const { URL_WS_DISCORD = '', VERSION_DISCORD = '10' } = this.config.getObject()
		const { ws, sendPayloadList } = new WebSocketService(
			`${URL_WS_DISCORD}/?v=${VERSION_DISCORD}&encoding=json`,
			this.init,
		)

		this.ws = ws
		this.send = sendPayloadList
	}

	private init(): void {
		const token = this.config.get('TOKEN_BOT') || ''

		let payloadList = [
			{
				'op': GatewayOpcodes.Identify,
				'd': {
					token,
					'properties': {
						'$os': 'windows',
						'$browser': 'disco',
						'$device': 'disco',
					},
					'intents': GatewayIntentBits.Guilds + GatewayIntentBits.GuildMessages + GatewayIntentBits.MessageContent,
				},
			},
			{
				'op': GatewayOpcodes.PresenceUpdate,
				'd': {
					'since': 91879201,
					'activities': [{
						'name': 'Coding',
						'type': 0,
					}],
					'status': 'online',
					'afk': false,
				},
			},
		]
		this.send(payloadList)
	}

	public messageCreate(serverId: string, channelsId: string[], callback: (contentMessage: string) => void): void {
		this.ws.onmessage = (message) => {
			const payload = JSON.parse(message.data)
			const event = payload['t'] || 'NOT_EVENT'

			if (event === GatewayDispatchEvents.MessageCreate) {
				const data = payload['d']
				callback(data.content)
			}
		}

		const payload = {
			'op': GatewayOpcodes.Heartbeat,
			'd': {
				guild_id: serverId,
				channel_id: channelsId,
			},
		}
		this.send([payload])
	}
}
