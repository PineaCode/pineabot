import { GatewayDispatchEvents } from '$/typing.ts'

export type TClientOptions = {
	token?: string
	prefix?: string
	// color: ColorResolvable
	// eventsPath: string
	// commandsPath: string
	// intentsFlags: number[]
}

export { GatewayDispatchEvents as Events }
