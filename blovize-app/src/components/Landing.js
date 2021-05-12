import trophy from '../images/trophy.png'
import {Spacer, LandingStyle, H1, H2, ImageStyled} from './UI';


const Landing = () => {
    return(
        <LandingStyle direction='column' justify='center' align='flex-end'  height='40vh'>
            <Spacer />
            <H1 margin='10px 30px'>BLOCKCHAIN NFTs SPORT TROPHIES</H1>
            <H2 color={props => props.theme.colors.grey} margin='10px 30px'>Share and collect sport NFTs Trophies</H2>
            <Spacer />
        </LandingStyle>
    )
}

export default Landing;