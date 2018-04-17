import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostInfo extends Component {
	constructor (props){
        super(props);
        this.state = {

        }
	}

	render() {
		return (
			<div className='posting'>
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
                                        <h5 className="text">Body Type</h5>
										<select className="form-control select" id="makeId">
											<option selected>Body Type</option>
											<option value='maker1'>Maker1</option>
											<option value='maker2'>Maker2</option>
											<option value='maker3'>Maker3</option>
											<option value='maker4'>Maker4</option>
											<option value='maker5'>Maker5</option>
										</select>
									</div>
									<div className="col-sm-4">
                                        <h5 className="text">First registration</h5>
										<input type="text" placeholder="Year" className="form-control" />
									</div>
                                    <div className="col-sm-4">
                                        <h5 className="text">Price</h5>
										<input type="text" placeholder="$" className="form-control" />
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
                                        <h5 className="text">City</h5>
										<input placeholder="Location" className="form-control" />
									</div>
									<div className="col-sm-4"> 
                                        <h5 className="text">ZIP</h5>
										<input placeholder="ZIP" className="form-control" />
									</div>
									
								</div>
                                <hr />
								<div className="row">
                                    <div className="col-sm-4">
                                        <h5 className="text">Fuel Type</h5>
										<select className="form-control select" id="makeId">
											<option selected>Fuel Type</option>
											<option value='maker1'>Petrol</option>
											<option value='maker2'>Diesel</option>
											<option value='maker3'>Electric</option>
											<option value='maker3'>Hybrid</option>
										</select>
									</div>
									<div className="col-sm-4">
                                        <h5 className="text">Engine Capacity</h5>
										<input type="text" className="form-control" />
									</div>
                                    <div className="col-sm-4">
                                        <h5 className="text">Power</h5>
										<input placeholder="(horsepowers)" type="text" className="form-control" />
									</div>
								</div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h5 className="text">Gear Type</h5>
										<select className="form-control select" id="makeId">
											<option selected>Gear Type</option>
											<option value='maker1'>Manual</option>
											<option value='maker2'>Automatic</option>
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
                                   
                                    <div className="col-sm-4">
                                        <h5 className="text">Number of seats</h5>
										<select className="form-control select" id="">
											<option selected>Seats</option>
											<option value='model1'>1</option>
											<option value='model2'>2</option>
											<option value='model3'>3</option>
											<option value='model4'>4</option>
											<option value='model5'>5</option>
											<option value='model5'>6</option>
											<option value='model5'>7</option>
											<option value='model4'>8</option>
											<option value='model5'>9</option>
											<option value='model5'>10</option>
											<option value='model5'>11</option>
										</select>
									</div>
								</div>
								<div className="row">
									<h5 className="text1">Equipment</h5>
									<div className="col-sm-6">
										<ul className="text">
											<li className="listElement"><input type="checkbox" id="myCheck" value="ABS" /> ABS</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Adaptive Cruise Control" /> Adaptive Cruise Control</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Adaptive Headlights" /> Adaptive Headlights</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Air Suspension" /> Air Suspension</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Airbag, Driver side" /> Airbag, Driver side</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Airbag, Passanger side" /> Airbag, Passanger side</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Airbag, Rear Passangers" /> Airbag, Rear Passangers</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Alarm System" /> Alarm System</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Alloy Wheels" /> Alloy Wheels</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Armrest" /> Armrest</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Blind spot monitor" /> Blind spot monitor</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="CD player" /> CD player</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Central door lock" /> Central door lock</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Air Conditioning" /> Air Conditioning</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Automatic Climate Control" /> Automatic Climate Control</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Cruise Control<" /> Cruise Control</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Digital Radio" /> Digital Radio</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Driver Drowsiness detection" /> Driver Drowsiness detection</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Electric tailgate" /> Electric tailgate</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Electric side mirrors" /> Electric side mirrors</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Electric seats" /> Electric seats</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Heated windscreen" /> Heated windscreen</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Electronic Stability Control" /> Electronic Stability Control</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Emergency Brake Assistant" /> Emergency Brake Assistant</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Fog lights" /> Fog lights</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Hands-free" /> Hands-free</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Heads-up display" /> Heads-up display</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Heated Steering Wheel" /> Heated Steering Wheel</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Immobilizer" /> Immobilizer</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Keyless central door lock" /> Keyless central door lock</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Leather Interior" /> Leather Interior</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="LED Daytime Lights" /> LED Daytime Lights</li>
										</ul>
									</div>
									<div className="col-sm-6">
										<ul className="text">
											<li className="listElement"><input type="checkbox" id="myCheck" value="Light sensors" /> Light sensors</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Lumbar support" /> Lumbar support</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Massage seats" /> Massage seats</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="MP3" /> MP3</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Multi-function steering wheel" /> Multi-function steering wheel</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Navigation System" /> Navigation System</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Night view assist" /> Night view assist</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="On-board computer" /> On-board computer</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Panorama roof" /> Panorama roof</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Parking Control, Camera" /> Parking Control, Camera</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Parking Control, Front sensors" /> Parking Control, Front sensors</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Parking Control, Rear sensors" /> Parking Control, Rear sensors</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Parkinf Control, Self-steering system" /> Parkinf Control, Self-steering system</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Power Steering" /> Power Steering</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Power Windows" /> Power Windows</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Radio" /> Radio</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Rain sensor" /> Rain sensor</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Roof rack" /> Roof rack</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Heated seats" /> Heated seats</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Shift paddles" /> Shift paddles</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Sky bag" /> Sky bag</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Sliding door" /> Sliding door</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Sound system" /> Sound system</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Sport package" /> Sport package</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Sport seats" /> Sport seats</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Sport suspension" /> Sport suspension</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Start-stop system" /> Start-stop system</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Sunroof" /> Sunroof</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Television" /> Television</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Tire pressure monitor" /> Tire pressure monitor</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Touch screen" /> Touch screen</li>
											<li className="listElement"><input type="checkbox" id="myCheck" value="Traction Control" /> Traction Control</li>
										</ul>
									</div>
								
								</div>
								<hr />
								<div className="row">
                                    <div className="col-sm-6">									
										<h5 className="text">Title</h5>
										<input className="form-control" placeholder="Title"></input>
                                        <h5 className="text">Description</h5>
										<textarea class="form-control description" rows="5" id="description"></textarea>
									</div> 
									<div className="col-sm-3">
                                        <h5 className="text"></h5>
									</div>
                                    <div className="col-sm-3">
                                        
									</div>
								</div>
								<div className="row">
                                    <div className="col-sm-4">

									</div>
                                    <div className="col-sm-4">
										<Link to='/search'><button type="button" className="btn btn-warning">Submit Post</button></Link>
									</div>
									<div className="col-sm-4">
										
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

export default PostInfo;