СРЕДА ЗАПУСКА
------------
1) развертывание сервиса производится на windows 10 (На linux не проверялось, но по идеи проблем не должно возникнуть);
2) требуется установленный web-сервер с поддержкой PHP(версия 8.1+) интерпретации (apache);
3) требуется установленная СУБД Postgresql (версия 10+);
4) требуется установленный python 3.8.x. Необходимо установить следующие пакеты:
    1) tensorflow-text (pip install tensorflow-text)
    2) simple-http-server (pip install simple-http-server)
5) требуется установленный nodejs 16


УСТАНОВКА
------------
### 1. Клонирование репозиториев

Клонируйте следующие репозитории:

https://github.com/KhalyutkinVictor/hackaton-nn

https://github.com/nixonchern/rosmol-question

https://github.com/NeDanyaAtAll/hakaton-frontend

### 2. Настройка модуля ИИ

1) Перейдите в папку с репозиторием https://github.com/KhalyutkinVictor/hackaton-nn
2) Выполните следующие команды в папке с репозиторием:

   ``pip install tensorflow-text``

   ``pip install simple-http-server``

3) После необходимо запустить модуль командой ``py main.py``

   При запуске возможны ошибки связанные с отсутсвием cuda dll их следует проигнорировать.

   В случае успешного запуска вы увидете в консоле сообщение ``INFO: Start server in threading mixed mode, listen to port 8080`` и дальше программа не закроется с ошибкой


### 3. Настройка API

1) Перейдите в папку с репозиторием https://github.com/nixonchern/rosmol-question
2) Создайте новую БД в postgresql
3) Поправьте файл config/db.php и добавьте актуальное для вас подключение к БД
4) Зарегистрируйтесь на https://cloud.yandex.ru/ и подключите yandex speech kit
5) Создайте файл config/params-local.php и вставьте туда следующее
   ```php
      <?php

      return [
         'yandex' => [
            'Iam' => <Iam токен от yandex cloud>,
            'folderId' => <folderId от yandex cloud>
         ]
      ];
   ```
6) Выполните следующие команды из корневой директории репозитория:
   ``composer install``
   ``php yii migrate``

### 4. Настройк фронтенда

1) Перейдите в репозиторий https://github.com/NeDanyaAtAll/hakaton-frontend
2) Выполните команду ``npm i``
3) В файле src/config.js укажите URL адрес API (https://github.com/nixonchern/rosmol-question)
4) Для продакшн сборки выполните команду ``npm run build``

   Для сборки в режиме разработки выполните команду ``npm run dev``


РАЗРАБОТЧИКИ

<h4>Халюткин Виктор Александрович fullstack https://github.com/KhalyutkinVictor </h4>
<h4>Морозов Даниил Артурович fullstack https://github.com/neDanyaatall </h4>
<h4>Черников Никита Романович fullstack https://github.com/nixonchern </h4>

