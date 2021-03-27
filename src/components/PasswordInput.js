import React from 'react'
import { Form, Col } from 'react-bootstrap'

const PasswordInput = () => {
    return (
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    )
}

export default PasswordInput
