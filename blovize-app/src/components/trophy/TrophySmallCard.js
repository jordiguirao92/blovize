import {Flex, FlexStyled, ImageStyled, Button} from '../UI';
import trophyImage from '../../images/trophy.png'

const TrophySmallCard = () => {
    
    return(
      
      <FlexStyled justify='space-around'>
        <Flex>
          <img src='' alt='corazon'/>
        </Flex>
        <ImageStyled src={trophyImage} alt='trophy image'/>
        <p>UEFA CHAMPIONS LEGAUE 2020</p>
        <p>Real Madrid</p>
        <p>Price</p>
        <Flex>
          <p>ID: 234</p>
          <p>15/05/2020</p>
        </Flex>
      </FlexStyled>
    )
}

export default TrophySmallCard;