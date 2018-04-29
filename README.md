## Static Files NodeJS Server

Descargas dependencias:

    $ npm install && bower install

Crear 'dist' con Gulp:

    $ gulp libs

Arrancar aplicación servidor:

	 $ npm start

Calendario: Vanilla Calendar
Calendario Schelude: js-calendar

Para corregir el error ENOSPC en caso de presentarse:

    $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

---

Fuentes:

+ https://github.com/expressjs
+ https://stackoverflow.com/questions/34252817/handlebarsjs-check-if-a-string-is-equal-to-a-value?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
+ https://github.com/vanilla-calendar/vanilla-calendar
+ https://github.com/rykdesjardins/js-calendar
