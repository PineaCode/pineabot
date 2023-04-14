export type TObject = { [key: string]: string }

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

export type TGetMessages = {
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

export type TSendMessage = {
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

export type TAuthor = {
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

export type TEventPayload<D = unknown> = {
	t: import('$/entities/enums.ts').GatewayDispatchEvents | null
	s: number | null
	op: import('$/entities/enums.ts').GatewayOpcodes
	d: D
}

export type THeartBeatData = {
	heartbeat_interval: number
	_trace: string[]
}

export type TReadyData = {
	v: number
	user_settings: TObject
	user: {
		verified: boolean
		username: string
		mfa_enabled: boolean
		id: string
		flags: number
		email: null
		display_name: null
		discriminator: string
		bot: boolean
		avatar: string
	}
	session_type: string
	session_id: string
	resume_gateway_url: string
	relationships: []
	private_channels: []
	presences: []
	guilds: [{ unavailable: boolean; id: string }]
	guild_join_requests: []
	geo_ordered_rtc_regions: string[]
	application: { id: string; flags: number }
	_trace: string[]
}

export type TGuildCreateData = {
	discovery_splash: null
	owner_id: string
	region: string
	premium_tier: number
	default_message_notifications: number
	voice_states: []
	application_id: null
	large: boolean
	max_stage_video_channel_users: number
	description: null
	system_channel_flags: number
	stickers: []
	home_header: null
	banner: null
	hub_type: null
	vanity_url_code: null
	latest_onboarding_question_id: null
	application_command_counts: { [key: string]: number }
	splash: null
	member_count: number
	stage_instances: []
	emojis: Array<{
		version: number
		roles: []
		require_colons: boolean
		name: string
		managed: boolean
		id: string
		available: boolean
		animated: boolean
	}>
	joined_at: string
	premium_progress_bar_enabled: boolean
	mfa_level: number
	roles: Array<{
		version: number
		unicode_emoji: null
		tags: TObject[]
		position: number
		permissions: string
		name: string
		mentionable: boolean
		managed: boolean
		id: string
		icon: null
		hoist: boolean
		flags: number
		color: number
	}>
	presences: []
	verification_level: number
	id: string
	nsfw: boolean
	afk_timeout: number
	embedded_activities: []
	guild_hashes: {
		version: number
		roles: { omitted: boolean; hash: string }
		metadata: { omitted: boolean; hash: string }
		channels: { omitted: boolean; hash: string }
	}
	icon: string
	max_members: number
	rules_channel_id: string
	guild_scheduled_events: []
	threads: Array<{
		type: number
		total_message_sent: number
		thread_metadata: [TObject]
		rate_limit_per_user: number
		parent_id: string
		owner_id: string
		name: string
		message_count: number
		member_count: number
		last_message_id: string
		id: string
		guild_id: string
		flags: number
		applied_tags: [TObject]
	}>
	system_channel_id: string
	explicit_content_filter: number
	lazy: boolean
	safety_alerts_channel_id: null
	members: Array<{
		user: [TObject]
		roles: [TObject]
		premium_since: null
		pending: boolean
		nick: string
		mute: boolean
		joined_at: string
		flags: number
		deaf: boolean
		communication_disabled_until: null
		avatar: null
	}>
	max_video_channel_users: number
	features: string[]
	afk_channel_id: null
	unavailable: boolean
	channels: Array<{
		version: number
		type: number
		topic: string
		rate_limit_per_user: number
		position: number
		permission_overwrites: []
		parent_id: string
		nsfw: boolean
		name: string
		last_message_id: string
		id: string
		flags: number
	}>
	premium_subscription_count: number
	nsfw_level: number
	name: string
	public_updates_channel_id: string
	preferred_locale: string
}

export type TMessageCreateData = {
	webhook_id: string
	type: number
	tts: boolean
	timestamp: string
	pinned: boolean
	message_reference: {
		message_id: string
		guild_id: string
		channel_id: string
	}
	mentions: []
	mention_roles: []
	mention_everyone: boolean
	member: {
		roles: string[]
		premium_since: null
		pending: boolean
		nick: string
		mute: boolean
		joined_at: string
		flags: number
		deaf: boolean
		communication_disabled_until: null
		avatar: null
	}
	id: string
	flags: number
	embeds: Array<{
		url: string
		type: string
		timestamp: string
		image: [TObject]
		footer: [TObject]
		description: string
		color: number
		author: [TObject]
	}>
	edited_timestamp: null
	content: string
	components: []
	channel_id: string
	author: {
		username: string
		id: string
		discriminator: string
		bot: boolean
		avatar: string
	}
	attachments: []
	guild_id: string
}
