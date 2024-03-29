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
routes.getFoundDogDataRoute = `${routes.apiDomain}/data/found`;

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
routes.editTelephoneForContactUser = `${routes.apiDomain}/edit/telephone/contact`;

routes.editMailProfile = `${routes.apiDomain}/edit/mail/profile`;
routes.editMailProfileWithKey = `${routes.apiDomain}/edit/mail/profile/key`;

// POST
routes.postNewPet = `${routes.apiDomain}/new/pet`;
routes.postPayment = `${routes.apiDomain}/pay/service`;
routes.postKeyPayment = `${routes.apiDomain}/pay/check-key`;
routes.checkDiscountCode = `${routes.apiDomain}/pay/check-discount-code`;

// DELETE
routes.eraseProfile = `${routes.apiDomain}/erase/profile`;
routes.eraseKeyPaymentFromAPI = `${routes.apiDomain}/pay/erase/key/stripe`;
routes.deleteKeyMailProfile = `${routes.apiDomain}/erase/mail/profile/key`;

// DEFAULTS
// Pet default image
routes.defaultImage = "https://res.cloudinary.com/ds2hi8ucm/image/upload/v1600480132/defaultProfiles_jbuugj.png";

module.exports = routes;