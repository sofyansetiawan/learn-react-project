# React by Freecode Video #1

- npm init -y
- npm install bootstrap
- .gitignore -> node_modules
- sudo npm install gatsby-cli -g

----------------



- npx create-react-app tutorial
- cd tutorial
- npm start
- Ubah di src/App.js -> langsung update di browser
- folder src (tempat develop aplikasi react), public (index.html dan asset `<root>` sebagai tempat render aplikasi)
- npm run build -> muncul folder build (optimized hasil build aplikasi / minify -> static asset file)
  - folder build yang kita upload ke frontend hosting
  - Misalkan di netlify

------------------



- Buang semua file di src selain index.js

- File index.js sebagai pusat dari project react (komponen2 di render)
  
  - Hapus semua isi file index.js karena melakukan secara manual
  
- Import react lalu buat function -> sebuah component
  
  - Aturan dari penamaan function di react harus PascalCase
  
- Install extension es7 react snippet dan bisa jalankan shorcut disana

- Sebuah component perlu render 1 JSX (javascript xml -> html versi react)
  - Jika JSX lebih dari 1 elemen dan lebih dari 1 baris maka apit dalam ()
  - () maksudnya kalau JSX ditulis dibawah baris return, dia akan 
  
- JSX harus di return dalam 1 element. JSX tidak boleh berisi lebih dari 1 parent element

- Bisa gunakan `<React.Fragment>` sebagai parent element akan mengenerate div

- Panggil component di component lain misal: `<Component1/><Component2/>`

- Gunakan react dev tools untuk melihat struktur component dan data di dalamnya

- Untuk css -> buat file index.css lalu `import './index.css'`

- Jika menambahkan attribute/inline css secara langsung di JSX gunakan `{}` karena JSX hanya menerima syntax JS jadi sebagai object dan apapun didalamnya menjadi key dan value
  
  - Misalnya `*return* <h5 *style**=*{{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Sofyan Setiawan</h5>`
  
- Bisa gunakan variabel untuk menampung sesuai atau logic sebelum return component
  - JSX hanya bisa menampung expression bukan statement. Jika statement maka error
  - Perhitungan dan method dari tipe data di JSX masih bisa
  
- Component bisa ditambah parameter (props) dan component dipanggil di JSX bisa ditambahi argument berupa string atau kalau dari variabel diapit {}
  - Jika di child tidak dipass variabel, maka kosong elementnya. Lebih baik gunakan ternary
  - Props adalah data yang dikirim dari parent ke child component melalui parameter component
  - Hati hati menggunakan method tipe data kalau props tidak diisi. Karena bisa undefined dan error
  
- Ketika menempatkan react component bisa menulis child element di dalam nya `<Component1><p>Hello</p></Component2>` tapi tidak muncul. Karena tersimpan di `props.childern`. Pasang di dalam child component untuk mendapat child element

- Ubah data object untuk setiap component menjadi collection of data menggunakan array of object lalu kita iterasi di parent component
  - React tidak bisa render object. Hanya bisa render selain object. Ubah setiap tipe data array of object menjadi array of string (ambil sari sarinya saja) -> menggunakan map
  - Map Array of Object perlu kamu masukkan di dalam {} di return JSX
  - Jangan lupa jika ada array of object yang diiterasi, tambahkan id di masing masing objectnya
  - Passing argument props di attribute bisa pakai spread operator {...books}
  - PENTING: Setiap component yang di loop harus ada props ***<u>key</u>*** kalau tidak akan di warning error. Nilai key bisa diambil sementara dari index di map
  
- Event Handler di React
  - Attribute di JSX onClick, OnMouseOver, dll, isi argumen dengan method (karena callback, tidak bisa langsung kode eksekusi)
  - Inline di attribute JSX juga harus function
  - Tidak bisa onClick di component karena akan dianggap props
  - Di dalam attribut JSX jika passing nilai harus dibungkus ke function lagi, (ingat prinsip callback)
  
- Buat book.js dan Book.js untuk memisahkan komponen (untuk pemisahkan agar tidak besar)

  - Pindahkan array of object book ke book.js (export const books)
  - Import ke dalam index.js
  - Di Book.js buat komponent baru pakai 'rafce' -> template komponen react
  - Export default hanya 1 untuk masing masing file tapi tidak harus namanya sama file
  - Cut komponent kecuali Booklist (karena di render) dari index.js ke Book.js
  - Import Book ke index.js
  - Kalau export default, nama variabel ketika import bisa bebas selama pemanggilan tepat (sudah diwakili) ganti SpecificBook

- Deploy ke Netlify -> Login

  - Bisa connect pakai git atau drag and drop aja
  - Jalankan npm run build
  - Drag and Drop ke Netlify -> ubah domainnya
  - https://testing-react-01-sofyan.netlify.app/
  - Kalau pakai git perlu disambungkan ke reponya

- Alasan belajar class dan function component

  - Class component masih sering diujikan ketika test kerja
  - Function component itu beberapa masih belum diimplementasikan codebase di startup2 yang built app nya sebelum react 16.8

- React Hooks

  - Fungsi-fungsi yang disediakan react untuk menjalankan perintah perintah sebelum atau sesudah react di render biasanya mendapatkan data mengubah komponen lain dsb
  - Hooks di react baru dikeluarkan di versi 16.8
  - Hooks memungkinkan pakai state dan lifecycle di function component
  - Stateless (komponen yang menampilkan template tapi bisa menerima props dulu function component) dan Stateful component (komponen yang memiliki state dulu class component) tapi sekarang function component sudah bisa pakai states
  - Di react bisa pakai class atau function -> kalau function component tidak perlu this

- Baca baca sesi react untuk advanced disini : https://github.com/john-smilga/react-advanced-2020

  - Clone reponya

  - Lalukan npm install dan npm start
  - Disana sudah ada komponen dasar dan tutorial mengenai penggunaan fungsi fungsi dasar
  - Gunakan di folder setup

- UseState dan UseEffect

  - Tambahkan div container di app
  - Import 1-error-sample dengan variabel berbeda di app
  - Ke 1-error-sample buat React Fragment
  - React Fragment adalah pembungkus element child-child. Misal jika lebih dari 1. Karena komponen react harus ada 1 parent tapi kalau parent element tidak mau di render, misal div, maka pakai <React.Fragment></React.Fragment> atau shortnya <> </>
  - Ketika ada sebuah variabel di ubah melalui method komponen, maka tidak langsung ter render
  - UseState dan useEffect khusus untuk function component

- UseState ada default value, Dia adalah array index 0 adalah value state, index 1 adalah function peubah state

  - UseState harus diletakkan di body component
  - Ketika method index 1 useState diisi value di argumentnya, maka value itu akan mengubah value state seperti context.commit di vue
  - Setiap hooks di react biasanya menggunakan use didepannya dan diimport dari module react
  - Component yang menggunakan hooks harus PascalCase
  - Kalau yang diimport React maka untuk menggunakan useState => React.useState([]) (ingat object / class)
  - useState disarankan tidak menggunakan object, karena kalau mengubah salah satu properti maka harus menulis setiap properti di function peubahnya
  - useState selalu return array

- Untuk melihat perubahan di komponent di website bisa cek di inspect element di chrome dev tools kalau sudah menginstall extension react

- Perlu diingat setiap perintah javascript di JSX harus di dalam {} seperti EJS <% %> di HTML

- Ketika function atau method dijalankan oleh event html di JSX perlu dibuatkan callback karena event membutuhkan callback, jangan langsung invoke karena akan return. Kalau hasil return array atau object maka akan error

- Untuk useState object agar nilai tidak tertimpa karena ingin mengganti 1 atau 2 properti saja gunakan spead operator ({...people, message: "hello world"})

  - Atau gunakan destructuring array untuk mempersingkat akses dan memecahkan method method/function peubah property
  - Ingat, useState menghasilkan array, maka destructuringnya adalah array, bukan object

- Jika contoh setValue (function dari useState) menggunakan async (delay), setValue perlu menggunakan reference state (secara tidak langsung) jadi function di useState menyediakan callback dengan parameter untuk prevState

  - Jika dalam callback tidak mereturn value maka, state undefined dan error

- Project react yang sudah jadi -> https://react-projects.netlify.app/ (udemy nya ada)



- useEffect -> perintah perintah yang dilakukan kalau komponent sudah render atau re-render. Ada cleanup function juga

  - useEffect kalau di class component seperti componentDidMount
  - useEffect juga sebagai watcher jika state berubah karena param ke 2 adalah array [] (bisa watch lebih dari 1 state, masukkan ke array itu)
  - Kita bis gunakan 2 useEffect dalam 1 function component
  - Cara mudah mengetahui kapan proses use effect dijalankan console.log di dalam use effect dan console.log di dalam komponen ketika render
  - Gunakan react strict mode di app.js ketika sudah pakai useeffect
  - Setiap state berubah di komponen, maka rerender lalu menjalankan useEffect
  - useEffect biasanya digunakan kalau kita mendapatkan perubahan dari sesuatu diluar komponent 
  - Misalkan ketika fetch data berhasil atau dari socket, segera registrasi berhasil
  - Mau mengubah sesuatu di komponen seperti gabungan v-on, created dan watch di Vue (ini rancu)
  - useEffect bisa digunakan diapit dengan conditional pada state atau di dalamnya
  - UseEffect ada skipping effect (jadi hanya berjalan ketika render pertama atau initial render) kalau di argument kedua diisi array [] dan diisi dependency state yang mau diubah misal: [counter] agar ter-render setiap state itu saja yang berubah
  - UseEffect membutuhan cleanup function. Setiap menjalankan perintah / re-render setelah ada perubahan log, aktivitas akan semakin banyak dan memakan memori. Biasanya terjadi ketika ada event listener / re-render. Jadi ketika exit dari event, kita bersihkan datanya
    - Cleanup umumnya kalau ada addEventListener, maka removeEventListener diletakkan di return badan functionnya setelah useEffect berjalan
    - Cleanup berguna ketika tidak me-render / membuang komponen, maka tidak ada residu
  - UseEffect untuk fetch data API contohnya parsing data JSON
    - Async function tidak bisa diletakkan dalam callback useEffect jadi pisahkan di function luar
  - Jika taruh setUsers (peubah state) di dalam function yang kita panggil di useEffect karena akan terjadi rekursif, jadi gunakan skipping effect di useEffect (render sekali) misalkan [] (arr kosong)
  - Kalau di class taruh fetch di componentDidMount
    - Setiap iterasi render misal pakai map maka yang dirender tambahkan attribute key pakai id nya
  - Conditional Rendering
    - Ketika membuat komponent butuh return JSX jika ada 2 return maka return dibawahnya tidak di render. Bagaimana jika kita butuh render bagian tertentu dari komponent sesuai kebutuhan state
    - Contohnya ketika kondisi fetch data belum selesai maka tampilkan JSX loading, jika sudah selesai tampilkan JSX card data
  - Cara mensimulasikan apakah loading berjalan, di inspect element di network / no trottling (pilih 3G)
  - Jika menggunakan fetch api routingnya salah, maka tidak trigger ke error tapi langsung error 404 di browser (karena catch di fetch khusus network)
    - di then tambahkan condition jika response.status >= 200 dan dibawah 299 maka berhasil
    - else setLoadingFalse, setError true dan throw new error 
  - Short Circuit Evaluation dan ternary operator
    - Menggunakan default value dengan OR `const value = text || "no text"` jika text false, maka menampilkan no text, jika benar maka menampilkan text
    - Menggunakan default value AND `const value = text && "show menu"` Jika falsy tidak menampilkan apapun, jika benar maka menampilkan show menu
    - Biasanya || untuk mengisi default value, && untuk menampilkan element
    - Coba gunakan button untuk toggle state yang menampilkan element tertentu
    - Misal dengan membuat function diluar atau mempassing di onClick setState(negasi state) -> value yang dipassing ke seterror adalah negasi (true jadi false, false jadi true
    - Gunakan ternary juga sama dengan ternary di JS
  - Gunakan show/hide component dengan Short Circuit Evaluation (default value &&) dengan memanggil component di component lain
  
- Form React

  - Ketika onSubmit handleSubmit e.preventDefault()
  - Pisahkan state setiap input form dengan default value string kosong ""
  - Ketika value input diisi state, error karena harus di handle onchange
  - OnChange tambahkan callback dengan 1 parameter (yang mewakili elemen input) dan e.target.value
  - Jika ada data yang perlu ditampung dulu `setPeople((people) => { return [...people, person] // add orang baru ke array jabaran lama })`

  - Kosongkan setelah submit
  - Ingat setiap looping JSX harus ada key yang unique
  - Bisa menggunakan id dari data atau uuid dari date

- Kita bisa gunakan 1 useState untuk form dengan banyak input dengan mangisi argument di useState dengan object berisi properti value defaultnya. Object itu akan jadi destructur dari variabel state

  - Gunakan 1 handleChange saja untuk menangkap setiap perubahan semua input
  - Gunakan dynamic object properti dengan spread operator di dalam object dan properti yang value mau diganti `setPerson({...person, [name]: value})`

- useRef

  - Sifatnya seperti v-bind di Vue
  - Mendapatkan sebuah data/state tapi berbeda dengan state
  - Diletakkan di DOM sebagai attribute
  - Tidak melakukan re-render untuk komponen itu.
  - Ref akan memanggil element secara keseluruhan dan mendapat semua propertinya
  - Gunakan useEffect untuk memberikan perintah di properti ref element tersebut

- useReducer

  - Biasanya digunakan untuk menghandle banyak perintah rumit mengingat struktur komponen semakin kompleks
  - Membuatkan kondisi untuk mempengaruhi state yang banyak
  - Reducer sifatnya seperti management state di vuex, state dikumpulkan jadi 1
  - param 1 : reducer, param 2 : default value (misal object dengan banyak state)
  - reducer adalah handle state dan action yang dipanggil secara callback
  - default state diwakili state dan reducer diwakili dispatch (argument di dispacth jadi value dari action reducer)
  - Sifat useReducer ini mirip dengan state management Vuex (dispatch, action dan state)
  - Kamu bisa pisahkan reducer dan actionnya di file lain

- Prop Drilling

  - Cara mempassing data melalui props ke komponent-komponen dalam hirarki sampai ke komponent yang membutuhkan data tersebut. Tapi beberapa komponen mungkin tidak menggunakan prop tersebut. Hanya melewatkan ke bawah
  - Misal sebuah komponen tidak membutuhan removeData tapi child membutuhkan function itu
  - Caranya harus di passing menjadi prop setiap komponen dan invoke componentnya menjadi prop lagi
  - Jika ada data di passing ke  `{...person}` dan `removePerson={removePerson}` lalu di destructuring `{id, name, removePerson}`

- Context API

  - Untuk menghindari prop drilling
  - Seperti prototype oop
  - Menggunakan `React.createContext()`
  - Terdiri dari 2 component Provider, Consumer
  - Provider yang menyediakan dan blast data/state untuk bisa dipakai semua komponen tanpa sediakan props
  - Buatkan provider `<PersonContext.Provider value="hello">` tampung dalam value
  - Consumer `useContext(PersonContext)`
  - Bisa gunakan object untuk menampung variabel, function untuk bisa dipakai semua komponen `<PersonContext.Provider *value*={{removePerson}}>`

- Custom Hooks

  - Cara untuk mengumpulkan bagian penting sehingga bisa dipakai berkali kali tanpa redundan
  - Pindahkan useState, function dan useEffect
  - Return object dari state state yang dibuat supaya bisa dipakai ditempat lain
  - Tambahkan parameter kalau diperlukan dan jangan lupa di export
  - Panggil seperti useEffect di file yang memanggil custom hooks, bedanya tergantung hasil return apakah array atau object
  - Lanjut -> 08:38:18



---------



- Custom hooks digunakan ketika kita membuat codingan setiap komponen secara berulang

  - Jadi pisahkan ke dalam file yang berbeda, kodingan bisa diletakkan di function lalu return state statenya
  - export default maka functionnya
  - Panggil custom hooks seperti memanggil useState (bentuk sama) jadi kalau useState biasa mereturn state dan function peubah
  - Custom hooks adalah hook yang kita buat sendiri sesuai kebutuhan

