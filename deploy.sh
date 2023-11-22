REPOSITORY=/home/ubuntu/ivanselah-com-bucket-deploy

cd $REPOSITORY
pm2 start npx --name "next-server" -- next -p 3060