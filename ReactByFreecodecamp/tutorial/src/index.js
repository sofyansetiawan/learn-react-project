import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { books } from './books'
import SpecificBook from "./book"
import {greeting} from "./testing"
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

// const newTitle = books.map(item => item.title)
// const newImage = books.map(item => item.image)
// const newAuthor = books.map(item => item.author)

function BookList(){
  console.log(greeting)
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
          <SpecificBook key={index} id={id} image={image} author={author} title={title} />
        )
      })
    }
  </section>)
}

ReactDOM.render(<BookList/>, document.getElementById("root"))
