import { resolve } from 'path'

export class Loaders {
	public actions: any = null

	constructor(eventsPath: string, commandsPath: string) {
		this.eventLoad(eventsPath)
		this.commandLoad(commandsPath)
	}

	private async eventLoad(path: string): Promise<void> {
		// TODO: mejorar array de eventos para obtenerlos desde discord
		const eventsFiles = ['ready', 'messageCreate']

		// Load events from files
		for (const file of eventsFiles) {
			try {
				// Import event file
				const eventPath = resolve(path, `${file}.evt.ts`)

				const event = (await import(eventPath)) as Record<string, any>

				// Create events object
				this.actions = { ...this.actions, ...event }
			} catch (_) { /*  */ }
		}
	}

	private async commandLoad(path: string) {
		try {
			// load commands from files
			const commandEntry = Deno.readDir(path)

			for await (const entry of commandEntry) {
				const fileName = entry.name
				if (fileName.search(/[a-z0-9]*\.cmd\.ts/i) > -1) {
					const cmdPath = resolve(path, fileName)
					const command = (await import(cmdPath)) as Record<string, any>
					// Create commands object
					this.actions = { ...this.actions, ...command }
				}
			}
		} catch (_) { /*  */ }
	}
}
