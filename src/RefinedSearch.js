import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class RefinedSearch extends Component {
	render() {
		return (
			<div className='refined-search'>
				<Link to='/' className="backButton"><span className="glyphicon glyphicon-arrow-left"></span>  Home page</Link>
				<h2 className="titleCl">Search Details</h2>
				<div className="searchFormHold">
					<div className="refinedSearchFiltersDiv">
						<form>
							<div className="container1">
                                <h4 className="titleCl">Basic specifications</h4>
								<div className="row">
									<div className="col-sm-4">
                                        <h5 className="text">Make</h5>
										<select className="form-control select" id="makeId">
											<option selected>Make</option>
											<option value='maker1'>Maker1</option>
											<option value='maker2'>Maker2</option>
											<option value='maker3'>Maker3</option>
											<option value='maker4'>Maker4</option>
											<option value='maker5'>Maker5</option>
										</select>
									</div>
									<div className="col-sm-4">
                                        <h5 className="text">Model</h5>
										<select className="form-control select" id="modelId">
											<option selected>Model</option>
											<option value='model1'>Model1</option>
											<option value='model2'>Model2</option>
											<option value='model3'>Model3</option>
											<option value='model4'>Model4</option>
											<option value='model5'>Model5</option>
										</select>
									</div>
                                    <div className="col-sm-4">
                                        <h5 className="text">Trim</h5>
                                        <input placeholder="Trim, e.g. GTI, RS, GL, etc." className="form-control" />
									</div>
								</div>
                                <div className="row">
									<div className="col-sm-4">
                                        <h5 className="text">Model</h5>
										<select className="form-control select" id="makeId">
											<option selected>Body Type</option>
											<option value='maker1'>Maker1</option>
											<option value='maker2'>Maker2</option>
											<option value='maker3'>Maker3</option>
											<option value='maker4'>Maker4</option>
											<option value='maker5'>Maker5</option>
										</select>
									</div>
									<div className="col-sm-2">
                                        <h5 className="text">First registration</h5>
										<select className="form-control select" id="">
											<option selected>from</option>
											<option value='model1'>Model1</option>
											<option value='model2'>Model2</option>
											<option value='model3'>Model3</option>
											<option value='model4'>Model4</option>
											<option value='model5'>Model5</option>
										</select>
									</div>
                                    <div className="col-sm-2">
                                        <h5 className="text"></h5>
                                        <select className="form-control select" id="">
											<option selected>to</option>
											<option value='model1'>Model1</option>
											<option value='model2'>Model2</option>
											<option value='model3'>Model3</option>
											<option value='model4'>Model4</option>
											<option value='model5'>Model5</option>
										</select>
									</div>
                                    <div className="col-sm-2">
                                        <h5 className="text">Price</h5>
										<select className="form-control select" id="">
											<option selected>from</option>
											<option value='model1'>Model1</option>
											<option value='model2'>Model2</option>
											<option value='model3'>Model3</option>
											<option value='model4'>Model4</option>
											<option value='model5'>Model5</option>
										</select>
									</div>
                                    <div className="col-sm-2">
                                        <select className="form-control select" id="">
											<option selected>to</option>
											<option value='model1'>Model1</option>
											<option value='model2'>Model2</option>
											<option value='model3'>Model3</option>
											<option value='model4'>Model4</option>
											<option value='model5'>Model5</option>
										</select>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-4">
                                        <h5 className="text">Country</h5>
										<select className="form-control select" id="makeId">
											<option selected>Country</option>
											<option value='maker1'>Albania</option>
											<option value='maker2'>Belgium</option>
											<option value='maker3'>Croatia</option>
											<option value='maker4'>France</option>
											<option value='maker5'>Italy</option>
										</select>
									</div>
									<div className="col-sm-4"> 
                                        <h5 className="text">ZIP</h5>
										<input placeholder="ZIP" className="form-control" />
									</div>
									<div className="col-sm-4"> 
                                        <h5 className="text">Radius</h5>
										<input placeholder="Radius" className="form-control" />
									</div>
								</div>
                                <hr />
								<div className="row">
                                    <div className="col-sm-4">
                                        <h5 className="text">Fuel Type</h5>
										<select className="form-control select" id="makeId">
											<option selected>Fuel Type</option>
											<option value='maker1'>Maker1</option>
											<option value='maker2'>Maker2</option>
											<option value='maker3'>Maker3</option>
											<option value='maker4'>Maker4</option>
											<option value='maker5'>Maker5</option>
										</select>
									</div>
									<div className="col-sm-2">
                                        <h5 className="text">Engine Capacity</h5>
										<select className="form-control select" id="">
											<option selected>from</option>
											<option value='model1'>Model1</option>
											<option value='model2'>Model2</option>
											<option value='model3'>Model3</option>
											<option value='model4'>Model4</option>
											<option value='model5'>Model5</option>
										</select>
									</div>
                                    <div className="col-sm-2">
                                        <select className="form-control select" id="">
											<option selected>to</option>
											<option value='model1'>Model1</option>
											<option value='model2'>Model2</option>
											<option value='model3'>Model3</option>
											<option value='model4'>Model4</option>
											<option value='model5'>Model5</option>
										</select>
									</div>
                                    <div className="col-sm-2">
                                        <h5 className="text">Power</h5>
										<select className="form-control select" id="">
											<option selected>from</option>
											<option value='model1'>Model1</option>
											<option value='model2'>Model2</option>
											<option value='model3'>Model3</option>
											<option value='model4'>Model4</option>
											<option value='model5'>Model5</option>
										</select>
									</div>
                                    <div className="col-sm-2">
                                        <select className="form-control select" id="">
											<option selected>to</option>
											<option value='model1'>Model1</option>
											<option value='model2'>Model2</option>
											<option value='model3'>Model3</option>
											<option value='model4'>Model4</option>
											<option value='model5'>Model5</option>
										</select>
									</div>
								</div>
								<div className="row">
                                    <div className="col-sm-4">
									</div>
                                    <div className="col-sm-4">
									</div>
									
								</div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h5 className="text">Gear Type</h5>
										<select className="form-control select" id="makeId">
											<option selected>Gear Type</option>
											<option value='maker1'>Maker1</option>
											<option value='maker2'>Maker2</option>
											<option value='maker3'>Maker3</option>
											<option value='maker4'>Maker4</option>
											<option value='maker5'>Maker5</option>
										</select>
									</div>
									<div className="col-sm-4">
                                        <h5 className="text">Number of doors</h5>
										<select className="form-control select" id="">
											<option selected>Number of doors</option>
											<option value='model1'>2/3</option>
											<option value='model2'>4/5</option>
											<option value='model3'>6/7</option>
										</select>
									</div>
                                   
                                    <div className="col-sm-2">
                                        <h5 className="text">Number of seats</h5>
										<select className="form-control select" id="">
											<option selected>from</option>
											<option value='model1'>Model1</option>
											<option value='model2'>Model2</option>
											<option value='model3'>Model3</option>
											<option value='model4'>Model4</option>
											<option value='model5'>Model5</option>
										</select>
									</div>
                                    <div className="col-sm-2">
                                        <select className="form-control select" id="">
											<option selected>to</option>
											<option value='model1'>Model1</option>
											<option value='model2'>Model2</option>
											<option value='model3'>Model3</option>
											<option value='model4'>Model4</option>
											<option value='model5'>Model5</option>
										</select>
									</div>
								</div>
								<div className="row">
                                    <div className="col-sm-4">
									</div>
                                    <div className="col-sm-4">
									</div>
									<div className="col-sm-4">
										<Link to='/search'><button type="button" className="btn btn-warning">Search</button></Link>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default RefinedSearch;