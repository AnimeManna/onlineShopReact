import React from 'react'

export default class Sidebar extends React.Component {
  render() {
    return (
      <div
        className="app__sidebar">
        <div
          className="app__sidebar__item">
          <i
            className="fa fa-home"
            aria-hidden="true"
            id="app__sidebar__icon"/>
          <div
            className="app__sidebar__itemText">
            Главная страница
          </div>
        </div>
        <div
          className="app__sidebar__item">
          <i
            className="fa fa-sitemap"
            aria-hidden="true"
            id="app__sidebar__icon"/>
          <div
            className="app__sidebar__itemText">
            Каталог
          </div>
        </div>
        <div
          className="app__sidebar__item">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            id="app__sidebar__icon"/>
          <div
            className="app__sidebar__itemText">
            Корзина
          </div>
        </div>
      </div>
    )
  }
}
