import { loadSync } from 'dotenv'
import { resolve } from 'path'

import { GatewayService } from '$/services/Gateway.service.ts'
import { MessageService } from '$/services/Message.service.ts'
import { RequestService } from '$/services/Request.service.ts'
import { Events, TClientOptions, TEnvs, TUtil } from '$/concord/typing.ts'
import { Loaders } from '$/concord/Loaders.ts'

export class Client {
	private options: TClientOptions
	private envs: TEnvs
	private loaders: Loaders
	public on: TEventFC
	public sendMessage: TMessageFC

	constructor(options?: Partial<TClientOptions>) {
		this.envs = loadSync({ envPath: 'concord.env' }) as TEnvs
		const { TOKEN = '', PREFIX = '' } = this.envs
		const token = options?.token || TOKEN

		const gateway = new GatewayService(token)
		const message = new MessageService(token)

		this.options = {
			token,
			prefix: options?.prefix || PREFIX,
		}

		this.loaders = new Loaders(resolve('src', 'events'), resolve('src', 'commands'))
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

		this.actions()
	}

	public actions(): void {
		const changeCasing = (input: string): string => {
			if (!input) return ''

			if (input.indexOf('_') > -1) {
				const regex = new RegExp('_.', 'gm')
				return input.toLowerCase().replace(regex, (match) => {
					const char = match.replace('_', '')
					return char.toUpperCase()
				})
			} else return input
		}

		this.on(Events.MessageCreate, async (data: TMessageCreateData) => {
			try {
				// Run Events
				const eventName = changeCasing(Events.MessageCreate)
				await this.loaders.actions[eventName](data, { client: this })

				// Run Commands
				const { content } = data
				if (!data.author.bot && content.startsWith(this.options.prefix)) {
					const [command, ...messages] = content.substring(1).split(' ')
					// console.log(command, messages)
					this.loaders.actions[command](
						<TMessageCreateData> {
							...data,
							content: messages.join(' '),
						},
						<TUtil> {
							client: this,
							envs: this.envs,
							request: new RequestService().http.request,
						},
					)

					// TODO: Extraer subcommands y message por separado
					// const action = content.split(' ').filter((t) => t)
					// const subcommands = action.filter(t => t.includes('--'))
				}
			} catch (_) {
				console.log('❌ Comando Incorrecto')
				this.sendMessage([data.channel_id], '❌ Comando Incorrecto')
			}
		})
	}
}
