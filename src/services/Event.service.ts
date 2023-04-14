export class EventService {
	public static evt: EventTarget

	public get evt(): EventTarget {
		return EventService.evt
	}
}
