import type { TEvt } from '$TYPES'

export class WebSocketService {
	public readonly ws: WebSocket
	private evt?: EventTarget

	constructor(wsURL: string, callbackOpen?: () => void, evt?: EventTarget) {
		this.ws = new WebSocket(wsURL)
		this.events(callbackOpen)
		this.evt = evt
	}

	public sendPayloadList(payloadList: unknown[]): void {
		for (const payload of payloadList) {
			if (this.ws?.send) this.ws.send(JSON.stringify(payload))
		}
	}

	private events(callbackOpen?: () => void): void {
		this.ws.onopen = (_event) => {
			console.log(WebSocketService.name, 'START ')
			if (callbackOpen) callbackOpen()
		}

		this.ws.onclose = (event) => {
			console.log(WebSocketService.name, 'CLOSE', event.reason || 'Witout reason')
			if (this.evt && !event.reason) {
				const event = new CustomEvent('reset', <TEvt> { detail: 'RESET' })
				this.evt.dispatchEvent(event)
			}
		}

		this.ws.onerror = (event) => {
			console.log(WebSocketService.name, 'ERROR', event)
		}
	}
}
