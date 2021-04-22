import { useSelector } from 'react-redux';
import { useState } from 'react';
import {HeaderStyled} from '../components/UI';

import Burguer from './Burguer';

const HeaderMain = () => {
    const user = useSelector(state => state.user);
    const [userRole, setUserRole] = useState('player');
    
    return(
        <HeaderStyled>
        <Burguer />
            <div>
                <h3>Blovize</h3>
            </div>
        </HeaderStyled>

    )
}

export default HeaderMain;