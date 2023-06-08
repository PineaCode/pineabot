import type { TEvt } from '$TYPES'
import { ConfigService } from '$/services/Config.service.ts'
import { EventService } from '$/services/Event.service.ts'
import { Client } from '$/concord/Client.ts'

try {
	// Cargar variables de entorno en el proyecto
	const config = new ConfigService()
	await config.load()
	EventService.evt = new EventTarget()

	// Crear cliente Concord
	let client = new Client()
	await client.start()

	EventService.evt.addEventListener('reset', async (event: TEvt) => {
		console.log('Client', event.detail)
		client = new Client()
		await client.start()
	})
} catch (error) {
	const { message } = error as Error
	console.error(message)
}
