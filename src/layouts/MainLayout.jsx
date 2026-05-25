// // /**
// //  * MainLayout.jsx
// //  * Shell for all authenticated pages: Navbar + Sidebar + page content.
// //  */

// // import { Outlet } from 'react-router-dom'
// // import Navbar  from '../components/common/Navbar'
// // import Sidebar from '../components/common/Sidebar'

// // const MainLayout = () => (
// //   <div className="flex flex-col min-h-screen bg-bg">
// //     {/* <Navbar /> */}
// //     <div className="flex flex-1">
// //       {/* <Sidebar /> */}
// //       <main className="flex-1 overflow-y-auto text-text">
// //         <Outlet />
// //       </main>
// //     </div>
// //   </div>
// // )

// // export default MainLayout

// /**
//  * MainLayout.jsx
//  * Clean Dashboard Layout
//  */

// import { Outlet } from 'react-router-dom'
// import TokenExpiredModal from "../components/modal/TokenExpiredModal"
// import { useAuth } from "../context/AuthContext"
// import { useEffect } from 'react'

// const MainLayout = () => {
  
//   const { triggerTokenExpired } = useAuth()

//   // Axios interceptor ko AuthContext ka handler do
//   useEffect(() => {
//     registerTokenExpiredHandler(triggerTokenExpired)
//   }, [triggerTokenExpired])
//   return (
//     <>
//     <div className="h-screen overflow-hidden bg-[#0d0d1a] text-white">
//       <Outlet />
//     </div>
//        {/* Token Expired Modal */}
//       <TokenExpiredModal />
//     </>
//   )
// }

// export default MainLayout


/**
 * MainLayout.jsx
 * Clean Dashboard Layout
 */

import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { setForceLogoutHandler } from '../api/axios'
import TokenExpiredModal from '../components/modal/TokenExpiredModal'

const MainLayout = () => {

  const { forceLogout } = useAuth()

  // Axios interceptor ko AuthContext ka handler do
  useEffect(() => {
    setForceLogoutHandler(forceLogout)
  }, [forceLogout])

  return (
    <>
      <div className="h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">
        <Outlet />
      </div>

      {/* Token Expired Modal */}
      <TokenExpiredModal />
    </>
  )
}

export default MainLayout