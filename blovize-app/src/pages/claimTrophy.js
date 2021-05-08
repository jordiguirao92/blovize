import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';

import {registerAuthObserver} from '../services/auth';
import { setUser, clearUser } from '../redux/user/userActions';
import { getUserProfile } from '../controllers/user';
import {useQuery} from '../hooks/useQuery';

import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import TrophiesGallery from '../components/trophy/TrophiesGallery';
import Loading from '../components/Loading';
import TrophyClaim from '../components/trophy/TrophyClaim';




const ClaimTrophy= () => {
    const query = useQuery();
    const user = useSelector(state => state.user);
   
    return(
        <>
            <MainLayout>
                    <ProfileCard />
                    <TrophyClaim claimCode={query.get('claimCode')} user={user}/>
            </MainLayout>
        </>  
    )
}

export default ClaimTrophy;