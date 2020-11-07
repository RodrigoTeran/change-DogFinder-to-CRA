const routes = {}

// Config api domain
routes.apiDomain = process.env.REACT_APP_API_DOMAIN;

// Auth
routes.authGoogle = `${routes.apiDomain}/auth/google`;
routes.authFacebook = `${routes.apiDomain}/auth/facebook`;
routes.logout = `${routes.apiDomain}/auth/logout`;

// GET
routes.getUser = `${routes.apiDomain}/user`;
routes.getProfileDataRoute = `${routes.apiDomain}/data/profile`;
routes.getpetProfileDataRoute = `${routes.apiDomain}/data/pet`;
routes.getMapDataRoute = `${routes.apiDomain}/data/map`;
routes.getFoundDogDataRoute = `${routes.apiDomain}/data/found`;
routes.getAdoptDataRoute = `${routes.apiDomain}/data/adopt`;

// PUT
routes.editPetName = `${routes.apiDomain}/edit`;
routes.editPetProfileImage = `${routes.apiDomain}/edit/image`;
routes.editPetProfileStatus = `${routes.apiDomain}/edit/status`;
routes.editPetProfileRace = `${routes.apiDomain}/edit/dogBreed`;
routes.editPetProfileGender = `${routes.apiDomain}/edit/dogGender`;
routes.editPetProfileSize = `${routes.apiDomain}/edit/size`;
routes.editPetProfileColor = `${routes.apiDomain}/edit/color`;
routes.editCoordenates = `${routes.apiDomain}/edit/coordenates`;
routes.editPetProfileWhenIsLost = `${routes.apiDomain}/edit/whenIsLost`;
routes.editPetProfileImages = `${routes.apiDomain}/edit/images`;
routes.editKeyForMailForContactUser = `${routes.apiDomain}/edit/key/mail`;
routes.editMailForContactUser = `${routes.apiDomain}/edit/mail/contact`;
routes.editKeyForTelephoneForContactUser = `${routes.apiDomain}/edit/key/telephone`;
routes.editTelephoneForContactUser = `${routes.apiDomain}/edit/telephone/contact`;

// POST
routes.postNewPet = `${routes.apiDomain}/new/pet`;
routes.postPayment = `${routes.apiDomain}/pay/service`;
routes.postKeyPayment = `${routes.apiDomain}/pay/check-key`;

// DELETE
routes.eraseProfile = `${routes.apiDomain}/erase/profile`;
routes.eraseProfileImages = `${routes.apiDomain}/erase/images`;
routes.eraseKeyPaymentFromAPI = `${routes.apiDomain}/pay/erase/key/stripe`;

// DEFAULTS
// Pet default image
routes.defaultImage = "https://res.cloudinary.com/ds2hi8ucm/image/upload/v1600480132/defaultProfiles_jbuugj.png";

module.exports = routes;