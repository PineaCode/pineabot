type TClientConfig = {
	baseUrl: string
	requestInit: RequestInit
}

type TOptions = {
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
	body: BodyInit | null
	headers: { [key: string]: string }
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
			async request<D = unknown>(path = '', options?: Partial<TOptions>): Promise<D | null> {
				try {
					const { baseUrl, requestInit } = clientConfig
					const pathname = path.search(/\//) > -1 ? path : `/${path}`
					const { method = 'GET', body = null, headers = {} } = options || {}

					const response = await fetch(`${baseUrl}${pathname}`, {
						...requestInit,
						headers: {
							...requestInit.headers,
							...headers,
						},
						method,
						body,
					})

					if (response.status >= 500) throw new Error(response.statusText)
					if (response.status === 200) return await response.json()
					return null
				} catch (error) {
					console.log(RequestService.name, 'ERROR', (error as Error).message)
					return null
				}
			},
		}
	}
}
