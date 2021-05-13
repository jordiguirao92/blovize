import {Flex, FlexStyled, ImageStyled, P, LinkStyled} from '../UI';


const TrophySmallCardInstitution = (props) => {
  const { trophyProps } = props;
  const {image, name, team, id, date, playerName} = trophyProps;
  //const finalDate = new Date(date.seconds*1000);
  const finalDate = new Date(date);
  const dateString = `${finalDate.getDate()}/${(finalDate.getMonth()) + 1}/${finalDate.getFullYear()}`;
    
    return(
      
        <FlexStyled justify='center' direction='column' width='320px' height='350px' padding='0px 10px' margin='10px'>
          <ImageStyled src={image} alt='trophy image'/>
          <P align="center" bold='bold' color={props => props.theme.colors.primary}>{name}</P>
          <P color={props => props.theme.colors.primary}>{team}</P>
          <P>{playerName}</P>
          <Flex>
            <P>#{id}</P>
            <P>{dateString}</P>
          </Flex>
        </FlexStyled>
    )
}

export default TrophySmallCardInstitution;