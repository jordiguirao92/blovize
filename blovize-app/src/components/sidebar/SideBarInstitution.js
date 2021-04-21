import styled from 'styled-components';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {SidebarDataInstitution} from './SideBarDataInstitution';
import {Flex} from '../UI';


const SideBarInstitution = () => {
    //const user = useSelector(state => state.user);
    const [sidebar, setSidebar] = useState(false);

    
    return(
        <Flex direction='column'>
            {SidebarDataInstitution.map((item, index) => {
                return (
                    <li key={index}><Link to={item.path}><span>{item.icon}</span>{item.title}</Link></li>
                );
            })}
        </Flex>

    )
}

export default SideBarInstitution;