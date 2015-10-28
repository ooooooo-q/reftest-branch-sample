mkdir -p copy_dir
rsync -ar --delete --exclude "/copy_dir" --exclude "/node_modules" . ./copy_dir 
cd copy_dir
git stash
git checkout master
cd ../
pwd
node reftest.js
ls ./logs/*.png