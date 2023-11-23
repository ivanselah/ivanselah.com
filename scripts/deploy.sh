REPOSITORY=/home/ubuntu/ivanselah-com-bucket-deploy

cd $REPOSITORY

YARN_PATH=$(which yarn)
$YARN_PATH install
$YARN_PATH start
