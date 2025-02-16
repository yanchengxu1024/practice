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

const arr = `36.97
17.17
16.38
19.34
20.73
11.1
50.44
45.19
53.7
34.37
36.6
12.41
41.83
34.68`.split('\n').map(item => parseInt(item, 10) * 100)

console.log(arr)

const result = arr.reduce((a, b) => a + b, 0)
console.log(result)