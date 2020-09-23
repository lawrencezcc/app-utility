'use strict';

class ReactEventBus {
  constructor(data) {
    this._init(data);
  }

  _checkEvent(event) {
    const { name, type, callback } = event;
    if (
      typeof name !== 'string' ||
      typeof type !== 'string' ||
      typeof callback !== 'function'
    ) {
      return false;
    }
    return true;
  }

  _init(data) {
    if (!data) {
      data = {};
    }
    if (!data.el) {
      data.el = null;
    }
    if (!data.events) {
      data.events = [];
    }

    data.events.forEach((event) => {
      if (!this._checkEvent(event))
        throw new Error('Type Error: wrong type of parameters');
    });

    this.el = data.el;
    this.events = data.events;
  }

  add(event) {
    if (event) {
      this.events.push(event);
    }
  }

  remove(index) {
    this.events.splice(index, 1);
  }

  getEvents() {
    return this.events;
  }

  addListener(event) {
    this.el.addEventListener(event.type, event.callback, event.options);
  }

  removeListener(event) {
    this.el.removeEventListener(event.type, event.name, event.options);
  }

  attachEvents() {
    this.events.forEach((event) => {
      this.addListener(event);
    });
  }
}
