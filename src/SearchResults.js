import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import PostsAPI from './PostsAPI';

class SearchResults extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	
    componentDidMount(){
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			console.log("is mobile..");
			document.getElementById("filter").style = "display: none";
			document.getElementById("posts").style = "width: 100%";
        } else {
			console.log("pc");
			document.getElementById("filter").style = "display: flex";
			document.getElementById("posts").style = "width: 80%";
        }
	}
	
	render() {
		return (
			<div>
				<Link to='/' className="backButton"><span className="glyphicon glyphicon-arrow-left"></span>  Home page</Link>
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
					<div className="filter" id="filter">
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

								<Link to='/refined-search'><a className="btn btn-link">Refine Search</a></Link>
								<Link to='/search'><button type="button" className="btn btn-warning">Search</button></Link>
							</div>
						</form>
					</div>
					<div className="posts" id="posts">
						<div className="postsHeadDiv">
							<h4>10 Vehicles found</h4>
							<div>
								No filters selected
							</div>
						</div>
						<hr />
						<div className="postsList">
							{	
								PostsAPI.all().map(a => (
									<div className="post" key={a.id}>
										<Link to={'/search/'+a.id} >
											<div className="postHeader">
												<h4 className="">{a.vehicle.make} {a.vehicle.model} {a.title}</h4>
											</div>
											<div className="photoAndInfo">
												<div>
													<img src="https://t3.ftcdn.net/jpg/01/37/79/64/240_F_137796421_862uujp3w0F7tABl35HACgfSKmfLk6Yj.jpg" alt="" className="postImage" />
												</div>
												<div className="postInfo">
													<h1>{a.price} $</h1>
													<div className="container carInfo" >
														<div className="row">
															<div className="col-sm-3">
																{a.mileage} miles
															</div>
															<div className="col-sm-3">
																{a.vehicle.year}
															</div>
															<div className="col-sm-3">
																{a.power}
															</div>
														</div>
														<div className="row">
															<div className="col-sm-3">
																{a.body_type}
															</div>
															<div className="col-sm-3">
																1
															</div>
															<div className="col-sm-3">
																{a.gearing_type}
															</div>
														</div>
														<div className="row">
															<div className="col-sm-3">
																{a.fuel_type}
															</div>
															<div className="col-sm-3">
																{a.fuel_consumption}
															</div>
															<div className="col-sm-3">
																{a.transmission}
															</div>
														</div>
													</div>
												</div>
												
											</div>
											<div>
												<h5>{a.location}</h5>
												<hr />
											</div>
										</Link>
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

export default SearchResults;