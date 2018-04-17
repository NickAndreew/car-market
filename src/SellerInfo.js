import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SellerInfo extends Component {
    constructor (props){
        super(props);
        this.state = {

        }

        this.activateButton = this.activateButton.bind(this);
        this.provideAccess = this.provideAccess.bind(this);
    }
    
    componentDidMount(){
        document.getElementById("buttonId").disabled = true;
        console.log("button disabled");
    }

    activateButton(){
        var nameInp = document.getElementById("nameId").value;
        var emailInp = document.getElementById("emailId").value;
        var phoneInp = document.getElementById("numberId").value;
        if(nameInp !=='' && emailInp !=='' && phoneInp !==''){
            console.log("activated");
            document.getElementById("buttonId").disabled = false;
        } else {
            console.log("deactivated");
            document.getElementById("buttonId").disabled = true;
        }
    }

    provideAccess(){
        
    }

    render() {
		return (
			<div className='seller'>
                <div className="mainDiv">
                    <div className="container">
                        <div className="">
                            <h1 className="text">Contact Information</h1>
                        </div>
                        <hr />
                        <div className="row">
                            <h3 className=""></h3>
                            <div className="col-sm-4">

                            </div>
                            <div className="col-sm-4">
                                <div className="userInfo">
                                    <form>
                                        <h5 className="text">Full Name</h5>
                                        <input placeholder="Full Name" className="form-control" type="text" id="nameId" onChange={ this.activateButton } />
                                        <h5 className="text">Email</h5>
                                        <input placeholder="Email" className="form-control" type="email" id="emailId" onChange={ this.activateButton } />
                                        <h5 className="text">Phone Number</h5>
                                        <input placeholder="Phone number" className="form-control" type="text" id="numberId" onChange={ this.activateButton }/>
                                    </form>
                                    <div className="title">
                                        <Link to='/sell-your-car/terms-conditions'>
                                            <button className="btn" id="buttonId" onClick={ this.provideAccess }>Continue</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}

export default SellerInfo;