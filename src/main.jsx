import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Run app which is imported above and will be styled using CSS above */}
    <App />
  </StrictMode>,
)
