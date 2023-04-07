import { resolve } from 'path'

import { ConfigService, TConfig } from '$/services/Config.service.ts'
import { UtilService } from '$/services/Util.service.ts'
import { GatewayService } from '$/services/Gateway.service.ts'
import { MessageService } from '$/services/Message.service.ts'
import { RequestService } from '$/services/Request.service.ts'
import { RoleService } from '$/services/Roles.service.ts'
import { Events, TClientOptions, TTools } from '$/concord/typing.ts'
import { Loaders } from '$/concord/Loaders.ts'

export class Client extends UtilService {
	private readonly config: ConfigService = new ConfigService()
	private options: TClientOptions
	private loaders: Loaders
	public on: TEventFC
	public envs: Record<TConfig, string>
	public message: MessageService
	public role!: RoleService

	constructor(options?: Partial<TClientOptions>) {
		super()
		this.envs = this.config.getObject()
		const { TOKEN = '', PREFIX = '$' } = this.envs
		const token = options?.token || TOKEN

		const gateway = new GatewayService(token, PREFIX)
		this.message = new MessageService(token)

		this.options = {
			token,
			prefix: options?.prefix || PREFIX,
		}

		this.loaders = new Loaders(resolve('src', 'events'), resolve('src', 'commands'))
		this.on = gateway.eventsListening()
	}

	public async start(): Promise<void> {
		await new Promise((resolve, _reject) => {
			this.on(Events.Ready, (data: TReadyData) => {
				this.role = new RoleService(this.envs.TOKEN, data.guilds[0].id)

				this.loaders.actions['ready'](data, {
					client: this,
					request: new RequestService().http.request,
				})
				console.log(Client.name, 'START')
				resolve(null)
			})
		})

		this.actions()
	}

	public actions(): void {
		this.on(Events.MessageCreate, async (data: TMessageCreateData) => {
			try {
				const tools: TTools = {
					client: this,
					request: new RequestService().http.request,
				}

				// Run Events
				const eventName = this.changeCasing(Events.MessageCreate)
				await this.loaders.actions[eventName](data, tools)

				// Run Commands
				const { content } = data
				if (!data.author.bot && content.startsWith(this.options.prefix)) {
					const [command, ...messages] = content.substring(1).split(' ')
					// console.log(command, messages)
					this.loaders.actions[command](
						<TMessageCreateData> {
							...data,
							content: messages.join(' ').toLowerCase(),
						},
						tools,
					)

					// TODO: Extraer subcommands y message por separado
					// const action = content.split(' ').filter((t) => t)
					// const subcommands = action.filter(t => t.includes('--'))
				}
			} catch (_) {
				console.log('❌ Comando Incorrecto')
				this.message.send([data.channel_id], '❌ Comando Incorrecto')
			}
		})
	}
}
