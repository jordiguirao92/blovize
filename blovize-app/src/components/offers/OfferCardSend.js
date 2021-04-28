import { useState, useEffect } from 'react';

import {Flex, FlexStyled, Button, P} from '../UI';
import {getTrophiesById} from '../../controllers/trophy';

const OfferCardSend = ({offerProps}) => {
  const [trophies, setTrophies] = useState([]);

  useEffect(() => {
    getTrophy();
    }, []);

    const getTrophy = async () => {
      try{
          const [result] = await getTrophiesById(offerProps.trophy);
          setTrophies(result);
          console.log(result);
      } catch (error) {
        return error;
      }
    }
    
    return(
      
      <FlexStyled justify='space-around' margin='50px'>
        <P>#{offerProps.id}</P>
        <P bold='bold'>{trophies.name}</P>
        <P>{trophies.team}</P>
        <P>{trophies.playerName}</P>
        <P>{offerProps.offerPrice}€</P>
        {offerProps.offerPrice === 'closed' ? 
          <P color='green' bold='bold'>Closed</P> : offerProps.offerPrice === 'rejected' ? 
          <P color='red' bold='bold'>Rejected</P> : <P color='orange' bold='bold'>Pending</P> 
        }
      </FlexStyled>
    )
}

export default OfferCardSend;