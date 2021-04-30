import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(()=> {
    console.log('render')
    window.addEventListener("resize", checkSize);
    console.log("useEffect")
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize)
    }
  })
  return (
    <>
    <h2>WINDOW</h2>
    <h3>{size}</h3>
    </>
  );
};

export default UseEffectCleanup;
