import { load } from 'dotenv'

export type TConfig =
	| 'DISCORD_URL_API'
	| 'DISCORD_URL_WS'
	| 'DISCORD_VERSION'
	| 'TOKEN'
	| 'PREFIX'
	| 'OPENAI_URL'
	| 'OPENAI_API_KEY'

export class ConfigService {
	private static envs: Record<TConfig, string>
	private envPath: string

	constructor(envPath: string = '.env') {
		this.envPath = envPath
	}

	public async load(): Promise<void> {
		ConfigService.envs = await load({ envPath: this.envPath })
	}

	public get(variableName: TConfig): string | undefined {
		return ConfigService.envs[variableName] || Deno.env.get(variableName)
	}

	public getObject(): Record<TConfig, string> {
		const envsObject = ConfigService.envs || Deno.env.toObject()
		return envsObject
	}
}
