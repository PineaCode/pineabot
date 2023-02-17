export class WebSocketService {
	public readonly ws: WebSocket

	constructor(wsURL: string, callbackOpen: () => void) {
		this.ws = new WebSocket(wsURL)
		this.events(callbackOpen)
	}

	public sendPayloadList(payloadList: unknown[]): void {
		for (const payload of payloadList) {
			this.ws.send(JSON.stringify(payload))
		}
	}

	private events(callbackOpen: () => void): void {
		this.ws.onclose = (event) => {
			const date = new Date(event.timeStamp).toISOString()
			console.log('OPEN: ', date)
			callbackOpen()
		}

		this.ws.onclose = (event) => {
			console.log('CLOSE: ', event.reason)
		}

		this.ws.onerror = (event) => {
			console.log('ERROR: ', event)
		}
	}
}
