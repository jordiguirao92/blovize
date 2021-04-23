import { useState } from 'react';
import { useSelector } from 'react-redux';

import SideBarInstitution from './SideBarInstitution';
import SideBarPlayer from './SideBarPlayer';
import {FullDiv} from '../UI';


const SideBar = () => {
    //const user = useSelector(state => state.user);
    const [userRole, setUserRole] = useState('player');
        
    return(
        <FullDiv>
        {userRole === 'player' ? <SideBarPlayer /> : <SideBarInstitution />}
        </FullDiv>
    )
}

export default SideBar;