// Hooks
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

// Utils
import RouteController from './@utils/RouteController'

// Styles
import '../src/styles/main.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <RouteController />
        </BrowserRouter>
    </StrictMode>
)
