export type TEvt =
	& Event
	& Partial<{
		detail: string
	}>
