
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const userController = require('../../controller/UserController');

passport.use(new GoogleStrategy(
  {
    clientID: global.configuration.google.client_id,
    clientSecret: global.configuration.google.client_secret,
    callbackURL: global.configuration.google.callback_url,
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
  (accessToken, refreshToken, profile, done) => {
    const data = profile._json;
    console.log(data);
    userController.registerSocial({
      provider: 'google',
      username: data.displayName,
      email: data.emails[0].value,
      mobno: '5436785432',
      meta: {
        provider: 'google',
        id: data.id,
        token: accessToken,
      }
    }, (err, profileData) => {
      if (err) {
        done(err, null);
      }
      done(null, profileData);
    });
  }
));


const GoogleRoutes = {
  authenticate: () => passport.authenticate('google', { scope: ['profile', 'email'] }),

  callback: () => passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
};


module.exports = GoogleRoutes;
