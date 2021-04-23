import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {registerAuthObserver} from '../services/auth';
import { setUser, clearUser } from '../redux/user/userActions';
import { getUserProfile } from '../controllers/user';

import MainLayout from '../components/layout/MainLayout';
import Landing from '../components/Landing';

//Testing
import ProfileCard from '../components/ProfileCard';
import OfferCardReceived from '../components/offers/OfferCardReceived';
import OfferCardSend from '../components/offers/OfferCardSend';
import TrophyControlCard from '../components/trophy/TrophyControlCard';
import TrophyControlBoardCard from '../components/trophy/TrophyControlBoardCard';
import TrophySmallCard from '../components/trophy/TrophySmallCard';
import TrophyClaim from '../components/trophy/TrophyClaim';



const MainPage = () => {
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

    if (isLoading) return <>Loading...</>;

    return(
        <>
            <MainLayout>
                    <Landing />
                    <ProfileCard />
                    <OfferCardReceived />
                    <OfferCardSend />
                    <TrophyControlCard />
                    <TrophyControlBoardCard />
                    <TrophySmallCard />
                    <TrophyClaim />
            </MainLayout>
        </>
        
            
        
    )
}

export default MainPage;