import { useSelector } from 'react-redux';
import {Flex, FlexStyled, Button, LinkStyled, P} from '../UI';

const TrophyControlCard = (props) => {
  const user = useSelector(state => state.user);
  const { trophyProps } = props;
  const {image, name, team, price, id, date, playerName} = trophyProps;
  const finalDate = new Date(date.seconds*1000);
  const dateString = `${finalDate.getDate()}/${(finalDate.getMonth()) + 1}/${finalDate.getFullYear()}`;
    
    return(
      <FlexStyled justify='space-around'  width='80%' height='50px' margin='10px 50px'>
        <P>#{id}</P>
        <P bold='bold'>{name}</P>
        <P>{team}</P>
        <P>{dateString}</P>
        <P>{user.trophyList.length} trophies</P>
        <LinkStyled to={`/trophies-control-board/${id}`}><Button>Control Board</Button></LinkStyled>
      </FlexStyled>
    )
}

export default TrophyControlCard;