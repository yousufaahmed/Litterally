import '../index.css';
import '../contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import React, { useState } from "react";

function EmailForm(){

  return (
    <Form className = 'container formsize'>
      <Form.Group className = "formsize mb-3">
        <Form.Label style = {{margin: '30px'}}>Name</Form.Label>
        <Form.Control type="input" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className = "mb-3">
        <Form.Label style = {{margin: '30px'}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className = "formmessage mb-3">
        <Form.Label style = {{margin: '30px'}}>Message</Form.Label>
        <Form.Control as="textarea" rows={3} columns = {50} type="input" placeholder="Your Message" />
      </Form.Group>
      <Button variant="primary" type="submit" style = {{ margin: '30px'}}>
        Send
      </Button>
    </Form>
  );
};

export default EmailForm;