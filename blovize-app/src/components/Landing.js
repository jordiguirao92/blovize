import styled from 'styled-components';

import trophy from '../images/trophy.png'

const LandingStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(180deg, #171923 0%, #0707FF 47.92%);
    justify-content: center;
    height: 25vh;
    
    *{
        margin: 10px;
    }

    h1 {
        color: ${props => props.theme.colors.white};
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
            <h1>BLOCKCHAIN NFTs SPORT TROPHIES</h1>
            <h4>Share and collect sport NFTs Trophies</h4>
            <img src={trophy} alt='Trophy image'/>
        </LandingStyle>

    )
}

export default Landing;