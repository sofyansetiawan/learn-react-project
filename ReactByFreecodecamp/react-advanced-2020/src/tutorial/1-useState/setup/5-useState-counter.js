import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  // const reset = () => {
  //   setValue(0)
  // }

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState)=> {
        return prevState + 1
      })
    }, 2000)
  }

  return (
    <>
      <h2>Regular Counter</h2>
      <h2>{value}</h2>
      <button className="btn" onClick={()=> setValue(value + 1)}>Increase</button>
      <button className="btn" onClick={() => setValue(0)}>Reset</button>
      <button className="btn" onClick={()=> setValue(value - 1)}>Decrease</button>
      <br/>
      <hr/>
      <br/>
      <h2>Complex counter</h2>
      <h2>{value}</h2>
      <button className="btn" onClick={complexIncrease}>Increase</button>
    </>
  );
};

export default UseStateCounter;
