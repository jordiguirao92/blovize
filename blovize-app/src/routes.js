import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import SignUpPage from './pages/signup';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={SignUpPage} />
    </Switch>
  </Router>
)

export default Routes;
