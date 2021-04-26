import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {registerAuthObserver} from '../services/auth';
import { setUser, clearUser } from '../redux/user/userActions';
import { getUserProfile } from '../controllers/user';

import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import TrophiesGallery from '../components/trophy/TrophiesGallery';
import Loading from '../components/Loading';
import TrophyControlBoardCard from '../components/trophy/TrophyControlBoardCard';




const ControlTrophyBoard = () => {
   


    return(
        <>
            <MainLayout>
                    <ProfileCard />
                    <TrophyControlBoardCard />
            </MainLayout>
        </>  
    )
}

export default ControlTrophyBoard;