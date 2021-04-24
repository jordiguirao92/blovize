import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import SignUpPage from './pages/signup';
import LoginPage from './pages/login';
import MainPage from './pages/main';
import NotFoundPage from './pages/notfound';
import MyTrophies from './pages/mytrophies';
import Marketplace from './pages/marketplace';
import FavouriteTrophies from './pages/favouritesTrophies';
import OffersReceived from './pages/offersReceived';
import OffersSend from './pages/offersSend';
import ClaimTrophy from './pages/claimTrophy';
import CreatedTrophies from './pages/createdTrophies';
import TrophiesCreator from './pages/trophiesCreator';
import ConfigurationProfile from './pages/configurationProfile';
import ControlTrophyBoard from './pages/controlTrophyBoard';


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/signup/:role' component={SignUpPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/main' component={MainPage} />

  
      {/*Player Routes*/}
      <Route exact path='/marketplace' component={Marketplace} />
      <Route exact path='/my-trophies' component={MyTrophies} />
      <Route exact path='/favourites-trophies' component={FavouriteTrophies} />
      <Route exact path='/offers-received' component={OffersReceived} />
      <Route exact path='/offer-send' component={OffersSend} />
      <Route exact path='/claim-trophy' component={ClaimTrophy} />
      
      {/*Institution Routes*/}
      <Route exact path='/created-trophies' component={CreatedTrophies} />
      <Route exact path='/trophies-creator' component={TrophiesCreator} />
      <Route exact path='/trophies-control-board' component={ControlTrophyBoard} />

      {/*Institution & Players Routes*/}
      <Route exact path='/configuration-profile' component={ConfigurationProfile} />


      <Route component={NotFoundPage}/>  
    </Switch>
  </Router>
)

export default Routes;
