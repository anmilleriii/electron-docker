# This is not the safest way however, as you then compromise the access control to X server on your host
# xhost +local:root # for the lazy and reckless
# docker run -it --env="DISPLAY" --network="host" --env="QT_X11_NO_MITSHM=1" --volume="/tmp/.X11-unix:/tmp/.X11-unix:rw" view
# export containerId=$(docker ps -l -q)
# # Close security hole:
# xhost -local:root




# xhost +local:root
# -e DISPLAY=host.docker.internal:0
# --network="host" --env="QT_X11_NO_MITSHM=1" --volume="/tmp/.X11-unix:/tmp/.X11-unix:rw" 
xhost +local:root
docker run --rm -it --env DISPLAY=host.docker.internal:0 -p 8080:8080 -d view
# apt install x11-apps