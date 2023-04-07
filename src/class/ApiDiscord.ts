import { ConfigService } from '$/services/Config.service.ts'
import { RequestService } from '$/services/Request.service.ts'

export abstract class ApiDiscord {
	private readonly config = new ConfigService()
	protected readonly request: RequestService['http']['request']

	constructor(token: string) {
		const { DISCORD_URL_API = '', DISCORD_VERSION = '10' } = this.config.getObject()
		const baseUrl = `${DISCORD_URL_API}/api/v${DISCORD_VERSION}`
		this.request = new RequestService(baseUrl, `Bot ${token}`).http.request
	}
}
