// BASE64 对字符串进行编码

// 编码
const a = Buffer.from('Base64编解码内容')
const b = a.toString('base64')
console.log('Base64编码结果', b)

// 解码
const c = Buffer.from(b, 'base64').toString()
console.log('解码结果', c)

/* 
    总结
    Buffer.from('明文').toString('base64') -> 密文
    Buffer.from('密文', 'base64').toString() -> 明文
*/

// md5加密
const crypto = require('crypto')
const hash_md5 = crypto.createHash('md5')
hash_md5.update('加密内容ABCD1234')
const md5c = hash_md5.digest('hex')
console.log('MD5加密后的结果', md5c)

// sha1加密结果
const crypto = require('crypto')
const hash_sha1 = crypto.createHash('sha1')
hash_sha1.update('加密内容')
hash_sha1.update('ABCD')
hash_sha1.update('1234')
const md5c = hash_md5.digest('hex')
console.log('sha1加密后的结果', md5c)



// AES对称加密


const crypto = require('crypto')
const key = '454a5927098615e6'
const iv = '3306831993041664'
const data = '需要加密的内容ABC'
let sign = ''
const cipher = crypto.createCipheriv('aes-128-cbc', Buffer.from(key), Buffer.from(iv))
sign += cipher.update(data, 'utf8', 'base64')
sign += cipher.final('base64')
console.log('sign', sign)

// AES对称解密
let text = ''
const decipher = crypto.createDecipheriv('aes-128-cbc', Buffer.from(key), Buffer.from(iv))
text = decipher.update(sign, 'base64', 'utf8')
text += decipher.final('utf8')
console.log('解密结果', text)


const crypto = require('crypto')
const aesKey = '454a5927098615e6'
const aesIV = '3306831993041664'

function genAESSign(data, key = aesKey, iv = aesIV) {
    let sign = ''
    const cipher = crypto.createCipheriv('aes-128-cbc', Buffer.from(key), Buffer.from(iv))
    sign += cipher.update(data, 'utf8', 'base64')
    sign += cipher.final('base64')
    return sign
}

// AES解密
function deAESSign(data, key = aesKey, iv = aesIV) {
    let text = ''
    const decipher = crypto.createDecipheriv('aes-128-cbc', Buffer.from(key), Buffer.from(iv))
    text = decipher.update(data, 'base64', 'utf8')
    text += decipher.final('utf8')
    return text
}
const a = genAESSign('需要加密的内容ABC')
const b = deAESSign(a)
console.log('b', b)

// 图标
// 配置eslint和typescript