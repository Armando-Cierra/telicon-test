#!/bin/bash

rm -rf .parcel-cache
rm -rf dist
yarn parcel build ./public/index.html --no-source-maps --public-url ./