import React from 'react'
import Header from '../containers/header.jsx'
import Body from '../containers/body.jsx'


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Body/>
      </div>
    )
  }
}

export default App