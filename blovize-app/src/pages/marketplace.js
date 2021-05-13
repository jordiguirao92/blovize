import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getMarketplaceOnSaleTrophies, getMarketplaceAccepOfferTrophies } from '../controllers/trophy'; 
import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import TrophiesGallery from '../components/trophy/TrophiesGallery';



const Marketplace = () => {
    const user = useSelector(state => state.user);
    console.log(user);
    const [trophies, setTrophies] = useState([]);
    

    useEffect(() => {
      getTrophies();
      }, []);

      const getTrophies = async () => {
        const trophiesOnSale = await getMarketplaceOnSaleTrophies();
        const trophiesAcceptOffers = await getMarketplaceAccepOfferTrophies();
        const trophies = [...trophiesOnSale, ...trophiesAcceptOffers]
        setTrophies(trophies);
      }


    return(
        <>
            <MainLayout>
                    <ProfileCard />
                    <TrophiesGallery trophiesCollection={trophies} isPlayer={user.userRole === 'player' ? true : false}/>
            </MainLayout>
        </>  
    )
}

export default Marketplace;