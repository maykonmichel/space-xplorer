<p align="center">
  <a href="https://www.spacex.com/" align="center">
    <img src="https://logosmarcas.net/wp-content/uploads/2020/09/SpaceX-Logo.png" alt="Logo" width="384" height="216">
  </a>
</p>

<h3 align="center">
  SpaceX mission launches app
</h3>

<br />

## 🚀 About the project

This project uses [SpaceX open API](https://api.spacex.land/) to show the latest missions and launch details

### 🔰 Features

- ✅ Latest launches displayed chronologically
- ✅ Launch card
  - Mission name
  - Launch date formatted
  - Mission cover image if available
- ✅ Launch details screen
  - Mission name
  - Launch date formatted
  - Rocket name
  - Details if available
  - Article button link if available
- ✅ Images carousel with 3 items at most if available
- ✅ Individual toggle favorite image on tap it 
- ✅ Favorite heart animated
- ✅ Favorite button animated
- ✅ Animated empty feedback
- ✅ Animated error feedback
- ✅ Animated loading feedback
- ✅ Image caching
- ✅ Data caching
- ✅ Cache persisting
- ✅ Unit testing

### 💡 Roadmap

- ☑️ Full compatibility with dark theme
- ☑️ Infinite scroll
- ☑️ Pull to refresh
- ☑️ Icon
- ☑️ Splashscreen
- ☑️ e2e tests
- ☑️ Sort by launch date asc or desc
- ☑️ Continuous integration
- ☑️ Automated build
- ☑️ Automated store deployment
- ☑️ Code push
- ☑️ Continuous deployment
- ☑️ Performance monitoring
- ☑️ Crash monitoring

### ⚙️ Tech stack

- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [React Native](https://reactnative.dev/) - Hybrid mobile development
- [React Navigation](https://reactnavigation.org/) - Routing and navigation
- [Apollo GraphQL](https://www.apollographql.com/docs/react/)
  - [Remote GraphQL client](https://www.apollographql.com/docs/react/get-started/)
  - [Local state management](https://www.apollographql.com/docs/react/local-state/local-state-management/)
  - [Caching](https://www.apollographql.com/docs/react/caching/cache-configuration/)
- [Lottie](https://lottiefiles.com/) - Lightweight and scalable animations
- [Snap carousel](https://github.com/meliorence/react-native-snap-carousel) - React native carousel library
- [date-fns](https://date-fns.org/) - Date utility library
- [Ramda](https://ramdajs.com/) - Practical functional library
- [Jest](https://jestjs.io/) - Testing framework
- [Testing library](https://testing-library.com/docs/react-native-testing-library/intro/) - Well... a testing  library
- [Faker.js](https://github.com/Marak/Faker.js) - Generate fake data for tests
- [ESLint](https://eslint.org/) - Static testing
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [Lint staged](https://github.com/okonet/lint-staged) - Lint files staged by git

## 👋 Getting Started

These instructions will get you a base project structure and running on your local machine for development and testing purposes.

### 📋 Prerequisites

Setting up the development environment

You can follow the [React Native CLI quickstart](https://reactnative.dev/docs/environment-setup) for your development OS target OS.

### 📦 Running

Installing Dependencies:

```bash
yarn install
```

Installing Pods (only for iOS):

```bash
cd ios && pod install
```

Running the app:

```bash
yarn start
```

For starting the app on a specific OS:

```bash
yarn ios
```

```bash
yarn android
```

## 👩🏾‍💻 Development

- Eslint is used in the project to enforce code style and should be configured in your [editor](https://eslint.org/docs/user-guide/integrations).

- Prettier is also used and apply automatically by eslint

- Typescript is used in the project for type-checking and should be configured in your [editor](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).

You can check this manually by running:

```bash
yarn lint
```

You can ask eslint to fix issues by running:

```bash
yarn lint:fix
```

### 🛠 Testing

Use the following command to run unit tests:

```bash
yarn test
```

Use the following to update the snapshots of unit tests:

```bash
yarn test -u
```

Use the following to run unit tests in watch mode while developing:

```bash
yarn test --watch
```


