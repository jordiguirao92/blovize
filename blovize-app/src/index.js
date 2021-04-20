import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import firebase from "firebase/app";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import ReduxProvider from './redux';

const firebaseConfig = {
  apiKey: "AIzaSyDisSboWzjo1PdIIx4ex02zE_ciBhH0fjg",
  authDomain: "blovize.firebaseapp.com",
  projectId: "blovize",
  storageBucket: "blovize.appspot.com",
  messagingSenderId: "182691507739",
  appId: "1:182691507739:web:bfd379512bd1671480d2be",
  measurementId: "G-LDWTFNB77P"
};
firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <App />
      </>
    </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
