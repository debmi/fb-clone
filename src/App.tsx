import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Login } from './pages';
import { PublicRoute, PrivateRoute } from './components';
import { AuthProvider } from './context/auth';
import './App.scss';
import { ROUTES } from './utils/constants';

function App(): React.ReactElement {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <div className='App'>
            <PublicRoute path={ROUTES.SIGNIN} component={Login} exact />
          </div>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
