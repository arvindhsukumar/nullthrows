'use strict';

export default function nullthrows(x, message) {
  if (x != null) {
    return x;
  }
  var error = new Error(message !== undefined ? message : 'Got unexpected ' + x);
  error.framesToPop = 1; // Skip nullthrows's own stack frame.
  throw error;
}

export { nullthrows }
