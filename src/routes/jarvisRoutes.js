const routes = {};

// Config api domain
routes.apiDomain = process.env.REACT_APP_API_DOMAIN;

// POST
routes.createMatchJarvis = `${routes.apiDomain}/jarvis/create/match`;

// PUT
routes.updateAnswerIAJarvis = `${routes.apiDomain}/jarvis//edit/match`;

// DELETE
routes.deleteJarvisFromUser = `${routes.apiDomain}/jarvis/delete/jarvis`;

module.exports = routes;
