import { EventTypes } from "@/types/chrome-message";


export default class EventError {
  msg: string = ''
  from?: string
  type: EventTypes = EventTypes.ERROR

  constructor (msg: string, from?: string) {
    this.msg = msg
    this.from = from
  }
}