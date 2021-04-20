import styled from 'styled-components';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import {SidebarDataInstitution} from './SideBarDataInstitution';
import {SidebarDataPlayer} from './SideBarDataPlayer';

const HeaderStyle = styled.header`
    background-color: ${props => props.theme.colors.grey};
    display: flex;
`

const SideBar = () => {
    //const user = useSelector(state => state.user);
    const [sidebar, setSidebar] = useState(false);

    
    return(
        <HeaderStyle>
            <div>
                <h3>Blovize</h3>
            </div>
        </HeaderStyle>

    )
}

export default SideBar;