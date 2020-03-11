import React from 'react';

const Step1 = ({ rows, cols, setRows, setCols, setStep1s }) => {
    return <>
        <div className="col-md-6">
            <input type="number" className="form-control mb-3" value={rows} onChange={e => setRows(e.target.value)} placeholder="Enter number of Rows" />
        </div>
        <div className="col-md-6">
            <input type="number" className="form-control mb-3" value={cols} onChange={e => setCols(e.target.value)} placeholder="Enter number of Cols" />
        </div>
        <div className="col-md-12 text-right">
            <button className="btn btn-primary mt-3" onClick={() => setStep1s(false)}>Next</button>
        </div>
    </>
}

export default Step1;