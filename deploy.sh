#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Navigate into the observatory-server git submodule
cd ./observatory-server

# Pulls the latest development branch
git pull origin dev

# Run `npm run apidoc`
# This generates server/doc/
npm run apidoc

# Move back up to project root
cd ..

# Copies the generated documentation
cp -R ./observatory-server/doc/ docs/

# Go To Public folder
cd docs

# Add changes to git
git add .

# Come Back up to the Project Root
cd ..

# Commit changes
msg="Rebuilding documentation - `date`"
git commit -m "$msg"

# Push source and build repos.
git push origin dev

