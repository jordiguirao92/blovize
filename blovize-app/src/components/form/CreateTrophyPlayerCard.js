import {FlexStyled, Button, P} from '../UI';


const CreateTrophyPlayerCard = ({playerData, remove}) => {
  const {playerName, playerBlovizeEmail, numberTrophies} = playerData;
  
  
    return(
        <FlexStyled justify='space-around' margin='20px 20px' borderSize='2px'>
          <P>{playerName}</P>
          {
            playerBlovizeEmail ? 
            <P>{playerBlovizeEmail}</P> 
            :
            <P>The player has not account in Blovize</P> 
          }
          <P>{numberTrophies}</P>
          <Button width='50px' backColor='red' colorBorder='red' onClick={() => remove(playerName)}>X</Button>
        </FlexStyled>
    )
}

export default CreateTrophyPlayerCard;