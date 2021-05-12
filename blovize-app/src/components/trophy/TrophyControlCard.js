import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {FlexStyled, Button, LinkStyled, P} from '../UI';
import {getChildrenTrophies} from '../../controllers/trophy';

const TrophyControlCard = (props) => {
  const user = useSelector(state => state.user);
  const [childrenTrophies, setChildrenTrophies] = useState([]);
  const { trophyProps } = props;
  const {name, team, id, date} = trophyProps;
  //const finalDate = new Date(date.seconds*1000);
  const finalDate = new Date(date);
  const dateString = `${finalDate.getDate()}/${(finalDate.getMonth()) + 1}/${finalDate.getFullYear()}`;

  useEffect(() => {
    getChildrenTrophy();
    }, []);

    const getChildrenTrophy = async () => {
      try{
          const childrenTrophies = await getChildrenTrophies(id);
          setChildrenTrophies(childrenTrophies);
          console.log(childrenTrophies);
      } catch (error) {
        return error;
      }
    }
    
    return(
      <FlexStyled justify='space-around'  height='50px' margin='50px'>
        <P>#{id}</P>
        <P bold='bold'>{name}</P>
        <P>{team}</P>
        <P>{dateString}</P>
        <P>{childrenTrophies.length} trophies</P>
        <LinkStyled to={`/trophies-control-board/${id}`}><Button>Control Board</Button></LinkStyled>
      </FlexStyled>
    )
}

export default TrophyControlCard;