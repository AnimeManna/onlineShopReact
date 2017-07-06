import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Switch , IndexRoute, browserHistory } from 'react-router';

class Header extends React.Component{
  render(){
     return(
       <div className="headline">
         <div className="headline__logo"> KeyBordShop </div>
         <div className="headline__block"><i className="fa fa-sign-in headline__icon" aria-hidden="true"></i>Sign in</div>
         <div className="headline__block"><i className="fa fa-user-plus headline__icon" aria-hidden="true"></i>Sign up</div>
       </div>
    );
  }
};


export default Header;
