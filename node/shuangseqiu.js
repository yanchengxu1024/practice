const _ = require('lodash')
/* 我预计的可能出现的蓝球： */
const blueArr = [3, 5, 6, 8, 9]
const blueArrCopy = [3, 5, 6, 8, 9]

/* 33个红球对应的数字 */
const redList = new Array(33)
.fill(0)
.map((item, index) => index + 1)
// .filter(item => ![8, 9, 10, 22, 26, 32].includes(item))

/* 将红球打乱，随机取6个 */
function getSixRedRandomly(redLast) {
    return _.shuffle(redList).filter((item, index) => index >= redLast && index < redLast + 6 ).sort((a, b) => a - b)
}

/* 将我认为可能出现的蓝球和我生成的红球拼接起来 */

const redListLast = [5,6,20,23,25,32]

const result = blueArr.map((blue, index) => {
    const redSix = getSixRedRandomly(redListLast[index])
    const randomIndex = Math.floor(Math.random() * blueArrCopy.length)
    console.log('——————————————', index)
    console.log('randomIndex', randomIndex)
    console.log('blueArrCopy', blueArrCopy)
    console.log('blueArrCopy.length', blueArrCopy.length)
    const result = [...redSix, blueArrCopy[randomIndex]]
    blueArrCopy.splice(randomIndex, 1)
    return result
})
result.forEach(item=> {
    console.log(JSON.stringify(item))
})



