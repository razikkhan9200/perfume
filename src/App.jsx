// /**
//  * App.jsx
//  * Root component — providers aur routes.
//  */

// import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import AppRoutes from "./routes/AppRoutes";

// const App = () => (
//   <BrowserRouter>
//     <AuthProvider>
//       <AppRoutes />
//     </AuthProvider>
//   </BrowserRouter>
// );

// export default App;


import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { setForceLogoutHandler }  from "./api/axios";
import AppRoutes         from "./routes/AppRoutes";
import TokenExpiredModal from "./components/modal/TokenExpiredModal";

// AppShell AuthContext ke andar hai → useAuth use kar sakta hai
const AppShell = () => {
  const { forceLogout } = useAuth();

  useEffect(() => {
    setForceLogoutHandler(forceLogout);  // axios mein inject
  }, [forceLogout]);

  return (
    <>
      <AppRoutes />
      <TokenExpiredModal />  {/* globally mounted */}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  </BrowserRouter>
);

export default App;