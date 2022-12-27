
import React from 'react';
import Button from 'react-bootstrap/Button';

function ButtonPersonalized(props) {
    return (
        <Button variant="outline-secondary"
            onClick={props.createGif}
        >{props.title}</Button>
    );
}

export default ButtonPersonalized;