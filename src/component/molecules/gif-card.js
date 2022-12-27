import React from 'react';

import ButtonPersonalized from '../atoms/button';
import ImagePersonalized from '../atoms/image';
import Card from 'react-bootstrap/Card';

function GifCard(props) {

    return (
        <>
            <Card border="light">
                <ImagePersonalized url={props.url}></ImagePersonalized>
                <Card.Body>
                    <ButtonPersonalized variant="primary" 
                    title = {"Eliminar"}
                    onClick = {props.onClick}
                    id = {props.id}
                    data_url = {props.url}
                    
                    ></ButtonPersonalized>
                </Card.Body>
            </Card>
        </>
    );
}

export default GifCard;