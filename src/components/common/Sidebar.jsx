// import { NavLink } from 'react-router-dom'
// import { useAppContext } from '../../context/AppContext'
// import { ROUTES } from '../../constants/routes'

// const navItems = [
//   { icon: '⊞', label: 'Dashboard', to: ROUTES.DASHBOARD },
//   // { icon: '👤', label: 'Profile',   to: ROUTES.PROFILE   },
//   // { icon: '⚙️', label: 'Settings',  to: ROUTES.SETTINGS  },
// ]

// const Sidebar = () => {
//   const { sidebarOpen } = useAppContext()

//   return (
//     <aside
//       className="bg-surface border-r border-border min-h-full
//                  flex flex-col flex-shrink-0 overflow-hidden
//                  transition-[width] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
//       style={{ width: sidebarOpen ? 220 : 64 }}
//     >
//       <nav className="flex-1 px-2 py-4 flex flex-col gap-1">
//         {navItems.map(({ icon, label, to }) => (
//           <NavLink
//             key={to}
//             to={to}
//             className={({ isActive }) => [
//               'flex items-center gap-2.5 px-3 py-2.5 rounded-md',
//               'no-underline text-sm transition-all duration-200',
//               'whitespace-nowrap overflow-hidden',
//               isActive
//                 ? 'bg-accent/15 border-l-[3px] border-accent text-accent-lt font-semibold'
//                 : 'border-l-[3px] border-transparent text-muted font-normal hover:text-text hover:bg-white/5',
//             ].join(' ')}
//           >
//             <span className="text-lg flex-shrink-0">{icon}</span>
//             {sidebarOpen && <span>{label}</span>}
//           </NavLink>
//         ))}
//       </nav>
//     </aside>
//   )
// }

// export default Sidebar


import {
  Home,
  BarChart2,
  Users,
  Bell,
  Settings,
  ShoppingBag,
  Sliders,
  Moon,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

const navTop = [
  { icon: Home, label: "Home" },
  { icon: BarChart2, label: "Analytics" },
  { icon: Users, label: "Customers" },
  { icon: Bell, label: "Notifications" },
  { icon: Settings, label: "Settings" },
  { icon: ShoppingBag, label: "Products" },
  { icon: Sliders, label: "Filters" },
];

const navBottom = [
  { icon: Sliders, label: "Customize" },
  { icon: Moon, label: "Dark Mode" },
  { icon: User, label: "Profile" },
];

const NavBtn = ({ Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    title={label}
    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
      active
        ? "bg-[#1E1E24] text-white"
        : "text-[#8C8C98] hover:bg-[#1E1E24] hover:text-white"
    }`}
  >
    <Icon size={16} />
  </button>
);

const Sidebar = ({  activeNav,
  setActiveNav,
  sidebarOpen,
  setSidebarOpen,}) => {
  const [active, setActive] = useState("home");

  return (
     <>
      {/* Desktop Sidebar */}

      <div className="hidden w-[90px] shrink-0 flex-col items-center py-5 lg:flex">
        <div className="mb-7 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF] shadow-[0_4px_16px_rgba(184,169,255,0.4)]">
          <ShoppingBag size={16} color="#fff" />
        </div>

        <div className="flex flex-col items-center gap-1 rounded-full border border-[#E6E6EC] bg-white px-2 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          {navTop.map(({ icon: Icon, label }, i) => (
            <NavBtn
              key={label}
              Icon={Icon}
              label={label}
              active={activeNav === i}
              onClick={() => setActiveNav(i)}
            />
          ))}

          <div className="my-1.5 h-px w-6 bg-[#E6E6EC]" />

          {navBottom.map(({ icon: Icon, label }) => (
            <NavBtn
              key={label}
              Icon={Icon}
              label={label}
              active={false}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>

      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}

      <div
        className={`fixed bottom-0 left-0 top-0 z-50 flex w-20 flex-col items-center bg-[#F4F4F7] py-5 transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="mb-4 text-[#8C8C98]"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col items-center gap-1 rounded-full border border-[#E6E6EC] bg-white px-2 py-3">
          {navTop.map(({ icon: Icon, label }, i) => (
            <NavBtn
              key={label}
              Icon={Icon}
              label={label}
              active={activeNav === i}
              onClick={() => {
                setActiveNav(i);
                setSidebarOpen(false);
              }}
            />
          ))}

          <div className="my-1.5 h-px w-6 bg-[#E6E6EC]" />

          {navBottom.map(({ icon: Icon, label }) => (
            <NavBtn
              key={label}
              Icon={Icon}
              label={label}
              active={false}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;