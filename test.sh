mkdir -p copy_dir
mkdir -p copy_dir/git
rsync -ar --delete --exclude "/copy_dir" --exclude "/node_modules" . ./copy_dir/git
cd copy_dir/git
git stash
git checkout master
cd -
pwd
node reftest.js
ls ./logs/*.png