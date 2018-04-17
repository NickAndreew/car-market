import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ProtectedRoute from 'react-router-protected-route';
import TermsAndConditions from './TermsAndConditions';
import PostInfo from './PostInfo';
import SellerInfo from './SellerInfo';

class SellYourCar extends Component {
	constructor (props){
        super(props);
        this.state = {
            access:true
        }
        this.updateAccess = this.updateAccess.bind(this);
    }
    
    updateAccess(){
        console.log("get data works");
        this.setState({access:!this.state.access});
    }
	
	render() {
		return (
			<div className='sell'>
                <Link to='/' className="backButton"><span className="glyphicon glyphicon-arrow-left"></span>  Home page</Link>
				<h1 className="titleCl">Post your vehicle for sale</h1>
                <Switch>
                    <Route exact path="/sell-your-car" component={SellerInfo}/>
                    <Route path="/sell-your-car/terms-conditions" component={TermsAndConditions} />
                    <ProtectedRoute isAccessible={this.state.access} redirectToPath="/sell-your-car/" path="/sell-your-car/post-info" component={PostInfo}/>
                </Switch>
			</div>
		);
	}
}

export default SellYourCar;