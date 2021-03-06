import { useState, useEffect } from 'react';

import {FlexStyled, P} from '../UI';
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
        <P>#{trophies.id}</P>
        <P bold='bold'>{trophies.name}</P>
        <P>{trophies.team}</P>
        <P>{trophies.playerName}</P>
        <P>{offerProps.offerPrice}€</P>
        {offerProps.status === 'closed' ? 
          <P color='green' bold='bold'>Closed</P> : offerProps.status === 'rejected' ? 
          <P color='red' bold='bold'>Rejected</P> : <P color='orange' bold='bold'>Pending</P> 
        }
      </FlexStyled>
    )
}

export default OfferCardSend;