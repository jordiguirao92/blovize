import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import firebase from "firebase/app";

//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import ReduxProvider from './redux';
import {firebaseConfig} from './configFirabase';

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
