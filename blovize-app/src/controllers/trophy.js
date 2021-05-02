import { singup } from '../services/auth';
import { createObjectWithId, getObjectById, listCollectionFiltered, updateCollectionObject } from '../services/db';

const USERS_COLLECTION = 'profiles';
const TROPHIES_CHILDREN_COLLECTION = 'trophiesChildren';
const TROPHIES_FATHER_COLLECTION = 'trophiesFather';
let TROPHIES_CHILDREN_ID_COUNT = 10;
export let TROPHIES_FATHER_ID_COUNT = 300;

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
  console.log(trophyData);
  console.log(id);
  //await updateCollectionObject(TROPHIES_CHILDREN_COLLECTION, id.toString(), trophyData);
  return {success: true}
}

//Pendiente
export async function createTrophy(trophyData) { 
  //checker primero si existe el usuario;
  TROPHIES_FATHER_ID_COUNT += 100;
  TROPHIES_CHILDREN_ID_COUNT += 1;
  const {name, team , date, classification, branch, image, description, institution, creator} = trophyData;
  
  const playerEmail = 'vendra del formulario';
  const fatherData = {name, 
    team, 
    date, 
    classification, 
    branch, 
    image, 
    description, 
    institution, 
    creator, 
    likes:0, 
    id: TROPHIES_FATHER_ID_COUNT};

  const childrenData = {
    acceptOffer: false, 
    branch, 
    claimCode: playerEmail ? '' : createClaimCode(), 
    claimDate: playerEmail ? new Date().getTime() : '', 
    classification, 
    date, 
    fatherId:TROPHIES_FATHER_ID_COUNT, 
    id: TROPHIES_CHILDREN_ID_COUNT,
    image,
    institution,
    isClaimed: playerEmail ? true : false,
    likes: 0,
    name,
    offerHistory: [],
    onSale: false,
    owner: 'seria el player email del formulario por cada jugador y repeticion',
    ownerList: [],
    playerName: 'playerName que viene del fomrulario para cada jugador y cada trofeo',
    price: 0,
    team }


  //const { success, data } = await createObjectWithId(TROPHIES_CHILDREN_COLLECTION, objectData, id);
  //const { success, data } = await createObjectWithId(TROPHIES_FATHER_COLLECTION, objectData, id);
  //return success ? data : null;
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


