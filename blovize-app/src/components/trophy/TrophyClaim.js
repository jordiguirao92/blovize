import {Flex, FlexStyled, Input, Button, Spacer} from '../UI';


const TrophyClaim = () => {
    
    return(
      
      <FlexStyled justify='space-around' padding='15px'>
        <Input width='300px' height='30px' placeholder="Introduce the claim code here"/>
        <Button>Claim</Button>
      </FlexStyled>
    )
}

export default TrophyClaim;