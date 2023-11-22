REPOSITORY=/root/ivanselah.com

cd $REPOSITORY

pm2 start --name "ivanselah" yarn -- start -- --port 3060