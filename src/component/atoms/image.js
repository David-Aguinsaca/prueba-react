
import React from 'react';
import Card from 'react-bootstrap/Card';


function ImagePersonalized(props) {
    return (
        <Card.Img variant="top" src={props.url} />
    );
}

export default ImagePersonalized;