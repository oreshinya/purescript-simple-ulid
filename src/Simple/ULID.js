'use strict';

exports.prng = function() {
  var webCrypto = typeof window !== "undefined" && (window.crypto || window.msCrypto);
  if (webCrypto) {
    var buf = new Uint8Array(1);
    webCrypto.getRandomValues(buf);
    return buf[0] / 0xff;
  } else {
    var nodeCrypto = require("crypto");
    return nodeCrypto.randomBytes(1).readUInt8() / 0xff;
  }
}
