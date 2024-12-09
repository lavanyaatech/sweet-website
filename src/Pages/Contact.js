import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      return 'All fields are required';
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      return 'Please enter a valid email address';
    }
    if (!/^\d{10}$/.test(phone)) {
      return 'Phone number must be 10 digits';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setIsSuccess(false);
    } else {
      setError('');
      setIsSuccess(true);
      // Reset form data after successful submission
      setFormData({ name: '', email: '', phone: '', message: '' });
      // Here you can send the form data to a server or backend API
    }
  };

  // Function to determine border color based on validation
  const getInputStyle = (fieldName) => {
    if (formData[fieldName] === '') {
      return { backgroundColor: 'lightyellow' };  // Empty fields are light yellow
    }
    if (error && !formData[fieldName]) {
      return { borderColor: 'red' }; // Invalid fields have a red border
    }
    if (formData[fieldName]) {
      return { borderColor: 'green' }; // Valid fields have a green border
    }
    return {};
  };

  return (
    <Container style={{  padding: '20px', borderRadius: '8px' }}>
      <Row>
        <Col md={6} className="offset-md-3">
          <h2 className="text-center my-4" style={{fontSize:'35px',fontWeight:'bolder',color:'orangered'}}>Contact Us</h2>

          {/* Display Success Message */}
          {isSuccess && (
            <Alert variant="success">
              Your message has been successfully submitted!
            </Alert>
          )}

          {/* Display Error Message */}
          {error && (
            <Alert variant="danger">
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label><h5 style={{color:'black',fontWeight:"bold"}}>Name</h5></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={getInputStyle('name')}
                isInvalid={error && !formData.name}
                required
              />
              <Form.Control.Feedback type="invalid">
                Name is required.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
            <br></br>  <Form.Label><h5 style={{color:'black',fontWeight:"bold"}}>Email address</h5></Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={getInputStyle('email')}
                isInvalid={error && !formData.email}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPhone">
       <br></br>       <Form.Label><h5 style={{color:'black',fontWeight:"bold"}}>Phone Number</h5></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={getInputStyle('phone')}
                isInvalid={error && !formData.phone}
                required
              />
              <Form.Control.Feedback type="invalid">
                Phone number must be 10 digits.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formMessage">
           <br></br>   <Form.Label><h5 style={{color:'black',fontWeight:"bold"}}>Message</h5></Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={getInputStyle('message')}
                isInvalid={error && !formData.message}
                required
              />
              <Form.Control.Feedback type="invalid">
                Message is required.
              </Form.Control.Feedback>
            </Form.Group>

      <br></br>      <Button variant="primary" type="submit" className="w-100">
              <h5 style={{color:'white',fontWeight:"bold"}}>Submit</h5>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
