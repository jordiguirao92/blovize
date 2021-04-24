import {Flex, FlexStyled, Button, LinkStyled} from '../UI';

const TrophyControlCard = () => {
    
    return(
      
      <FlexStyled justify='space-around' margin='50px'>
        <p>ID: 22</p>
        <p>UEFA Champions League 2020</p>
        <p>Real Madrid</p>
        <p>15-05-2021</p>
        <p>12 trophies</p>
        <LinkStyled to={'/trophies-control-board'}><Button>Control Board</Button></LinkStyled>
      </FlexStyled>
    )
}

export default TrophyControlCard;