import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
	render() {
		return (
			<nav className='navbar'>
				<ul>
                    <li><NavLink to='/'><img src="https://images.vexels.com/media/users/3/127711/isolated/preview/384e0b3361d99d9c370b4037115324b9-flat-vintage-car-icon-by-vexels.png" className="icon" /></NavLink></li>
                    <li><NavLink to='/search'>Search</NavLink></li>
                </ul>
			</nav>
		);
	}
}

export default Navigation;