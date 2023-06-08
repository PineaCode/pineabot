import type { TApiPlatzi } from '$TYPES'
import { ConfigService } from '$/services/Config.service.ts'
import { RequestService } from '$/services/Request.service.ts'

export class PlatziService extends RequestService {
	constructor() {
		const config = new ConfigService()
		const { PLATZI_URL, PLATZI_API_KEY } = config.getObject()
		super(PLATZI_URL, PLATZI_API_KEY)
	}

	public async getLastPosts(): Promise<TApiPlatzi['response']> {
		const data = await this.http.request<TApiPlatzi>('/api/posts')
		if (!data) return []

		if (data.status_code !== 200) {
			console.log(PlatziService.name, 'ERROR', data.error.join(', '))
			return []
		}

		return data.response
	}
}
