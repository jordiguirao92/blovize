import styled from 'styled-components';

import trophy from '../images/trophy.png'
import {Flex, Spacer, H1} from './UI';

const LandingStyle = styled(Flex)`
    flex-direction: column;
    justify-content: center;
    background-image: linear-gradient(180deg, #171923 0%, #0707FF 47.92%);
    height: 25vh;
    
    *{
        margin: 10px;
    }

    h4 {
        color: ${props => props.theme.colors.grey};
    }

    img {
        height: 150px;
    }
`

const Landing = () => {
    return(
        <LandingStyle>
            <H1 color=''>BLOCKCHAIN NFTs SPORT TROPHIES</H1>
            <h4>Share and collect sport NFTs Trophies</h4>
            <img src={trophy} alt='Trophy image'/>
        </LandingStyle>

    )
}

export default Landing;