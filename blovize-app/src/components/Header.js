import styled from 'styled-components';

const HeaderStyle = styled.header`
    background-color: ${props => props.theme.colors.grey};
    display: flex;
`

const Header = () => {
    return(
        <HeaderStyle>
            <div>
                <h3>Blovize</h3>
            </div>
        </HeaderStyle>

    )
}

export default Header;