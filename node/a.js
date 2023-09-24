const dayjs = require('dayjs')

function getActivityStartTimeAndEndTimeThisIssue() {
  const day = dayjs().day()
  if ([0, 1, 2].includes(day)) { // 如果是周日，周一，周二，这一期的开始时间是上周3
    return {
      startTime: dayjs().startOf('week').subtract(4, 'day').format('YYYY-MM-DD HH:mm:ss'),
      endTime: dayjs().startOf('week').add(3, 'day').format('YYYY-MM-DD HH:mm:ss'),
    }
  }
  return {
    startTime: dayjs().startOf('week').add(3, 'day').format('YYYY-MM-DD HH:mm:ss'),
    endTime: dayjs().endOf('week').add(3, 'day').format('YYYY-MM-DD HH:mm:ss'),
  }
}
console.log(JSON.stringify(getActivityStartTimeAndEndTimeThisIssue()))