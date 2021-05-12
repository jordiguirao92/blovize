import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";


import {getTrophiesById} from '../controllers/trophy';
import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import TrophyBigCard from '../components/trophy/TrophyBigCard';


const DetailTrophy = () => {
  const {id} = useParams();
  const [trophy, setTrophy] = useState([]);
  const user = useSelector(state => state.user);

  useEffect(() => {
    getChildrenTrophy();
    }, []);

  const getChildrenTrophy = async () => {
    try{
        const [childrenTrophy] = await getTrophiesById(Number(id));
        setTrophy(childrenTrophy);
        console.log(childrenTrophy);
    } catch (error) {
      return error;
    }
  }
    

    return(
        <>
            <MainLayout>
                    <ProfileCard />
                    <TrophyBigCard trophy={trophy} isOwner={user.email === trophy.owner ? true : false}/>
            </MainLayout>
        </>  
    )
}

export default DetailTrophy;