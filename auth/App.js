import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import PrivateRoute from '../components/PrivateRoute';
import ProtectedPage from './ProtectedPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/protected" component={ProtectedPage} />
      </Switch>
    </Router>
  );
}

export default App;