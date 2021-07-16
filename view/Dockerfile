# https://hub.docker.com/r/electronuserland/builder/
# This is an Ubuntu image w/many Electron dependencies already installed.
FROM electronuserland/builder:base

ENV NODE_VERSION 15.14.0

# Reference:
# this package is used for snapcraft and we should not clear apt list - to avoid apt-get update during snap build
RUN curl -L https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz | tar xz -C /usr/local --strip-components=1 && \
  unlink /usr/local/CHANGELOG.md && unlink /usr/local/LICENSE && unlink /usr/local/README.md && \
  # https://github.com/npm/npm/issues/4531
  npm config set unsafe-perm true
# TODO: remove pnpm?
RUN curl -L https://pnpm.js.org/pnpm.js | node - add --global pnpm

WORKDIR /view
COPY . ./
# Must rebuild Electron on MacOS (ARM only)
RUN npm install && npm install electron

# ENTRYPOINT npm run electron:serve
RUN export GH_TOKEN=${VUE_APP_GH_TOKEN}
ENTRYPOINT npm run release
# ENTRYPOINT npm run electron:build

