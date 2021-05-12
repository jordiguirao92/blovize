import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

import {HeaderStyled, LinkStyled, Button} from '../components/UI';
import {logout} from '../services/auth';
import Burguer from './Burguer';

const HeaderMain = () => {
    const history = useHistory();
    const user = useSelector(state => state.user);
    
    return(
        <HeaderStyled>
        <Burguer />
            <div>
                <h3>Blovize</h3>
            </div>
            {user 
                ? <span>Hello {user.name} <Button onClick={() => {logout(); history.push('/');}}>Log out</Button></span>
                : <LinkStyled to="/login"><Button>Login</Button></LinkStyled>
            }
        </HeaderStyled>

    )
}

export default HeaderMain;