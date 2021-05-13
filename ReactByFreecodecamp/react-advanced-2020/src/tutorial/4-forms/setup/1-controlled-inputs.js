import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // const [firstname, setFirstname] = useState("")
  // const [email, setEmail] = useState("")
  // const [age, setAge] = useState("")
  const [person, setPerson] = useState({firstname: '', email: '', age: ''})
  const [people, setPeople] = useState([])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)
    setPerson({...person, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hello world")
    // if(email && firstname && age){
    //   const person = { firstname, email, age }
    //   setPeople((people) => {
    //     return [...people, person] // add orang baru ke array jabaran lama
    //   })
    //   setFirstname("")
    //   setEmail("")
    // }
    // else{
    //   console.log("Isi datanya")
    // }
    if(person.firstname && person.email && person.age){
      const newPerson = {...person, id: new Date().getTime().toString()}
      console.log(newPerson)
      setPeople([...people, newPerson])
      setPerson({firstname: "", email: "", age: ""})
    }
  }

  return (
    <>
      <article>
        <form className="form">
          {/* <div className="form-control">
            <label htmlFor="firstname">Name:</label>
            <input type="text" id="firstName" name="firstName" value={firstname} onChange={(e) => setFirstname(e.target.value) } />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value) } />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value) } />
          </div> */}

          <div className="form-control">
            <label htmlFor="firstname">Name:</label>
            <input type="text" id="firstName" name="firstname" value={person.firstname} onChange={handleChange} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value={person.email} onChange={handleChange} />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" name="age" value={person.age} onChange={handleChange} />
          </div>
          <button type="submit" onClick={handleSubmit}>Add Person</button>
        </form>
      </article>
      {people.map((person) => {
      const {id, firstname, email, age} = person;
      return (
        <div key={id} className="item">
          <h4>{firstname}</h4>
          <p>{email}</p>
          <p>{age}</p>
        </div>
      )
    })}
    </>
  )
};

export default ControlledInputs;
