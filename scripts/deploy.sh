export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

REPOSITORY=/home/ubuntu/ivanselah-com-bucket-deploy

cd $REPOSITORY

YARN_PATH=$(which yarn)
$YARN_PATH install --ignore-engines

if pm2 list | grep -q "next-server"; then
   echo "PM2 is already running"
else
   # npx pm2 start --name next-server yarn -- start
   pm2 start yarn --name next-server -- start
fi


