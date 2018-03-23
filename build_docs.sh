#!/bin/bash

echo -e "\033[0;32mGenerating Observatory documentation...\033[0m"

# # # #

# Navigate into the observatory-server git submodule
cd ./observatory-server

# Pulls the latest development branch
git pull origin dev

# Run `npm run apidoc`
# This generates server/doc/
npm run apidoc

# Move back up to project root
cd ..

# # # #

# Navigate into the observatory-server git submodule
cd ./observatory-client

# Pulls the latest development branch
git pull origin dev

# Installs dependencies
npm install

# Run `npm run apidoc`
# This generates client/docs/
npm run doc

# Move back up to project root
cd ..

# # # #

# Copies the generated documentation
cp -R ./observatory-server/doc/ server-docs/

# Copies the generated documentation
cp -R ./observatory-client/docs/ client-docs/

# # # #

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Add changes to git
git add .

# Commit changes
msg="Rebuilding documentation - `date`"
git commit -m "$msg"

# Push source to github.com/USER/observatory-docs
git push origin dev
