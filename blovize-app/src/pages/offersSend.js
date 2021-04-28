import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import OfferCardReceived from '../components/offers/OfferCardReceived';
import {getOffersSend} from '../controllers/offers';
import OfferCardSend from '../components/offers/OfferCardSend'




const OffersSend= () => {
    const [offersSend, setOffersSend] = useState([]);
    const user = useSelector(state => state.user);
  
      useEffect(() => {
        getOffers();
        }, []);
  
        const getOffers = async () => {
          try{
              const offers = await getOffersSend(user.email);
              setOffersSend(offers);
          } catch (error) {
            return error;
          }
        }


    return(
        <>
            <MainLayout>
                    <ProfileCard />
                    {offersSend.map((offer) => {
                      return(
                          <OfferCardSend 
                            key={offer.id}
                            offerProps={offer}
                          />
                          )
                    })}
            </MainLayout>
        </>  
    )
}

export default OffersSend;