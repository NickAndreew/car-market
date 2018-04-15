import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TermsAndConditions from './TermsAndConditions';
import PostInfo from './PostInfo';
import SellerInfo from './SellerInfo';

class SellYourCar extends Component {
	render() {
		return (
			<div className='sell'>
                <Link to='/' className="backButton"><span className="glyphicon glyphicon-arrow-left"></span>  Back</Link>
				<h1 className="titleCl">Post your vehicle for sale</h1>
                <Switch>
                    <Route exact path="/sell-your-car" component={SellerInfo}/>
                    <Route path="/sell-your-car/terms-conditions" component={TermsAndConditions} />
                    <Route path="/sell-your-car/post-info" component={PostInfo}/>
                </Switch>
			</div>
		);
	}
}

export default SellYourCar;