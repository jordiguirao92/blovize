import QRCode from "react-qr-code";
import {MdEmail} from 'react-icons/md';

import {Flex, FlexStyled, ImageStyled, Button, P, LinkStyled, A} from '../UI';
import {firebaseBlovizeLink} from '../../configFirabase';

const TrophyControlBoardCard = (props) => {
  const {trophyProps} = props;
  const {id, playerName, isClaimed, claimEmail, claimDate, claimCode} = trophyProps;
  const finalDate = new Date(claimDate);
  const dateString = `${finalDate.getDate()}/${(finalDate.getMonth()) + 1}/${finalDate.getFullYear()}`;
  const claimLink = `${firebaseBlovizeLink? firebaseBlovizeLink : 'http://localhost:3000'}/claim-trophy?claimCode=${claimCode}`
  console.log(claimLink);
    
    return(
      
      <FlexStyled justify='space-around' margin='30px 50px' height='50px'>
        <P>#{id}</P>
        <P>{playerName}</P>
        {
          isClaimed ? 
          <P>Claim email:{claimEmail}</P>
          :
          <P>Claim code:{claimCode}</P>
        }
        {
          isClaimed ? 
          <P>{dateString}</P>
          :
          <A href={`mailto:${claimEmail}?subject=Hello ${claimEmail}, claim your trophy! - Blovize&body=Congratulations for your tropy. You can claim it in the following link:%0D${claimLink}`}><MdEmail size={30}/></A>
        }
         <LinkStyled><QRCode value={claimCode} size={30}/></LinkStyled>
        {isClaimed ? 
        <FlexStyled width='100px' justify='center' backColor='green' colorBorder='green' color={props => props.theme.colors.white} margin='0px'>Claimed</FlexStyled>
        : <FlexStyled width='100px' justify='center' backColor='red' colorBorder='red' color={props => props.theme.colors.white} margin='0px'>No claimed</FlexStyled>
        }
      </FlexStyled>
    )
}

export default TrophyControlBoardCard;