import 'whatwg-fetch';
let config = '';


/**
 * 字符串序列化
 * @param obj
 * @returns {string}
 */
const transformRequest = (obj) => {
  if (!obj) {
    return '';
  }
  const str = [];
  for (const p of Object.keys(obj)) {
    str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
  }
  str.forEach((t, i) => {
    if (t.indexOf('invitation_code') > -1 || t.indexOf('user_id_') > -1) {
      str.splice(i, 1)
    }
  })
  return str.join('&');
};


/**
 * flag过滤
 * @param  {String} options.json   api地址
 * @return {Promise}               Promise
 *
 */
const filterFlag = (json) => {
  return new Promise(function (resolve, reject) {
    let flagArr = ['0003','0016'];
    let flag = json.flag;
   if (~flagArr.indexOf(flag)) {
      reject(json);
    } else {
      resolve(json)
    }
  }).catch(err => {
      setTimeout(function () {
      }, 1000);
  })
}


/**
 * 服务器异常处理
 * @param  {String} options.error  错误信息
 * @param  {String} options.commit  commit
 * @return {Promise}               Promise
 */
const serverError = (err) => {
  return new Error(err);
}



export default async(type = 'GET', url = '', params = '') => {
  type = type.toUpperCase();
  url =url;
  let record = '';
  if (type == 'GET') {}
  let init = null;
  if (type == 'POST') {
    init = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    }
    if (!!params && Object.prototype.toString.call(params) == '[object Object]') {
      Object.defineProperty(init, 'body', {
        value: transformRequest(params)
      })
    }
  }
  let res = await fetch(url, init)
    .then(res => {
      if (res.status == 200 && res.ok) {
        return res.json();
      }
      return new Error(res.status);
    })
    .catch(err => {
      serverError(err)
    })
  return filterFlag(res);
}
