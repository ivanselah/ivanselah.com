REPOSITORY=/home/ubuntu/app
cd $REPOSITORY

unzip next-build.zip -d /root/ivanselah.com

cd /root/ivanselah.com
pm2 start --name "ivanselah" yarn -- start -- --port 3060