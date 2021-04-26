import { useSelector } from 'react-redux';

import {Flex, ImageStyled, FlexStyled, H2, H4, P} from './UI';
import profileImage from '../images/profile.png'
import trophyImage from '../images/trophy.png'

const ProfileCard = () => {
  const user = useSelector(state => state.user);
    
    return(
      
      <FlexStyled justify='space-evenly' margin='50px'>
        <Flex justify='center'>
          <ImageStyled height='250px' margin='10px' src={profileImage}/>
        </Flex>
        
        <Flex direction='column' align='flex-start' justify='center'>
          <H2 margin='10px 20px'>{user.name}</H2>
          <H4 margin='10px 20px'>@{user.nickName}</H4>
          <P margin='10px 20px'>{user.description}</P>
        </Flex>
          
        <Flex direction='column'>
          <ImageStyled src={trophyImage}/>      
          <p>{user.trophyList.length} trophies</p>
        </Flex>
      </FlexStyled>
    )
}

export default ProfileCard;