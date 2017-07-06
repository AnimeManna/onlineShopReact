import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, Switch, IndexRoute, browserHistory} from 'react-router'

class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="headline">
          <div className="headline__logo">
            KeyBordShop
          </div>
          <div className="headline__block">
            <i className="fa fa-sign-in headline__icon" aria-hidden="true"/>Sign in</div>
          <div className="headline__block">
            <i className="fa fa-user-plus headline__icon" aria-hidden="true"/>Sign up</div>
        </div>
      </div>
    )
  }
}

export default class Header extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={HeaderComponent}/>
      </Switch>
    )
  }
}
