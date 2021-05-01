import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {Flex, FlexStyled, Button, Input, H3, Spacer, P} from '../UI';
import { updateTrophyDetails} from '../../controllers/trophy';


const SaleOffersTrophyForm = ({trophy}) => {

    const history = useHistory();
    const { price, id, playerName, onSale, acceptOffers} = trophy;
    const [acceptOffersState, setAcceptOffersState] = useState(acceptOffers);
    const [onSaleState, setOnSaleState] = useState(onSale);
    const [error, setError] = useState('');
    console.log(trophy, acceptOffersState);
    
    const setAcceptOffers = async () => {
        console.log(acceptOffersState);
        //const {success} = await updateTrophyDetails(id, {...trophy, acceptOffers: acceptOffersState});
        //return success;
    }

    const setOnSale = async () => {
        console.log(acceptOffersState);
        //const {success} = await updateTrophyDetails(id, {...trophy, acceptOffers: acceptOffersState});
        //return success;
    }

    return(
        <Flex justify='center' margin='20px 0px'>
            <FlexStyled direction='column' justify='center' width='500px' height='300px'>
            <H3 margin='0px'>What do you want to do with your trophy?</H3>
            <Spacer/>
            <Flex justify='space-evenly' >
                <Button width='150px' height='30px'
                         onClick={() => {
                            setAcceptOffersState(true);
                            setOnSale();
                        }}
                         >Sell my trophy</Button>
                <Button width='150px' height='30px' 
                        onClick={() => {
                            setAcceptOffersState(true);
                            setOnSale();
                        }}
                        >Not sell my trophy</Button>
            </Flex>
            <Spacer height='50px'/>
            <Flex justify='space-evenly' >
                <Button width='150px' height='30px' 
                        color={props => props.theme.colors.primary} 
                        backColor={props => props.theme.colors.white}
                        onClick={() => {
                            setAcceptOffersState(true);
                            setAcceptOffers();
                        }}
                        >Accept Offers</Button>
                <Button width='150px' height='30px' 
                        color={props => props.theme.colors.primary} 
                        backColor={props => props.theme.colors.white}
                        onClick={() => {
                            setAcceptOffersState(false);
                            setAcceptOffers();
                        }}
                        >Not Accept Offers</Button>
            </Flex>
            </FlexStyled>
        </Flex>
        
    )
}

export default SaleOffersTrophyForm;