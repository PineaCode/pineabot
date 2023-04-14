import type { TAction } from '$TYPES'

export const ping: TAction = async (data, { client }) => {
	const dateMessage = new Date(data.timestamp).getTime()
	const dateNow = Date.now()
	const ping = dateNow - dateMessage

	await client.message.send([data.channel_id], `🛰️ Pong - duración: **${ping} ms**`)
}
