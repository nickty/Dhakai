import React from 'react'
import { Form, Col } from 'react-bootstrap'

const EmailInput = () => {
    return (
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
    )
}

export default EmailInput
