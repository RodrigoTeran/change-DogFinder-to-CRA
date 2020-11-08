const routes = {}

// Config api domain
routes.apiDomain = process.env.REACT_APP_API_DOMAIN;

// GET
routes.getPetProfileDogFoundedProvider = `${routes.apiDomain}/data/pet/dogFounded`;

// POST
routes.createProfileDogFounded = `${routes.apiDomain}/new/pet/dogFounded`;

// PUT
routes.editPetsDogFoundedName = `${routes.apiDomain}/edit/dogFounded`;
routes.editProfileDogFoundedImagePet = `${routes.apiDomain}/edit/dogFounded/image`;
routes.editPetProfileDogFoundedBreed = `${routes.apiDomain}/edit/dogFounded/dogBreed`;
routes.editPetProfileDogFoundedGender = `${routes.apiDomain}/edit/dogFounded/dogGender`;
routes.editPetProfileDogFoundedCoordenates = `${routes.apiDomain}/edit/dogFounded/coordenates`;
routes.editPetProfileDogFoundedSize = `${routes.apiDomain}/edit/dogFounded/size`;
routes.editPetProfileDogFoundedColor = `${routes.apiDomain}/edit/dogFounded/color`;
routes.editPetProfileDogFoundedWhenIsLost = `${routes.apiDomain}/edit/dogFounded/whenIsLost`;
routes.editProfileDogFoundedImages = `${routes.apiDomain}/edit/dogFounded/images`;


// DELETE
routes.deletePetDogFounded = `${routes.apiDomain}/erase/profile/dogFounded`;
routes.deletePetProfileDogFoundedImageFromImages = `${routes.apiDomain}/erase/images/dogFounded`;


module.exports = routes;