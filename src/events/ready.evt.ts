import { TAction } from '$/concord/typing.ts'
import { justChating } from '$/functions/justChating.fc.ts'

// deno-lint-ignore require-await
export const ready: TAction<TReadyData> = async (_data, tools) => {
	justChating(tools)
}