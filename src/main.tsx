import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Styles
import '../src/styles/main.scss'

createRoot(document.getElementById('root')!).render(<StrictMode></StrictMode>)
