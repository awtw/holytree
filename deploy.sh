#!/usr/bin/env sh

set -e

npm run build

cd dist

git init git add -A
git commit -m 'new Deployment'
git push -f git@github.com:awtw/holytree.git main/gh-pages

cd -