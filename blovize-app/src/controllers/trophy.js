import { createObjectWithId, listCollectionFiltered, updateCollectionObject, listCollection } from '../services/db';
import {updateUserProfile} from '../controllers/user';

const TROPHIES_CHILDREN_COLLECTION = 'trophiesChildren';
const TROPHIES_FATHER_COLLECTION = 'trophiesFather';

export async function getMarketplaceOnSaleTrophies() {
  const { success, data } = await listCollectionFiltered(TROPHIES_CHILDREN_COLLECTION, "onSale", "==", true);
  return success ? data : null;
}
export async function getMarketplaceAccepOfferTrophies() {
  const { success, data } = await listCollectionFiltered(TROPHIES_CHILDREN_COLLECTION, "acceptOffers", "==", true);
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
export async function getFatherTrophy(id) {
  const { success, data } = await listCollectionFiltered(TROPHIES_FATHER_COLLECTION, "id", "==", id);
  return success ? data : null;
}

export async function getChildrenTrophies(id) {
  const { success, data } = await listCollectionFiltered(TROPHIES_CHILDREN_COLLECTION, "fatherId", "==", id);
  return success ? data : null;
}

export async function getTrophiesById(id) {
  const { success, data } = await listCollectionFiltered(TROPHIES_CHILDREN_COLLECTION, "id", "==", id);
  return success ? data : null;
}


export async function getFavouriteTrophies(id) {
  const { success, data } = await listCollectionFiltered(TROPHIES_CHILDREN_COLLECTION, "id", "==", id);
  return success ? data : null;
}

export async function updateTrophyDetails(trophyId, values) {
  await updateCollectionObject(TROPHIES_CHILDREN_COLLECTION, trophyId, values);
  return {success: true}
}

export async function updateBuyTrophy(user, trophy) {
  const {id, owner, ownerList} = trophy;
  const trophyData = {...trophy, acceptOffers: false, onSale: false, price:0, ownerList: [...ownerList, owner], owner: user.email};
  await updateCollectionObject(TROPHIES_CHILDREN_COLLECTION, id.toString(), trophyData);
  return true
}

export async function likeTrophy(userId, trophyId, trophyLikes, action) {
  await updateUserProfile(userId, trophyLikes);
  const [data] = await getTrophiesById(trophyId);
  const {likes} = data;

  if(action === 'addLike'){
    await updateTrophyDetails(trophyId.toString(), {likes: likes + 1 });

  } else if (action === 'removeLike') {
    await updateTrophyDetails(trophyId.toString(), {likes: likes - 1 });
  }
  return {success: true}
}


export async function claimTrophy(claimCode, user) {
  const { success, data } = await listCollectionFiltered(TROPHIES_CHILDREN_COLLECTION, "claimCode", "==", claimCode);
  const [trophyData] = data;
  let updateTrophy = {};

  if(!trophyData.isClaimed) {
    if(trophyData.claimEmail === user.email){
      updateTrophy = {...trophyData, isClaimed: true, claimDate: new Date().getTime(), owner: user.email};
      console.log(updateTrophy);
      await updateCollectionObject(TROPHIES_CHILDREN_COLLECTION, trophyData.id.toString(), updateTrophy);
    } else {
      console.log('Sorry, you are not the claimer email');
      return {success: false, message: 'Sorry, you are not the claimer email'}
    }  
  } else {
    console.log('Sorry, this trophy have been claimed before');
    return {success: false, message: 'Sorry, this trophy have been claimed before'}
  }
  return {success: true, message: updateTrophy};
}



export async function createTrophy(formData, playersList, user) { 
  //Create father ID:
  const fatherCollection = await listCollection(TROPHIES_FATHER_COLLECTION);
  const fatherID = (fatherCollection.data.length * 100) + 100;

  //Update user institution trophy list
  const userObject = {...user, trophyList: [...user.trophyList, fatherID ] }

  const {name, team , date, classification, branch, image, description, institution, creator} = formData;
  const newData = new Date(date).getTime()
  
  //Create father trophy:
  const fatherData = {name, 
    team, 
    date: newData, 
    classification, 
    branch, 
    image, 
    description, 
    institution, 
    creator, 
    likes:0, 
    id: fatherID
  };
  await createObjectWithId(TROPHIES_FATHER_COLLECTION, fatherData, fatherID.toString());
  await updateUserProfile(user.id, userObject);

  
  for (let i=0; i < playersList.length; i+=1){
    for (let j=0; j < playersList[i].numberTrophies; j+=1) {
      const childrenCollection = await listCollection(TROPHIES_CHILDREN_COLLECTION);
      const childrenID = childrenCollection.data.length + 1;
      const childrenData = {
        acceptOffer: false, 
        branch, 
        claimCode: playersList[i].isBlovizeUser ? '' : createClaimCode(), 
        claimDate: playersList[i].isBlovizeUser ? new Date().getTime() : '',
        claimEmail:  playersList[i].playerEmail,
        classification, 
        date: newData, 
        fatherId: fatherID, 
        id: childrenID,
        image,
        description,
        institution,
        isClaimed: playersList[i].isBlovizeUser ? true : false,
        likes: 0,
        name,
        offerHistory: [],
        onSale: false,
        owner: playersList[i].isBlovizeUser ? playersList[i].playerEmail : '',
        ownerList: [],
        playerName: playersList[i].playerName,
        price: 0,
        team 
      }
        await createObjectWithId(TROPHIES_CHILDREN_COLLECTION, childrenData, childrenID.toString());
    }
  }
  return {success : true};
}


function createClaimCode() {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 10; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


