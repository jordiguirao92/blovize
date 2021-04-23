import { singup } from '../services/auth';
import { createObjectWithId, getObjectById } from '../services/db';

const USER_COLLECTION = 'profiles';

export async function userSignup(userData) {
  const { name, nickname, email, password, description, creator} = userData;
  const userProfile = {...userData, trophyList: [], trophyFavourites: [], buyOffers: [], salesOffers: []};

  const { success: signupSuccess, data } = await singup(email, password);

  if (signupSuccess) {
    const profileSuccess = await createObjectWithId(USER_COLLECTION, { name, nickname, email, password, description, creator }, data);
    if (profileSuccess.success) {
      return true;
    }
  }
  return false;
}

export async function getUserProfile(userId) {
  const { success, data } = await getObjectById(USER_COLLECTION, userId)
  return success ? data : null;
}