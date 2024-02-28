import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/style.scss';
import { ThemeProvider } from './store/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<ThemeProvider>
		<App />
	</ThemeProvider>
  </React.StrictMode>,
)
