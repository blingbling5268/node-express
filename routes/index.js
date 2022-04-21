/*
 * @Author: your name
 * @Date: 2022-04-21 16:11:24
 * @LastEditTime: 2022-04-21 16:16:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \node-express\routes\index.js
 */
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.json({name: '23232', age: 12})
})

router.get('/getList', (req, res) => {
    res.json([{a: '2323', b: '2323'}, {a: '2323', b: '2323'}])
})

module.exports = router