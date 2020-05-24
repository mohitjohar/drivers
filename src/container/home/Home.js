import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Layout from '../../components/global/Layout';
import Features from '../../components/home/Features';

function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h2>
          Stronger coverage. Increased savings.
          <br /> Just several clicks away.
        </h2>
        <p>Agency Name connects to your current insurance provider to:</p>
        <Features />
        <div className="max-350 mt-3">
          <Link to="/registerOne">
            <Button color="primary" className="w-100">
              Continue
            </Button>
          </Link>
          <div className="small mt-3">
            Agency Name will never have access to your credentials. By selecting
            continue, you agree to our <b>Privacy Policy</b>.
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
