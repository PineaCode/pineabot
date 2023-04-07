import { ConfigService } from '$/services/Config.service.ts'
import { Client } from '$/concord/Client.ts'

try {
	// Cargar variables de entorno en el proyecto
	const config = new ConfigService()
	await config.load()
	const evt = new EventTarget()

	// Crear cliente Concord
	let client = new Client({}, evt)
	await client.start()

	evt.addEventListener('reset', async (event: any) => {
		console.log(event.detail)
		client = new Client({}, evt)
		await client.start()
	})
} catch (error) {
	const { message } = error as Error
	console.error(message)
}
