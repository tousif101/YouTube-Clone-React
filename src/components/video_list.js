//Does not need a state. Does not really hold any state. 
//In Functional component props is an argument.
//In Class, props can be found from anything. this.props
import React from 'react'; 
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    
    //When you use map, make sure you have an ID. Unique id. In these case we use etags 
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video = {video} />
    });

    return (
        <ul className = " col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;