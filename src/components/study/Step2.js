import React, { useState } from 'react';

const Step2 = ({ setStep3s, arr2, arr, rows, cols }) => {

    //input
    const [input, setInput] = useState("");
    //row col
    var [row, setRow] = useState(1);
    var [col, setCol] = useState(1);
    //step2
    const [step2s, setStep2s] = useState(false);

    //Read Array
    const read_arr = (arra, setStep) => {
        if (col * row >= rows * cols) {
            setStep(true);
            alert("Data Filled");
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
        <div className="col-md-12">
            <input type="number" className="form-control mb-3" value={input} onChange={e => setInput(e.target.value)} placeholder={`Row ${row} Col ${col}`} />
        </div>
        <div className="col-md-12 text-right">
            {step2s ? <button className="btn btn-primary mt-3" onClick={() => read_arr(arr2, setStep3s)}>Next</button> : <button className="btn btn-primary mt-3" onClick={() => read_arr(arr, setStep2s)}>Next</button>}
        </div>
    </>
}

export default Step2;