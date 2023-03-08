import { RequestService } from '$/services/Request.service.ts'

export class MessageService {
	constructor(private readonly request = new RequestService()) {}

	public async create(channelIdList: string[], message: string): Promise<void> {
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
