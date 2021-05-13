import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import TrophiesGallery from '../components/trophy/TrophiesGallery';
import {getFavouriteTrophies} from '../controllers/trophy';




const FavouriteTrophies = () => {
  const user = useSelector(state => state.user);
  const [trophies, setTrophies] = useState([]);

  useEffect(() => {
    getTrophies();
    console.log(trophies);
  }, []);

  const getTrophies = async () => {
    try {
      const trophiesArray = [];
      user.trophyFavourites.forEach(async trophy => {
        const [result] = await getFavouriteTrophies(trophy);
        trophiesArray.push(result);
      })
      setTrophies(trophiesArray);
    } catch (error) {
      return error;
    }  
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

export default FavouriteTrophies;