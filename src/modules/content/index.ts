console.log('this is content script')
console.log(chrome)

// chrome.runtime.sendMessage({
//   type: EventTypes.GET_PROXY_CONFIG
// })

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log(request)
//   sendResponse(JSON.stringify({
//     from: 'content'
//   }))
//   return true
// })

// const port = chrome.runtime.connect({name: 'content-background'});
//
// port.postMessage({
//   host: 'http://localhost',
//   port: '8080',
//   pathRewrite: { '^/api': '' },
//   secure: false,
//   changeOrigin: true,
//   headers: {
//     'X-CSRF-TOKEN': 'GA1.2.905708206.1680770223'
//   }
// })
// port.onMessage.addListener((msg) => {
//   if (msg.question === "Who's there?")
//     port.postMessage({answer: "Madame"})
//   else if (msg.question === "Madame who?")
//     port.postMessage({answer: "Madame... Bovary"})
// });