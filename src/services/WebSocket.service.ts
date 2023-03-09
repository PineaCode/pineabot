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
		this.ws.onopen = (_event) => {
			console.log(WebSocketService.name, 'START ')
			callbackOpen()
		}

		this.ws.onclose = (event) => {
			console.log(WebSocketService.name, 'CLOSE', event.reason || 'Witout reason')
		}

		this.ws.onerror = (event) => {
			console.log(WebSocketService.name, 'ERROR', event)
		}
	}
}
