import { RequestService } from '$/services/Request.service.ts'

export class MessageService {
	private readonly request: RequestService

	constructor() {
		this.request = new RequestService()
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
