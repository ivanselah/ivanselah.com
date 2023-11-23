REPOSITORY=/home/ubuntu/ivanselah-com-bucket-deploy

cd $REPOSITORY
npx pm2 start npm -- start
