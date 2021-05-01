import {AiFillHeart} from 'react-icons/ai';
import { FcRating } from 'react-icons/fc';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import {Flex, FlexStyled, ImageStyled, Button, P, LinkStyled, Spacer} from '../UI';
import Star from './Star';
import {updateUserProfile} from '../../controllers/user';


const TrophySmallCard = (props) => {
  const user = useSelector(state => state.user);
  const [likedTrophies, setLikedTrophies] = useState(user.trophyLiked);
  const [favouriteTrophies, setFavouriteTrophies] = useState(user.trophyFavourites);
  const { trophyProps } = props;
  const {image, name, team, price, id, date, playerName, onSale, acceptOffers, owner} = trophyProps;

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
            onSale ? <P>On sale for {price}€</P> : acceptOffers && <P>You accept offers</P> 
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