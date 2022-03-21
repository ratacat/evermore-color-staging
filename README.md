# evermore-color-staging

![image](https://user-images.githubusercontent.com/62797411/159135162-beea079c-7deb-4db7-98b1-e93948eb6412.png)

## Usage

> Requires [nodejs (npm)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [yarn](https://yarnpkg.com/getting-started/install).

1) Clone repo to local machine.
2) Run `yarn` or `npm install`.
3) Start the watcher with `yarn start`.
4) Edit/add any files in the `library` folder. Feel free to use text editor of your choice.
5) Upon save, the text will be colorized and displayed in the terminal for that file.

*note* requires a terminal that can support True Color, I would recommend Iterm for OSX
https://iterm2.com/downloads.html

This has been tested on OSX, with node version v14.18.0

<br />

## Usage with docker

> Requires [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/).

1) Clone repo to local machine.
2) Run `docker-compose run app /bin/sh -c 'yarn install'` to prepare container.
3) Run `docker-compose up` to start watching `library` folder.
4) Edit/add any files in the `library` folder. Feel free to use text editor of your choice.
5) Upon save, the text will be colorized and displayed in the terminal for that file.
