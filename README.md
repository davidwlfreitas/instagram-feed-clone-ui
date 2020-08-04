![Instagram Logo](logo.png)
# Instagram Feed Clone UI

An Instagram Feed Clone UI app made with [vue-native](https://vue-native.io/) using [vuex](https://vuex.vuejs.org/), [JSON Server](https://github.com/typicode/json-server),  [expo](https://docs.expo.io/) and [nativebase](https://nativebase.io/).

[![Author](https://img.shields.io/badge/author-DavidFreitas-f06040?style=flat-square)](https://github.com/davidwlfreitas)
[![Languages](https://img.shields.io/github/languages/count/davidwlfreitas/instagram-feed-clone-ui?color=%238b10ae&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/davidwlfreitas/instagram-feed-clone-ui?color=f06040&style=flat-square)](https://github.com/davidwlfreitas/instagram-feed-clone-ui/stargazers)
[![Forks](https://img.shields.io/github/forks/davidwlfreitas/instagram-feed-clone-ui?color=%23f06040&style=flat-square)](https://github.com/davidwlfreitas/instagram-feed-clone-ui/network/members)
[![Contributors](https://img.shields.io/github/contributors/davidwlfreitas/instagram-feed-clone-ui?color=f06040&style=flat-square)](https://github.com/davidwlfreitas/instagram-feed-clone-ui/graphs/contributors)

# :rocket: Features

- Infinite scroll
- Load imagens on scroll
- Preload blurred images
- Pull to Refresh

# :clapper: Preview

![Preview](preview.gif)

# :pushpin: System Requirements

 - Globally installed node >= 6.0
 - Globally installed npm or yarn
 - Globally installed Expo CLI
 - Globally installed JSON Server

# :construction_worker: Installation

    $ git clone https://github.com/davidwlfreitas/instagram-feed-clone-ui.git
    $ cd instagram-feed-clone-ui


Install project dependencies with npm or yarn:

    $ npm install
or

    $ yarn

## :satellite: Running a Mock API


    $ json-server --host YOUR_IP --watch server.json

## :electric_plug: Integrating Mock API to the App

    To integrate the mock API to the app you just have to add your IP again on ~/settings/index.js 

# :tophat: Running the App


    $ npm run start
or

    $ yarn start


## Alternatively, you can start the app directly on platform simulators:
### iOS

    $ npm run ios
or

    $ yarn ios

This works just like start, but also attempts to open your app in the iOS Simulator if you’re on a Mac and have it installed.

### Android

    $ npm run android
or

    $ yarn android

This works just like start, but also attempts to open your app on a connected Android device or emulator. It requires an installation of Android build tools (see the React Native docs for detailed setup).

# :closed_book: License

Released in 2019. This project is under the [MIT license](https://github.com/davidwlfreitas/instagram-feed-clone-ui/blob/master/LICENSE).

# :tada: Credits to [Rocketseat](https://rocketseat.com.br/)

A huge thanks to the Rocketseat Team for the amazing contribution through excellent React Native Training Courses.

Made with :beers: by [David Freitas](https://github.com/davidwlfreitas) :8ball:
