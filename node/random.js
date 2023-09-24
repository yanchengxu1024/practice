const _ = require('lodash')
// const blueArr = [1,2,3,4,5,6,7,8,9,10]
const blueArr = [6,7,8,9,10]

const redList = new Array(33)
.fill(0)
.map((item, index) => index + 1)
// .filter(item => ![8, 9, 10, 22, 26, 32].includes(item))


function getSixRedRandomly(redLast) {
    return _.shuffle(redList).filter((item, index) => index >= redLast && index < redLast + 6 ).sort((a, b) => a - b)
}

const redListLast = [8, 13, 15, 17, 28]

const result = blueArr.map((blue, index) => {
    const redSix = getSixRedRandomly(redListLast[index])
    return [...redSix, blue]
})
result.forEach(item=> {
    console.log(JSON.stringify(item))
})



