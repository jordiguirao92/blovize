import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useParams} from "react-router-dom";

import {registerAuthObserver} from '../services/auth';
import { setUser, clearUser } from '../redux/user/userActions';
import { getUserProfile } from '../controllers/user';
import {getChildrenTrophies} from '../controllers/trophy';

import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import TrophyControlBoardCard from '../components/trophy/TrophyControlBoardCard';




const ControlTrophyBoard = () => {
    const {id} = useParams();
    console.log(id);
    const [childrenTrophies, setChildrenTrophies] = useState([]);

  useEffect(() => {
    getChildrenTrophy();
    }, []);

    const getChildrenTrophy = async () => {
      try{
          const childrenTrophies = await getChildrenTrophies(Number(id));
          setChildrenTrophies(childrenTrophies);
          console.log(childrenTrophies);
      } catch (error) {
        return error;
      }
    }
   


    return(
        <>
            <MainLayout>
                    <ProfileCard />
                    {childrenTrophies.map((trophy) => {
                        return(
                            <TrophyControlBoardCard 
                                key={trophy.id}
                                trophyProps={trophy}
                            />
                        )
                    })}
            </MainLayout>
        </>  
    )
}

export default ControlTrophyBoard;
