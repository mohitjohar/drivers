import React, { useState } from 'react';
import { Col, Button, Input, FormFeedback, FormGroup } from 'reactstrap';

const Step2 = ({ setStep3s, arr2, arr, rows, cols }) => {

    //input
    const [input, setInput] = useState("");
    const [invalid1, setInvalid1] = useState(false);
    //row col
    var [row, setRow] = useState(1);
    var [col, setCol] = useState(1);
    //step2
    const [step2s, setStep2s] = useState(false);

    //Read Array
    const read_arr = (arra, setStep) => {
        if (input) {
            setInvalid1(false);
        }
        if (!input) {
            setInvalid1(true);
            return false;
        }
        if (col * row >= rows * cols) {
            setStep(true);
            setRow(1);
            setCol(1);
        } else {
            setCol(col + 1);
            if (col == cols) {
                setCol(1);
                setRow(row + 1);
            }
        }
        arra.push(input);
        setInput("");
        console.log("arr : ", arr, " arr2 : ", arr2);
        console.log("[", rows, cols, "] ", "row : ", row, " col : ", col, " input : ", input)
    }

    return <>
        <h4>{step2s ? "Variable B" : "Variable A"}</h4>
        <Col md={12}>
            <FormGroup>
                <Input type="number" className={invalid1 ? "is-invalid" : ""} value={input} onChange={e => setInput(e.target.value)} required placeholder={`Row ${row} Col ${col}`} />
                <FormFeedback>Please Enter Value</FormFeedback>
            </FormGroup>
        </Col>
        <Col md={12} className="text-right">
            {step2s ?
                <Button color="primary" onClick={() => read_arr(arr2, setStep3s)}>Next</Button>
                : <Button color="primary" onClick={() => read_arr(arr, setStep2s)}>Next</Button>
            }
        </Col>
    </>
}

export default Step2;