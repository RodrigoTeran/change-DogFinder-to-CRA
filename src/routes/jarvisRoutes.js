const routes = {};

// Config api domain
routes.apiDomain = process.env.REACT_APP_API_DOMAIN;

// POST
routes.createMatchJarvis = `${routes.apiDomain}/jarvis/create/match`;

module.exports = routes;
