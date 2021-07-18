## Langkah 1 - Install Node.js

Pertama, silahkan untuk melakukan installasi Node.js di dalam komputer teman-teman semuanya, untuk installasi Node.js silahkan bisa mengikuti dari situs resiminya di : https://nodejs.org/en/download/.

Untuk mengetahui apakah komputer kita sudah terinstall Node.js, kita bisa menjalankan perintah berikut ini di dalam terminal/CMD :

### `node -v`

### `npm -v`
Jika berhasil, maka akan keluar versi Node.js dan NPM yang di install.



## Langkah 2 - Install Express

Setelah kita berhasil menginstall Node.js, sekarang kita lanjutkan untuk menginstall Express di dalam komputer kita secara global.

Silahkan jalankan perintah berikut ini :

### `npm install -g express-generator`

Silahkan di tunggu proses installasi sampai selesai dan pastikan terhubung dengan internet.



## Langkah 3 - Membuat Project Dengan Express

Setelah kita berhasil menginstall Express di dalam komputer, sekarang kita bisa membuat project baru dengan Express. Silahkan masuk ke dalam folder dimana teman-teman akan menyimpan project dan jalankan perintah berikut ini di dalam terminal/CMD :

### `express --view=ejs express-mysql`

Di atas, kita akan membuat project Express baru dengan nama express-mysql dan kita tambahkan flag --view=ejs untuk digunakan sebagai view/template engine di dalam Express.



## Langkah 4 - Install Library Pendukung

express-flash

Pertama kita akan melakukan installasi untuk library express-flash, library ini digunakan untuk menampilkan flash message di dalam project Express nanti. Silahkan jalankan perintah berikut ini untuk menginstall-nya.

### `npm install express-flash --save`

express-session

Selanjutnya, kita akan lakukan installasi untuk library yang bernama express-session, library ini digunakan untuk mengatur session yang ada di dalam project Express, session ini sama seperti session yang ada di dalam bahasa pemrogramman PHP. Silahkan jalankan perintah di bawah ini untuk melakukaan installasi-nya.

### `npm install express-session --save`

method-override

Kemudian, kita juga akan menginstall library lagi yang bernama method-override, ini akan kita manfaatkan untuk mengirim sebuah request dengan method PUT dan DELETE di dalam project Express. Silahkan jalankan perintah di bawah ini untuk menginstall-nya.

### `npm install method-override --save`

mysql

Terakhir, kita akan menginstall library mysql, library ini merupakan driver mysql yang akan digunakan untuk menghubungkan antara project Express dan database MySQL. Silahkan jalankan perintah di bawah ini untuk menginstall-nya.

### `npm install mysql --save`
