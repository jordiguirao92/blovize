import { singup } from '../services/auth';
import { createObjectWithId, getObjectById, listCollectionFiltered } from '../services/db';

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

