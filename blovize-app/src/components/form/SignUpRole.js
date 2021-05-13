import playerImage from '../../images/player.png'
import institutionImage from '../../images/institution.png'
import {Flex, FlexStyled, H3, ImageStyled, LinkStyled} from '../UI';


const SignUpRole = () => {
    return(
        <Flex justify='space-evenly'>
            <LinkStyled to={'/signup/player'} >
                <FlexStyled width='407px' height='248px' margin='20px 0px' cursor='pointer' direction='column' align='center'>
                    <H3>I am a sports player</H3>
                    <ImageStyled width='170px' height='170px' src={playerImage} alt='playerImage' />
                </FlexStyled>
            </LinkStyled>
            <LinkStyled to={'/signup/institution'}>
                <FlexStyled width='407px' height='248px' cursos='pointer' direction='column' align='center'>
                    <H3>I am a sports institution</H3>
                    <ImageStyled width='170px' height='170px' src={institutionImage} alt='institutionImage'/>
                </FlexStyled>
            </LinkStyled>
        </Flex>

    )
}

export default SignUpRole;