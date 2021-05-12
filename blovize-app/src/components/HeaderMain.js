import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { GiWallet } from 'react-icons/gi';
import {iconSize} from './UI';

import {HeaderStyled, LinkStyled, Button, Flex} from '../components/UI';
import {logout} from '../services/auth';
import Burguer from './Burguer';

const HeaderMain = () => {
    const history = useHistory();
    const user = useSelector(state => state.user);
    console.log(user);
    
    return(
        <HeaderStyled >
        <Burguer />
            <div>
                <LinkStyled to="/main" color={props => props.theme.colors.primary}><h3>BLOVIZE</h3></LinkStyled>
            </div>
            {user 
                ? <Flex width='30%' justify='space-evenly'>
                    <span>Hello {user.name}! </span>
                    <Flex width='auto'><GiWallet size={30} style={{fill: ''}}/> {user.walletBalance}€</Flex>
                    <Button onClick={() => {logout(); history.push('/');}}>Log out</Button>
                  </Flex>
                : <LinkStyled to="/login"><Button>Login</Button></LinkStyled>
            }
        </HeaderStyled>

    )
}

export default HeaderMain;