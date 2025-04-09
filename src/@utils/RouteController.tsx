// Hooks
import { Route, Routes } from 'react-router'

// Pages
import { Home } from '../pages/index'

const RouteController = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default RouteController
