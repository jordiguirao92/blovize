import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {Flex, FlexStyled, Button, Input, H3, Spacer, P} from '../UI';
import { updateTrophyDetails} from '../../controllers/trophy';


const SaleOffersTrophyForm = ({trophy}) => {

    const history = useHistory();
    const { price, id, onSale, acceptOffers} = trophy;
    const [acceptOffersState, setAcceptOffersState] = useState(acceptOffers);
    const [onSaleState, setOnSaleState] = useState(onSale);
    const [formData, setFormData] = useState({ price: '' });
    const [error, setError] = useState('');
    
    const setAcceptOffers = async () => {
        setOnSaleState(false);
        setAcceptOffersState(true);
        const {success} = await updateTrophyDetails(id.toString(), {...trophy, acceptOffers: true, onSale: false, price: 0});
        history.push('/my-trophies');
        return success;
    }

    const noOffersNoSale = async () => {
        setOnSaleState(false);
        setAcceptOffersState(false);
        const {success} = await updateTrophyDetails(id.toString(), {...trophy, acceptOffers: false, onSale: false, price: 0});
        history.push('/my-trophies');
        return success;
    }


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (formData.price > 0) {
            setAcceptOffersState(false);
            setOnSaleState(true);
            setError('');
            const {success} = await updateTrophyDetails(id.toString(), {...trophy, ...formData, acceptOffers: false, onSale: true});
            history.push('/my-trophies');
            return success;
        } else {
            setError('Please introduce a price greater than 0')
        }
        
    }

    return(
        <Flex justify='center' margin='20px 0px'>
            <FlexStyled direction='column' justify='center' width='500px' height='300px'>
            {
                onSaleState && !acceptOffersState ? 
                <H3 color={props => props.theme.colors.primary} margin='0px'>Now you trophy is on sale</H3>
                :
                !onSaleState && acceptOffersState &&
                <H3 color={props => props.theme.colors.primary} margin='0px'>Now you accept offers for your trophy</H3>
            }
            <Spacer/>
            <H3 margin='0px'>What do you want to do with your trophy?</H3>
            <Spacer/>
            <Flex justify='space-evenly' >
            {
                !onSaleState && !acceptOffersState &&
                <>
                <Button width='175px' height='30px' 
                        onClick={() => {
                            setAcceptOffersState(false);
                            setOnSaleState(!onSaleState);
                        }}
                        >I want to sell</Button>
                <Button width='175px' height='30px'
                        color={props => props.theme.colors.primary} 
                        backColor={props => props.theme.colors.white}
                        onClick={() => {
                            setAcceptOffers();
                        }}
                        >I want to receive offers</Button>
                </>
            }
            {
                onSaleState && !acceptOffersState &&
                <>
                <Button width='175px' height='30px'
                        color={props => props.theme.colors.primary} 
                        backColor={props => props.theme.colors.white}
                        onClick={() => {
                            setAcceptOffers();
                        }}
                        >I want to receive offers</Button>
                <Button width='175px' height='30px'
                        onClick={() => {
                            noOffersNoSale();
                        }}
                        >No offers & No sale</Button>
                </>
            }
            {
                !onSaleState && acceptOffersState &&
                <> 
                <Button width='175px' height='30px'
                        color={props => props.theme.colors.primary} 
                        backColor={props => props.theme.colors.white}
                        onClick={() => {
                            setAcceptOffersState(false);
                            setOnSaleState(!onSaleState);
                        }}
                        >I want to sell</Button>
                <Button width='175px' height='30px'
                        onClick={() => {
                            noOffersNoSale();
                        }}
                        >No offers & No sale</Button>
                </>
            }
            </Flex>
            <Spacer height='50px'/>
            {
                onSaleState && !acceptOffersState && price == 0 &&
                <form onSubmit={handleFormSubmit}>
                    <Flex justify='center' align='flex-end' >
                        <Flex direction='column' align='flex-start'>
                            <label htmlFor='price'>Set price in €</label>
                            <Input width='150px' height='30px' 
                                id='price' 
                                name='price' 
                                type='text' 
                                placeholder='Introduce the sale price' 
                                value={formData.price} 
                                onChange={(event) => {
                                    setFormData({ ...formData, price: Number(event.target.value)});
                                    }
                                }
                            />
                        </Flex>
                        <Button width='100px' height='30px'>On Sale</Button>
                    </Flex>
                </form>
            }
            {error && <P color='red'>&nbsp;{error}</P>}
    
            </FlexStyled>
        </Flex>
        
    )
}

export default SaleOffersTrophyForm;