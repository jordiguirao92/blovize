import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
    const user = useSelector(state => state.user);
    console.log(user);
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
                    <TrophiesGallery trophiesCollection={trophies} isPlayer={user.userRole === 'player' ? true : false}/>
            </MainLayout>
        </>  
    )
}

export default Marketplace;