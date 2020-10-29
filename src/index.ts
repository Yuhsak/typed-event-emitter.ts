import {EventEmitter} from 'events'

export class TypedEventEmitter<T extends Record<string | symbol, any[]>> extends EventEmitter {

  addListener<K extends keyof T>(event: K, listener: (...args: T[K]) => void) {
    return super.addListener(event as any, listener as any)
  }

  on<K extends keyof T>(event: K, listener: (...args: T[K]) => void) {
    return super.on(event as any, listener as any)
  }

  once<K extends keyof T>(event: K, listener: (...args: T[K]) => void) {
    return super.once(event as any, listener as any)
  }

  prependListener<K extends keyof T>(event: K, listener: (...args: T[K]) => void) {
    return super.prependListener(event as any, listener as any)
  }

  prependOnceListener<K extends keyof T>(event: K, listener: (...args: T[K]) => void) {
    return super.prependOnceListener(event as any, listener as any)
  }

  removeListener<K extends keyof T>(event: K, listener: (...args: T[K]) => void) {
    return super.removeListener(event as any, listener as any)
  }

  off<K extends keyof T>(event: K, listener: (...args: T[K]) => void) {
    return super.off(event as any, listener as any)
  }

  removeAllListeners<K extends keyof T>(event?: K) {
    return super.removeAllListeners(event as any)
  }

  listeners<K extends keyof T>(event: K): ((...args: T[K]) => void)[] {
    return super.listeners(event as any) as any
  }

  rawListeners<K extends keyof T>(event: K): ((...args: T[K]) => void)[] {
    return super.rawListeners(event as any) as any
  }

  emit<K extends keyof T>(event: K, ...args: T[K]) {
    return super.emit(event as any, ...args)
  }

  eventNames<K extends keyof T>(): K[] {
    return super.eventNames() as any
  }

  listenerCount<K extends keyof T>(type: K) {
    return super.listenerCount(type as any)
  }

}
