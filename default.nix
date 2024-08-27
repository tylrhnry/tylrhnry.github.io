with (import <nixpkgs> {});
with (import pkgs.yarn2nix { inherit pkgs; });
rec {
  weave-front-end = mkYarnPackage {
    name = "weave-front-end";
    src = ./.;
    packageJSON = ./package.json;
    yarnLock = ./yarn.lock;
    yarnNix = ./yarn.nix;
  };
}
