import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("")
  const [error, setError] = useState(false)
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  const changeError = () => {
    if(error){
      setError(false);
    }
    else{
      setError(true);
    }
  }

  return (
    <>
      <h2>{firstValue}</h2>
      <h1>value: {secondValue}</h1>
      <button className="btn" onClick={changeError}>Toggle Error 1</button>
      <button className="btn" onClick={()=> setError(!error)} >Toggle Error 2</button>
      {/* value yang dipassing ke seterror adalah negasi (true jadi false, false jadi true) */}
      {error && <h1>Terjadi error..</h1>}
      {error ? (
        <p>There is an error..</p>
      ) : (
        <p>There is no error..</p>
      )}
    </>
  );
};

export default ShortCircuit;
