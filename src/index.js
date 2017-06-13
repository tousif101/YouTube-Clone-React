import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

//1) Create a new component. Component produces some html 
//2) Make sure the component gets put onto the DOM. 
//One component per file 

const API_KEY = 'AIzaSyCddQehYW3nas2GWkKCjK7NwXzb1x1rBJU';

class App extends Component {
    //when a user types in stuff from the other component, we need to search on youtube
    constructor(props){
        super(props);

        //We want an array of videos to get passed thru.
        this.state = { videos : [] };   

        YTSearch({key: API_KEY, term:'surfboard'},(data) => {
            this.setState({ videos:data });
        });

    }
    render(){
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}



ReactDOM.render(<App />,document.querySelector('.container'));

//ReactDOM needs Element instance.
//Want to fetch data here, because it is parent, and rest of the child need the data.
// const App = () => { 
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// }
//Cant use functional anymore because we need state, to keep track of the search results 