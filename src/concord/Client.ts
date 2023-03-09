import { GatewayService } from '$/services/Gateway.service.ts'
import { MessageService } from '$/concord/Message.service.ts'
import { Events, TClientOptions } from '$/concord/typing.ts'

export class Client {
	public on: TEventFC
	public sendMessage: TMessageFC

	constructor(options?: TClientOptions) {
		const gateway = new GatewayService(options?.token)
		const message = new MessageService()

		this.on = gateway.eventsListening()
		this.sendMessage = message.create()
	}

	public async start(): Promise<void> {
		await new Promise((resolve, _reject) => {
			this.on(Events.Ready, (_data: TReadyData) => {
				console.log(Client.name, 'START')
				resolve(null)
			})
		})
	}
}
