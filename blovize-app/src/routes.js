import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import SignUpPage from './pages/signup';
import LoginPage from './pages/login';
import MainPage from './pages/main';
import NotFoundPage from './pages/notfound';


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signup/:role' component={SignUpPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/main' component={MainPage} />
      <Route component={NotFoundPage}/>  
    </Switch>
  </Router>
)

export default Routes;
