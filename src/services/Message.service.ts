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

	public async read(channelIdList: string[], limit: number): Promise<(TGetMessages[] | null)[]> {
		return await Promise.all(
			channelIdList.map((channelId: string) => {
				return this.http.request<TGetMessages[]>(`/channels/${channelId}/messages?limit=${limit}`, {
					method: 'GET',
				})
			}),
		)
	}

	public async send(channelIdList: string[], message: string): Promise<(TSendMessage | null)[]> {
		const formData = new FormData()
		formData.set('content', message)

		return await Promise.all(
			channelIdList.map((channelId: string) => {
				return this.http.request<TSendMessage>(`/channels/${channelId}/messages`, {
					method: 'POST',
					body: formData,
				})
			}),
		)
	}

	public async delete(channelId: string, messageId: string): Promise<void> {
		const data = await this.http.request<void | { message: string; code: number }>(
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
