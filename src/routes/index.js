const routes = {}

// Config
// routes.apiDomain = `http://localhost:5000`;
routes.apiDomain = "https://agile-coast-82296.herokuapp.com";

// Auth
routes.authGoogle = `${routes.apiDomain}/auth/google`;
routes.authFacebook = `${routes.apiDomain}/auth/facebook`;
routes.logout = `${routes.apiDomain}/auth/logout`;

// Data
routes.getUser = `${routes.apiDomain}/user`;
routes.getProfileDataRoute = `${routes.apiDomain}/data/profile`;
routes.getMapDataRoute = `${routes.apiDomain}/data/map`;
routes.getFoundDogDataRoute = `${routes.apiDomain}/data/found`;
routes.getAdoptDataRoute = `${routes.apiDomain}/data/adopt`;

// Stripe
routes.postPayment = `${routes.apiDomain}/pay/service`;
routes.postKeyPayment = `${routes.apiDomain}/pay/check-key`;

// Temporal
routes.eraseProfile = `${routes.apiDomain}/erase/profile`;

module.exports = routes;