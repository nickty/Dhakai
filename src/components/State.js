import React from 'react'
import { Form, Col } from 'react-bootstrap'

const State = () => {
    return (
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
            </Form.Control>
        </Form.Group>
    )
}

export default State
