const routes = {}

// Config api domain
routes.apiDomain = process.env.REACT_APP_API_DOMAIN;

// GET
routes.getOwnPremiumProfilesRoute = `${routes.apiDomain}/company/data/ownPremiumProfiles`;
routes.getGlobalPremiumProfilesRoute = `${routes.apiDomain}/company/data/globalPremiumProfiles`;
routes.getGlobalDogsFoundedRoute = `${routes.apiDomain}/company/data/globalDogsFounded`;
routes.getOwnDogsFoundedRoute = `${routes.apiDomain}/company/data/ownDogsFounded`;
routes.getGlobalCompaniesRoute = `${routes.apiDomain}/company/data/globalCompanies`;

routes.getDataMapLeftProvider = `${routes.apiDomain}/company/data/leftMapPageProvider`;

// POST
routes.postUserInCompany = `${routes.apiDomain}/company/user/register`;

// PUT
routes.editCompanyName = `${routes.apiDomain}/company/edit/name`;
routes.editCompanyLocation = `${routes.apiDomain}/company/edit/location`;
routes.editCompanyWebPage = `${routes.apiDomain}/company/edit/webPage`;
routes.editCompanyLogo = `${routes.apiDomain}/company/edit/logo`;
routes.editCompanyDescription = `${routes.apiDomain}/company/edit/description`;
routes.editCompanyEmail = `${routes.apiDomain}/company/edit/email`;
routes.editCompanyEmailWithToken = `${routes.apiDomain}/company/edit/emailWithToken`;
routes.editCompanyTelephone = `${routes.apiDomain}/company/edit/telephone`;
routes.editCompanyTelephoneWithToken = `${routes.apiDomain}/company/edit/telephoneWithToken`;

// DELETE
routes.deleteUserFromCompany = `${routes.apiDomain}/company/delete/userInCompany`;

module.exports = routes;