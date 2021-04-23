import { singup } from '../services/auth';
import { createObjectWithId, getObjectById } from '../services/db';

const USERS_COLLECTION = 'profiles';

export async function userSignup(userData) {
  const { name, nickname, email, password, description, creator, userRole} = userData;
  const userProfile = {...userData, trophyList: [], trophyFavourites: [], buyOffers: [], salesOffers: []};

  const { success: signupSuccess, data } = await singup(email, password);

  if (signupSuccess) {
    const profileSuccess = await createObjectWithId(USERS_COLLECTION, userProfile, data);
    if (profileSuccess.success) {
      return true;
    }
  }
  return false;
}

export async function getUserProfile(userId) {
  const { success, data } = await getObjectById(USERS_COLLECTION, userId)
  return success ? data : null;
}