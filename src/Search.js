import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import PostsAPI from './PostsAPI';
import Post from './Post';
import SearchResults from './SearchResults';


class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }


    render() {
		return (
            <Switch>
                <Route exact path='/search' component={SearchResults}/>
                <Route path='/search/:id' component={Post}/>
            </Switch>
        )
    }
}

export default Search;