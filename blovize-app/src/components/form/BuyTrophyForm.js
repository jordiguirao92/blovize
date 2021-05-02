import {AiFillCloseCircle} from 'react-icons/ai';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';

import {Flex, FlexStyled, Button, Input, H3, Spacer, P, ModalBg, ModalContent, CloseIconContainer} from '../UI';
import {updateBuyTrophy} from '../../controllers/trophy';
import {updateBuyTrophyUsers} from '../../controllers/user';


const BuyTrophyForm = ({trophy}) => {
    const history = useHistory();
    const user = useSelector(state => state.user);
    const { price, id, onSale, acceptOffers} = trophy;
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');

    const buyTrophy = async () => {
        const result = await updateBuyTrophyUsers(user, trophy);
        const {success} = await updateBuyTrophy(user, trophy);
        return {success, result}
    }
    
  

    return(
        <>
        <Flex justify='center' margin='20px 0px'>
            <FlexStyled direction='column' justify='center' width='500px' height='300px'>
            <H3 margin='0px'>Do you like this trophy?</H3>
            <Spacer/>
            <Button width='175px' height='30px' onClick={() => {setShowModal(true);}}>Yes, I want to buy it</Button>
            {error && <P color='red'>&nbsp;{error}</P>}
            </FlexStyled>
        </Flex>

        <ModalBg show={showModal}>
            <ModalContent show={showModal}>
                <CloseIconContainer onClick={() => setShowModal(false)}><AiFillCloseCircle size={30}/></CloseIconContainer>
                <H3 color={props => props.theme.colors.black}>Are you sure that you want to buy this trophy for {price}?</H3>
                <Spacer />
                <Flex justify="center">
                    <Button width='175px' height='30px' onClick={() => {buyTrophy();}}>Yes, I want to buy</Button>
                </Flex>
            </ModalContent>
        </ModalBg>
        </> 
    )
}

export default BuyTrophyForm;