import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import Routes from './routes';
import {registerAuthObserver} from './services/auth';
import { setUser, clearUser } from './redux/user/userActions';
import { getUserProfile } from './controllers/user';



function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    registerAuthObserver(async (user) => {
      if (user) {
        console.log('IMTCHLG ~ El usuario ha hecho login: ', user);
        const userProfile = await getUserProfile(user.uid);
        dispatch(setUser(userProfile));
        history.push('/main')
      } else {
        console.log('IMTCHLG ~ El usuario ha hecho logout: ');
        dispatch(clearUser());
      }
      setIsLoading(false)
    })
  }, []);

  if (isLoading) return <>Loading...</>;

  return (
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;
