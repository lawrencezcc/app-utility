'use strict';

export default {
  isObject: (value) => {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
      return false;
    }

    if (Object.keys(value).length === 0) {
      return false;
    }

    return true;
  },
};
