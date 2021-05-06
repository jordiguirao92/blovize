import QRCode from "react-qr-code";

import {Flex, FlexStyled, ImageStyled, Button, P, LinkStyled} from '../UI';

const TrophyControlBoardCard = (props) => {
  const {trophyProps} = props;
  const {id, playerName, isClaimed, claimEmail, claimDate, claimCode} = trophyProps;
    
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
         <LinkStyled><QRCode value={claimCode} size={30}/></LinkStyled>
        {isClaimed ? 
        <FlexStyled width='100px' justify='center' backColor='green' colorBorder='green' color={props => props.theme.colors.white} margin='0px'>Claimed</FlexStyled>
        : <FlexStyled width='100px' justify='center' backColor='red' colorBorder='red' color={props => props.theme.colors.white} margin='0px'>No claimed</FlexStyled>
        }
      </FlexStyled>
    )
}

export default TrophyControlBoardCard;