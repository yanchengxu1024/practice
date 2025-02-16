function replaceDynamicField({ str, extraFields }) {
    const value = extraFields.reduce((pre, cur) => {
      const reg1 = new RegExp(`{{${cur.key}}}`, 'g')
      return pre.replace(reg1, cur.value)
    }, str)
    const reg2 = /(?<={{).*?(?=}})/g
    const arr = Array.from(value.matchAll(reg2))
    if (arr.length) {
      const fields = arr.map((item) => item[0])
      throw new Error(`该模板中的这些动态字段未赋值：${fields.join('、')}`)
    }
    return value
  }

  console.log('————————', replaceDynamicField({ str: '', extraFields: [{"key":"CustomizeOrderArriveHotelTurnUrl","value":"/pages/hotel/list/list.html?data=%7B%22queryModel%22%3A%7B%22checkInDate%22%3A%222024-08-10%22%2C%22checkOutDate%22%3A%222024-08-11%22%2C%22cityId%22%3A%22571%22%2C%22cityName%22%3A%22%E5%98%89%E5%85%B4%22%7D%2C%22fromPage%22%3A%22wechat%22%7D"},{"key":"mediaId","value":"11443"},{"key":"segmentInfo","value":"车次：G7583 上海虹桥-嘉兴南\n出发时间：2024-08-10 14:39:00\n坐席：二等座03车厢03D号\n检票口：检票口20AB（仅供参考）"}] }))

//   console.log('————————', replaceDynamicField({ str: '🚂要出发啦，这是您的车票{{segmentInfo}} 🏩智行订酒店全网底价哦~', extraFields: [{"key":"CustomizeOrderArriveHotelTurnUrl","value":"/pages/hotel/list/list.html?data=%7B%22queryModel%22%3A%7B%22checkInDate%22%3A%222024-08-10%22%2C%22checkOutDate%22%3A%222024-08-11%22%2C%22cityId%22%3A%22571%22%2C%22cityName%22%3A%22%E5%98%89%E5%85%B4%22%7D%2C%22fromPage%22%3A%22wechat%22%7D"},{"key":"mediaId","value":"11443"},{"key":"segmentInfo","value":"车次：G7583 上海虹桥-嘉兴南\n出发时间：2024-08-10 14:39:00\n坐席：二等座03车厢03D号\n检票口：检票口20AB（仅供参考）"}] }))


console.log('——————', JSON.parse('[{"key":"title","value":"坐席：二等座04车厢06F号\\n检票口：检票口14B仅供参考"}]'))