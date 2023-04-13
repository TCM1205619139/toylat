import { EventTypes, OnRequestEventPayload } from "@/types/chrome-message";
import RequestProxy from "@/modules/background/RequestProxy";
import EventError from '@/utils/event-error'

console.log('background')
console.log(chrome)

const requestProxy = new RequestProxy()

// chrome.runtime.onMessage.addListener((request: OnRequestEventPayload, senderer: chrome.runtime.MessageSender, sendResponse) => {
//   sendResponse({
//     type: request.type + '_' + EventTypes.BACK,
//
//   })
// })

// chrome.webRequest.onBeforeRequest.addListener(
// // @ts-ignore
//   async (requestDetail) => {
//     if (requestDetail.type !== 'xmlhttprequest') return
//     console.log(requestDetail)
//     const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true})
//     if (!tab || !tab.id) return
//     const response = await chrome.tabs.sendMessage(tab.id, requestDetail)
//   },
//   { urls: [] },
//   ['requestBody']
// )


// const initIndexDB = (port: chrome.runtime.Port) => {
//   if (!indexedDB) {
//     port.postMessage(new EventError('浏览器不支持 indexDB'))
//     return
//   }
//   const request= indexedDB.open('toylat-proxy', 2)
//
//   request.onerror = (evt) => {
//     console.log('error', evt)
//   }
//   request.onsuccess = (evt) => {
//     console.log('success', evt)
//   }
//   request.onupgradeneeded  = (evt: IDBVersionChangeEvent) => {
//     console.log('onupgradeneeded ', evt)
//     console.log((evt as any).target.result)
//   }
// }
//
// chrome.runtime.onConnect.addListener((port) => {
//   console.assert(port.name === 'content-background');
//   port.onMessage.addListener((msg) => {
//     console.log(msg)
//
//   })
//   initIndexDB(port)
// })