
import React from 'react';
import Button from 'react-bootstrap/Button';

function ButtonPersonalized(props) {
    return (
        <Button variant="outline-secondary"
            onClick={props.onClick}
            id={props.id}
            data-url={props.data_url}
        >{props.title}</Button>
    );
}

export default ButtonPersonalized;