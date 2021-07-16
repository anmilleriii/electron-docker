# Objective

Build `AppImage` and push to Github Releases on PR into `develop`.

# Flow

### Initial Setup

Build & push initial image to ECR

`aws ecr-public get-login-password --region us-west-2 | docker login --username AWS --password-stdin public.ecr.aws/g2y4a2o6`

`docker build -t electron-docker-test .`

`docker tag electron-docker-test:latest public.ecr.aws/g2y4a2o6/electron-docker-test:latest`

`docker login`

`docker push public.ecr.aws/g2y4a2o6/electron-docker-test:latest`

# Normal
   
1. PR into `develop`

2. Github Actions push new image to ECR, and deploy new ECS build of image.

3. 



Once built can test on tablet everytime????