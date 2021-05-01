import {AiFillCloseCircle} from 'react-icons/ai';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {Flex, FlexStyled, Button, Input, H3, Spacer, P, ModalBg, ModalContent, CloseIconContainer} from '../UI';
import { updateTrophyDetails} from '../../controllers/trophy';
import {BuyTrophyModal} from './BuyTrophyModal';


const BuyTrophyForm = ({trophy}) => {

    const history = useHistory();
    const { price, id, onSale, acceptOffers} = trophy;
    const [buyProcess, setBuyProcess] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');
    
  

    return(
        <>
        <Flex justify='center' margin='20px 0px'>
            <FlexStyled direction='column' justify='center' width='500px' height='300px'>
            <H3 margin='0px'>Do you like this trophy?</H3>
            <Spacer/>
            <Button width='175px' height='30px' onClick={() => {setBuyProcess(true);}}>Yes, I want to buy it</Button>
            {error && <P color='red'>&nbsp;{error}</P>}
            </FlexStyled>
        </Flex>
        {
            buyProcess && 
            <ModalBg>
                <ModalContent>
                    <CloseIconContainer onClick={() => setShowModal(false)}><AiFillCloseCircle size={20}/></CloseIconContainer>
                    <h2>buy</h2>
                    <Spacer />
                    <Flex justify="flex-end">
                    <Button>Buy</Button>
                    </Flex>
                </ModalContent>
            </ModalBg>
        }
        </> 
    )
}

export default BuyTrophyForm;