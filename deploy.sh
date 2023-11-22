REPOSITORY=/home/ubuntu/ivanselah-com-bucket-deploy

cd $REPOSITORY
pm2 start --name "ivanselah" yarn -- start -- --port 3060