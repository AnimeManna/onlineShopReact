import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, Switch, IndexRoute, browserHistory} from 'react-router'

class Home extends React.Component{
  render(){
    return(
      <div className="Content">
        <div className="Menu">
          <div className="Menu__block">Механические клавиатуры</div>
          <div className="Menu__block">Мембраные клавиатуры</div>
          <div className="Menu__block">Беспроводные клавиатуры</div>
        </div>
      </div>
    )
  }
};


export default class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    )
  }
}
