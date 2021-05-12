import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";

import {getChildrenTrophies, getFatherTrophy} from '../controllers/trophy';
import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import TrophyControlBoardCard from '../components/trophy/TrophyControlBoardCard';
import TrophyBigCardInstitution from '../components/trophy/TrophyBigCardInstitution';


const ControlTrophyBoard = () => {
    const {id} = useParams();
    console.log(id);
    const [childrenTrophies, setChildrenTrophies] = useState([]);
    const [fatherTrophy, setFatherTrophy] = useState([]);

  useEffect(() => {
    getChildrenTrophy();
    getFather();
    }, []);

    const getChildrenTrophy = async () => {
      try{
          const childrenTrophies = await getChildrenTrophies(Number(id));
          setChildrenTrophies(childrenTrophies);
      } catch (error) {
        return error;
      }
    }

    const getFather = async () => {
        try{
            const father = await getFatherTrophy(Number(id));
            setFatherTrophy(father);
            console.log(father);
        } catch (error) {
          return error;
        }
      }
   


    return(
        <>
            <MainLayout>
                    <TrophyBigCardInstitution father={fatherTrophy}/>
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
