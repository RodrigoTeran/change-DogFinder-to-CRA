const routes = {}

// Config
// routes.apiDomain = `http://localhost:5000`;
routes.apiDomain = "https://agile-coast-82296.herokuapp.com";

// Auth
routes.authGoogle = `https://agile-coast-82296.herokuapp.com/auth/google`;
routes.authFacebook = `https://agile-coast-82296.herokuapp.com/auth/facebook`;
routes.logout = `https://agile-coast-82296.herokuapp.com/auth/logout`;

// Data
routes.getUser = `https://agile-coast-82296.herokuapp.com/user`;
routes.getProfileDataRoute = `https://agile-coast-82296.herokuapp.com/data/profile`;
routes.getMapDataRoute = `https://agile-coast-82296.herokuapp.com/data/map`;
routes.getFoundDogDataRoute = `https://agile-coast-82296.herokuapp.com/data/found`;
routes.getBuyDataRoute = `https://agile-coast-82296.herokuapp.com/data/buy`;
routes.getAdoptDataRoute = `https://agile-coast-82296.herokuapp.com/data/adopt`;

module.exports = routes;