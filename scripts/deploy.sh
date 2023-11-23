REPOSITORY=/home/ubuntu/ivanselah-com-bucket-deploy

cd $REPOSITORY
pm2 start yarn --name "next-server" --interpreter bash -- start
