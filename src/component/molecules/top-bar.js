import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';

import ButtonPersonalized from '../atoms/button';
import InputPersonalized from '../atoms/input';

function TopBar(props) {
    return <>
        <InputGroup className="mb-3">
            <InputPersonalized
                value={props.value}
                name={props.name}
                handleChange={props.handleChange}
            ></InputPersonalized>
            <ButtonPersonalized title={"Agregar"} onClick = {props.onClick}></ButtonPersonalized>
        </InputGroup>
    </>

}

export default TopBar;