import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {registerAuthObserver} from '../services/auth';
import { setUser, clearUser } from '../redux/user/userActions';
import { getUserProfile } from '../controllers/user';

import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import TrophiesGallery from '../components/trophy/TrophiesGallery';
import Loading from '../components/Loading';
import TrophyControlCard from '../components/trophy/TrophyControlCard';




const CreatedTrophies= () => {
    /*const dispatch = useDispatch();
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

    if (isLoading) return <Loading />;*/


    return(
        <>
            <MainLayout>
                    <ProfileCard />
                    <TrophyControlCard />
            </MainLayout>
        </>  
    )
}

export default CreatedTrophies;