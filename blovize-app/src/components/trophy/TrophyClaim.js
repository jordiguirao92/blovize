import {Flex, FlexStyled, Input, Button, Spacer} from '../UI';


const TrophyClaim = () => {
    
    return(
      
      <FlexStyled direction='column' justify='space-around' padding='15px' margin='0px 75px'>
        <Input width='500px' height='40px' placeholder="Introduce the claim code here"/>
        <Spacer />
        <Button width='500px' height='30px'>Claim</Button>
      </FlexStyled>
    )
}

export default TrophyClaim;