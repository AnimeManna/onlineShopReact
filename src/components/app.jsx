import React from 'react'
import Header from './header.jsx'
import Content from './content.jsx'
import Sidebar from './sidebar.jsx'
import {
  connect
} from 'react-redux'


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="app__body">
          {this.props.state.sidebarIsActive
            ? <Sidebar className="app__sidebar"/>
            : null}
          <Content className="app__content"/>
        </div>
      </div>
    )
  }
}

export default connect(
  store => ({
    state: store
  }),
  null
)(App)