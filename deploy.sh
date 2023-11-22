REPOSITORY=/home/ubuntu/ivanselah-com-bucket-deploy

which pm2
sudo ln -s $(which pm2) /usr/bin/pm2
sudo ln -s $(which pm2) /usr/local/bin/pm2

cd $REPOSITORY
pm2 start --name "ivanselah" yarn -- start -- --port 3060