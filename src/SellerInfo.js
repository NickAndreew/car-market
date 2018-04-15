import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';


class SellerInfo extends Component {
	render() {
		return (
			<div className='seller'>
                <div className="mainDiv">
                    <div className="container">
                        <div className="col-sm-4">

                        </div>
                        <div className="col-sm-4">
                            <div className="userInfo">
                                <h3 className="title">Please type your contact information</h3>
                                <form>
                                    <input placeholder="Full Name" className="form-control" type="text" />
                                    <input placeholder="Email" className="form-control" type="email" />
                                    <input placeholder="Phone number" className="form-control" type="text" />
                                </form>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                        <div className="col-sm-4">
                            
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}

export default SellerInfo;