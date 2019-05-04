# Web application

## Installation

1. Install nodejs 10.x

    - For Ubuntu 16.04:
    ```sh
    curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```
    - For other distros: see [this](https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions)

2. Clone this repository

    ```sh
    # using --recursive to initialize the submodules
    git clone --recursive <repo_url>
    ```

3. In repo's directory:

    ```sh
    npm install
    ```

## Development
To start the sever in development mode
```sh
npm run serve
```
