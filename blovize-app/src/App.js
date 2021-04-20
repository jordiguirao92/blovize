import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';

import Routes from './routes';
import {registerAuthObserver} from './services/auth';
import { setUser, clearUser } from './redux/user/userActions';



function App() {

  const dispatch = useDispatch();
  //const [isLoading, setIsLoading] = useState(true);
  //const [userData, setUserData] = useState(null);

  useEffect(() => {
    registerAuthObserver((user) => {
      if(user) {
        console.log(user);
        dispatch(setUser({ uid: user.uid }));
      } else {
        console.log('User logout');
        dispatch(clearUser());
      }
    })
  }, []);


  return (
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;
