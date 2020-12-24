const routes = {};

// Config api domain
routes.apiDomain = process.env.REACT_APP_API_DOMAIN;

// POST
routes.createMatchJarvis = `${routes.apiDomain}/jarvis/create/match`;

// DELETE
routes.deleteJarvisFromUser = `${routes.apiDomain}/jarvis/delete/jarvis`;

module.exports = routes;
