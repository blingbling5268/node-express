/*
 * @Author: your name
 * @Date: 2022-04-15 13:07:58
 * @LastEditTime: 2022-04-21 16:18:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \node-express\server.js
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const logger = require('morgan');
const appRouter = require('./routes/index')

const hostname = 'localhost';
const port = '3000';
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
// 打印日志
app.use(logger('short', {stream: accessLogStream}))

app.use('/', appRouter)

app.use((err, req, res) => {
  console.error(err.stack);
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
