#!/bin/sh

rm -rf dist

cd modules/core
yarn dist
cp package.json ../../dist/core
cp -R node_modules ../../dist/core
cd ../../

cd modules/syncevents
yarn dist
cp -R node_modules ../../dist/syncevents
cd ../../

cd modules/web-controller
yarn dist
cp -R node_modules ../../dist/web-controller
cd ../../

cd dist
cd syncevents && zip -r syncevents.zip ./* && cd ../
cd web-controller && zip -r web-controller.zip ./* && cd ../../



