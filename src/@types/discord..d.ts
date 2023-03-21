type TGetMessages = {
	id: string
	type: number
	content: string
	channel_id: string
	author: {
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
