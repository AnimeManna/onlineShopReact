import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// создание элемента
const title = React.createElement(
	'h1',	// элемент, который мы создаем
	{id: 'title'},	// свойства, которые будет иметь создаваемый элемент
	'Hello React'	// внутреннее содержимое
)
// рендеринг элемента
ReactDOM.render(
	title,	// элемент, который мы хотим создать
	document.getElementById('root')	// где мы этот элемент хотим создать
)
