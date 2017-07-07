import React from 'react'

export default class Sidebar extends React.Component {
  render() {
    return (
      <div
        className="app__sidebar">
        <div
          className="app__sidebar__item">
          Механические клавиатуры
        </div>
        <div
          className="app__sidebar__item">
          Мембраные клавиатуры
        </div>
        <div
          className="app__sidebar__item">
          Беспроводные клавиатуры
        </div>
      </div>
    )
  }
}
