const PUBLIC_KEY = 'testtesttesttest'
var CryptoJS = require("crypto-js")
export function RSAencrypt (pas) {
  var key = CryptoJS.enc.Latin1.parse(PUBLIC_KEY)
  var iv = key
  var encrypt = CryptoJS.AES.encrypt(pas, key, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: iv
  }).toString()
  return encrypt
}
