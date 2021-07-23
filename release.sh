#!/usr/bin/env bash

# release.sh
#
# Release to Github

source ./view/.env
export GH_TOKEN=${GH_TOKEN}
cd view 
npm run release 
cd ..