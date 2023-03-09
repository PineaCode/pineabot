type TObject = { [key: string]: string }

type TEventPayload<D = unknown> = {
	t: import('$/typing.ts').GatewayDispatchEvents | null
	s: number | null
	op: import('$/typing.ts').GatewayOpcodes
	d: D
}

type THeartBeatData = {
	heartbeat_interval: number
	_trace: string[]
}

type TReadyData = {
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

type TGuildCreateData = {
	discovery_splash: null
	owner_id: '536026186694787072'
	region: 'deprecated'
	premium_tier: 0
	default_message_notifications: 1
	voice_states: []
	application_id: null
	large: false
	max_stage_video_channel_users: 0
	description: null
	system_channel_flags: 12
	stickers: []
	home_header: null
	banner: null
	hub_type: null
	vanity_url_code: null
	latest_onboarding_question_id: null
	application_command_counts: { '1': 178; '2': 8; '3': 9 }
	splash: null
	member_count: 26
	stage_instances: []
	emojis: Array<
		{
			version: number
			roles: []
			require_colons: boolean
			name: string
			managed: false
			id: string
			available: boolean
			animated: false
		}
	>
	joined_at: '2023-02-17T17:28:03.541000+00:00'
	premium_progress_bar_enabled: true
	mfa_level: 1
	roles: Array<
		{
			version: number
			unicode_emoji: null
			tags: { [key: string]: string }[]
			position: number
			permissions: string
			name: string
			mentionable: false
			managed: false
			id: string
			icon: null
			hoist: false
			flags: number
			color: number
		}
	>
	presences: []
	verification_level: 2
	id: '826117250657419315'
	nsfw: false
	afk_timeout: 300
	embedded_activities: []
	guild_hashes: {
		version: 1
		roles: { omitted: false; hash: 'o6nWgQ' }
		metadata: { omitted: false; hash: 'E+YKWA' }
		channels: { omitted: false; hash: 'QpQ+4A' }
	}
	icon: '51588e5756ce5b8b1c108fd74101136e'
	max_members: 500000
	rules_channel_id: '827709122082111529'
	guild_scheduled_events: []
	threads: [
		{
			type: 11
			total_message_sent: 4
			thread_metadata: [Object]
			rate_limit_per_user: 0
			parent_id: '1061032181092331630'
			owner_id: '536026186694787072'
			name: 'Jobs Dev'
			message_count: 4
			member_count: 1
			last_message_id: '1080309558133674104'
			id: '1061033633063895160'
			guild_id: '826117250657419315'
			flags: 0
			applied_tags: [Array]
		},
		{
			type: 11
			total_message_sent: 2
			thread_metadata: [Object]
			rate_limit_per_user: 0
			parent_id: '1061032181092331630'
			owner_id: '536026186694787072'
			name: 'Template Deno'
			message_count: 2
			member_count: 1
			last_message_id: '1072341172510539898'
			id: '1072340595181367297'
			guild_id: '826117250657419315'
			flags: 0
			applied_tags: [Array]
		},
		{
			type: 11
			total_message_sent: 0
			thread_metadata: [Object]
			rate_limit_per_user: 0
			parent_id: '1061032181092331630'
			owner_id: '840316188020965398'
			name: 'Jfox crea proyectos Backend con Javascript y Typescript facilmente'
			message_count: 0
			member_count: 1
			last_message_id: '1077063742774329344'
			id: '1077063742774329344'
			guild_id: '826117250657419315'
			flags: 0
			applied_tags: [Array]
		},
	]
	system_channel_id: '1064665809231806514'
	explicit_content_filter: 2
	lazy: true
	safety_alerts_channel_id: null
	members: [
		{
			user: [Object]
			roles: [Array]
			premium_since: null
			pending: false
			nick: 'PineaBot'
			mute: false
			joined_at: '2023-02-17T17:28:03.541000+00:00'
			flags: 1
			deaf: false
			communication_disabled_until: null
			avatar: null
		},
	]
	max_video_channel_users: 25
	features: [
		'AUTO_MODERATION',
		'TEXT_IN_VOICE_ENABLED',
		'MEMBER_VERIFICATION_GATE_ENABLED',
		'PREVIEW_ENABLED',
		'NEWS',
		'COMMUNITY',
		'APPLICATION_COMMAND_PERMISSIONS_V2',
	]
	afk_channel_id: null
	unavailable: false
	channels: Array<
		{
			version: number
			type: number
			topic: string
			rate_limit_per_user: number
			position: number
			permission_overwrites: []
			parent_id: string
			nsfw: false
			name: string
			last_message_id: string
			id: string
			flags: number
		}
	>
	premium_subscription_count: 0
	nsfw_level: 0
	name: 'PineaCode'
	public_updates_channel_id: '827698135961960508'
	preferred_locale: 'es-ES'
}

type TMessageCreateData = {
	webhook_id: '1068355564595322982'
	type: 0
	tts: false
	timestamp: '2023-03-09T00:58:48.351000+00:00'
	pinned: false
	message_reference: {
		message_id: '1083191527779602512'
		guild_id: '435452901964513291'
		channel_id: '436584600710414336'
	}
	mentions: []
	mention_roles: []
	mention_everyone: false
	id: '1083192129255395328'
	flags: 2
	embeds: [
		{
			url: 'https://twitter.com/somoskudasai/status/1633632150707920901'
			type: 'rich'
			timestamp: '2023-03-09T00:53:50.803000+00:00'
			image: [Object]
			footer: [Object]
			description:
				'Portada del noveno volumen del manga de Hotondo Shindeiru, "Isekai Ojisan (Uncle from Another World)...'
			color: 1942002
			author: [Object]
		},
	]
	edited_timestamp: null
	content: '**#SOMOSKUDASAI**: https://twitter.com/somoskudasai/status/1633632150707920901'
	components: []
	channel_id: '1065654015913894019'
	author: {
		username: 'Kudasai #「🔔」noticias_kudasai'
		id: '1068355564595322982'
		discriminator: '0000'
		bot: true
		avatar: '78d3bcf091abc771735125d45c82a66d'
	}
	attachments: []
	guild_id: '826117250657419315'
}

type Tbot = {
	tag: string
}

type TEventFC = (
	eventInput: import('$/typing.ts').GatewayDispatchEvents,
	callback: (data: any) => void,
) => void

type TMessageFC = (channelIdList: string[], message: string) => Promise<void>
