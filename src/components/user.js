import React from 'react'
import { Link } from 'react-router-dom'

function User(props) {
  const { isLoggedIn, name, age } = props
  if (!isLoggedIn) {
    return null
  }
  return (
    <>
      <p>Hello {name} age {age}. You are amazing. Thanks
      for being you.</p>
      <Link className="App-link" to="/">Home</Link>
    </>
  )
}

export default User