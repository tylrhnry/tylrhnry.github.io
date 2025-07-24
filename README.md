### Development
When navigated to the project directory, run `nix develop` to enter the development environment

To run the app in development mode, run `yarn dev` 

To update packages, run `nix flake update` then `yarn upgrade`

To update dependencies, add them to the flake.nix file, if necessary. Then you can use `yarn add <package name>` to install the package.
This updates the yarn.lock file, so to have nix keep the build reproducible, you can run `yarn2nix > yarn.nix`. This lets nix keep track of everything declaratively/reproducibly. 

Run `yarn build` to build the app for production and put in the build folder

Run `yarn deploy` to deploy the app to github and have the changes reflected in the site link


### Additions/Bugs/Fixes
Check mobile use

Add github links to vtol and home server
