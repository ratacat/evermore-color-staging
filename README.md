# evermore-color-staging

## Browser rendering

![image](https://user-images.githubusercontent.com/62797411/159560548-92dd8538-0e87-45ab-8b9c-3d2dc378e00a.png)

Render a fully colorized text directly to your browser without need to refresh a page.

### Local deployment with Docker (recommended).

> Requires [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/).

1) Clone repo to local machine.
2) Run `docker-compose run app /bin/sh -c 'yarn install'` to prepare container.
3) Run `docker-compose up`, after that local server would be available at `localhost` (by default port `80`).
4) Edit/add any files in the `library` folder. Feel free to use text editor of your choice.
5) Upon save, the text will be colorized and displayed in the browser.

> Note: On updating all text files inside `library` folder will be displayed. If you don't want
> to display them all, change a files extensions from `.txt` to anything else.

> Note: Nesting inside of the `library` folder is supported, check `library/example`.

> Note: By default docker container uses port `80` at your host machine. If you need to use
> another port you could change it in the `docker-compose.yml` file in `ports:` graph.

<br />

### Native local deployment.

> Requires [nodejs (npm)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [yarn](https://yarnpkg.com/getting-started/install).

1) Clone repo to local machine.
2) Run `yarn` or `npm install`.
3) Start the server with `yarn start`, local server would be available at port `8080`.
4) Edit/add any files in the `library` folder. Feel free to use text editor of your choice.
5) Upon save, the text will be colorized and displayed in the browser.

> Note: On updating all text files inside `library` folder will be displayed. If you don't want
> to display them all, change a files extensions from `.txt` to anything else.

> Note: If you need, you could save txt files in nested directories inside `library` folder.
> Check `library/example` for an example.

> Note: By default `webpack-dev-server` uses port `8080` at your host machine. If another port
> number is required, check [webpack-dev-server](https://webpack.js.org/configuration/dev-server/#devserverport) documentation.

<br />
<br />
<br />

## Terminal rendering

![image](https://user-images.githubusercontent.com/62797411/159135162-beea079c-7deb-4db7-98b1-e93948eb6412.png)

## Usage

> Requires [nodejs (npm)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [yarn](https://yarnpkg.com/getting-started/install).

1) Clone repo to local machine.
2) Run `yarn` or `npm install`.
3) Start the watcher with `yarn start`.
4) Edit/add any files in the `library` folder. Feel free to use text editor of your choice.
5) Upon save, the text will be colorized and displayed in the terminal for that file.

*note* requires a terminal that can support True Color, I would recommend Iterm for OSX
https://iterm2.com/downloads.html.

This has been tested on OSX, with node version v14.18.0

<br />

## Usage with docker

> Requires [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/).

1) Clone repo to local machine.
2) Run `docker-compose run app /bin/sh -c 'yarn install'` to prepare container.
3) Run `docker-compose run app /bin/sh -c 'yarn terminal'` to start watching `library` folder.
4) Edit/add any files in the `library` folder. Feel free to use text editor of your choice.
5) Upon save, the text will be colorized and displayed in the terminal for that file.
