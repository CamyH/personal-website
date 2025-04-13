// Hooks
import { Route, Routes } from 'react-router'

// Pages
import { WorkInProgress } from '../pages/index'

const RouteController = () => {
    return (
        <Routes>
            <Route path='/' element={<WorkInProgress />} />
        </Routes>
    )
}

export default RouteController
