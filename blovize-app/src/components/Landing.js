import trophy from '../images/trophy.png'
import {Spacer, LandingStyle, H1, H3, ImageStyled} from './UI';


const Landing = () => {
    return(
        <LandingStyle direction='column' justify='center'  height='25vh'>
            <Spacer />
            <H1>BLOCKCHAIN NFTs SPORT TROPHIES</H1>
            <H3>Share and collect sport NFTs Trophies</H3>
            <ImageStyled src={trophy} alt='Trophy image'/>
            <Spacer />
        </LandingStyle>
    )
}

export default Landing;