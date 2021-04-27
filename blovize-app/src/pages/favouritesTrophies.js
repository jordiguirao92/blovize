import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import TrophiesGallery from '../components/trophy/TrophiesGallery';
import Loading from '../components/Loading';
import getFavouriteTrophies from '../controllers/trophy';




const FavouriteTrophies = () => {
  const user = useSelector(state => state.user);
  const [trophies, setTrophies] = useState([]);

  useEffect(() => {
    getFavouriteTrophies();
    
  }, []);

  const getFavouriteTrophies = async () => {
    try {
      const trophiesArray = [];
      for (let i = 0; i < user.trophyFavourites.length; i+=1){
        const result = await getFavouriteTrophies(i);
        trophiesArray.push(result);
      }
      setTrophies(trophiesArray);
      console.log(trophies);
    } catch (error) {
      return error;
    }  
  }

    return(
        <>
            <MainLayout>
                    <ProfileCard />
                    {/*<TrophiesGallery />*/}
            </MainLayout>
        </>  
    )
}

export default FavouriteTrophies;