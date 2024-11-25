import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Testing from './m3/app'
import App from './m3/app'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <apps/>
  </StrictMode>,
)
