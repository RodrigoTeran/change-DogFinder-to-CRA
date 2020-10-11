const routes = {}

// Config api domain
routes.apiDomain = process.env.REACT_APP_API_DOMAIN;

// Auth
routes.authGoogle = `${routes.apiDomain}/auth/google`;
routes.authFacebook = `${routes.apiDomain}/auth/facebook`;
routes.logout = `${routes.apiDomain}/auth/logout`;

// Data
routes.getUser = `${routes.apiDomain}/user`;
routes.getProfileDataRoute = `${routes.apiDomain}/data/profile`;
routes.getpetProfileDataRoute = `${routes.apiDomain}/data/pet`;
routes.getMapDataRoute = `${routes.apiDomain}/data/map`;
routes.getFoundDogDataRoute = `${routes.apiDomain}/data/found`;
routes.getAdoptDataRoute = `${routes.apiDomain}/data/adopt`;

// Edits
routes.editPetName = `${routes.apiDomain}/edit`;
routes.editPetProfileImage = `${routes.apiDomain}/edit/image`;
routes.editPetProfileStatus = `${routes.apiDomain}/edit/status`;
routes.editPetProfileRace = `${routes.apiDomain}/edit/dogBreed`;
routes.editPetProfileAge = `${routes.apiDomain}/edit/dogAge`;

// Stripe
routes.postPayment = `${routes.apiDomain}/pay/service`;
routes.postKeyPayment = `${routes.apiDomain}/pay/check-key`;

// Coordenates
routes.editCoordenates = `${routes.apiDomain}/edit/coordenates`;

// Pet
routes.postNewPet = `${routes.apiDomain}/new/pet`;
routes.eraseProfile = `${routes.apiDomain}/erase/profile`;

// Pet default image
routes.defaultImage = "https://res.cloudinary.com/ds2hi8ucm/image/upload/v1600480132/defaultProfiles_jbuugj.png";

module.exports = routes;