/**
 * 把下面的 localhost 改成本地的
 * win+R --> 输入cmd后回车 --> 输入ipconfig后回车 --> 找到IPv4地址 --> 修改localhost
 */
const localhost = '192.168.1.199'
const port = '8000'
export const localBaseUrl = `${localhost}:${port}`
