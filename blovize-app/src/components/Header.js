import { useSelector } from 'react-redux';
import {HeaderStyled} from '../components/UI';

const Header = () => {
    const user = useSelector(state => state.user);
    
    return(
        <HeaderStyled justify='center'>
            <div>
                <h3>Blovize</h3>
            </div>
        </HeaderStyled>

    )
}

export default Header;