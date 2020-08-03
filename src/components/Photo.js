import React from 'react';

//HANDLES EACH INDIVIDUAL PHOTO
const Photo = (props) => {
    return (
        <li>
            <img src={props.url} alt={props.title} />
        </li>
    )
}

export default Photo;