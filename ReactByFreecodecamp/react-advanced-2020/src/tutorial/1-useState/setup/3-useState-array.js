import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removePerson = (id) => {
    // const newPeople = people.filter(person => person.id !== id) // <-- sebelum diubah pakai cara baru
    setPeople((prevPeople) => {
       const newPeople = prevPeople.filter(person => person.id !== id)
       return newPeople
    })
  }

  return (
  <>
    {/* <h2>useState array example</h2> */}
    {people.map(person => {
      console.log(person);
      const {id, name} = person
      return <div key={id} className="item">
        <h4>{name}</h4>
        <button className="btn" onClick={() => removePerson(id)}>Delete</button>
      </div>
    })}
    <button className="btn" onClick={() => setPeople([])}>Clear</button>
  </>
  );
};

export default UseStateArray;
