import { singup } from '../services/auth';
import { createObjectWithId, getObjectById, listCollectionFiltered, updateCollectionObject} from '../services/db';
import  {updateUserProfile, getUserProfile, getUserProfileByEmail} from './user';
import {updateTrophyDetails} from './trophy';

const OFFERS_COLLECTION = 'offers';
const OFFERS_ID_COUNT = 5;


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
  const offerObject = {...offerProps, date: newDate, offerPrice: offerProps.offerPrice, status: 'closed'};
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



