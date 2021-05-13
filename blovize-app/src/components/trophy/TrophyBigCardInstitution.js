import { useSelector } from 'react-redux';

import {Flex, FlexStyled, ImageStyled, H3, Spacer, P} from '../UI';



const TrophyBigCardInstitution = ({father}) => {
  const user = useSelector(state => state.user);
  console.log(father);
  const [destructuredFather] = father;
  const {image, name, team, id, date, description} = destructuredFather;
 
  const finalDate = new Date(date);
  const dateString = `${finalDate.getDate()}/${(finalDate.getMonth()) + 1}/${finalDate.getFullYear()}`;

    
    return(
      <>
        <FlexStyled justify='center' width='auto' height='auto' padding='10px' margin='10px 100px'>
          <Flex direction='column'>
            <ImageStyled src={image} height='250px' alt='trophy image'/>
            <Flex justify='space-around'>
              <P>#{id}</P>
              <P>{dateString}</P>
            </Flex>
          </Flex>
          <Flex direction='column' align='flex-start'>
            <P bold='bold' color={props => props.theme.colors.primary}>{name}</P>
            <P bold='bold' color={props => props.theme.colors.primary}>{team}</P>
            <P>{description}</P>
            <Spacer/>
          </Flex>
        </FlexStyled>
        </>

    )
}

export default TrophyBigCardInstitution;