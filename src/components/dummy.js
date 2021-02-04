import React from 'react'
import User from './user'

class Dummy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    const { isLoggedIn } = this.state
    return (
      <>
        <h1>Hello {(isLoggedIn) ? 'USER!!' : 'Guest'}</h1>
        <button
          onClick={() => this.setState({ isLoggedIn: !isLoggedIn })}>
          {(isLoggedIn) ? 'LOGOUT' : 'Sign In'}</button>
        <User
          age={28}
          name='Bobby'
          isLoggedIn={isLoggedIn} />
        <User age={45} isLoggedIn={isLoggedIn} name='Todd' />
      </>
    )
  }
}

export default Dummy