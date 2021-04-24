import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {registerAuthObserver} from '../../services/auth';
import { setUser, clearUser } from '../../redux/user/userActions'
import { getUserProfile } from '../../controllers/user';

import Footer from '../Footer';
import HeaderMain from '../HeaderMain';
import SideBar from '../sidebar/SideBar';
import Loading from '../Loading';


const MainLayout = ({ children }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      registerAuthObserver(async (user) => {
        if (user) {
          console.log('IMTCHLG ~ El usuario ha hecho login: ', user);
          const userProfile = await getUserProfile(user.uid);
          dispatch(setUser(userProfile));
        } else {
          console.log('IMTCHLG ~ El usuario ha hecho logout: ');
          dispatch(clearUser());
          history.push('/');
          
        }
        setIsLoading(false)
      })
    }, []);

    if (isLoading) return <Loading />;

  return (
    <>
      <HeaderMain />
      <SideBar />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout;