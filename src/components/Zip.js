import React from 'react'
import { Form, Col } from 'react-bootstrap'

const Zip = () => {
    return (
        <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
        </Form.Group>
    )
}

export default Zip
