
FROM electronuserland/builder:base

# TODO: change to 15.14.0
ENV NODE_VERSION 14.17.0

# TODO: do i need?
# this package is used for snapcraft and we should not clear apt list - to avoid apt-get update during snap build
RUN curl -L https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz | tar xz -C /usr/local --strip-components=1 && \
  unlink /usr/local/CHANGELOG.md && unlink /usr/local/LICENSE && unlink /usr/local/README.md && \
  # https://github.com/npm/npm/issues/4531
  npm config set unsafe-perm true
RUN curl -L https://pnpm.js.org/pnpm.js | node - add --global pnpm

RUN apt update && apt install -y libnss3-dev libatk1.0-0 libatk-bridge2.0-0 libgdk-pixbuf2.0-0 libgtk-3-0 libasound2
WORKDIR /view
COPY . ./
# have to rebuild electron
RUN npm install && npm install electron
# error while loading shared libraries: libatk-1.0.so.0: cannot open shared object file: No such file or directory
# CMD npm run serve
# CMD node

# CMD npm run electron:build

# TODO: add
# sudo apt install libnss3-dev libatk1.0-0 libatk-bridge2.0-0 libgdk-pixbuf2.0-0 libgtk-3-0
# apt-get install -y lsb-release

# apt-get install libasound2:i386
# --platform linux/amd64

ENTRYPOINT node


# ENTRYPOINT npm run electron:serve 


# docker cp peaceful_raman:/view/dist_electron ~/


# docker run -it -d --platform linux/amd64
# apt update && apt install -y libnss3-dev libatk1.0-0 libatk-bridge2.0-0 libgdk-pixbuf2.0-0 libgtk-3-0 libasound2
# Electron:build base image
# What CLI arg to use for --linux?
# CI process for electron-builder
# Ubuntu
# Ignore arch warning

# lsb_release -a out:
# Distributor ID: Ubuntu
# Description:    Ubuntu 20.04.2 LTS
# Release:        20.04
# Codename:       focal
