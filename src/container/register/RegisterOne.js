import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import Layout from '../../components/global/Layout';

const RegisterOne = () => {
  return (
    <Layout>
      <div className="text-center">
        <h2>Enter your personal information</h2>
        <p>Good news — it only takes about 30 seconds to complete. </p>
      </div>
      <Form className="max-350">
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>First Name</Label>
              <Input type="text" placeholder="Enter Name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Last Name</Label>
              <Input type="text" placeholder="Enter Name" />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Enter Email" />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label>Phone Number</Label>
              <Input type="number" placeholder="Enter Number" />
            </FormGroup>
            <Link to="/registerTwo">
              <Button color="primary" className="w-100 mt-2 mb-3">
                Next
              </Button>
            </Link>
            <Link to="/">
              <Button color="transparent" className="w-100">
                Back
              </Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default RegisterOne;
