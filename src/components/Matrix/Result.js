import React from 'react';

const Result = ({ arr, arr2, cols }) => {
    return <>
        <div className="col-md-6 text-center">
            <h5>Variable 1</h5>
            <div className="d-inline-flex flex-wrap mb-3">
                {arr.map(item => {
                    return <div className={`mw-${cols} mw-box`}>{Number(item)}</div>;
                })}
            </div>
        </div>
        <div className="col-md-6 text-center">
            <h5>Variable 2</h5>
            <div className="d-inline-flex flex-wrap mb-3">
                {arr2.map(item => {
                    return <div className={`mw-${cols} mw-box`}>{Number(item)}</div>;
                })}
            </div>
        </div>
        <div className="col-md-12 text-center">
            <h5>Addtion of A and B</h5>
            <div className="d-inline-flex flex-wrap mb-3">
                {arr2.map((item, i) => {
                    return <div className={`mw-${cols} mw-box`}>{Number(arr[i]) + Number(arr2[i])}</div>;
                })}
            </div>
        </div>
    </>
}

export default Result;