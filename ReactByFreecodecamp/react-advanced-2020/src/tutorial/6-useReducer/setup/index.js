import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {
  if(action.type === "ADD_ITEM"){
    const newItems = [...state.people, action.payload]
    console.log(state, action)
    console.log({...state, people:newItems, isModalOpen: true, modalContent: 'item Added'})
    return {...state, people:newItems, isModalOpen: true, modalContent: 'item Added'}
  }
  else if(action.type === "NO_VALUE"){
    return {...state, showModal: true, isModalOpen: true, modalContent: "please enter value"}
  }
  else if(action.type === "CLOSE_MODAL"){
    return {...state, showModal: true, isModalOpen: false, modalContent: ""}
  }
  else if(action.type === "REMOVE_ITEM"){
    const newPeople = state.people.filter(person => {
      return person.id !== action.payload
    })
    return {...state, people: newPeople}
  }
  throw new Error('no matching action type')
}

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ""
}

const Index = () => {
  const [name, setName] = useState('');
  // const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState)
  // const [people, setPeople] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault()
    // if(name){
    //   setShowModal(true);
    //   setPeople([...people, {id: new Date().getTime().toString(), name}]);
    //   setName("")
    // }
    // else{
    //   setShowModal(true)
    // }
    if(name){
      const newItem = {id: new Date().getTime().toString(), name}
      dispatch({type: "ADD_ITEM", payload: newItem})
    }
    else{
      dispatch({type: "NO_VALUE"})
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      {/* {showModal && <Modal/>} */}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <button type="submit">Add</button>
      </form>
      {
        state.people.map((person) => {
          return (
            <div key={person.id} className="item">
              <h4>{person.name}</h4>
              <button onClick={()=> {
                dispatch({type: "REMOVE_ITEM", payload: person.id})
              }}>remove</button>
            </div>
          )
        })
      }
    </>
  );
};

export default Index;
