import { useSelector } from 'react-redux';
import {HeaderStyled} from '../components/UI';

import Burguer from './Burguer';


const Header = () => {
    const user = useSelector(state => state.user);
    
    return(
        <HeaderStyled>
            <div>
                <h3>Blovize</h3>
            </div>
        </HeaderStyled>

    )
}

export default Header;