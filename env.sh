# this environment vairables needs to be set in .env file in applciaiton root directory
# copy this file as .env and add the appropriate values as per environment.
# node & mysql
export NODE_ENV="dev"
export PORT="3005"
export MONGOURL="mongodb://mongo/blabla"
export F_CLIENTID="1919742861680993"
export F_CLIENTSECRET="d886c5554983a52def998a6de2fce8e0"
export F_CALLBACK="/auth/callback/facebook"
export G_CLIENTID="1079395425192-gi9o7snektm63pabscvgqb284p7s4c8e.apps.googleusercontent.com"
export G_CLIENTSECRET='ABd81luWLFOKNC5WhSvhdYPE'
export G_CALLBACK='/auth/callback/google'

# export NODE_ENV="qa"
# export MONGOURL="mongodb://localhost/blabla"
# export CLIENTID="1919742861680993"
# export CLIENTSECRET="d886c5554983a52def998a6de2fce8e0"
# export CALLBACK="/auth/callback/facebook"