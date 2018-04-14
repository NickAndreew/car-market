import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Link} from 'react-router-dom';
import PostsAPI from './PostsAPI';

class Search extends Component {
	render() {
		return (
			<div>
				<Link to='/' className="backButton"><span className="glyphicon glyphicon-arrow-left"></span>  Back</Link>
				<div className="searchTitleAndSorting">
					<h3 className="titleCl">Search Results</h3>
					<select className="form-control select" id="sort">
						<option selected>Sort</option>
						<option value='maker1'>Price ascending</option>
						<option value='maker2'>Price decseding</option>
						<option value='maker3'>Old to new</option>
						<option value='maker4'>New to old</option>
						<option value='maker5'>Most milage to least</option>
						<option value='maker5'>Least milage to most</option>
					</select>
				</div>
				<div className="container2" id="searchContainer">
					<div className="filter">
						<form>
							<div className="container3">
								<p className="filterText">Make</p>
								<select className="form-control select" id="makeId">
									<option selected>Make</option>
									<option value='maker1'>Maker1</option>
									<option value='maker2'>Maker2</option>
									<option value='maker3'>Maker3</option>
									<option value='maker4'>Maker4</option>
									<option value='maker5'>Maker5</option>
								</select>
								<p className="filterText">Model</p>
								<select className="form-control select" id="modelId">
									<option selected>Model</option>
									<option value='model1'>Model1</option>
									<option value='model2'>Model2</option>
									<option value='model3'>Model3</option>
									<option value='model4'>Model4</option>
									<option value='model5'>Model5</option>
								</select>
								<p className="filterText">Tags</p>
								<input placeholder="Tags" className="form-control" />
								<p className="filterText">Body Type</p>
								<select className="form-control select" id="year">
									<option selected>Body Type</option>
									<option value=''>Sedan</option>
									<option value=''>Hatchback</option>
									<option value=''>Wagon</option>
									<option value=''>Off-road</option>
									<option value=''>Van</option>
									<option value=''>Coupe</option>
									<option value=''>Cabrio</option>
								</select>
								<p className="filterText">First Registration</p>
								<select className="form-control select" id="year">
									<option selected>First Registration</option>
									<option value=''>2000</option>
									<option value=''>2001</option>
									<option value=''>2002</option>
									<option value=''>2003</option>
									<option value=''>2004</option>
								</select>
								<p className="filterText">Price</p>
								<select className="form-control select" id="price">
									<option selected>Price up to ($)</option>
									<option value=''>500$</option>
									<option value=''>1000$</option>
									<option value=''>1500$</option>
									<option value=''>2000$</option>
									<option value=''>2500$</option>
								</select>
								<p className="filterText">Country</p>
								<select className="form-control select" id="country">
									<option selected>Country</option>
									<option value=''>Albania</option>
									<option value=''>Belgium</option>
									<option value=''>Croatia</option>
									<option value=''>France</option>
									<option value=''>Italy</option>
								</select>
								<p className="filterText">Location</p>
								<input placeholder="ZIP" className="form-control" />
								<input placeholder="Radius" className="form-control" />

								<a href="" className="btn btn-link">Refine Search</a>
								<Link to='/search'><button type="button" className="btn btn-warning">Search</button></Link>
							</div>
						</form>
					</div>
					<div className="posts">
						<div className="postsHeadDiv">
							<h4>10 Vehicles found</h4>
							<div>
								No filters selected
							</div>
						</div>
						<hr />
						<div className="postsList">
							{	
								PostsAPI.all.map(a => (
									<div className="post">
										<div className="postHeader">
											<h4 className="">Make Model title</h4>
										</div>
										<div className="photoAndInfo">
											<div>
												<img src="https://t3.ftcdn.net/jpg/01/37/79/64/240_F_137796421_862uujp3w0F7tABl35HACgfSKmfLk6Yj.jpg" className="postImage" />
											</div>
											<div className="postInfo">
												<h1>0 $</h1>
												<div className="container carInfo" >
													<div className="row">
														<div className="col-sm-3">
															Milage
														</div>
														<div className="col-sm-3">
															Year
														</div>
														<div className="col-sm-3">
															Power
														</div>
													</div>
													<div className="row">
														<div className="col-sm-3">
															Body Type
														</div>
														<div className="col-sm-3">
															Number of owners
														</div>
														<div className="col-sm-3">
															Gearing Type
														</div>
													</div>
													<div className="row">
														<div className="col-sm-3">
															Fuel Type
														</div>
														<div className="col-sm-3">
															Fuel Consumption
														</div>
														<div className="col-sm-3">
															Transmission
														</div>
													</div>
												</div>
											</div>
											
										</div>
										<div>
											<h5>Country</h5>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;