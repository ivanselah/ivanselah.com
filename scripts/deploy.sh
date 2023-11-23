REPOSITORY=/home/ubuntu/ivanselah-com-bucket-deploy

cd $REPOSITORY

YARN_PATH=$(which yarn)
$YARN_PATH install --ignore-engines
$YARN_PATH start
