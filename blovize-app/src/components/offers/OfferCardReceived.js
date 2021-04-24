import {Flex, FlexStyled, Button} from '../UI';

const OfferCardReceived = () => {
    
    return(
      
      <FlexStyled justify='space-around' margin='50px'>
        <p>ID: 22</p>
        <p>UEFA Champions League 2020</p>
        <p>Real Madrid</p>
        <p>15-05-2021</p>
        <p>25€</p>
        <Button width='100px' backColor='green' colorBorder='green'>Accept</Button>
        <Button width='100px' backColor='red' colorBorder='red'>Decline</Button>
      </FlexStyled>
    )
}

export default OfferCardReceived;