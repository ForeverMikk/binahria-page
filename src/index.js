import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
// import 'reactjs-popup/dist/index.css';

import './index.css';
import i18n from './i18n';
import App from './App';
import Footer from "./components/Footer/Footer";

ReactDOM.render(
	<I18nextProvider i18n={i18n}>
		<Router>
			<App />
			<Footer />
		</Router>
	</I18nextProvider>
,document.getElementById('root'));
