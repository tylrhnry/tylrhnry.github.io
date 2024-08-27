# `nix develop` to enter environment and make the kernel available

{
    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
        flake-utils.url = "github:numtide/flake-utils";
    };

    outputs = { self, nixpkgs, flake-utils, ... }: flake-utils.lib.eachDefaultSystem (system:
        let
            pkgs = import nixpkgs {
                inherit system;
            };

        in {
            devShell = pkgs.mkShell {
                # nativeBuildInputs = with pkgs; [
                #     yarn
                # ];

                buildInputs = with pkgs; [
                    create-react-app
                    nodejs_22
                    yarn
                ];

                shellHook = ''
                    echo "Welcome to your node app"
                '';
            };
        }
    );
}
