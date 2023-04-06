import { load } from 'dotenv'

export type TConfig =
	| 'DISCORD_URL_API'
	| 'DISCORD_URL_WS'
	| 'DISCORD_VERSION'
	| 'TOKEN'
	| 'PREFIX'
	| 'NPM_URL'
	| 'GITHUB_URL'
	| 'OPENAI_URL'
	| 'OPENAI_API_KEY'
	| 'CHANNEL_ID_CHAT'

export class ConfigService {
	private static envs: Record<TConfig, string>
	private envPath: string

	constructor(envPath: string = '.env') {
		this.envPath = envPath
	}

	private isObjectEmpty(obj: { [key: string]: string }): boolean {
		return Object.keys(obj).length === 0
	}

	public async load(): Promise<void> {
		const envsFromFile = await load({ envPath: this.envPath })
		const envsFromSystem = Deno.env.toObject() as Record<TConfig, string>

		if (!this.isObjectEmpty(envsFromFile)) {
			ConfigService.envs = envsFromFile
		} else if (!this.isObjectEmpty(envsFromSystem)) {
			ConfigService.envs = envsFromSystem
		}

		if (!ConfigService.envs) {
			throw new Error(`${ConfigService.name} ERROR Environment variables not found`)
		}
	}

	public get(variableName: TConfig): string | undefined {
		return ConfigService.envs[variableName]
	}

	public getObject(): Record<TConfig, string> {
		return ConfigService.envs
	}
}
