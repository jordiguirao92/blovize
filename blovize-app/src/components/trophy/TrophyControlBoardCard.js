import {Flex, FlexStyled, ImageStyled, Button} from '../UI';
import qrImage from '../../images/qrcode.png'

const TrophyControlBoardCard = () => {
    
    return(
      
      <FlexStyled justify='space-around'>
        <p>ID: 22</p>
        <p>Jordi Guirao Muns</p>
        <p>Claim code: edefrt</p>
        <ImageStyled height='50px' src={qrImage} alt='QR CODE'/>
        <Button width='100px' backColor='green' colorBorder='green'>Claimed</Button>
        <Button width='100px' backColor='red' colorBorder='red'>No claimed</Button>
      </FlexStyled>
    )
}

export default TrophyControlBoardCard;