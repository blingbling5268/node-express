/*
 * @Author: liubo lb@hzguode.com
 * @Date: 2022-05-16 15:11:48
 * @LastEditors: liubo lb@hzguode.com
 * @LastEditTime: 2022-05-16 17:58:57
 * @FilePath: \node-express\routes\api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const router = express.Router();

router.get('/success', (req, res) => {
  console.log(req.query)
  let {
    username,
    password
  } = req.query
  if (username === 'admin' && password === '123456') {
    res.json({
      code: 200,
      messages: '成功',
      data: {
        token: '12345',
        username: 'admin',
        userId: '0001',
      }
    })
  } else {
    // res.json({
    //   "status": 400,
    //   "statusText": "Bad Request",
    //   "errors": [{
    //     "field": ["classifierId"],
    //     "location": "body",
    //     "messages": ["\"classifierId\" must be a number"],
    //     "types": ["number.base"]
    //   }]
    // })
  }
})


module.exports = router