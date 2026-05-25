// import {
//   Bell,
//   Settings,
//   Search,
//   Menu,
//   MoreHorizontal,
//   LogOut,
// } from "lucide-react";

// import { useNavigate } from "react-router-dom";

// import { useAuth } from "../../context/AuthContext";

// import { ROUTES } from "../../constants/routes";

// const Navbar = ({ setSidebarOpen }) => {
//   const navigate = useNavigate();

//   const { logout } = useAuth();

//   // ===========================================
//   // HANDLE LOGOUT
//   // ===========================================

//   const handleLogout = () => {
//     // remove token + user
//     logout();

//     // redirect login
//     navigate(ROUTES.LOGIN, {
//       replace: true,
//     });
//   };

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

//           <span className="text-[12px] text-[#8C8C98]">
//             Search...
//           </span>
//         </div>
//       </div>

//       {/* Right */}

//       <div className="flex items-center gap-2.5">
//         {/* Notification */}

//         <button className="relative hidden h-9 w-9 items-center justify-center rounded-full border border-[#E6E6EC] bg-white sm:flex">
//           <Bell size={14} />

//           <span className="absolute right-[2px] top-[2px] h-[7px] w-[7px] rounded-full border-[1.5px] border-[#F4F4F7] bg-[#B8A9FF]" />
//         </button>

//         {/* Settings */}

//         <button className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#E6E6EC] bg-white sm:flex">
//           <Settings size={14} />
//         </button>

//         {/* Logout */}

//         <button
//           onClick={handleLogout}
//           className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6E6EC] bg-white transition hover:bg-red-50"
//         >
//           <LogOut size={14} className="text-red-500" />
//         </button>

//         {/* User Profile */}

//         <div className="flex cursor-pointer items-center gap-2 rounded-full border border-[#E6E6EC] bg-white px-3 py-[5px]">
//           <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF] text-[10px] font-extrabold text-white">
//             EC
//           </div>

//           <div>
//             <p className="text-[11px] font-bold leading-[1.2]">
//               Ethan Carter
//             </p>

//             <p className="text-[9px] text-[#8C8C98]">
//               Owner
//             </p>
//           </div>

//           <MoreHorizontal
//             size={13}
//             color="#8C8C98"
//           />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { useState, useRef, useEffect } from "react";
import {
  Bell,
  Settings,
  Search,
  Menu,
  LogOut,
  User,
  ChevronUp,
  ChevronDown,
  Info,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../constants/routes";

// ─────────────────────────────────────────────────────────
// USER DROPDOWN
// ─────────────────────────────────────────────────────────

const UserDropdown = ({ onClose, onLogout, navigate }) => {
  const menuItems = [
    {
      icon: User,
      label: "Edit profile",
      action: () => {
        navigate(ROUTES.PROFILE || "/profile");
        onClose();
      },
    },
    {
      icon: Settings,
      label: "Account settings",
      action: () => {
        navigate(ROUTES.SETTINGS || "/settings");
        onClose();
      },
    },
    {
      icon: Info,
      label: "Support",
      action: () => {
        navigate(ROUTES.SUPPORT || "/support");
        onClose();
      },
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Dropdown */}
      <div
        className="absolute right-0 top-[calc(100%+12px)] z-50 w-[260px] overflow-hidden rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
        style={{
          background: "#1E2235",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* User Info */}
        <div className="flex items-center gap-3 px-5 pb-5 pt-5">
          <div className="h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-[#2B3047]">
            <img
              src="https://i.pravatar.cc/300?img=12"
              alt="Admin"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-[14px] font-bold text-white leading-tight">
              Musharof Chowdhury
            </p>

            <p className="mt-0.5 text-[12px] text-[#8C93A8]">
              randomuser@pimjo.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-4 h-px bg-white/5" />

        {/* Menu */}
        <div className="px-2 py-2">
          {menuItems.map(({ icon: Icon, label, action }) => (
            <button
              key={label}
              onClick={action}
              className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-all hover:bg-white/[0.06]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06]">
                <Icon size={15} className="text-[#C4C9D8]" />
              </div>

              <span className="text-[13px] font-medium text-[#D7DBE8]">
                {label}
              </span>
            </button>
          ))}

          {/* Divider */}
          <div className="mx-1 my-2 h-px bg-white/5" />

          {/* Logout */}
          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-all hover:bg-red-500/10"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06]">
              <LogOut size={15} className="text-[#FF8A8A]" />
            </div>

            <span className="text-[13px] font-medium text-[#FF8A8A]">
              Sign out
            </span>
          </button>
        </div>

        <div className="pb-2" />
      </div>
    </>
  );
};

// ─────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────

const Navbar = ({ setSidebarOpen }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN, { replace: true });
  };

  // Outside click close
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <header className="flex h-[72px] shrink-0 items-center justify-between border-b border-[#ECECF2]  px-4 sm:px-6 lg:px-8" >
      {/* LEFT */}

      <div className="flex items-center gap-3">
        {/* Mobile Menu */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E6E6EC] bg-white transition-all hover:bg-[#F5F5F8] lg:hidden"
        >
          <Menu size={17} className="text-[#1E1E24]" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
         

          <h1 className="text-[18px] font-black tracking-[-0.04em] text-[#1E1E24] sm:text-[20px]">
            Shoplytixs
          </h1>
        </div>
      </div>



      {/* RIGHT */}

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Theme */}

        <button className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#E6E6EC] bg-white transition-all hover:bg-[#F5F5F8] sm:flex">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8C8C98"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </button>

        {/* Notification */}

        <button className="relative hidden h-10 w-10 items-center justify-center rounded-full border border-[#E6E6EC] bg-white transition-all hover:bg-[#F5F5F8] sm:flex">
          <Bell size={15} className="text-[#1E1E24]" />

          <span className="absolute right-[4px] top-[4px] h-[10px] w-[10px] rounded-full border-2 border-white bg-[#FFB86B]" />
        </button>

        {/* User */}

        {/* USER BUTTON */}

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className="flex items-center gap-2 rounded-full border border-[#E6E6EC] bg-white px-2 py-1.5 transition-all duration-300 hover:border-[#CFC5FF] hover:shadow-[0_8px_25px_rgba(184,169,255,0.18)] sm:px-3"
          >
            {/* Premium Avatar */}

            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF] opacity-40 blur-[7px]" />

              {/* Avatar Image */}
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white bg-[#F4F4F7] shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
                <img
                  src="https://i.pravatar.cc/300?img=12"
                  alt="Admin"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Online Status */}
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
            </div>

            {/* User Info */}

            <div className="hidden text-left sm:block">
              <p className="text-[12px] font-black leading-none tracking-[-0.02em] text-[#1E1E24]">
                Musharof
              </p>

              <p className="mt-1 text-[11px] font-medium text-[#8C8C98]">
                Admin
              </p>
            </div>

            {/* Arrow */}

            <div className="flex items-center justify-center">
              {dropdownOpen ? (
                <ChevronUp
                  size={15}
                  className="text-[#8C8C98] transition-transform duration-300"
                />
              ) : (
                <ChevronDown
                  size={15}
                  className="text-[#8C8C98] transition-transform duration-300"
                />
              )}
            </div>
          </button>

          {/* DROPDOWN */}

          {dropdownOpen && (
            <UserDropdown
              onClose={() => setDropdownOpen(false)}
              onLogout={handleLogout}
              navigate={navigate}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
