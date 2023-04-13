export type ProxyConfigItem = {
  target?: string
  host: string
  pathRewrite?: Record<string, string>
  secure?: boolean
  changeOrigin?: boolean
  server: 'http' | 'https'
  headers?: Record<string, any>
}

type ProxyConfig = Record<string, ProxyConfigItem>


export default class RequestProxy {
  protected proxy: ProxyConfig = {}
  protected cache: Maybe<CacheStorage> = null

  getConfigItem (path: string): ProxyConfigItem {
    return this.proxy[path];
  }

  // init() {
  //   this.proxy =
  // }

  setConfigItem (path: string, key: undefined, value: ProxyConfigItem): void
  setConfigItem <K extends keyof ProxyConfigItem>(path: string, key: K, value: string): void
  setConfigItem <K extends keyof ProxyConfigItem>(path: string, key: K, value: any) {
    if (!key) {
      this.proxy[path] = value
    } else if (key && value) {
      !this.proxy[path] && (this.proxy[path] = {
        changeOrigin: false,
        headers: {  },
        host: '',
        pathRewrite: { '': '' },
        secure: false,
        server: 'http',
        target: ''
      })
      this.proxy[path][key] = value
    }
  }
}