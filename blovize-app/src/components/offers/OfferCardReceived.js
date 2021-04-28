import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {FlexStyled, Button, P} from '../UI';
import {getTrophiesById, updateTrophyDetails} from '../../controllers/trophy';
import  {updateOfferDetails} from '../../controllers/offers';
import  {updateUserProfile, getUserProfile, getUserProfileByEmail} from '../../controllers/user';


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

    /*const acceptOffer = async () => {
      try{
        const offerObject = {...offerProps, date.seconds: new Date().getTime(), salePrice: offerProps.offerPrice, status: 'closed'};
        const result = await updateOfferDetails(offerProps.id, offerObject);

        const trophyObject = {...trophies, owner: offerProps.buyer, ownerList: ownerList.push( offerProps.buyer), price:0, onSale: false, acceptOffer: false};
        const result2 = await updateTrophyDetails(trohpies.id ,trophyObject);

        const listResult = user.trophyList.filter(trophyId => trophyId !== trophies.id);
        const userObject = {...user, trophyList: listResult};
        const result3 = await updateUserProfile(user.id, userObject);

        const buyer = await getUserProfileByEmail(offerProps.buyer);
        const newTrophyList = [...buyer.trophyList, trophies.id];
        const buyerObject = {...buyer, trophyList: newTrophyList;
        const result4 = await updateUserProfile(buyer.id, userObject);

    } catch (error) {
      return error;
    }
  }
    }

    const declineOffer = async () => {
      try{
        const offerObject = {...offerProps, date.seconds: new Date().getTime(), salePrice: 0, status: 'reject'}
        const result = await updateOfferDetails(offerProps.id, offerObject);
        const result2 = await updateTrophyDetails(trohpies.id ,trophyObject);
      } catch (error) {
        return error;
      }          
    }*/
    
    return(
      
      <FlexStyled justify='space-around' margin='50px'>
        <P>#{trophies.id}</P>
        <P bold='bold'>{trophies.name}</P>
        <P>{trophies.team}</P>
        <P>{trophies.playerName}</P>
        <P>{offerProps.offerPrice}€</P>
        {offerProps.status === 'pending' ?
          <>
          <Button width='100px' backColor='green' colorBorder='green'>Accept</Button>
          <Button width='100px' backColor='red' colorBorder='red'>Decline</Button>
          </>
          :
          <P>{offerProps.status}</P>
      }
      </FlexStyled>
    )
}

export default OfferCardReceived;