import React from 'react'
import Content from '../components/content.jsx'
import Sidebar from '../components/sidebar.jsx'
import {
  connect
} from 'react-redux'


class Body extends React.Component {
  render() {
    return (
        <div className="app__body">
          {this.props.state.sidebarIsActive
            ? <Sidebar className="app__sidebar"/>
            : null}
          <Content className="app__content"/>
      </div>
    )
  }
}

export default connect(
  store => ({
    state: store
  }),
  null
)(Body)