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
- LANJUT -> 3.12

