import type { TRole } from '$TYPES'
import { ApiDiscord } from '$/class/ApiDiscord.ts'

export class RoleService extends ApiDiscord {
	private guildId: string

	constructor(token: string, guildId: string) {
		super(token)
		this.guildId = guildId
	}

	public async getAll(): Promise<TRole[] | null> {
		const roles = await this.request<TRole[]>(`/guilds/${this.guildId}/roles`)
		return roles
	}
}
