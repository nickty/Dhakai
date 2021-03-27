import React from 'react'
import { Form, Col } from 'react-bootstrap'

const City = () => {
    return (
        <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
        </Form.Group>
    )
}

export default City
