import {Flex} from '../UI';
import TrophySmallCard from './TrophySmallCard';
import TrophySmallCardInstitution from './TrophySmallCardInstitution';


const TrophiesGallery = (props) => {
  const { trophiesCollection, isPlayer } = props;
  console.log(trophiesCollection);
 

    return(
      <Flex wrap='wrap' align='stretch' justify='flex-start' margin='50px'>
        {trophiesCollection.map((trophy) => {
            return(
              isPlayer ?
                <TrophySmallCard 
                  key={trophy.id}
                  trophyProps={trophy}
                />
                :
                <TrophySmallCardInstitution 
                  key={trophy.id}
                  trophyProps={trophy}
                />
            )
        })}
      </Flex>
    )
}

export default TrophiesGallery;