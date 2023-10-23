## Robots.txt

Этот код представляет собой файл robots.txt, который используется для коммуникации между веб-краулерами (поисковыми роботами) и владельцами веб-сайтов. Файл robots.txt указывает поисковым роботам, какие части сайта им следует индексировать (проходить) и какие части следует игнорировать (не проходить). В данном случае, файл robots.txt указывает следующее:

User-agent: * - Эта строка означает, что правило применяется ко всем поисковым роботам (всем User-agents). Знак "*" означает "любой поисковый робот". Это наиболее распространенное правило, которое применяется ко всем поисковым роботам.

Disallow: - Эта строка означает, что для всех поисковых роботов не установлено явных ограничений на доступ к содержимому сайта. То есть, поисковые роботы могут индексировать (проходить) любую доступную страницу и ресурсы на сайте без каких-либо ограничений.

## manifest.json

Этот фрагмент кода представляет собой манифест (manifest) Progressive Web App (PWA) в формате JSON. Манифест PWA - это файл, который содержит метаданные и настройки для веб-приложения, которое позволяет его установить и запускать, как автономное приложение на устройствах и в браузерах, поддерживающих PWA. В данном случае, манифест определяет характеристики PWA с названием "React App". Давайте разберемся, что означает каждое поле:

## Turn off audit: vulnerabilities ( moderate, high)

npm set audit false
npm audit --production - для того чтобы делать более точный аудит
npm install --save-dev @babel/plugin-proposal-private-property-in-object - для fix babel
npm install eslint-plugin-react --save-dev
npm run lint fix - исправит ошибки


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## .eslintrc.js

module.exports = {
  parser: "@babel/eslint-parser", // Если вы используете Babel
  extends: ["react-app", "react-app/jest", "airbnb", "airbnb-typescript"],
  plugins: ["react"],
  rules: {
    "react/jsx-indent": 0,
    "implicit-arrow-linebreak": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/comma-dangle": 0,
    "function-paren-newline": 0,
    "no-param-reassign": 0,
    "no-nested-ternary": 0,
    "no-confusing-arrow": 0,
    "operator-linebreak": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "default-case": 0,
    "@typescript-eslint/default-param-last": 0,
    "@typescript-eslint/switch-exhaustiveness-check": 2,
    "@typescript-eslint/explicit-function-return-type": [
      2,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
      },
    ],
  },
  parserOptions: {
    project: ["tsconfig.json"],
  },
};

