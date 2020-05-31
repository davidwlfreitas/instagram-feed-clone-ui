# instagram-feed-clone-ui
Instagram Feed Clone UI

An Instagram Feed Clone UI app made with [vue-native](https://vue-native.io/) using [vuex](https://vuex.vuejs.org/), [JSON Server](https://github.com/typicode/json-server),  [expo](https://docs.expo.io/) and [nativebase](https://nativebase.io/).

## Features

- Infinite scroll
- Load imagens on scroll
- Preload blurred images
- Pull to Refresh

## Preview

![Preview](preview.gif)

## System Requirements

 - Globally installed node >= 6.0
 - Globally installed npm or yarn
 - Globally installed Expo CLI
 - Globally installed JSON Server

## Installation

    $ git clone https://github.com/davidwlfreitas/instagram-feed-clone-ui.git
    $ cd instagram-feed-clone-ui


Install project dependencies with npm or yarn:

    $ npm install
or

    $ yarn

## Running a Mock API


    $ json-server --host YOUR_IP --watch server.json

## Integrating Mock API to the App

    To integrate the mock API to the app you just have to add your IP again on ~/settings/index.js 

## Running the App


    $ npm run start
or

    $ yarn start


### Alternatively, you can start the app directly on platform simulators:
#### iOS

    $ npm run ios
or

    $ yarn ios

This works just like start, but also attempts to open your app in the iOS Simulator if you’re on a Mac and have it installed.

#### Android

    $ npm run android
or

    $ yarn android

This works just like start, but also attempts to open your app on a connected Android device or emulator. It requires an installation of Android build tools (see the React Native docs for detailed setup).

## License

[MIT](http://opensource.org/licenses/MIT)

## Credits to [Rocketseat](https://rocketseat.com.br/)

A huge thanks to the Rocketseat Team for the amazing contribution through excellent React Native Training Courses.