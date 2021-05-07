import {FlexStyled, Button, P} from '../UI';


const CreateTrophyPlayerCard = ({playerData, remove}) => {
  const {playerName, playerEmail, numberTrophies, isBlovizeUser} = playerData;
  
  
    return(
        <FlexStyled justify='space-around' margin='20px 20px' borderSize='2px'>
          <P>{playerName}</P>
          {
            isBlovizeUser ? 
            <P>{playerEmail}<P margin='0px' color= {props => props.theme.colors.primary}> is a Blovize user</P></P> 
            :
            <P>{playerEmail}<P margin='0px' color= {props => props.theme.colors.primary}> is not a Blovize user</P></P> 
          }
          <P>{numberTrophies}</P>
          <Button width='50px' backColor='red' colorBorder='red' onClick={() => remove(playerName)}>X</Button>
        </FlexStyled>
    )
}

export default CreateTrophyPlayerCard;