import {Flex, FlexStyled, Input, Button, Spacer} from '../UI';
import { useState } from 'react';
import {claimTrophy} from '../../controllers/trophy'


const TrophyClaim = ({claimCode}) => {
  const[claimCodeData, setClaimCodeData] =  useState({claimCode: claimCode ? claimCode : ''})
  const [error, setError] = useState('');
  console.log(claimCodeData.claimCode)
  console.log(claimCode);

  const claim = async() => {
    console.log('claim')
    await claimTrophy(claimCodeData);
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
      </FlexStyled>
    )
}

export default TrophyClaim;