import {Flex, FlexStyled, Input, Button, Spacer, P} from '../UI';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';

import {claimTrophy} from '../../controllers/trophy';


const TrophyClaim = ({claimCode, user}) => {
  const [claimCodeData, setClaimCodeData] =  useState({claimCode: claimCode ? claimCode : ''})
  const [error, setError] = useState('');
  const history = useHistory();
  

  const claim = async() => {
    const {success, message} = await claimTrophy(claimCodeData.claimCode, user);
    console.log(success, message);
    if(success) {
      setError('');
      history.push(`/detail/${message.id}`);
    }
    return !success && setError(message);
  }
    

    return(
      <FlexStyled direction='column' justify='space-around' width='' padding='40px' margin='30px 75px'>
        <Input width='300px' 
               height='40px' 
               id='claimCode' 
               name='claimCode' 
               type='text' 
               placeholder='Introduce the claim code here' 
               value={claimCodeData.claimCode} 
               onChange={(event) => setClaimCodeData({ ...claimCodeData, claimCode: event.target.value })}
               />
        <Spacer />
        <Button width='300px' height='30px' onClick={() => claim()}>Claim</Button>
        {error && <P color='red'>&nbsp;{error}</P>}
      </FlexStyled>
    )
}

export default TrophyClaim;