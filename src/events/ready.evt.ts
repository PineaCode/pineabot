import type { TAction, TReadyData } from '$TYPES'
import { justChating } from '$/functions/justChating.fc.ts'
import { blogPlatzi } from '$/functions/blogPlatzi.fc.ts'

// deno-lint-ignore require-await
export const ready: TAction<TReadyData> = async (_data, tools) => {
	justChating(tools)
	blogPlatzi(tools)
}
