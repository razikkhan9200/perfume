/**
 * App.jsx
 * Root component — wraps providers and renders routes.
 */

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider }  from './context/AuthContext'
import { AppProvider }   from './context/AppContext'
import AppRoutes         from './routes/AppRoutes'

const App = () => (
  <BrowserRouter>
    <AppProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </AppProvider>
  </BrowserRouter>
)

export default App
