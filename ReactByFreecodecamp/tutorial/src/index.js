import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// function Greeting(){
//   // return React.createElement('div', {}, React.createElement('h4', {}, "Hello World"))
//   return (
//     <section className="profile-author">
//       <Person/>
//       <Message/>
//     </section>
//   )
// }

// const Person = () => <h1>Hello Sofyan Setiawan</h1>

// const Message = () => {
  //   return (
    //     <ul>
    //         <li><a href='https://google.com'>My Contact</a></li>
    //         <img src="" alt=""/>
    //     </ul>
    //   )
    // }

// const title = 'this is a car'
// const image = "https://specials-images.forbesimg.com/imageserve/5f85be4ed0acaafe77436710/960x0.jpg?fit=scale"
// const author = "Sofyan Setiawan"

const books = [
    {
      id: 1,
      image: "https://specials-images.forbesimg.com/imageserve/5f85be4ed0acaafe77436710/960x0.jpg?fit=scale",
      title: 'Buku Ekonomi',
      author: "Sofyan Setiawan"
    },
    {
      id: 2,
      image: "https://specials-images.forbesimg.com/imageserve/5f85be4ed0acaafe77436710/960x0.jpg?fit=scale",
      title: 'Buku Tabungan',
      author: "Fitri Setiawan"
    },
    {
      id: 3,
      image: "https://specials-images.forbesimg.com/imageserve/5f85be4ed0acaafe77436710/960x0.jpg?fit=scale",
      title: 'Buku Sejarah',
      author: "Indah Setiawan"
    }
]

// const newTitle = books.map(item => item.title)
// const newImage = books.map(item => item.image)
// const newAuthor = books.map(item => item.author)
    
function BookList(){
  return (
  <section className="booklist">
    {/* <Book image={firstBook.image} author={firstBook.author} title={firstBook.title} />
    <Book image={firstBook.image} author={firstBook.author} title={firstBook.title}/>
    <Book image={firstBook.image} author={firstBook.author} title={firstBook.title}/>
  <Book image={firstBook.image} author={firstBook.author} title={firstBook.title}/> */}
    {
      books.map((book, index) => {
        const {id, author, title, image} = book
        return (
          <Book key={index} id={id} image={image} author={author} title={title} />
        )
      })
    }
  </section>)
}

const Book = (props) => { // desctructuring di parameter juga bisa
  console.log(props, "====")
  const {id, image, title, author} = props
  const clickHandler = (e) => {
    alert("Hello World")
    console.log(e.target)
  }
  const showAuthor = (author) => {
    alert("Nice to see you " + author)
  }
  return (
    <article className="book" id={id}>
      <BookImage image={image}/>
      <BookTitle title={title}/>
      <BookAuthor author={author}>
        <hr/>
        <p>Ini adalah contoh child element. Akses di props.childern</p>
      </BookAuthor>
      {/*<article className="book">
      <BookImage image={image}/>
      <BookTitle title={title}/>
      <BookAuthor author={author}>
        <hr/>
        <p>Ini adalah contoh child element. Akses di props.childern</p>
      </BookAuthor>
    </article>*/}
      <button type="button" onClick={clickHandler}>Reference</button>
      <button type="button" onClick={() => showAuthor(author)}>Reference</button>
    </article>

    
  )
}

const BookTitle = (props) => {
  {/* sebuah comment di react*/}
  console.log(props)
  return <h1 onClick={() => console.log("Click H1")}>{props.title}</h1>
}

const BookImage = (props) => {
  return <img src={props.image} alt="book" className="bookimage" onMouseOver={()=> alert(props.image)}/>
}

const BookAuthor = (props) => {
  console.log(props)
  return (
    <div>
      <h5 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>{props.author}</h5>
      {props.children}
    </div>
  )
}

ReactDOM.render(<BookList/>, document.getElementById("root"))
