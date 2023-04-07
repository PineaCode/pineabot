export type TRole = {
	id: string
	name: string
	description: null
	permissions: string
	position: number
	color: number
	hoist: boolean
	managed: boolean
	mentionable: boolean
	icon: null
	unicode_emoji: null
	flags: number
	tags?: { bot_id: string }
}
