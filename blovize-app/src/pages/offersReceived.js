import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import OfferCardReceived from '../components/offers/OfferCardReceived';
import {getOffersReceived} from '../controllers/offers';


const OffersReceived = () => {
  const [offersReceived, setOffersReceived] = useState([]);
  const user = useSelector(state => state.user);

    useEffect(() => {
      getOffers();
      }, []);

      const getOffers = async () => {
        try{
            const offers = await getOffersReceived(user.email);
            setOffersReceived(offers);
            console.log(offers);
        } catch (error) {
          return error;
        }
      }

  
    return(
        <>
            <MainLayout>
                    <ProfileCard />
                    {offersReceived.map((offer) => {
                      return(
                          <OfferCardReceived 
                            key={offer.id}
                            offerProps={offer}
                          />
                          )
                    })}
            </MainLayout>
        </>  
    )
}

export default OffersReceived;