import debug from 'debug'

class Logger {
  private static base: debug.Debugger = debug("timing")
  private static seperator: string = ":"

  private base: debug.Debugger

  debug: debug.Debugger
  warn: debug.Debugger
  error: debug.Debugger

  constructor(...namespaces: string[]) {
    this.base = Logger.base.extend(namespaces.join(Logger.seperator), Logger.seperator)

    this.debug = this.base.extend("debug", Logger.seperator)
    this.warn = this.base.extend("warn", Logger.seperator)
    this.error = this.base.extend("error", Logger.seperator)
  }
}

export {Logger}