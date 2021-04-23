import { useSelector } from 'react-redux';
import { useState } from 'react';
import {HeaderStyled, LinkStyled, Button} from '../components/UI';
import {logout} from '../services/auth';

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
            {user 
                ? <span>Hello {user.name}<Button onClick={logout}>(Log out)</Button></span>
                : <LinkStyled to="/login"><Button>Login</Button></LinkStyled>
            }
        </HeaderStyled>

    )
}

export default HeaderMain;