import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';

import ButtonPersonalized from '../atoms/button';
import InputPersonalized from '../atoms/input';

function TopBar() {
    return <>
        <InputGroup className="mb-3">
            <InputPersonalized></InputPersonalized>
            <ButtonPersonalized></ButtonPersonalized>
        </InputGroup>
    </>

}

export default TopBar;