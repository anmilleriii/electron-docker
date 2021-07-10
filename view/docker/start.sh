# This is not the safest way however, as you then compromise the access control to X server on your host


# Architectures
# 




# xhost +local:root # for the lazy and reckless
# docker run -it --env="DISPLAY" --network="host" --env="QT_X11_NO_MITSHM=1" --volume="/tmp/.X11-unix:/tmp/.X11-unix:rw" view
# export containerId=$(docker ps -l -q)
# # Close security hole:
# xhost -local:root




# xhost +local:root
# -e DISPLAY=host.docker.internal:0
# --network="host" --env="QT_X11_NO_MITSHM=1" --volume="/tmp/.X11-unix:/tmp/.X11-unix:rw" 
xhost +local:root
# docker run --rm -it --env DISPLAY=host.docker.internal:0 -p 8080:8080 -d view




docker buildx build --push --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --tag am/view:buildx-latest .
# apt install x11-apps
# docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
# docker buildx bake --set '*.platform=linux/amd64,linux/arm64' --push

# docker buildx create --name emulated-multiarch --driver docker-container --platform=linux/amd64,linux/arm64 --use

docker buildx build --push --platform linux/arm64/v7 --tag am/view:buildx-latest .
# docker buildx build --push --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --tag am/view:buildx-latest .


# docker buildx prune
# docker system prune
