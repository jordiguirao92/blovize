import styled from 'styled-components';

import Instagram from './logos/Instagram';
import Twitter from './logos/Twitter'
import Telegram from './logos/Telegram'
import {Flex} from './UI';

const FooterStyle = styled.footer`
    background-color: ${props => props.theme.colors.black};
    display: flex;
    justify-content: space-around;

    a {
        text-decoration: none;
    }

    h4 {
        color: ${props => props.theme.colors.white};
    }
`

const Footer = () => {
    return(
        <FooterStyle>
            <a href='mailto:jordi@blovize.com'><h4>info@blovize.com</h4></a>
            <Flex justify='center' width='auto'>
                <Telegram />
                <Instagram />
                <Twitter />
            </Flex>
        </FooterStyle>

    )
}

export default Footer;

