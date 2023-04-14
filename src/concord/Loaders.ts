import { resolve } from 'path'

import type { TAction } from '$TYPES'

export class Loaders {
	// deno-lint-ignore no-explicit-any
	public actions!: { [key: string]: TAction<any> }

	constructor(eventsPath: string, commandsPath: string) {
		this.eventLoad(eventsPath)
		this.commandLoad(commandsPath)
	}

	private async eventLoad(path: string): Promise<void> {
		try {
			// load commands from files
			const eventEntry = Deno.readDir(path)

			// Load events from files
			for await (const entry of eventEntry) {
				const fileName = entry.name
				const eventPath = resolve(path, fileName)
				const event = (await import(eventPath)) as Record<string, TAction>

				// Create events object
				this.actions = { ...this.actions, ...event }
			}
		} catch (err) {
			const { message } = err as Error
			throw new Error(`${Loaders.name} ERROR ${message}`)
		}
	}

	private async commandLoad(path: string): Promise<void> {
		try {
			// load commands from files
			const commandEntry = Deno.readDir(path)

			for await (const entry of commandEntry) {
				const fileName = entry.name
				const cmdPath = resolve(path, fileName)
				const command = (await import(cmdPath)) as Record<string, TAction>

				// Create commands object
				this.actions = { ...this.actions, ...command }
			}
		} catch (err) {
			const { message } = err as Error
			throw new Error(`${Loaders.name} ERROR ${message}`)
		}
	}
}
