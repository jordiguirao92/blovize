import {Flex, FlexStyled, ImageStyled, Button, P} from '../UI';
import TrophySmallCard from './TrophySmallCard';


const TrophiesGallery = (trophies) => {
    
    return(
      <Flex >
        {trophies.map((trophy) => {
            return(
                <TrophySmallCard />
            )
        })}
      </Flex>
    )
}

export default TrophiesGallery;