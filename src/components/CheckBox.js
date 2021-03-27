import React from 'react'
import { Form } from 'react-bootstrap'

const CheckBox = () => {
    return (
        <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
    )
}

export default CheckBox
