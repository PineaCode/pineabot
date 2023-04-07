import { ApiDiscord } from '$/class/ApiDiscord.ts'

export class MessageService extends ApiDiscord {
	constructor(token: string) {
		super(token)
	}

	public async read(channelIdList: string[], limit: number): Promise<(TGetMessages[] | null)[]> {
		return await Promise.all(
			channelIdList.map((channelId: string) => {
				return this.request<TGetMessages[]>(`/channels/${channelId}/messages?limit=${limit}`)
			}),
		)
	}

	public async send(channelIdList: string[], message: string): Promise<(TSendMessage | null)[]> {
		const formData = new FormData()
		formData.set('content', message)

		return await Promise.all(
			channelIdList.map((channelId: string) => {
				return this.request<TSendMessage>(`/channels/${channelId}/messages`, {
					method: 'POST',
					body: formData,
				})
			}),
		)
	}

	public async delete(channelId: string, messageId: string): Promise<void> {
		const data = await this.request<void | { message: string; code: number }>(
			`/channels/${channelId}/messages/${messageId}`,
			{
				method: 'DELETE',
			},
		)
		if (data && data.code === 10008) throw new Error('Message not found')
	}

	// TODO:
	// public async deleteBulk() {}
}
