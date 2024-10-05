import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import {PlayersContextProvider} from "../src/context/playerContext.jsx";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayersContextProvider>
      <App />
    </PlayersContextProvider>
  </StrictMode>,
)
