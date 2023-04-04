type TGetMessages = {
	id: string
	type: number
	content: string
	channel_id: string
	author: TAuthor
	attachments: []
	embeds: []
	mentions: Array<{
		id: string
		username: string
		global_name: null
		display_name: null
		avatar: string
		avatar_decoration: null
		discriminator: string
		public_flags: number
	}>
	mention_roles: []
	pinned: boolean
	mention_everyone: boolean
	tts: boolean
	timestamp: string
	edited_timestamp: null
	flags: number
	components: []
}

type TSendMessage = {
	id: string
	type: number
	content: string
	channel_id: string
	author: TAuthor
	attachments: []
	embeds: []
	mentions: []
	mention_roles: []
	pinned: boolean
	mention_everyone: boolean
	tts: boolean
	timestamp: string
	edited_timestamp: null
	flags: number
	components: []
	referenced_message: null
}

type TRole = {
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
}

type TAuthor = {
	id: string
	username: string
	global_name: null
	display_name: null
	avatar: string
	avatar_decoration: null
	discriminator: string
	public_flags: number
	bot: boolean
}
