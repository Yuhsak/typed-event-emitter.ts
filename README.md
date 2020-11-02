# typed-event-emitter.ts

Node.js EventEmitter which can be typed.

## Install

```sh
npm install typed-event-emitter.ts
```

## Usage

```ts
import {TypedEventEmitter} from 'typed-event-emitter.ts'

type Event = {
  'update': [boolean]
  'update-id': [string]
  'finish': [string, number]
}

class MyEventEmitter extends TypedEventEmitter<Event> {

}

// OK
const ee = new MyEventEmitter()
ee.on('update', (arg: boolean) => {})
ee.on('update-id', (arg: string) => {})
ee.on('finish', (arg1: string, arg2: boolean) => {})
ee.emit('update', true)
ee.emit('update-id', '001')
ee.emit('finish', 'abc', 1)

// Error
ee.on('update', (arg: string) => {})
ee.on('update-id', (arg: number) => {})
ee.on('finish', (arg1: boolean, arg2: boolean) => {})
ee.emit('update', '1')
ee.emit('update-id', true)
ee.emit('finish', 'abc', false)
```
