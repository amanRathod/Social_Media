/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// eslint-disable-next-line import/no-unresolved
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './library/firebase';
import './styles/app.css';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// npm install date-fns
// npm install firebase
// npm install react-loading-skeleton
// install eslint(if you need) command: exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/karlhadwen/eslint-prettier-airbnb-react/master/eslint-prettier-config.sh 2> /dev/null)

// client side rendered app: react (cra)
// -> database which is Firebase
// -> react-loading-skeleton
// -> tailwind

// Folder Structure
// -> src
// -> components,
// -> constants,
// -> context,
// -> pages,
// -> hooks,
// -> helpers,
// -> lib (firebase is going to live in hrere )
// -> services (firebase functions in here )
// -> seed file to populate the databse of firebase
// -> styles (tailwind's folder app/tailwind)

// -> Populate the firestore using seed file.

// -> npm install react-router-dom

// inSTALL Tailwind
// -> npm install tailwindcss -D
// -> npm install prop-types -D
// -> npm install postcss-cli -D
// -> npm install npm-run-all -D
// -> npm install autoprefixer -D
// -> npm install @heroicons/react

// add below code in app.cs
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// add below code in postcss.config.js
// module.exports = {
    
//   plugins: [require('tailwindcss'), require('autoprefixer')]

// };

// add below code in tailwind.config.js
// module.exports = {
//   future: {
//     removeDeprecatedGapUtilities: true
//   },
// };


// package.json. add below code in scripts
// "build:css": "postcss src/styles/tailwind.css -o src/styles/app.css",
//     "watch:css": "postcss src/styles/tailwind.css -o src/styles/app.css --watch",
//     "react-scripts:start": "sleep 5 && react-scripts start",
//     "start": "run-p watch:css react-scripts:start",
//     "build": "run-s build:css react-scripts:build",

