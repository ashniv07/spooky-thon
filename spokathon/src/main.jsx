import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HauntedIDELanding from './hauntedIDELanding'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HauntedIDELanding />
  </StrictMode>,
)
