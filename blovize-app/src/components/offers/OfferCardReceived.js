import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {FlexStyled, Button, P} from '../UI';
import {getTrophiesById} from '../../controllers/trophy';
import  {acceptOfferReceived, declineOfferReceived} from '../../controllers/offers';



const OfferCardReceived = ({offerProps}) => {
  const [trophies, setTrophies] = useState([]);
  console.log(offerProps);
  const user = useSelector(state => state.user);
  console.log(user);

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

    const acceptOffer = async () => {
      try{
          const result = await acceptOfferReceived(offerProps, trophies, user);
      } catch (error) {
        return error;
      }
    }

    const declineOffer = async () => {
      try{
        const result = await declineOfferReceived(offerProps);
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
        {offerProps.status === 'pending' ?
          <>
          <Button width='100px' backColor='green' colorBorder='green' onClick={() => acceptOffer()}>Accept</Button>
          <Button width='100px' backColor='red' colorBorder='red' onClick={() => declineOffer()}>Decline</Button>
          </>
          :
          offerProps.status === 'closed' ? 
          <P color='green' bold='bold'>Closed</P> 
          : 
          offerProps.status === 'rejected' && 
          <P color='red' bold='bold'>Rejected</P> 
      }
      </FlexStyled>
    )
}

export default OfferCardReceived;