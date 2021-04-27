import { useState, useEffect } from 'react';

import {FlexStyled, Button} from '../UI';
import {getTrophiesById} from '../../controllers/trophy';

const OfferCardReceived = ({offerProps}) => {
  const [trophies, setTrophies] = useState([]);
  console.log(offerProps.trophy);


  useEffect(() => {
    getTrophy();
    }, []);

    const getTrophy = async () => {
      try{
          const result = await getTrophiesById(offerProps.trophy);
          setTrophies(result[0]);
          console.log(result[0]);
      } catch (error) {
        return error;
      }
    }
    
    return(
      
      <FlexStyled justify='space-around' margin='50px'>
        <p>#{offerProps.id}</p>
        <p>{trophies.name}</p>
        <p>{trophies.team}</p>
        <p>{trophies.playerName}</p>
        <p>{offerProps.offerPrice}€</p>
        <Button width='100px' backColor='green' colorBorder='green'>Accept</Button>
        <Button width='100px' backColor='red' colorBorder='red'>Decline</Button>
      </FlexStyled>
    )
}

export default OfferCardReceived;