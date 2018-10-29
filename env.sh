# this environment vairables needs to be set in .env file in applciaiton root directory
# copy this file as .env and add the appropriate values as per environment.
# node & mysql
export NODE_ENV="dev"
export PORT="3005"
export MONGOURL="mongodb://mongo/blabla"
export EXPRESS_SESSION_SECRET="qjnwlev83487wriu2r3r0gfrgfvh"
export F_CLIENTID="1919742861680993"
export F_CLIENTSECRET="d886c5554983a52def998a6de2fce8e0"
# export F_CLIENTID="259085734792053"
# export F_CLIENTSECRET="f6830a6ee7b2b8a66900cd8e70565204"
export F_CALLBACK="/auth/callback/facebook"
export G_CLIENTID="1079395425192-gi9o7snektm63pabscvgqb284p7s4c8e.apps.googleusercontent.com"
export G_CLIENTSECRET="ABd81luWLFOKNC5WhSvhdYPE"
export G_CALLBACK="/auth/callback/google"
export L_CLIENTID="817jbmsmg5z6on"
export L_CLIENTSECRET="99c0OhwXWohFw0WX"
export L_CALLBACK="/auth/callback/linkedin"

export T_CLIENTID="0YJzv69n3wgjLHl9nx2ksypPD"
export T_CLIENTSECRET="Lr0VoRBo8Q3BoMGMIagx3N57EFiuTSDWl7c7sU58FpCGJpxQC0"
export T_CALLBACK="/auth/callback/twitter"

# configuration.twitter = {
#   client_id: process.env.T_CLIENTID,
#   client_secret: process.env.T_CLIENTSECRET,
#   callback_url: process.env.T_CALLBACK
# };
# export MONGOURL="mongodb://localhost/blabla"
# export CLIENTID="259085734792053"
# export CLIENTSECRET="f6830a6ee7b2b8a66900cd8e70565204"
# export CALLBACK="/auth/callback/facebook"
# export NODE_ENV="qa"
# export MONGOURL="mongodb://localhost/blabla"
# export CLIENTID="1919742861680993"
# export CLIENTSECRET="d886c5554983a52def998a6de2fce8e0"
# export CALLBACK="/auth/callback/facebook"