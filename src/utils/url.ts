import { combineWithBase } from './base-path'

const baseUrl = import.meta.env.BASE_URL ?? '/'

export function withBase(path: string) {
  return combineWithBase(baseUrl, path)
}
