#!/usr/bin/env bash
rm -rf dist/iwe7-ui
ng build --project iwe7-ui
mkdir -p ./dist/iwe7-ui/themes
cp -fr ./projects/iwe7-ui/themes/* ./dist/iwe7-ui/themes/
cd dist/iwe7-ui
npm publish
cd ../
rm -rf dist/iwe7-ui
yarn add iwe7-ui
