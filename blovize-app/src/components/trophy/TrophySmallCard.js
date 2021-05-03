import {AiFillHeart} from 'react-icons/ai';
import { FcRating } from 'react-icons/fc';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import {Flex, FlexStyled, ImageStyled, Button, P, LinkStyled, Spacer} from '../UI';
import Star from './Star';
import {updateUserProfile} from '../../controllers/user';
import {updateTrophyDetails, getTrophiesById} from '../../controllers/trophy';


const TrophySmallCard = (props) => {
  const user = useSelector(state => state.user);
  const [likedTrophies, setLikedTrophies] = useState(user.trophyLiked);
  const [favouriteTrophies, setFavouriteTrophies] = useState(user.trophyFavourites);
  const { trophyProps } = props;
  const {image, name, team, price, id, date, playerName, onSale, acceptOffers, owner, likes} = trophyProps;

  const finalDate = new Date(date.seconds*1000);
  const dateString = `${finalDate.getDate()}/${(finalDate.getMonth()) + 1}/${finalDate.getFullYear()}`;

  
  const likeOnClick = async () => {
    try {
      if (likedTrophies.includes(id)) {
        const likeOut = likedTrophies.filter(trophyId => trophyId !== id);
        setLikedTrophies(likeOut);
       // await updateUserProfile(user.id, {trophyLiked: likeOut});
        const [data] = await getTrophiesById(id);
        const {likes} = data;
        await updateTrophyDetails(id.toString(), {likes: likes - 1 });
  
      } else {
        const likeIn = [...likedTrophies, id];
        setLikedTrophies(likeIn);
        await updateUserProfile(user.id, {trophyLiked: likeIn});
        const [data] = await getTrophiesById(id);
        const {likes} = data;
        await updateTrophyDetails(id.toString(), {likes: likes + 1 });
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
        <FlexStyled justify='center' direction='column' width='320px' height='auto' padding='10px' margin='10px'>
          <Flex justify='space-between' margin='0px'>
            <Star color={favouriteTrophies.includes(id) ? 'gold' : 'grey'}  onClick={() => favouriteOnClick()}/>
            {
              user.email === owner && <FcRating size={30} />
            }
            <AiFillHeart size={30} style={{fill: likedTrophies.includes(id) ? 'red' : 'grey' , cursor: 'pointer'}} onClick={() => likeOnClick()}/>
          </Flex>
          <Spacer/>
          <LinkStyled to={`/detail/${id}`}> <ImageStyled src={image} alt='trophy image'/></LinkStyled>
          <P align="center" bold='bold' color={props => props.theme.colors.primary}>{name}</P>
          <P bold='bold' color={props => props.theme.colors.primary}>{team}</P>
          <P bold='bold' color={props => props.theme.colors.primary}>{playerName}</P>
          {
            user.email === owner ? 
            onSale ? <P>You sale it for {price}€</P> : acceptOffers && <P>You accept offers</P> 
            : 
            onSale ?<P> {price}€</P> : acceptOffers && <P>Make an offer</P>
          }
          <Flex>
            <P>#{id}</P>
            <P>{dateString}</P>
          </Flex>
        </FlexStyled>
    )
}

export default TrophySmallCard;