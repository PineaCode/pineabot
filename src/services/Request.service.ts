type TClientConfig = {
	baseUrl: string
	requestInit: RequestInit
}

export class RequestService {
	public readonly http

	constructor(baseUrl: string = '', bearerToken: string = '') {
		const clientConfig: TClientConfig = {
			baseUrl,
			requestInit: {
				headers: {
					'Accept': '*/*',
					...(bearerToken ? { 'Authorization': bearerToken } : null),
				},
			},
		}

		this.http = this.init(clientConfig)
	}

	private init(clientConfig: TClientConfig) {
		return {
			async request<D = unknown>(
				path = '',
				{
					method,
					body = null,
					headers = {},
				}: {
					method: string
					body?: BodyInit | null
					headers?: { [key: string]: string }
				},
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
