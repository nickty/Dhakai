import React from 'react'
import { Form, Col } from 'react-bootstrap'

const PasswordInput = () => {
    return (
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />
        </Form.Group>
    )
}

export default PasswordInput
