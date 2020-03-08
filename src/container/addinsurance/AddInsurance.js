import React from 'react';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap';
import Layout from '../../components/global/Layout';
import logo1 from '../../assets/img/logos/logo1.png';
import logo2 from '../../assets/img/logos/logo2.png';
import logo3 from '../../assets/img/logos/logo3.png';
import logo4 from '../../assets/img/logos/logo4.png';
import logo5 from '../../assets/img/logos/logo5.png';
import logo6 from '../../assets/img/logos/logo6.png';
import logo7 from '../../assets/img/logos/logo7.png';
import logo8 from '../../assets/img/logos/logo8.png';
import logo9 from '../../assets/img/logos/logo9.png';
import logo10 from '../../assets/img/logos/logo10.png';
import logo11 from '../../assets/img/logos/logo11.png';
import logo12 from '../../assets/img/logos/logo12.png';
import logo13 from '../../assets/img/logos/logo13.png';
import logo14 from '../../assets/img/logos/logo14.png';

const AddInsurance = () => {
  const Logos = [
    { img: logo1 },
    { img: logo2 },
    { img: logo3 },
    { img: logo4 },
    { img: logo5 },
    { img: logo6 },
    { img: logo7 },
    { img: logo8 },
    { img: logo9 },
    { img: logo10 },
    { img: logo11 },
    { img: logo12 },
    { img: logo12 },
    { img: logo13 },
    { img: logo14 }
  ];

  return (
    <>
      <Layout>
        <h2 className="text-center">Select your insurance provider</h2>
        <div className="max-350">
          <Container>
            <Input type="text" placeholder="Search By Name" />
            <Row className="logosRow">
              {Logos.map(items => {
                return (
                  <Col md={6}>
                    <div className="logo-box">
                      <img src={items.img} className="w-100" alt="" />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
};
export default AddInsurance;
