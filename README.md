### Tech stack

Typescript, React, react-router, Axios
Development environment
[https://daoukiwoom-interview.vercel.app/](https://daoukiwoom-interview.vercel.app/)

### 1. Repository setup

> npm install

This will install all necessary packages and perform initial setup for development on the local environment.

### 2. Local development server

> npm run start

Creates a development server with hot reloading on the local system.

### 3. Testing

> npm run test

This will run Jest in --watch mode

> npm run test-coverage

This tells Jest to perform all tests and generate a coverage report in the /coverage folder.

### 4. Code building

> npm run build

Performs a production build (minification, no .map files). Files will be output to the /dist folder.

### 5. Production deployment

deploy with vercel


### Environment variables

#### Local development

`.env` - You can save any custom parameters in this file for local builds. This file is ignored during commits.

`.env.example` - You can see environment sample

### Folder Structure
```
src/
  assets/
  common/
  components/
    <shared-component>/
  pages/
    <app-page>/
```

`assets` - Static assets such as images. videos or xml files should be placed here. This folder will be copied into the /dist folder during building

`common` - useful shared helper functions or libraries should reside here.

`components` - shared react components used throughout the app.

`pages` - individual sections of the app

### Tests

All tests should be placed in a `__tests__` folder in the respective folder of the function or component being tested on resides.
