import Dexie, { Table } from 'dexie'

type JSONString = string

export interface ProxyTable {
  target: string
  origin: string
  secure?: boolean
  server: 'http' | 'https'
  headers?: Record<string, any> | JSONString
}

export class ProxyClassDexie extends Dexie {
  proxies!: Table<ProxyTable>

  constructor () {
    super('ProxyClassDexie');
    this.version(1).stores({
      proxies: '++id, target, origin, secure, server, headers'
    })
  }
}

export const proxyDB = new ProxyClassDexie()