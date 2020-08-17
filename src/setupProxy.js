// Domain
const { apiDomain } = require("./routes/index")

const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(createProxyMiddleware("/auth", { target: `${apiDomain}` }));
};
