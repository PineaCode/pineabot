import { ConfigService } from '$/services/Config.service.ts'

interface IClientConfig {
	baseUrl: string
	requestInit: RequestInit
}

export class RequestService {
	public readonly http

	constructor(private readonly config = new ConfigService()) {
		const { URL_API_DISCORD = '', VERSION_DISCORD = '10', TOKEN_BOT = '' } = this.config.getObject()
		const clientConfig: IClientConfig = {
			baseUrl: `${URL_API_DISCORD}/api/v${VERSION_DISCORD}`,
			requestInit: {
				headers: {
					'Accept': '*/*',
					'Authorization': `Bot ${TOKEN_BOT}`,
				},
			},
		}

		this.http = this.init(clientConfig)
	}

	private init(clientConfig: IClientConfig) {
		return {
			async request<D = unknown>(
				path = '',
				method: string,
				body: BodyInit | null = null,
				headers: { [key: string]: string } = {},
			): Promise<D> {
				const { baseUrl, requestInit } = clientConfig
				const pathname = path.search(/\//) > -1 ? path : `/${path}`

				const response = await fetch(`${baseUrl}${pathname}`, {
					...requestInit,
					headers: {
						...requestInit.headers,
						...headers,
					},
					method,
					body,
				})

				const data = await response.json()
				return data
			},
		}
	}
}
