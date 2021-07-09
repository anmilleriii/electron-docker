# Electron:build base image
# What CLI arg to use for --linux?
# CI process for electron-builder
# 
FROM electronuserland/builder:base

ENV NODE_VERSION 14.17.0

# this package is used for snapcraft and we should not clear apt list - to avoid apt-get update during snap build
RUN curl -L https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz | tar xz -C /usr/local --strip-components=1 && \
  unlink /usr/local/CHANGELOG.md && unlink /usr/local/LICENSE && unlink /usr/local/README.md && \
  # https://github.com/npm/npm/issues/4531
  npm config set unsafe-perm true
RUN curl -L https://pnpm.js.org/pnpm.js | node - add --global pnpm

WORKDIR /view
COPY . ./
RUN npm install
# error while loading shared libraries: libatk-1.0.so.0: cannot open shared object file: No such file or directory
# CMD npm run serve
CMD npm run serve