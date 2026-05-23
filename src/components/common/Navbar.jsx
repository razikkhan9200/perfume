// import {
//   Bell,
//   Settings,
//   Search,
//   Menu,
//   MoreHorizontal,
// } from "lucide-react";

// const Navbar = ({setSidebarOpen }) => {


//   return (
//     <header className="flex h-16 shrink-0 items-center justify-between px-4 sm:px-7">
//       {/* Left */}

//       <div className="flex items-center gap-2.5">
//         <button
//           onClick={() => setSidebarOpen(true)}
//           className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6E6EC] bg-white lg:hidden"
//         >
//           <Menu size={16} />
//         </button>

//         <span className="text-[16px] font-black tracking-[-0.02em]">
//           Shoplytixs
//         </span>
//       </div>

//       {/* Search */}

//       <div className="mx-4 hidden max-w-[280px] flex-1 sm:flex">
//         <div className="flex w-full items-center gap-2 rounded-full border border-[#E6E6EC] bg-white px-4 py-2">
//           <Search size={13} color="#8C8C98" />

//           <span className="text-[12px] text-[#8C8C98]">Search...</span>
//         </div>
//       </div>

//       {/* Right */}

//       <div className="flex items-center gap-2.5">
//         <button className="relative hidden h-9 w-9 items-center justify-center rounded-full border border-[#E6E6EC] bg-white sm:flex">
//           <Bell size={14} />

//           <span className="absolute right-[2px] top-[2px] h-[7px] w-[7px] rounded-full border-[1.5px] border-[#F4F4F7] bg-[#B8A9FF]" />
//         </button>

//         <button className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#E6E6EC] bg-white sm:flex">
//           <Settings size={14} />
//         </button>

//         <div className="flex cursor-pointer items-center gap-2 rounded-full border border-[#E6E6EC] bg-white px-3 py-[5px]">
//           <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF] text-[10px] font-extrabold text-white">
//             EC
//           </div>

//           <div>
//             <p className="text-[11px] font-bold leading-[1.2]">
//               Ethan Carter
//             </p>

//             <p className="text-[9px] text-[#8C8C98]">Owner</p>
//           </div>

//           <MoreHorizontal size={13} color="#8C8C98" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import {
  Bell,
  Settings,
  Search,
  Menu,
  MoreHorizontal,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import { ROUTES } from "../../constants/routes";

const Navbar = ({ setSidebarOpen }) => {
  const navigate = useNavigate();

  const { logout } = useAuth();

  // ===========================================
  // HANDLE LOGOUT
  // ===========================================

  const handleLogout = () => {
    // remove token + user
    logout();

    // redirect login
    navigate(ROUTES.LOGIN, {
      replace: true,
    });
  };

  return (
    <header className="flex h-16 shrink-0 items-center justify-between px-4 sm:px-7">
      {/* Left */}

      <div className="flex items-center gap-2.5">
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6E6EC] bg-white lg:hidden"
        >
          <Menu size={16} />
        </button>

        <span className="text-[16px] font-black tracking-[-0.02em]">
          Shoplytixs
        </span>
      </div>

      {/* Search */}

      <div className="mx-4 hidden max-w-[280px] flex-1 sm:flex">
        <div className="flex w-full items-center gap-2 rounded-full border border-[#E6E6EC] bg-white px-4 py-2">
          <Search size={13} color="#8C8C98" />

          <span className="text-[12px] text-[#8C8C98]">
            Search...
          </span>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-2.5">
        {/* Notification */}

        <button className="relative hidden h-9 w-9 items-center justify-center rounded-full border border-[#E6E6EC] bg-white sm:flex">
          <Bell size={14} />

          <span className="absolute right-[2px] top-[2px] h-[7px] w-[7px] rounded-full border-[1.5px] border-[#F4F4F7] bg-[#B8A9FF]" />
        </button>

        {/* Settings */}

        <button className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#E6E6EC] bg-white sm:flex">
          <Settings size={14} />
        </button>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6E6EC] bg-white transition hover:bg-red-50"
        >
          <LogOut size={14} className="text-red-500" />
        </button>

        {/* User Profile */}

        <div className="flex cursor-pointer items-center gap-2 rounded-full border border-[#E6E6EC] bg-white px-3 py-[5px]">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF] text-[10px] font-extrabold text-white">
            EC
          </div>

          <div>
            <p className="text-[11px] font-bold leading-[1.2]">
              Ethan Carter
            </p>

            <p className="text-[9px] text-[#8C8C98]">
              Owner
            </p>
          </div>

          <MoreHorizontal
            size={13}
            color="#8C8C98"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;