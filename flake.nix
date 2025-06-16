# `nix develop` to enter environment and make the kernel available

{
    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs";
        flake-utils.url = "github:numtide/flake-utils";
    };

    outputs = { self, nixpkgs, flake-utils, ... }: flake-utils.lib.eachDefaultSystem (system:
        let
            pkgs = import nixpkgs {
                inherit system;
            };

        in {
            devShell = pkgs.mkShell {
                buildInputs = with pkgs; [
                    create-react-app
                    nodejs_23
                    yarn
                    yarn2nix
                    typescript
                ];

                shellHook = ''
                    export SHELL=$(which zsh)
                    exec zsh
                    echo "Welcome to your node app"
                '';
            };
        }
    );
}
