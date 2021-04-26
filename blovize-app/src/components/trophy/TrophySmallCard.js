import {Flex, FlexStyled, ImageStyled, Button, P, LinkStyled} from '../UI';
import trophyImage from '../../images/trophy.png';
import Star from './Star';


const TrophySmallCard = (props) => {
  const { trophyProps } = props;
  const {image, name, team, price, id, date, playerName} = trophyProps;
  const finalDate = new Date(date.seconds*1000);
  const dateString = `${finalDate.getDate()}/${(finalDate.getMonth()) + 1}/${finalDate.getFullYear()}`;
    
    return(
      
      <LinkStyled to={`/detail/${id}`}>
        <FlexStyled justify='center' direction='column' width='320px' height='350px' padding='10px' margin='10px'>
          <Flex justify='flex-end'>
            <Star color={'gold'}/>
          </Flex>
          <ImageStyled src={trophyImage} alt='trophy image'/>
          <P bold='bold'>{name}</P>
          <P>{team}</P>
          <P>{playerName}</P>
          <P>{price}€</P>
          <Flex>
            <P>#{id}</P>
            <P>{dateString}</P>
          </Flex>
        </FlexStyled>
      </LinkStyled>
    )
}

export default TrophySmallCard;