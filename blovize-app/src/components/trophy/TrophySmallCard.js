import {Flex, FlexStyled, ImageStyled, Button, P} from '../UI';
import trophyImage from '../../images/trophy.png';
import Star from './Star';


const TrophySmallCard = () => {
    
    return(
      
      <FlexStyled justify='center' direction='column' width='300px' height='320px' padding='10px'>
        <Flex justify='flex-end'>
          <Star  color={'gold'}/>
        </Flex>
        <ImageStyled src={trophyImage} alt='trophy image'/>
        <P bold='bold'>UEFA CHAMPIONS LEGAUE 2020</P>
        <P>Real Madrid</P>
        <P>25€</P>
        <Flex>
          <P>ID: 234</P>
          <P>15/05/2020</P>
        </Flex>
      </FlexStyled>
    )
}

export default TrophySmallCard;