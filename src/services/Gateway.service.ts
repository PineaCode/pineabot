import { ConfigService } from '$/services/Config.service.ts'
import { WebSocketService } from '$/services/WebSocket.service.ts'
import { GatewayDispatchEvents, GatewayIntentBits, GatewayOpcodes } from '$/typing.ts'

export class GatewayService {
	private readonly config = new ConfigService()
	private readonly ws: WebSocketService['ws']
	private readonly send: WebSocketService['sendPayloadList']

	constructor(token?: string) {
		const { TOKEN_BOT = '', URL_WS_DISCORD = '', VERSION_DISCORD = '10' } = this.config.getObject()
		const wsURL = `${URL_WS_DISCORD}/?v=${VERSION_DISCORD}&encoding=json`
		const { ws, sendPayloadList } = new WebSocketService(wsURL, this.init(token || TOKEN_BOT))

		this.ws = ws
		this.send = sendPayloadList
	}

	private init(token: string): () => void {
		const payloadList = [
			{ op: GatewayOpcodes.Heartbeat, d: null },
			{
				op: GatewayOpcodes.Identify,
				d: {
					token,
					properties: {
						$os: 'linux',
						$browser: 'disco',
						$device: 'disco',
					},
					'intents': GatewayIntentBits.Guilds + GatewayIntentBits.GuildMessages + GatewayIntentBits.MessageContent,
				},
			},
			{
				op: GatewayOpcodes.PresenceUpdate,
				d: {
					since: 91879201,
					activities: [{
						name: 'Coding',
						type: 0,
					}],
					status: 'online',
					afk: false,
				},
			},
		]

		return () => {
			this.send(payloadList)
			console.log(GatewayService.name, 'START')
		}
	}

	public eventsListening(): TEventFC {
		let heartbeatInterval = 0

		return (eventInput: GatewayDispatchEvents, callback: (data: unknown) => void) => {
			this.ws.onmessage = (message) => {
				const payload = JSON.parse(message.data)
				const { t: event = 'NOT_EVENT', op: operation, d: data } = payload as TEventPayload

				// Mantener conexion actica enviando un pulso constante
				if (!heartbeatInterval && operation === 10) {
					const { heartbeat_interval } = data as THeartBeatData
					heartbeatInterval = setInterval(() => {
						this.send([{ op: GatewayOpcodes.Heartbeat, d: null }])
					}, heartbeat_interval)
				}

				if (event === eventInput) {
					callback(data)
				}
			}

			Deno.addSignalListener('SIGINT', () => {
				this.ws.close()
				clearInterval(heartbeatInterval)
				console.log(GatewayService.name, 'STOP')
			})
		}
	}
}
