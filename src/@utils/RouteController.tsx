// Hooks
import { Route, Routes } from 'react-router'

// Pages
import { Home } from '../pages/index'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default Router
