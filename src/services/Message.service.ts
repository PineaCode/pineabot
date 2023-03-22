import { ConfigService } from '$/services/Config.service.ts'
import { RequestService } from '$/services/Request.service.ts'

export class MessageService {
	private readonly config = new ConfigService()
	private readonly http: RequestService['http']

	constructor(token: string) {
		const { DISCORD_URL_API = '', DISCORD_VERSION = '10' } = this.config.getObject()
		const baseUrl = `${DISCORD_URL_API}/api/v${DISCORD_VERSION}`
		this.http = new RequestService(baseUrl, `Bot ${token}`).http
	}

	public async read(channelIdList: string[], limit: number): Promise<TGetMessages[][]> {
		return await Promise.all(
			channelIdList.map((channelId: string) => {
				return this.http.request<TGetMessages[]>(`/channels/${channelId}/messages?limit=${limit}`, {
					method: 'GET',
				})
			}),
		)
	}

	public async send(channelIdList: string[], message: string): Promise<void> {
		// return async (channelIdList: string[], message: string): Promise<void> => {
		const formData = new FormData()
		formData.set('content', message)

		await Promise.all(
			channelIdList.map((channelId: string) => {
				return this.http.request(`/channels/${channelId}/messages`, {
					method: 'POST',
					body: formData,
				})
			}),
		)
		// }
	}
}
