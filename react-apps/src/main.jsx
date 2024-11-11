import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Testing from './m2/App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Testing />
  </StrictMode>,
)
