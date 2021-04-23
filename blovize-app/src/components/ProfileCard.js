import {Flex, ImageStyled, FlexStyled} from './UI';
import profileImage from '../images/profile.png'
import trophyImage from '../images/trophy.png'

const ProfileCard = () => {
    
    return(
      
      <FlexStyled justify='space-evenly'>
        <Flex justify='center'>
          <ImageStyled height='250px' margin='10px' src={profileImage}/>
        </Flex>
        
        <Flex direction='column' align='flex-start' justify='center'>
          <h2>Jordi Guirao Muns</h2>
          <h4>@jordiguirao</h4>
          <p>Basketball player. Pasionate of all sports. Enjoy with my sport trophies.</p>
        </Flex>
          
        <Flex direction='column'>
          <ImageStyled src={trophyImage}/>
          <p>12 trophies</p>
        </Flex>
      </FlexStyled>
    )
}

export default ProfileCard;