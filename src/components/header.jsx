import React from 'react'
import {
  connect
} from 'react-redux'

class Header extends React.Component {
  toggleMenu() {
    this.props.toggleMenu()
  }

  render() {
    return (
      <div
        className="app__header">
        <div>
          <i
            className="fa fa-list"
            id="app_header__sidebarIcon"
            aria-hidden="true"
            onClick={() => this.toggleMenu()}/>
        </div>
        <div
          className="app__header__logo">
          Техноплейс
        </div>
        <div
          className="app__header__item">
          <i
            className="fa fa-sign-in"
            id="app__header__icon"
            aria-hidden="true"/>
          <div>
            Войти
          </div>
        </div>
        <div
          className="app__header__item">
          <i
            className="fa fa-user-plus"
            id="app__header__icon"
            aria-hidden="true"/>
          <div>
            Зарегистрироваться
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  store => ({
    state: store
  }),
  dispatch => ({
    toggleMenu: () => dispatch({
      type: 'TOGGLE_SIDEBAR',
    })
  })
)(Header)