interface HeaderIf {
  'Content-Type': 'application/json' | 'application/x-www-form-urlencoded'
}
interface o {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' // *GET, POST, PUT, DELETE, etc.
  mode?: 'no-cors' | 'cors' | 'same-origin' // no-cors, *cors, same-origin
  cache?:
    | 'default'
    | 'no-cache'
    | 'reload'
    | 'force-cache'
    | 'only-if-cached'
    | 'only-if-cached'
    | 'force-cache' // *default, no-cache, reload, force-cache, only-if-cached
  credentials?: 'include' | 'same-origin' | 'omit' // include, *same-origin, omit
  headers?: HeaderIf
  redirect?: 'manual' | 'follow' | 'error' // manual, *follow, error
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  body?: any // body data type must match "Content-Type" header
}

export default async function fetch(
  url: string,
  method: o['method'],
  data: o['body']
) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: url,
      method,
      data,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data)
        }
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}
