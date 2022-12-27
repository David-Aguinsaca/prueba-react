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
                    <ButtonPersonalized variant="primary">Go somewhere</ButtonPersonalized>
                </Card.Body>
            </Card>
        </>
    );
}

export default GifCard;