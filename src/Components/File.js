import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <input type="file" name="file" accept="image/*"/>
      </div>
    )
  }
}

export default App