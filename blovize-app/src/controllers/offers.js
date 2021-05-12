import { createObjectWithId, listCollectionFiltered, updateCollectionObject, listCollection} from '../services/db';
import  {updateUserProfile, getUserProfileByEmail} from './user';
import {updateTrophyDetails} from './trophy';

const OFFERS_COLLECTION = 'offers';


export async function getOffersReceived(userEmail) {
  const { success, data } = await listCollectionFiltered(OFFERS_COLLECTION, "saler", "==", userEmail);
  return success ? data : null;
}

export async function getOffersSend(userEmail) {
  const { success, data } = await listCollectionFiltered(OFFERS_COLLECTION, "buyer", "==", userEmail);
  return success ? data : null;
}

export async function acceptOfferReceived(offerProps, trophies, user) {
  //Update Offer
  const newDate = new Date().getTime();
  const offerObject = {...offerProps, date: newDate, salePrice: offerProps.offerPrice, status: 'closed'};
  const updateOffer = await updateCollectionObject(OFFERS_COLLECTION, offerProps.id.toString(), offerObject);

  //Update Trophy
  const trophyObject = {...trophies, owner: offerProps.buyer, ownerList: [...trophies.ownerList, offerProps.saler], price:0, onSale: false, acceptOffers: false};
  const updateTrophy = await updateTrophyDetails(trophies.id.toString() ,trophyObject);
  
  //Update User Saler
  const listResult = user.trophyList.filter(trophyId => trophyId !== trophies.id);
  const salerObject = {...user, trophyList: listResult};
  const updateSalerProfile = await updateUserProfile(user.id, salerObject);
 
  //Update User Buyer
  const [buyer] = await getUserProfileByEmail(offerProps.buyer);
  const newTrophyList = [...buyer.trophyList, trophies.id];
  const buyerObject = {...buyer, trophyList: newTrophyList};
  const updateBuyerProfile = await updateUserProfile(buyer.id, buyerObject);
  return {success: true}
}


export async function declineOfferReceived(offerProps) {
  const newDate = new Date().getTime();
  const offerObject = {...offerProps, date: newDate, salePrice: 0, status: 'rejected'}
  console.log(offerObject)
  console.log( offerProps.id.toString())
  const updateOffer = await updateCollectionObject(OFFERS_COLLECTION, offerProps.id.toString(), offerObject);
  return {success: true}
}


export async function createOffer(user, trophy, priceOffer) {
  const newDate = new Date().getTime();
  const {price} = priceOffer;
  const {owner, id, offerHistory} = trophy;
  const {data} = await listCollection(OFFERS_COLLECTION);
  const newId = data.length + 1;
  const offerObject = {buyer: user.email, date:newDate, id: newId, offerPrice: price, salePrice: 0, saler: owner , status: 'pending', trophy: id};

  const createOffer = await createObjectWithId(OFFERS_COLLECTION, offerObject, newId.toString());
  const updateTrophy = await updateTrophyDetails(id.toString() ,{offerHistory: [...offerHistory, newId]});

  if(createOffer.success && updateTrophy.success) {
    return {success: true}
  } else {
    return {success: false}
  }
  
}



