import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TermsAndConditions extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.passAccess = this.passAccess.bind(this);
    }

    passAccess(){
        this.props.sendData(true);
    }

    restrictAccess(){
        this.props.sendData(false);
    }

	render() {
		return (
            <div className="mainDiv">
                <h3 className="title">Terms and Conditions</h3>
                <div className="termsDiv">
                    <h3>1. Scope</h3>
                    <p>These GTC shall apply to all contracts that may come into existence between CarMarket GmbH, Dingolfinger Str. 1 - 15, 81673 München („CarMarket“) and consumers of CarMarket Services („Users“) within the scope of use of our vehicle database (“Database”). In addition, our Requirements on the Layout of Advertisements and our Information on Data Protection shall be applicable. Commercial users shall be bound by our General Terms and Conditions for companies using the services of CarMarket GmbH accessible via the website www.CarMarket.de ("Dealer GTC").</p>

                    <h3>2. Services provided by CarMarket</h3>
                    <p>2.1. CarMarket operates a Database on which vehicle advertisements are stored. CarMarket provides access to the database to their users via the rubric “search” heading to content saved on the Database, as well as permitting Users to enter their own content (“Advertisements”) into the Database via the “place an advert” heading. CarMarket is not acting as an agent, seller or purchaser, nor as an agent of either the purchaser or seller of vehicles stored on the Database, but merely as a technical service provider.</p>
                    <p>2.2. Granting access to or entering content into the Database are within CarMarket’s discretion. Users do not have a right to demand thatparticular services or any part thereof bemaintained.</p>

                    <h3>3. Registration by Users</h3>
                    <p>3.1. The use of certain services provided by CarMarket requires that Users register on CarMarket’s website. Registration is only permitted to persons who are of age and capable of acting sui juris. Only registered Users may place advertisements on CarMarket’s Database.</p>
                    <p>3.2.When registering, Users must provide their name, telephone number, e-mail address and a password. Details provided on the registration form must be the truth; any changes to details must be updated without delay. Users may not register with CarMarket more than once. Registrations are not transferable and may not be used by anyone other than the registered User.</p>
                    <p>3.3. A User’s e-mail address and password are required as access data in order to use those of CarMarket’s services for which registration is required. Users must keep their password secret and must not give it to any third party. Should a third party gain access to any User password, saidUser shall without delay notify CarMarket of this and change the password.</p>
                    <p>3.4. CarMarket reserves the right to cancel any registrations of Users who have not logged on for 12 months or more.</p>
                    <p>3.5. Our Information on Data Protection applies to all Users’ personal data collected in the course ofregistration.</p>

                    <h3>4. Entering content into the Databank</h3>
                    <p>4.1. In sending the registration data and entering the required information into the Database, Users are submitting an offer to CarMarket to conclude a contract for a limited time for the acceptance and provision of data on the Database. On receiving the offer, CarMarket shall decide whether or not to accept it. Acceptance shall occur by means of the content’s acceptance onto the Database.</p>
                    <p>4.2. Users shall not make more than two advertisements available for viewing on the Database at any one time, nor shall they advertise more than two different vehicles per calendar month. In the event of any User having more than two advertisements available for viewing on the Database at any one time, or advertising more than two different vehicles in any one calendar month, CarMarket shall be entitled to delete the relevant advertisements. Likewise CarMarket shall be entitled to delete advertisements and registrations in the event of any breach of this provision, notably if the User has employed multiple registrations.</p>
                    <p>4.3. Advertisements will be available for viewing on the Database for a period of 8 weeks, unless deleted by the User him or herself. After a period of 8 weeks has elapsed, CarMarket may delete the advertisement.</p>
                    <p>4.4. The placing of advertisements shall be at CarMarket’s discretion. At all times CarMarket shall be entitled to limit the availability of advertisements on the Databank from the point of view of space or time, and with regard to the number of advertisements placed, as well as deleting advertisements from the Database or preventing advertisements from being passed on if such advertisements do not meet the Requirements on the Layout of Advertisements, they are in CarMarket’s opinion illegal, or a third party has objected toany such advertisement.</p>
                </div>
                <div>
                    <div>    
                        <div className="row">
                            <div className="col-sm-3">

                            </div>
                            <div className="col-sm-3">
                                <Link to='/sell-your-car/'><button className="btn">Decline</button></Link>                      
                            </div>
                            <div className="col-sm-3">
                                <Link to='/sell-your-car/post-info'><button className="btn" onClick={ this.passAccess }>Accept</button></Link>
                            </div>
                            <div className="col-sm-3">
                                
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default TermsAndConditions;