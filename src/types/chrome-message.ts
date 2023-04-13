export enum EventTypes {
  GET_PROXY_CONFIG = 'get_proxy_config',
  GET_PROXY_CONFIG_ITEM = 'get_proxy_config_item',
  ACTION_REQUEST = 'action_request',
  BACK = 'back',
  ERROR = 'error'
}

export type OnRequestEventPayload = {
  type: EventTypes,
  payload?: unknown
}