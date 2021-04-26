import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


import { getMarketplaceTrophies } from '../controllers/trophy'; 

import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import TrophiesGallery from '../components/trophy/TrophiesGallery';



const Marketplace = () => {
    //const dispatch = useDispatch();
    //const history = useHistory();
    //const [isLoading, setIsLoading] = useState(true);
    const [trophies, setTrophies] = useState([]);

    useEffect(() => {
      getTrophies();
      }, []);

      const getTrophies = async () => {
        const trophies = await getMarketplaceTrophies();
        setTrophies(trophies);
        console.log(trophies);
      }

    return(
        <>
            <MainLayout>
                    <ProfileCard />
                    <TrophiesGallery trophiesCollection={trophies}/>
            </MainLayout>
        </>  
    )
}

export default Marketplace;