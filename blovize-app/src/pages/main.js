import { useState } from 'react';

import MainLayout from '../components/layout/MainLayout';
import Landing from '../components/Landing';


import ProfileCard from '../components/ProfileCard';

import OfferCardReceived from '../components/offers/OfferCardReceived';
import OfferCardSend from '../components/offers/OfferCardSend';

import TrophyControlCard from '../components/trophy/TrophyControlCard';
import TrophyControlBoardCard from '../components/trophy/TrophyControlBoardCard';
import TrophySmallCard from '../components/trophy/TrophySmallCard';
import TrophyClaim from '../components/trophy/TrophyClaim';


const MainPage = () => {
    const [accesApp, setAccesApp] = useState(null);


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