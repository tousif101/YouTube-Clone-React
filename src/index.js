import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

//Class based components vs functional components

//1) Create a new component. Component produces some html 
//2) Make sure the component gets put onto the DOM. 
//One component per file 
//Ask yourself, do you need to remember state. 

const API_KEY = 'AIzaSyCddQehYW3nas2GWkKCjK7NwXzb1x1rBJU';

//Pass data from Parent component App to child is passed thru props (properties) 
class App extends Component {
    //when a user types in stuff from the other component, we need to search on youtube
    constructor(props){
        super(props);

        //We want an array of videos to get passed thru.
        this.state = { 
            videos : [],
            selectedVideo: null
        };   

        this.videoSearch('cats');
       
    }
    videoSearch(term) { 
         YTSearch({key: API_KEY, term:term},(data) => {
            this.setState({ 
                videos:data,
                selectedVideo: data[0]
            });
        });
    }


    //Videos is null at first when it loads, then gets information. Cant fetch info fast enough for children to use.
    render(){
        //Throttle the search term. Debounce it. Wait 300 seconds after you type it out 
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange = {videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
                    videos = {this.state.videos} 
                    />
            </div>
        );
    }
}

ReactDOM.render(<App />,document.querySelector('.container'));
//ReactDOM needs Element instance.
//Want to fetch data here, because it is parent, and rest of the child need the data.
//Cant use functional anymore because we need state, to keep track of the search results 