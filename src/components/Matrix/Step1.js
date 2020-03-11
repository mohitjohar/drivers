import React, { useState } from 'react';
import { Col, Button, Input, FormFeedback, FormGroup } from 'reactstrap';

const Step1 = ({ rows, cols, setRows, setCols, setStep1s }) => {

    const options = [];
    const [invalid1, setInvalid1] = useState(false);
    const [invalid2, setInvalid2] = useState(false);


    //Options
    for (let i = 1; i < 7; i++) {
        options.push(<option value={i}>{i}</option>)
    }


    const nextstep = () => {
        if (rows) {
            setInvalid1(false);
        }
        if (cols) {
            setInvalid2(false);
        }
        if (!rows) {
            setInvalid1(true);
            return false;
        }
        if (!cols) {
            setInvalid2(true);
            return false;
        }
        setStep1s(false);
    }


    console.log("Rows : ", rows, "Cols : ", cols);
    return <>
        <Col md={6}>
            <FormGroup>
                <Input type="select" className={invalid1 ? "is-invalid" : ""} value={rows} onChange={e => setRows(e.target.value)}>
                    <option value="">Select number of Rows</option>
                    {options}
                </Input>
                <FormFeedback>Please Select Value</FormFeedback>
            </FormGroup>
        </Col>
        <Col md={6}>
            <Input type="select" className={invalid2 ? "is-invalid" : ""} value={cols} onChange={e => setCols(e.target.value)}>
                <option value="">Select number of Cols</option>
                {options}
            </Input>
            <FormFeedback>Please Select Value</FormFeedback>
        </Col>
        <Col md={12} className="text-right">
            <Button color="primary" onClick={nextstep}>Next</Button>
        </Col>
    </>
}

export default Step1;