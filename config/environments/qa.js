/* eslint quote-props: 0 */

const configuration = {};
configuration.mongo = {
  url: process.env.MONGOURL,
};
configuration.facebook = {
  client_id: process.env.F_CLIENTID,
  client_secret: process.env.F_CLIENTSECRET,
  callback_url: process.env.F_CALLBACK
};
configuration.google = {
  client_id: process.env.G_CLIENTID,
  client_secret: process.env.G_CLIENTSECRET,
  callback_url: process.env.G_CALLBACK
};
module.exports = configuration;
