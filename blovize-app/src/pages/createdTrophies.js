import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

import { getInstitutionTrophies } from '../controllers/trophy'; 
import {Flex} from '../components/UI';
import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import TrophyControlCard from '../components/trophy/TrophyControlCard';




const CreatedTrophies= () => {
  const [trophies, setTrophies] = useState([]);
  const user = useSelector(state => state.user);

    useEffect(() => {
      getTrophies();
      }, []);

      const getTrophies = async () => {
        try{
            const trophies = await getInstitutionTrophies(user.email);
            setTrophies(trophies);
        } catch (error) {
          return error;
        }
      }


    return(
        <> 
            <MainLayout>
                    <ProfileCard />
                      {trophies.map((trophy) => {
                          return(
                              <TrophyControlCard 
                                key={trophy.id}
                                trophyProps={trophy}
                              />
                          )
                      })}
            </MainLayout>
        </>  
    )
}

export default CreatedTrophies;