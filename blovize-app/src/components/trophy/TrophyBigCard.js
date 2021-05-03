import {AiFillHeart} from 'react-icons/ai';
import { FcRating } from 'react-icons/fc';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';


import {Flex, FlexStyled, Button, ImageStyled, H3, Spacer, P, ModalBg, ModalContent, CloseIconContainer, LinkStyled} from '../UI';
import Star from './Star';
import {updateUserProfile} from '../../controllers/user';
import SaleOffersTrophyForm from '../form/SaleOffersTrophyForm';
import BuyTrophyForm from '../form/BuyTrophyForm';
import OfferTrophyForm from '../form/OfferTrophyForm';


const TrophyBigCard = ({trophy, isOwner}) => {
  const user = useSelector(state => state.user);
  const {image, name, team, price, id, date, playerName, onSale, acceptOffers, owner, description} = trophy;
  const [likedTrophies, setLikedTrophies] = useState(user.trophyLiked);
  const [favouriteTrophies, setFavouriteTrophies] = useState(user.trophyFavourites);
  const finalDate = new Date(date.seconds*1000);
  const dateString = `${finalDate.getDate()}/${(finalDate.getMonth()) + 1}/${finalDate.getFullYear()}`;

  const likeOnClick = async () => {
    try {
      if (likedTrophies.includes(id)) {
        const result = likedTrophies.filter(trophyId => trophyId !== id);
        console.log(result);
        setLikedTrophies(result);
        console.log(likedTrophies);
        //await updateUserProfile(user.id, result);
  
      } else { 
        setLikedTrophies(likedTrophies.push(id));
        console.log(likedTrophies);
        //await updateUserProfile(user.id, result);
      }
    } catch (error) {
      return error;
    }
  }


  const favouriteOnClick = async () => {
    try {
      if (favouriteTrophies.includes(id)) {
        const result = favouriteTrophies.filter(trophyId => trophyId !== id);
        console.log(result);
        setFavouriteTrophies(result);
        console.log(favouriteTrophies);
        //await updateUserProfile(user.id, result);
  
      } else { 
        setFavouriteTrophies(favouriteTrophies.push(id));
        console.log(favouriteTrophies);
        //await updateUserProfile(user.id, result);
      }
    } catch (error) {
      return error;
    }
  }

 
    
    return(
      <>
        <FlexStyled justify='center' width='auto' height='auto' padding='10px' margin='10px 100px'>
          <Flex direction='column'>
            <Flex justify='space-around'>
              <Star color={favouriteTrophies.includes(id) ? 'gold' : 'grey'}  onClick={() => favouriteOnClick()}/>
              {
                user.email === owner && <FcRating size={30} />
              }
              <AiFillHeart size={30} style={{fill: likedTrophies.includes(id) ? 'red' : 'grey' , cursor: 'pointer'}} onClick={() => likeOnClick()}/>
            </Flex>
            <Spacer/>
            <ImageStyled src={image} height='250px' alt='trophy image'/>
            <Flex justify='space-around'>
              <P>#{id}</P>
              <P>{dateString}</P>
            </Flex>
          </Flex>
          <Flex direction='column' align='flex-start'>
            <P bold='bold' color={props => props.theme.colors.primary}>{name}</P>
            <P bold='bold' color={props => props.theme.colors.primary}>{team}</P>
            <P bold='bold' color={props => props.theme.colors.primary}>{playerName}</P>
            <P>{description}</P>
            <Spacer/>
            {
            isOwner ? 
            onSale ? <P>On sale for {price}€</P> : acceptOffers && <P>You accept offers</P> 
            : 
            onSale ?<P>Buy for {price}€</P> : acceptOffers && <P>Make an offer</P>
          }
          </Flex>
        </FlexStyled>

        {isOwner ? 
        <SaleOffersTrophyForm trophy={trophy}/> 
          : 
          onSale && !acceptOffers ? 
          <BuyTrophyForm  trophy={trophy}/>
          : 
          !onSale && acceptOffers &&
          <OfferTrophyForm  trophy={trophy}/>
        }
        </>

    )
}

export default TrophyBigCard;