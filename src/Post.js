import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import PostsAPI from './PostsAPI';

class Post extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        console.log(id);
        var post = PostsAPI.get(id);
        console.log(post);
    }

    goBackFnct(){
        window.history.back();
    }


    render() {
		return (
            <div>
                <a to='/search' className="backButton" onClick={ this.goBackFnct }><span className="glyphicon glyphicon-arrow-left"></span>  Search</a>
                <div className="searchFormHold">
                    <div className="postDiv">
                        <div className="postHeader">
                            <h2 className="text">Car Make Model Title</h2>
                            <p className="text">Body type</p>
                        </div>
                        <div className="">
                            <div className="picturePrice">
                                <div className="carPicturesDiv">
                                    <img src="https://t3.ftcdn.net/jpg/01/37/79/64/240_F_137796421_862uujp3w0F7tABl35HACgfSKmfLk6Yj.jpg" alt="" className="postImageLarge" />
                                </div>
                                <div className="price">
                                 
                                    <h3 className="text1">Price</h3>
                                    <p className="text1">Price negotiable</p>
                                    <hr /> 
                                    <h4 className="text1">Milage</h4>
                                    <h4 className="text1">Year</h4>
                                    <h4 className="text1">Power</h4>
                                    
                                    
                                    <div className="postContactInfo">
                                        <h3 className="text">Phone</h3>
                                        <h3 className="text">Email</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;