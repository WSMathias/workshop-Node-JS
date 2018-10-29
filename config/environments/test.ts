/* eslint quote-props: 0 */
export {}
const configuration:any = {};
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
configuration.linkedin = {
  client_id: process.env.L_CLIENTID,
  client_secret: process.env.L_CLIENTSECRET,
  callback_url: process.env.L_CALLBACK
};
configuration.twitter = {
  client_id: process.env.T_CLIENTID,
  client_secret: process.env.T_CLIENTSECRET,
  callback_url: process.env.T_CALLBACK
};
module.exports = configuration;
