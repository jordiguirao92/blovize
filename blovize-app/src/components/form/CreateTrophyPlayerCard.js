import {AiFillHeart} from 'react-icons/ai';
import { FcRating } from 'react-icons/fc';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import {Flex, FlexStyled, ImageStyled, Button, P, LinkStyled, Spacer} from '../UI';
import {updateUserProfile} from '../../controllers/user';
import {updateTrophyDetails, getTrophiesById, likeTrophy} from '../../controllers/trophy';


const CreateTrophyPlayerCard = (props) => {
  const user = useSelector(state => state.user);
  const { trophyProps } = props;
  const {image, name, team, price, id, date, playerName, onSale, acceptOffers, owner, likes} = trophyProps;
  
  
    return(
        <FlexStyled justify='center' direction='column' width='320px' height='auto' padding='10px' margin='10px'>
          
        </FlexStyled>
    )
}

export default CreateTrophyPlayerCard;