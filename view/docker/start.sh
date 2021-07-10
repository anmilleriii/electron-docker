#!/usr/bin/env bash

# TODO: uname -m ?
# TODO: remove redundancies

usage() {
    echo Specify target OS to run $'\n'
    echo "\
OS; Architecture; Run Flag
Linux; linux/amd64; --linux-amd
macOS (Intel); linux/amd64; --macos-amd
macOS (M1); linux/arm64; --macos-arm
" | column -t -s ";"
    echo $'\n'
}

if [ ! $1 ]; then
    # No flag
    usage

elif [ "$1" = "--linux-amd" ]; then
    # Linux
    docker build . -t view
    xhost +local:root
    docker run -it --env="DISPLAY" --network="host" --env="QT_X11_NO_MITSHM=1" --volume="/tmp/.X11-unix:/tmp/.X11-unix:rw" view # port?
    xhost -local:root

elif [ "$1" = "--macos-amd" ]; then
    # Mac Intel
    docker build . -t view
    echo "XQuartz or equivalent must be installed on Mac for x11 forwarding, and XQuartz --> Preferences --> 'Allow connections from network clients' must be enabled."
    echo $'\n'
    xhost +local:root
    docker run --rm -it --env DISPLAY=host.docker.internal:0 -p 8080:8080 -d view # TODO remove -p?
    xhost -local:root

elif [ "$1" = "--macos-arm" ]; then
    echo asdf
    # Mac M1
    # Have to use Buildx
    # xhost +local:root
    # echo "XQuartz or equivalent must be installed on Mac for x11 forwarding, and XQuartz --> Preferences --> 'Allow connections from network clients' must be enabled."
    # echo $'\n'
    # TODO: qemu
    # docker buildx create --name=qemu
    # docker buildx build . --load --tag example-repo/view:buildx-latest --platform=linux/arm64
    # docker run --rm -it --env DISPLAY=host.docker.internal:0 -p 8080:8080 -d view

else
    echo $'\n' Invalid flag: $1 $'\n'
    usage
fi
