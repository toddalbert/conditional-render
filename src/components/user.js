import React from 'react'

function User(props) {
  const { isLoggedIn, name, age } = props
  if (!isLoggedIn) {
    return null
  }
  return (
    <p>Hello {name} age {age}. You are amazing. Thanks
    for being you.</p>
  )
}

export default User