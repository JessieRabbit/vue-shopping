#!/user/bin/env sh

set -e

yarn build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/JessieRabbit/vue-shopping.git master:gh-pages

cd -