import { ConfigService } from '$/services/Config.service.ts'
import { RequestService } from '$/services/Request.service.ts'

export class MessageService {
	private readonly config = new ConfigService()
	private readonly request: RequestService

	constructor(token: string) {
		const { URL_API_DISCORD = '', VERSION_DISCORD = '10' } = this.config.getObject()
		const baseUrl = `${URL_API_DISCORD}/api/v${VERSION_DISCORD}`
		this.request = new RequestService(baseUrl, token)
	}

	public create() {
		return async (channelIdList: string[], message: string): Promise<void> => {
			const formData = new FormData()
			formData.set('content', message)

			await Promise.allSettled(
				channelIdList.map((channelId: string) => {
					return this.request.http.request(`/channels/${channelId}/messages`, {
						method: 'POST',
						body: formData,
					})
				}),
			)
		}
	}
}
