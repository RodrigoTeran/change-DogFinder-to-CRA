const routes = {}

// Config api domain
routes.apiDomain = process.env.REACT_APP_API_DOMAIN;

// POST
routes.postUserInCompany = `${routes.apiDomain}/company/user/register`;


module.exports = routes;