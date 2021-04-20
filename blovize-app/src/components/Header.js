import styled from 'styled-components';
import { useSelector } from 'react-redux';

const HeaderStyle = styled.header`
    background-color: ${props => props.theme.colors.grey};
    display: flex;
`

const Header = () => {
    const user = useSelector(state => state.user);
    
    return(
        <HeaderStyle>
            <div>
                <h3>Blovize</h3>
            </div>
        </HeaderStyle>

    )
}

export default Header;