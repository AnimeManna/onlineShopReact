import React from 'react';
import ReactDom from 'react-dom';
import Header from './src/components/header.jsx';
import { BrowserRouter as Router, Route  } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
     <Router>
      <div >
        <Route path="/" component={Header}/>
      </div>
    </Router>
    );
  }
};

export default App;
