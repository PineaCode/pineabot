import { GatewayDispatchEvents } from '$/typing.ts'
import { Client } from '$/concord/Client.ts'
import { RequestService } from '$/services/Request.service.ts'

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
	[key: string]: string
}

export { GatewayDispatchEvents as Events }

export type TUtil = {
	client: Client
	envs: TEnvs
	request: RequestService['http']['request']
}

export type TAction = (data: TMessageCreateData, util: TUtil) => Promise<void>
