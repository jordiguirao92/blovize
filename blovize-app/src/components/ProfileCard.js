import { useSelector } from 'react-redux';

import {Flex, ImageStyled, FlexStyled} from './UI';
import profileImage from '../images/profile.png'
import trophyImage from '../images/trophy.png'

const ProfileCard = () => {
  const user = useSelector(state => state.user);
    
    return(
      
      <FlexStyled justify='space-evenly'>
        <Flex justify='center'>
          <ImageStyled height='250px' margin='10px' src={profileImage}/>
        </Flex>
        
        <Flex direction='column' align='flex-start' justify='center'>
          <h2>{user.name}</h2>
          <h4>@{user.nickName}</h4>
          <p>{user.description}</p>
        </Flex>
          
        <Flex direction='column'>
          <ImageStyled src={trophyImage}/>
          <p>{user.trophyList.length} trophies</p>
        </Flex>
      </FlexStyled>
    )
}

export default ProfileCard;