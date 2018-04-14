import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink} from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div className='home'>
				<div className="searchFormHold">
					<div className="searchFiltersDiv">
						<h2 className="titleCl">Search</h2>
						<form>
							<div className="container1">
								<div className="row">
									<div className="col-sm-6">
										<select className="form-control" id="makeId">
											<option selected>Make</option>
											<option value='maker1'>Maker1</option>
											<option value='maker2'>Maker2</option>
											<option value='maker3'>Maker3</option>
											<option value='maker4'>Maker4</option>
											<option value='maker5'>Maker5</option>
										</select>
									</div>
									<div className="col-sm-6">
										<select className="form-control" id="modelId">
											<option selected>Model</option>
											<option value='model1'>Model1</option>
											<option value='model2'>Model2</option>
											<option value='model3'>Model3</option>
											<option value='model4'>Model4</option>
											<option value='model5'>Model5</option>
										</select>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<select className="form-control" id="makeId">
											<option selected>First Registration</option>
											<option value='maker1'>2000</option>
											<option value='maker2'>2001</option>
											<option value='maker3'>2002</option>
											<option value='maker4'>2003</option>
											<option value='maker5'>2004</option>
										</select>
									</div>
									<div className="col-sm-6">
										<select className="form-control" id="modelId">
											<option selected>Price up to ($)</option>
											<option value='model1'>500$</option>
											<option value='model2'>1000$</option>
											<option value='model3'>1500$</option>
											<option value='model4'>2000$</option>
											<option value='model5'>2500$</option>
										</select>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<select className="form-control" id="makeId">
											<option selected>Country</option>
											<option value='maker1'>Albania</option>
											<option value='maker2'>Belgium</option>
											<option value='maker3'>Croatia</option>
											<option value='maker4'>France</option>
											<option value='maker5'>Italy</option>
										</select>
									</div>
									<div className="col-sm-3"> 
										<input placeholder="ZIP" className="form-control" />
									</div>
									<div className="col-sm-3"> 
										<input placeholder="Radius" className="form-control" />
									</div>
								</div>
								<div className="row">
									
								</div>
								<div className="row">
									<div className="col-sm-6">
										<a href="" className="btn btn-link">Refine Search</a>
									</div>
									<div className="col-sm-6">
										<button type="button" className="btn btn-warning">Search</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div>

				</div>
			</div>
		);
	}
}

export default Home;