import type { TMessageCreateData } from '$TYPES'
import { GatewayDispatchEvents } from '$/entities/enums.ts'
import { Client } from '$/concord/Client.ts'
import { RequestService } from '$/services/Request.service.ts'

export type TEvt =
	& Event
	& Partial<{
		detail: string
	}>

export type TClientOptions = {
	token: string
	prefix: string
	// color: ColorResolvable
	// eventsPath: string
	// commandsPath: string
	// intentsFlags: number[]
}

export type TTools = {
	client: Client
	request: RequestService['http']['request']
}

export type TAction<D = TMessageCreateData> = (data: D, tools: TTools) => Promise<void>

export type TEventFC = (
	eventInput: GatewayDispatchEvents,
	// deno-lint-ignore no-explicit-any
	callback: (data: any) => void,
) => void
