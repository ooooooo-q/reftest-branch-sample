mkdir -p copy_dir
mkdir -p copy_dir/git
rsync -ar --delete --exclude "/copy_dir" --exclude "/node_modules" . ./copy_dir/git
cd copy_dir/git
git stash
git fetch --prune
git checkout 7d266d52aaa409eef0b6cb59c8ee707db16afd72
cd -
pwd
node reftest.js
ls ./logs/*.png