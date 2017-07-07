import React from 'react'
import Header from './header.jsx'
import Content from './content.jsx'
import Sidebar from './sidebar.jsx'


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="app__body">
          <Sidebar className="app__sidebar"/>
          <Content className="app__content"/>
        </div>
      </div>
    )
  }
}

export default App