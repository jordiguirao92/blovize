import { singup } from '../services/auth';
import { createObjectWithId, getObjectById } from '../services/db';

const USERS_COLLECTION = 'profiles';
const TROPHIES_COLLECTION = 'trophies';

export async function getTrophies(userId) {

}

/*export async function userSignup(userData) {
  const {email, password} = userData;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  const userProfile = {...userData, password: hashPassword ,trophyList: [], trophyFavourites: [], buyOffers: [], salesOffers: []};

  const { success: signupSuccess, data } = await singup(email, password);

  if (signupSuccess) {
    const profileSuccess = await createObjectWithId(USERS_COLLECTION, userProfile, data);
    if (profileSuccess.success) {
      return true;
    }
  }
  return false;
}*/

export async function getUserProfile(userId) {
  const { success, data } = await getObjectById(USERS_COLLECTION, userId)
  return success ? data : null;
}