import bcrypt from 'bcryptjs';
import { singup } from '../services/auth';
import { createObjectWithId, getObjectById, updateCollectionObject, listCollectionFiltered } from '../services/db';

const USERS_COLLECTION = 'profiles';

export async function userSignup(userData) {
  const {email, password} = userData;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  const userProfile = {...userData, password: hashPassword ,trophyList: [], trophyFavourites: [], trophyLiked: [], buyOffers: [], salesOffers: []};

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

export async function getUserProfileByEmail(userEmail) {
  const { success, data } = await listCollectionFiltered(USERS_COLLECTION, 'email', '==', userEmail);
  return success ? data : null;
}

export async function updateUserProfile(userId, values) {
  await updateCollectionObject(USERS_COLLECTION, userId, values);
  return {success: true}
}

export async function updateBuyTrophyUsers(buyer, trophy) {
  //Update buyer user details
  const buyerData = {...buyer, trophyList:[...buyer.trophyList, trophy.id]}
  console.log(buyerData);
  console.log(buyer.id)
  //await updateCollectionObject(USERS_COLLECTION, buyer.id, buyerData);

  //Update saler user details
  const [saler] = await getUserProfileByEmail(trophy.owner);
  console.log(saler);
  const newTrophyList = saler.trophyList.filter(trophyId => trophyId !== trophy.id);
  const salerObject = {...saler, trophyList: newTrophyList};
  console.log(salerObject);
  //const updateSaler = await updateUserProfile(saler.id, salerObject);
  return {success: true}
}