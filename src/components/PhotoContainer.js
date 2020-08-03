import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {
       state = {
            loading: this.props.loading
        }
    render () {
        let results = this.props.data;
        let photos;

        if (results.length > 0) {
            photos = results.map(photo =>
                <Photo key = {photo.id} url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />);
            } else if (results.length < 1) {
                return <NotFound />
            }
            return (
                <div className="photo-container">
                    <h1>Photo Results:</h1>
                    <ul className="photo-list">
                        {photos}
                    </ul>
                </div>
                );
            

    }
}

export default PhotoContainer;