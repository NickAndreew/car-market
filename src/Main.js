import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';

class Main extends Component {
	render() {
		return (
			<div className='main'>
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route path='/search' component={Search}></Route>
				</Switch>
			</div>
		);
	}
}

export default Main;