import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(()=> {
    fetch(url)
    .then(res => res.json())
    .then(user => {
      const {login} = user
      setUsers(login)
      setLoading(false)
    })
    .catch(err => {
      setError(true)
    })
  }, [])

  if(isLoading){
    return (
      <h2>Loading...</h2>
    )
  }

  if(isError){
    return (
      <h2>Error...</h2>
    )
  }

  return (
    <h2>{users}</h2>
  );
};

export default MultipleReturns;
