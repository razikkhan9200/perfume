// /**
//  * MainLayout.jsx
//  * Shell for all authenticated pages: Navbar + Sidebar + page content.
//  */

// import { Outlet } from 'react-router-dom'
// import Navbar  from '../components/common/Navbar'
// import Sidebar from '../components/common/Sidebar'

// const MainLayout = () => (
//   <div className="flex flex-col min-h-screen bg-bg">
//     {/* <Navbar /> */}
//     <div className="flex flex-1">
//       {/* <Sidebar /> */}
//       <main className="flex-1 overflow-y-auto text-text">
//         <Outlet />
//       </main>
//     </div>
//   </div>
// )

// export default MainLayout

/**
 * MainLayout.jsx
 * Clean Dashboard Layout
 */

import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#0d0d1a] text-white">
      <Outlet />
    </div>
  )
}

export default MainLayout