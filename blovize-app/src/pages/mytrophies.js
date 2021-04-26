import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

import { getPlayerTrophies, getInstitutionTrophies } from '../controllers/trophy'; 
import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import TrophiesGallery from '../components/trophy/TrophiesGallery';


const MyTrophies = () => {
  const [trophies, setTrophies] = useState([]);
  const user = useSelector(state => state.user);

    useEffect(() => {
      getTrophies();
      }, []);

      const getTrophies = async () => {
        try{
          if (user.userRole === 'player') {
            const trophies = await getPlayerTrophies(user.email);
            setTrophies(trophies);
          } else if (user.userRole === 'institution') {
            const trophies = await getInstitutionTrophies(user.email);
            setTrophies(trophies);
          }
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

export default MyTrophies;