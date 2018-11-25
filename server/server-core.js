const express = require('express');
const path = require('path');
const cors = require('cors');
const apiCore = require('./api-core');
const PORT = require('./config').PORT;

const BUILD_DIRECTORY = path.resolve(__dirname, '..', 'client', 'build');
const PATH_TO_PAGE_TEMPLATE = `${BUILD_DIRECTORY}/index.html`;

express()
  // Раздаём статику
  .get('/static/*', (req, res) => res.sendFile(`${BUILD_DIRECTORY}/${req.url.slice(8)}`))
  // Обработка API вызовов с клиента
  .get('/api/*', cors(), apiCore)
  // Серверный роутинг
  .get('*', (req, res) => res.sendFile(PATH_TO_PAGE_TEMPLATE))
  .listen(PORT, () => console.log(`Сервер успешно запущен. Порт: ${PORT}`))
  .on('error', err => console.log('При запуске сервера произошла ошибка!\n', err));
