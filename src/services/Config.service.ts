import { load } from 'dotenv'

type TConfig =
	| 'URL_API_DISCORD'
	| 'URL_WS_DISCORD'
	| 'VERSION_DISCORD'
	| 'TOKEN_BOT'
	| 'ID_SERVER'
	| 'ID_CHANNEL_LISTENING_LIST'
	| 'ID_CHANNEL_RESPONSE'

export class ConfigService {
	private static envs: Record<string, string>

	public async load(): Promise<void> {
		ConfigService.envs = await load()
	}

	public get(variableName: TConfig): string | undefined {
		return ConfigService.envs[variableName] || Deno.env.get(variableName)
	}

	public getObject(): Record<TConfig, string> {
		const envsObject = ConfigService.envs || Deno.env.toObject()
		return envsObject
	}
}
