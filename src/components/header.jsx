import React from 'react'

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <div
        className="app__header">
        <div>
          <i
            className="fa fa-list"
            id="app_header__sidebarIcon"
            aria-hidden="true"/>
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
          Войти
        </div>
        <div
          className="app__header__item">
          <i
            className="fa fa-user-plus"
            id="app__header__icon"
            aria-hidden="true"/>
          Зарегистрироваться
        </div>
      </div>
    )
  }
}