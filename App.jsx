import React from 'react';
import ReactDom from 'react-dom';

const title = React.createElement('h1',null, 'ReactTodo');

ReactDom.render(title, document.getElementById('root'));
