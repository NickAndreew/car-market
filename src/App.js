import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Navigation from './Navigation';

class App extends Component {
	render() {
		return (
			<div className='app'>
				<Navigation />
				<Main />
			</div>
		);
	}
}

export default App;