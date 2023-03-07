// username 校验
export function nameRule(rule, value, callback) {
  let reg = /^([a-zA-Z0-9]{4,12})$/
  if (value == '') {
    callback(new Error('please input username'))
  } else if (!reg.test(value)) {
    callback(new Error('please input 6-12 username'))
  } else {
    callback()
  }
}
// password 校验
export function passRule(rule, value, callback) {
  let reg = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])\S*$/
  if (value == '') {
    callback(new Error('please input password'))
  } else if (!reg.test(value)) {
    callback(new Error('please input 6-12 password'))
  } else {
    callback()
  }
}
