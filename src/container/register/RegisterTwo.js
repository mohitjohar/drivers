import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import Layout from '../../components/global/Layout';

const RegisterTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Layout>
      <div className="text-center">
        <h2>Enter your driver information</h2>
        <p>We will need this information to accurately quote.</p>
      </div>
      <Form className="max-350">
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label>Date of Birth</Label>
              <Input type="text" placeholder="mm/dd/yy" />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label>Drivers License Number</Label>
              <Input type="text" placeholder="Enter Number or scan license" />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label>Drivers License Number</Label>
              <Input type="select" placeholder="Select">
                <option>Select</option>
                <option>A</option>
                <option>B</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        {isOpen ? (
          <Row form>
            <Col>
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
                <Label>Date of Birth</Label>
                <Input type="text" placeholder="mm/dd/yy" />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label>Drivers License Number</Label>
                <Input type="text" placeholder="Enter Number or scan license" />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label>Drivers License Number</Label>
                <Input type="select" placeholder="Select">
                  <option>Select</option>
                  <option>A</option>
                  <option>B</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        ) : (
            ''
          )}

        <Row>
          <Col md={12}>
            <div className="font-weight-medium cursor" onClick={toggle}>
              {isOpen ? "-" : "+"} Additional Drivers
            </div>
          </Col>
          <Col md={12}>
            <Link to="/AddInsurance">
              <Button color="primary" className="w-100 mt-4 mb-3">
                Next
              </Button>
            </Link>
            <Link to="/registerOne">
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

export default RegisterTwo;
