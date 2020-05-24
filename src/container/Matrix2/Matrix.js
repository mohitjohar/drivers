import React, { useState } from 'react';
import Layout from '../../components/global/Layout';

const Matrix2 = () => {
  const [rows, setRows] = useState();
  const [cols, setCols] = useState();
  const [placeholderarr, setPlaceholderarr] = useState([]);
  const [divider, setDivider] = useState([]);

  const reassign = (array, setArray, index, newValue) => {
    const updatedArray = [...array];
    updatedArray[index] = newValue;
    setArray(updatedArray);
  };

  // Array
  const [arr, setArr] = useState([]);
  const [arr2, setArr2] = useState([]);

  const step1 = () => {
    // Divider
    if (cols === 1) {
      setDivider('col-md-12');
    } else if (cols === 2) {
      setDivider('col-md-6');
    } else if (cols === 3) {
      setDivider('col-md-4');
    } else if (cols === 4) {
      setDivider('col-md-3');
    } else if (cols === 5) {
      setDivider('col-mk-5');
    } else if (cols === 6) {
      setDivider('col-md-2');
    }

    const a = [];
    const b = [];
    let col = 1;
    let row = 1;
    for (let i = 1; i <= rows * cols; ++i) {
      if (col > cols) {
        row += 1;
        col = 1;
      }
      a.push({ id: i, row, col });
      b.push(0);
      col += 1;
    }
    setArr('');
    setArr2('');
    setPlaceholderarr('');
    setPlaceholderarr(a);
    setArr2(b);
    setArr(b);
  };

  return (
    <Layout>
      <h2 className="text-center">Matrix</h2>
      <h3 className="mb-3 text-center">Addtion of Matrix</h3>
      <div className="form-row">
        <div className="col-md-4 mb-3">
          <input
            type="number"
            value={rows}
            className="form-control"
            placeholder="Rows"
            onChange={e => setRows(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Cols"
            value={cols}
            onChange={e => setCols(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <button type="button" className="btn btn-primary" onClick={step1}>
            Next
          </button>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-row mt-3">
            {placeholderarr &&
              placeholderarr.map((item, i) => {
                return (
                  <div className={`${divider} mb-3`}>
                    <input
                      type="number"
                      className="form-control p-2"
                      value={arr[i]}
                      onChange={e => reassign(arr, setArr, [i], e.target.value)}
                      placeholder={`r${item.row},c${item.col}`}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-row mt-3">
            {placeholderarr &&
              placeholderarr.map((item, i) => {
                return (
                  <div className={`${divider} mb-3`}>
                    <input
                      type="number"
                      className="form-control p-2"
                      value={arr2[i]}
                      onChange={e =>
                        reassign(arr2, setArr2, [i], e.target.value)
                      }
                      placeholder={`r${item.row},c${item.col}`}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h5 className="text-primary">Addition of Variable A and B</h5>
          <div className="d-inline-flex flex-wrap">
            {arr2 &&
              arr2.map((item, i) => {
                return (
                  <div
                    className={`${divider} p-2 border border-primary d-inline-block`}>
                    {Number(arr2[i]) + Number(arr[i])}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Matrix2;
