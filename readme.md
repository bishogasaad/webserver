# Ifind (License Plate Detector)

### Notes
- You can find the deployed web app here: https://car-plate.herokuapp.com/
- You can find a video demo here: https://www.youtube.com/watch?v=Lr0KWTwx-18
- The project is split into 2 git repositories: \
__(please open both of them when seeing the commits)__
    1. [Web application](https://github.com/bishogasaad/webserver) (this repo)
    2. [Image processing program](https://github.com/bishogasaad/IP-project) (which is included as a submodule in `/IP-project` in this repo)

## Project description

Detect and extract car license plate from a camera image, to enable a user to search for a specific car using its license plate number (in a car garage for example)

The project is split into 2 main parts:

1. An image processing program to detect car license plate in an image, and extract its text.
2. A web application that provides an interface to this program, where a user can upload multiple images of cars to the server, and the server returns the extracted text of each license plate, where the user can then search for a specific plate using the website

## Implementation details

Project runs on Ubuntu

1. Image processing is written in python3 (using tesseract in the final step, for OCR of license plate characters)

2. Web application:
    1. Backend using Nodejs and express
    2. Frontend using React

## Team Members
1. Bishoy George
1. Bishoy Hany
1. David Nader
1. George Mohsen

---

## Installation

### Installing the web application

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

### Installing the image processing program

Follow the steps in `IP-project` ([here](https://github.com/bishogasaad/IP-project/blob/master/readme.md))

---

## Development
To start the sever in development mode
```sh
npm run serve
```
