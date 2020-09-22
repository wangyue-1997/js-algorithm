
# 确保脚本抛出遇到的错误
set -e

git init
git add .
git commit -m 'deploy'
git push
