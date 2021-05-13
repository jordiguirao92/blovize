import Instagram from './logos/Instagram';
import Twitter from './logos/Twitter'
import Telegram from './logos/Telegram'
import {Flex, H3, A, FooterStyled} from './UI';



const Footer = () => {
    return(
        <FooterStyled>
            <A href='mailto:jordi@blovize.com'><H3 color='white'>info@blovize.com</H3></A>
            <Flex justify='center' width='auto'>
                <Telegram />
                <Instagram />
                <Twitter />
            </Flex>
        </FooterStyled>

    )
}

export default Footer;

