const routes = {};

// Config api domain
routes.apiDomain = process.env.REACT_APP_API_DOMAIN;

// POST
routes.contactCompany = `${routes.apiDomain}/contact/granted`;

module.exports = routes;
