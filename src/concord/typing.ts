import { GatewayDispatchEvents } from '$/typing.ts'

export type TClientOptions = {
	token: string
	prefix: string
	// color: ColorResolvable
	// eventsPath: string
	// commandsPath: string
	// intentsFlags: number[]
}

export type TEnvs = {
	TOKEN: string
	PREFIX: string
}

export { GatewayDispatchEvents as Events }
