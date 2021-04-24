import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import SignUpPage from './pages/signup';
import LoginPage from './pages/login';
import MainPage from './pages/main';
import NotFoundPage from './pages/notfound';
import MyTrophies from './pages/mytrophies';


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signup/:role' component={SignUpPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/main' component={MainPage} />

  
      {/*Player Routes*/}
      {/* <Route exact path='/marketplace' component={} /> */}
      <Route exact path='/my-trophies' component={MyTrophies} />
      {/* <Route exact path='/favourites-trophies' component={} /> */}
      {/* <Route exact path='/offers-received' component={} /> */}
      {/* <Route exact path='/offer-send' component={} /> */}
      {/* <Route exact path='/claim-trophy' component={} /> */}
      
      {/*Institution Routes*/}
      {/* <Route exact path='/created-trophies' component={} /> */}
      {/* <Route exact path='/trophies-creator' component={} /> */}

      {/*Institution & Players Routes*/}
      {/* <Route exact path='/configuration-profile' component={} /> */}


      <Route component={NotFoundPage}/>  
    </Switch>
  </Router>
)

export default Routes;
