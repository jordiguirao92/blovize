import { singup } from '../services/auth';
import { createObjectWithId, getObjectById, listCollectionFiltered } from '../services/db';

const USERS_COLLECTION = 'profiles';
const TROPHIES_CHILDREN_COLLECTION = 'trophiesChildren';
const TROPHIES_FATHER_COLLECTION = 'trophiesFather';

export async function getMarketplaceTrophies() {
  const { success, data } = await listCollectionFiltered(TROPHIES_CHILDREN_COLLECTION, "onSale", "==", true);
  return success ? data : null;
}

export async function getPlayerTrophies(owner) {
  const { success, data } = await listCollectionFiltered(TROPHIES_CHILDREN_COLLECTION, "owner", "==", owner);
  return success ? data : null;
}

export async function getInstitutionTrophies(owner) {
  const { success, data } = await listCollectionFiltered(TROPHIES_FATHER_COLLECTION, "creator", "==", owner);
  return success ? data : null;
}


export async function getUserProfile(userId) {
  const { success, data } = await getObjectById(USERS_COLLECTION, userId)
  return success ? data : null;
}