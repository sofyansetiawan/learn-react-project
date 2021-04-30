import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: 'random message'
  })

  const [name, setName] = useState("peter")
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState("random message")

  const changeMessage = () => {
    // setPerson({...person,  message: "hello world"})
    setMessage("hello world")
  }

  const changeName = () => {
    // setPerson({...person,  message: "hello world"})
    setName("hello world")
  }

  const changeAge = () => {
    // setPerson({...person,  message: "hello world"})
    setAge("hello world")
  }

  console.log(person)
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeName}>Change message</button>
      <button className="btn" onClick={changeAge}>Change age</button>
      <button className="btn" onClick={changeMessage}>Change name</button>
    </>
  );
};

export default UseStateObject;
