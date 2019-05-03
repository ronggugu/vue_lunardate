export function formatTime (date) {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * 获取当前日期
 */
export function getDate () {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  if (month.toString().length < 2) {
    month = '0' + month
  }
  if (day.toString().length < 2) {
    day = '0' + day
  }
  return year + '-' + month + '-' + day
}

/**
 * 获取日期间隔差
 */
export function GetDateDiff (startDate, endDate) {
  let startTime = new Date(Date.parse(startDate.replace(/-/g, '/'))).getTime()
  let endTime = new Date(Date.parse(endDate.replace(/-/g, '/'))).getTime()
  let diff = (startTime - endTime)
  if (diff < 0) {
    let dates = Math.abs(diff) / (1000 * 60 * 60 * 24)
    // noinspection JSConstructorReturnsPrimitive
    return -dates
  } else {
    let dates = Math.abs(diff) / (1000 * 60 * 60 * 24)
    return dates
  }
}

/**
 * 获取秒数差
 */
export function GetSecondsDiff (startDate, endDate) {
  let startTime = new Date(Date.parse(startDate.replace(/-/g, '/'))).getTime()
  let endTime = new Date(Date.parse(endDate.replace(/-/g, '/'))).getTime()
  let diff = (startTime - endTime)
  if (diff < 0) {
    let dates = Math.abs(diff) / (1000)
    return -dates
  } else {
    let dates = Math.abs(diff) / (1000)
    return dates
  }
}

/**
 * 结束时间与当前时间相差多少秒
 */
export function getSeconds (etime) {
  let endTime = new Date(Date.parse(etime.replace(/-/g, '/'))).getTime()
  let now = new Date().getTime()
  let diff = (endTime - now)
  let dates
  if (diff < 0) {
    dates = Math.abs(diff) / (1000)
    return -dates
  } else {
    dates = Math.abs(diff) / (1000)
    return dates
  }
}

/**
 * 日期加减计算
 */
export function getDay (DayNum) {
  let today, ms, thatDay, y, m, d, endDate
  today = new Date().getTime()
  ms = today + DayNum * 24 * 60 * 60 * 1000
  thatDay = new Date(ms)
  y = thatDay.getFullYear()
  m = thatDay.getMonth() + 1
  d = thatDay.getDate()
  if (m.toString().length < 2) {
    m = '0' + m
  }
  if (d.toString().length < 2) {
    d = '0' + d
  }
  endDate = y + '-' + m + '-' + d
  return endDate
}

/**
 * 日期加减计算
 */
export function getAddDay (DayNum, date) {
  console.log('DayNum:' + DayNum)
  console.log('date:' + date)
  let today, ms, thatDay, y, m, d, endDate
  today = new Date(date).getTime()
  console.log('today:' + today)
  ms = today + DayNum * 24 * 60 * 60 * 1000
  thatDay = new Date(ms)
  y = thatDay.getFullYear()
  m = thatDay.getMonth() + 1
  d = thatDay.getDate()
  if (m.toString().length < 2) {
    m = '0' + m
  }
  if (d.toString().length < 2) {
    d = '0' + d
  }
  endDate = y + '-' + m + '-' + d
  return endDate
}

/**
 * 判断是否有效的URL地址
 */
export function RegExpUrl (url) {
  let regexp = new RegExp('^(http|ftp|https):\\/\\/[\\w\\-_]+(\\.[\\w\\-_]+)+([\\w\\-.,@?^=%&:/~+#]*[\\w\\-@?^=%&/~+#])?$')
  let reg = regexp.test(url)
  return reg
}

/*
根据日期获取星期几
 */

export function getWeek (date) {
  let WeekArray = ['日', '一', '二', '三', '四', '五', '六']
  let today = new Date(date)
  let week = today.getDay()
  return WeekArray[week]
}

export function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
