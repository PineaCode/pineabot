import { load } from 'dotenv'
import { TConfig } from '$/typing.ts'

export class ConfigService {
	private static envs: Record<string, string>

	public async load(): Promise<void> {
		ConfigService.envs = await load()
	}

	public get(variableName: string): string | undefined {
		return ConfigService.envs[variableName] || Deno.env.get(variableName)
	}

	public getObject(): Record<TConfig, string> {
		const envsObject = ConfigService.envs || Deno.env.toObject()
		return envsObject as unknown as Record<TConfig, string>
	}
}
