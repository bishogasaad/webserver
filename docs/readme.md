# Development Documentation

To deploy this repo on heroku, 3 buildpacks are used:

1. [heroku-community/apt](https://github.com/heroku/heroku-buildpack-apt)

    Used to download Debian packages listed in `Aptfile` \
    Packages in `Aptfile`:
    - first set of packages are for `opencv`
    - second set are for `tesseract`

2. heroku/python

    Used to download python packages using `pip` and `requirements.txt`

3. heroku/nodejs

    This runs the main application and downloads `npm` packages in
    `package.json` and `package-lock.json`


For more info: see [Using Multiple Buildpacks for an App](https://devcenter.heroku.com/articles/using-multiple-buildpacks-for-an-app)