// Fix the Messenger class to check input and to allow listeners to unsubscribe

class Messenger {
  constructor(channel) {
    if (Array.isArray(channel) || typeof(channel)!=='object' || channel.name===undefined){
      throw new Error()
    }
    this.channel = channel.name;
    this.listeners = {};
  }
  getChannel(type) {
    this.listeners[type] = this.listeners[type] || [];
    return this.listeners[type];
  }
  subscribe(type, fn) {
    this.getChannel(type).push(fn)
    return ()=>{
      this.getChannel(type).pop()
    };
  }
  publish(type, msg) {
    this.getChannel(type).forEach((listener) =>
      listener(`${this.channel} - ${type} - ${msg}`)
    );
  }
}

module.exports = { Messenger };
