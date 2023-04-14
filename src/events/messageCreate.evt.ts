import type { TAction, TMessageCreateData } from '$TYPES'
import { reaction } from '$/functions/reactions.fc.ts'

export const messageCreate: TAction<TMessageCreateData> = async (data, { client }) => {
	const message = data.content.toLowerCase()
	if (!data.author.bot) await reaction(data.channel_id, message, client)
}
