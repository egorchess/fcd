# Free Cash Desk

После выкачивания репозитория необходимо установить зависимости клиента и сервера приложения. Для этого откройте корневую директорию проекта в консоли и наберите ```npm run init```

## Как запустить сервер в режиме разработки
```npm run dev-server```
В этом режиме отдельно будет запущен виртуальный сервер для доставки статики и сервер самого приложения для работы с бизнес-логикой. Также поддерживается горячая замена модулей без перезагрузки страницы.
Откроется две консоли - сервер API и статики. Для перехода на сайт нужно перейти по адресу, указанному в консоли сервера статики:
```- Local:   http://localhost:8081/```

## Как запустить приложение, которое будет на реальном сайте
1. Нужно собрать и подготовить клиент - ```npm run build```
2. Нужно запустить боевой сервер - ```npm run prod-server```
В этом случае статику на сайт будет поставлять уже наш сервер, а не виртуальный. Отсутствует горячая замена модулей, код минифицирован и отсутствуют source maps. Но это именно то, что будет на боевом сервере.
3. Перейти в http://localhost:8080

## Как проверить написанный код линтером?
```npm run lint```