import { ConfigService } from '$/services/Config.service.ts'
import { WebSocketService } from '$/services/WebSocket.service.ts'
import { GatewayDispatchEvents, GatewayIntentBits, GatewayOpcodes } from '$/typing.ts'

export class GatewayService {
	private readonly config = new ConfigService()
	private ws!: WebSocketService['ws']
	private send!: WebSocketService['sendPayloadList']
	private heartbeatInterval = 0
	private wsURL: string
	private token: string
	private prefix: string
	private evt?: any

	constructor(token: string, prefix: string, evt?: any) {
		const { DISCORD_URL_WS = '', DISCORD_VERSION = '10' } = this.config.getObject()
		this.wsURL = `${DISCORD_URL_WS}/?v=${DISCORD_VERSION}&encoding=json`
		this.token = token
		this.prefix = prefix
		this.evt = evt
		this.connect()
	}

	private connect(): void {
		const { ws, sendPayloadList } = new WebSocketService(this.wsURL, this.init())
		this.ws = ws
		this.send = sendPayloadList
	}

	private init(): () => void {
		const payloadList = [
			{ op: GatewayOpcodes.Heartbeat, d: null },
			{
				op: GatewayOpcodes.Identify,
				d: {
					token: this.token,
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
						name: `comando ${this.prefix}`,
						type: 2,
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
		return (eventInput: GatewayDispatchEvents, callback: (data: unknown) => void) => {
			this.ws.onmessage = (message) => {
				const payload = JSON.parse(message.data)
				const { t: event = 'NOT_EVENT', op: operation, d: data } = payload as TEventPayload

				// Realizar una reconección si ocurre un error
				if (operation === 7) {
					console.log('RECCONET')
					this.stopConnection()
					if (this.evt) {
						const event = new CustomEvent('reset', { detail: 'RESET CLIENT' })
						this.evt.dispatchEvent(event)
					}
					return
				}

				// Mantener conexion actica enviando un pulso constante
				if (!this.heartbeatInterval && operation === 10) {
					const { heartbeat_interval } = data as THeartBeatData
					this.heartbeatInterval = setInterval(() => {
						this.send([{ op: GatewayOpcodes.Heartbeat, d: null }])
					}, heartbeat_interval)
				}

				if (event === eventInput) {
					callback(data)
				}
			}

			Deno.addSignalListener('SIGINT', () => this.stopConnection())
		}
	}

	public stopConnection(): void {
		this.ws.close()
		clearInterval(this.heartbeatInterval)
		this.heartbeatInterval = 0
		console.log(GatewayService.name, 'STOP')
	}
}
