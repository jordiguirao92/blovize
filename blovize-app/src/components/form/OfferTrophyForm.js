import {AiFillCloseCircle} from 'react-icons/ai';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';

import {Flex, FlexStyled, Button, Input, H3, Spacer, P, ModalBg, ModalContent, CloseIconContainer} from '../UI';
import {createOffer} from '../../controllers/offers';


const OfferTrophyForm = ({trophy}) => {
    const history = useHistory();
    const user = useSelector(state => state.user);
    const { price, id, onSale, acceptOffers} = trophy;
    const [formData, setFormData] = useState({ price: ''});
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');

    const offerTrophy = async () => {
        const result = await createOffer(user, trophy, formData);
        console.log(result)
        if(result.success) {
            history.push('/offer-send')
        } else {
            return false
        }
    }
    
  

    return(
        <>
        <Flex justify='center' margin='20px 0px'>
            <FlexStyled direction='column' justify='center' width='500px' height='300px'>
            <H3 margin='0px'>Do you like this trophy?</H3>
            <Spacer/>
            <Button width='190px' height='30px' onClick={() => {setShowModal(true);}}>Yes, I want to make an offer</Button>
            {error && <P color='red'>&nbsp;{error}</P>}
            </FlexStyled>
        </Flex>

        <ModalBg show={showModal}>
            <ModalContent show={showModal}>
                <CloseIconContainer onClick={() => setShowModal(false)}><AiFillCloseCircle size={30}/></CloseIconContainer>
                <H3 color={props => props.theme.colors.black}>Set your price offer here and send it to the owner</H3>
                <Spacer />
                <Flex justify="center">
                <Input width='150px' height='30px' 
                                id='offerPrice' 
                                name='offerPrice' 
                                type='text' 
                                placeholder='Introduce the offer price' 
                                value={formData.price} 
                                onChange={(event) => {
                                    setFormData({price: Number(event.target.value)});
                                    console.log(formData)
                                    }
                                }
                            />
                    <Button width='100px' height='30px' margin='10px' onClick={() => {offerTrophy();}}>Send offer</Button>
                </Flex>
            </ModalContent>
        </ModalBg>
        </> 
    )
}

export default OfferTrophyForm;