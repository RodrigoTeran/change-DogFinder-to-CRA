const routes = {}

// Config
// routes.apiDomain = `http://localhost:5000`;
routes.apiDomain = "https://agile-coast-82296.herokuapp.com";

// Auth
routes.authGoogle = `/auth/google`;
routes.authFacebook = `/auth/facebook`;
routes.logout = `/auth/logout`;

// Data
routes.getUser = `/user`;
routes.getProfileDataRoute = `/data/profile`;
routes.getMapDataRoute = `/data/map`;
routes.getFoundDogDataRoute = `/data/found`;
routes.getBuyDataRoute = `/data/buy`;
routes.getAdoptDataRoute = `/data/adopt`;

module.exports = routes;