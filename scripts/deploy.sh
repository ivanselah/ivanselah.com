REPOSITORY=/home/ubuntu/ivanselah-com-bucket-deploy

cd $REPOSITORY

YARN_PATH=$(which yarn)
PM2_PATH=$(which pm2)
$YARN_PATH install --ignore-engines

if pm2 list | grep -q "next-server"; then
   echo "PM2 is already running"
else
   npx pm2 start --name next-server yarn -- start
 # $PM2_PATH start yarn --name next-server -- start
fi


