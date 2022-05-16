/*
 * @Author: your name
 * @Date: 2022-04-15 13:07:58
 * @LastEditTime: 2022-05-16 16:50:21
 * @LastEditors: liubo lb@hzguode.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \node-express\server.js
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const logger = require('morgan');
const appRouter = require('./routes/index')
const apiRouter = require('./routes/api');
const { METHODS } = require('http');

const hostname = 'localhost';
const port = '3001';
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

app.use(cors({
  origin:['http://localhost:3000'],
  methods:['GET', 'POST'],
  allowedHeaders: ['Content-type', 'Authorization']
}))
// 打印日志
app.use(logger('short', {stream: accessLogStream}))
app.use('/', appRouter)
app.use('/api', apiRouter)

app.use((req, res, next) => {
  console.error(res.status);
  res.status(500).render('500');
})
app.use('*', (req, res) => {
  res.status(400).render('404', { url: req.originalUrl })
})

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
