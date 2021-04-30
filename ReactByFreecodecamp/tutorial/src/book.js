import React from 'react'

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

export default Book
