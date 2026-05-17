/**
 * MainLayout.jsx
 * Shell for all authenticated pages: Navbar + Sidebar + page content.
 */

import { Outlet } from 'react-router-dom'
import Navbar  from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'

const MainLayout = () => (
  <div className="flex flex-col min-h-screen bg-bg">
    <Navbar />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto text-text">
        <Outlet />
      </main>
    </div>
  </div>
)

export default MainLayout
