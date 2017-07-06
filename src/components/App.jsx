import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Content from './Content.jsx'


class App extends React.Component {
  render() {
    return (
      <div >
        <Header/>
        <Content/>
      </div>
    );
  }
};

export default App;
