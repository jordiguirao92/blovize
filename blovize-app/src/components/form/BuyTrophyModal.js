import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {Flex, FlexStyled, Button, Input, H3, Spacer, P, ModalBg} from '../UI';
import { updateTrophyDetails} from '../../controllers/trophy';


const BuyTrophyModal = ({trophy}) => {

    const history = useHistory();
    const { price, id, onSale, acceptOffers} = trophy;
    const [buyProcess, setBuyProcess] = useState(false);
    const [error, setError] = useState('');
    
  

    return(
        <Flex justify='center' margin='20px 0px'>
            <FlexStyled direction='column' justify='center' width='500px' height='300px'>
            <H3 margin='0px'>Do you like this trophy?</H3>
            <Spacer/>
            <Button width='175px' height='30px' onClick={() => {setBuyProcess(true);}}>Yes, I want to buy it</Button>
            {error && <P color='red'>&nbsp;{error}</P>}
            </FlexStyled>
        </Flex>

    )
}

export default BuyTrophyModal;