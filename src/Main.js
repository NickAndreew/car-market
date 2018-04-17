import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import RefinedSearch from './RefinedSearch';
import SellYourCar from './SellYourCar';

class Main extends Component {
	render() {
		return (
			<div className='main'>
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route path='/search' component={Search}></Route>
					<Route path='/refined-search' component={RefinedSearch}></Route>
					<Route path='/sell-your-car' component={SellYourCar}></Route>
				</Switch>
			</div>
		);
	}
}

export default Main;