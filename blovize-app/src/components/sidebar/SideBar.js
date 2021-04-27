import { useSelector } from 'react-redux';

import SideBarInstitution from './SideBarInstitution';
import SideBarPlayer from './SideBarPlayer';
import {FullDiv} from '../UI';


const SideBar = () => {
    const user = useSelector(state => state.user);
    const sidebar = useSelector(state => state.sidebar);
        
    return(
        <FullDiv left={sidebar === true ? '0%' : '-100%'}>
        {user.userRole === 'player' ? <SideBarPlayer /> : <SideBarInstitution />}
        </FullDiv>
    )
}

export default SideBar;