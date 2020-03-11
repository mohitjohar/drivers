import React, { useState } from 'react';
import Layout from '../../components/global/Layout';
import Step1 from '../../components/Matrix/Step1';
import Step2 from '../../components/Matrix/Step2';
import Result from '../../components/Matrix/Result';

const Matrix = () => {

  const [rows, setRows] = useState();
  const [cols, setCols] = useState();
  const [step1s, setStep1s] = useState(true);
  const [step3s, setStep3s] = useState(false);

  //Array
  const [arr, setArr] = useState([]);
  const [arr2, setArr2] = useState([]);

  return (
    <Layout>
      <h2 className="text-center">Matrix</h2>
      <h3 className="mb-3 text-center">Addtion of Matrix</h3>
      <div className="form-row">
        {step1s ?
          <Step1 rows={rows} cols={cols} setRows={setRows} setCols={setCols} setStep1s={setStep1s} />
          : <>{
            step3s ? <Result arr={arr} arr2={arr2} cols={cols} /> : <Step2 arr2={arr2} arr={arr} rows={rows} cols={cols} setStep3s={setStep3s} />
          }</>
        }
      </div>
    </Layout >
  );
}

export default Matrix;
