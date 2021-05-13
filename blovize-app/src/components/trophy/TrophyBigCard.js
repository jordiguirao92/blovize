import {AiFillHeart} from 'react-icons/ai';
import { FcRating } from 'react-icons/fc';
import {useState} from 'react';
import { useSelector } from 'react-redux';


import {Flex, FlexStyled, ImageStyled, H3, Spacer, P} from '../UI';
import Star from './Star';
import SaleOffersTrophyForm from '../form/SaleOffersTrophyForm';
import BuyTrophyForm from '../form/BuyTrophyForm';
import OfferTrophyForm from '../form/OfferTrophyForm';
import {updateUserProfile} from '../../controllers/user';
import {likeTrophy} from '../../controllers/trophy';


const TrophyBigCard = ({trophy, isOwner}) => {
  const user = useSelector(state => state.user);
  const {image, name, team, price, id, date, playerName, onSale, acceptOffers, owner, description, likes} = trophy;
  const [likedTrophies, setLikedTrophies] = useState(user.trophyLiked);
  const [favouriteTrophies, setFavouriteTrophies] = useState(user.trophyFavourites);
  const [numLikes, setNumlikes] = useState(likes);

  const finalDate = new Date(date);
  const dateString = `${finalDate.getDate()}/${(finalDate.getMonth()) + 1}/${finalDate.getFullYear()}`;

  const likeOnClick = async () => {
    try {
      if (likedTrophies.includes(id)) {
        const likeOut = likedTrophies.filter(trophyId => trophyId !== id);
        setLikedTrophies(likeOut);
        setNumlikes(numLikes - 1);
        await likeTrophy(user.id, id, {trophyLiked: likeOut}, 'removeLike');
        
      } else {
        const likeIn = [...likedTrophies, id];
        setLikedTrophies(likeIn);
        setNumlikes(numLikes + 1);
        await likeTrophy(user.id, id, {trophyLiked: likeIn}, 'addLike');
        
      }
    } catch (error) {
      return error;
    }
  }


  const favouriteOnClick = async () => {
    try {
      if (favouriteTrophies.includes(id)) {
        const favouriteOut = favouriteTrophies.filter(trophyId => trophyId !== id);
        setFavouriteTrophies(favouriteOut);
        await updateUserProfile(user.id, {trophyFavourites: favouriteOut});
  
      } else { 
        const favouriteIn = [...favouriteTrophies, id];
        setFavouriteTrophies(favouriteIn);
        await updateUserProfile(user.id, {trophyFavourites: favouriteIn});
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
              <Flex direction='column' width='auto'>
                <AiFillHeart size={30} style={{fill: likedTrophies.includes(id) ? 'red' : 'grey' , cursor: 'pointer'}} onClick={() => likeOnClick()}/> 
                <P>{numLikes}</P>
            </Flex> 
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