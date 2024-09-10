### Development
When navigated to the project directory, run `nix develop` to enter the development environment

To run the app in development mode, run `yarn start` 

To update dependencies, add them to the flake.nix file, if necessary. Then you can use `yarn add <package name>` to install the package.
This updates the yarn.lock file, so to have nix keep the build reproducible, you can run `yarn2nix > yarn.nix`. This lets nix keep track of everything declaratively/reproducibly. 

Run `yarn build` to build the app for production and put in the build folder
