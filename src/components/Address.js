import React from 'react'
import { Form } from 'react-bootstrap'

const Address = () => {
    return (
        <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
        </Form.Group>
    )
}

export default Address
