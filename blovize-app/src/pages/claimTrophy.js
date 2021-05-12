import { useSelector } from 'react-redux';

import {useQuery} from '../hooks/useQuery';
import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
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