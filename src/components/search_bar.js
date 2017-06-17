import React, { Component } from 'react';

//React components can show other components
//Index.js need to use this file, so need to export 
//There is a class function. When you need some sort of state.
//Render method has to return JSX

class SearchBar extends Component { 
    constructor(props) {
        super(props);
        //Intialize new object and assign it to state. Properties we want to assign to state. 
        //search term being assigned. Record the search term sent by user.
        this.state = { term: ''};
    }

    //Controlled components: get the value first, and then change. 
    render() {
        return (
            <div className="search-bar">
                <input 
                value = {this.state.term}
                onChange = { event => this.onInputChange(event.target.value) } />
            </div>
        );
    }
    //event object passes through. Has information about the event
    //use event to get access to the value.
    onInputChange (term){
        this.setState(
            {term: term},
        );
        this.props.onSearchTermChange(term);
    }
    //State, record user events. State changes, children and itself changes. 
    //


}

export default SearchBar;


