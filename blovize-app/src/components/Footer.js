import styled from 'styled-components';

import Instagram from './logos/Instagram';
import Twitter from './logos/Twitter'
import Telegram from './logos/Telegram'

const FooterStyle = styled.footer`
    background-color: black;
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0px
`

const Footer = () => {
    return(
        <FooterStyle>
            <a href='mailto:jordi@blovize.com'>info@blovize.com</a>
            <div>
                <a href='https://www.instagram.com/'> <img src='../../public/logos/instagram.svg' alt='Instagram'/></a>
                <a href='https://web.telegram.org/'> <img src='../../public/logos/telegram.svg' alt='Telegram'/></a>
                <a href='https://twitter.com/'> <img src='../../public/logos/twitter.svg' alt='Twitter'/></a>
            </div>
            <Telegram/>
          
        </FooterStyle>

    )
}

export default Footer;

/*
  <div>
                <a href='https://www.instagram.com/'> <img src='../../public/logos/instagram.svg' alt='Instagram'/></a>
                <a href='https://web.telegram.org/'> <img src='../../public/logos/telegram.svg' alt='Telegram'/></a>
                <a href='https://twitter.com/'> <img src='../../public/logos/twitter.svg' alt='Twitter'/></a>
            </div>

*/
