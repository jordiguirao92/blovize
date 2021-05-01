import {AiFillHeart} from 'react-icons/ai'

import {Flex, FlexStyled, ImageStyled, P, LinkStyled} from '../UI';


const TrophySmallCardInstitution = (props) => {
  const { trophyProps } = props;
  const {image, name, team, price, id, date, playerName, likes} = trophyProps;
  const finalDate = new Date(date.seconds*1000);
  const dateString = `${finalDate.getDate()}/${(finalDate.getMonth()) + 1}/${finalDate.getFullYear()}`;
    
    return(
      
      <LinkStyled to={`/detail/${id}`}>
        <FlexStyled justify='center' direction='column' width='320px' height='350px' padding='0px 10px' margin='10px'>
          <Flex justify='flex-end'>
            <P>{likes}</P>
            <AiFillHeart size={30} style={{fill:'red'}}/>
          </Flex>
          <ImageStyled src={image} alt='trophy image'/>
          <P bold='bold'>{name}</P>
          <P>{team}</P>
          <P>{playerName}</P>
          
          <Flex>
            <P>#{id}</P>
            <P>{dateString}</P>
          </Flex>
        </FlexStyled>
      </LinkStyled>
    )
}

export default TrophySmallCardInstitution;