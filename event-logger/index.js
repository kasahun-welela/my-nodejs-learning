import {logEvent} from "./logEvents.js"
import EventEmitter from "events"

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter()

myEmitter.on("log", (msg)=>logEvent(msg))

myEmitter.emit('log', "Log Event emitted")


