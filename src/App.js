import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Study from './container/study/Study';

const Home = React.lazy(() => import('./container/home'));
const RegisterOne = React.lazy(() =>
  import('./container/register/RegisterOne')
);
const RegisterTwo = React.lazy(() =>
  import('./container/register/RegisterTwo')
);
const AddInsurance = React.lazy(() =>
  import('./container/addinsurance/AddInsurance')
);

const loading = () => (
  <div className="animated fadeIn pt-1 text-center">Loading...</div>
);

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route
            exact
            path="/"
            name="Home"
            render={props => <Home {...props} />}
          />
          <Route
            exact
            path="/study"
            name="Study"
            render={props => <Study {...props} />}
          />
          <Route
            exact
            path="/registerOne"
            name="RegisterOne"
            render={props => <RegisterOne {...props} />}
          />
          <Route
            exact
            path="/RegisterTwo"
            name="RegisterTwo"
            render={props => <RegisterTwo {...props} />}
          />
          <Route
            exact
            path="/AddInsurance"
            name="AddInsurance"
            render={props => <AddInsurance {...props} />}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
