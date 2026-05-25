// // // // import { NavLink } from 'react-router-dom'
// // // // import { useAppContext } from '../../context/AppContext'
// // // // import { ROUTES } from '../../constants/routes'

// // // // const navItems = [
// // // //   { icon: '⊞', label: 'Dashboard', to: ROUTES.DASHBOARD },
// // // //   // { icon: '👤', label: 'Profile',   to: ROUTES.PROFILE   },
// // // //   // { icon: '⚙️', label: 'Settings',  to: ROUTES.SETTINGS  },
// // // // ]

// // // // const Sidebar = () => {
// // // //   const { sidebarOpen } = useAppContext()

// // // //   return (
// // // //     <aside
// // // //       className="bg-surface border-r border-border min-h-full
// // // //                  flex flex-col flex-shrink-0 overflow-hidden
// // // //                  transition-[width] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
// // // //       style={{ width: sidebarOpen ? 220 : 64 }}
// // // //     >
// // // //       <nav className="flex-1 px-2 py-4 flex flex-col gap-1">
// // // //         {navItems.map(({ icon, label, to }) => (
// // // //           <NavLink
// // // //             key={to}
// // // //             to={to}
// // // //             className={({ isActive }) => [
// // // //               'flex items-center gap-2.5 px-3 py-2.5 rounded-md',
// // // //               'no-underline text-sm transition-all duration-200',
// // // //               'whitespace-nowrap overflow-hidden',
// // // //               isActive
// // // //                 ? 'bg-accent/15 border-l-[3px] border-accent text-accent-lt font-semibold'
// // // //                 : 'border-l-[3px] border-transparent text-muted font-normal hover:text-text hover:bg-white/5',
// // // //             ].join(' ')}
// // // //           >
// // // //             <span className="text-lg flex-shrink-0">{icon}</span>
// // // //             {sidebarOpen && <span>{label}</span>}
// // // //           </NavLink>
// // // //         ))}
// // // //       </nav>
// // // //     </aside>
// // // //   )
// // // // }

// // // // export default Sidebar


// // // import {
// // //   Home,
// // //   BarChart2,
// // //   Users,
// // //   Bell,
// // //   Settings,
// // //   ShoppingBag,
// // //   Sliders,
// // //   Moon,
// // //   User,
// // //   X,
// // // } from "lucide-react";
// // // import { useState } from "react";

// // // const navTop = [
// // //   { icon: Home, label: "Home" },
// // //   { icon: BarChart2, label: "Analytics" },
// // //   { icon: Users, label: "Customers" },
// // //   { icon: Bell, label: "Notifications" },
// // //   { icon: Settings, label: "Settings" },
// // //   { icon: ShoppingBag, label: "Products" },
// // //   { icon: Sliders, label: "Filters" },
// // // ];

// // // const navBottom = [
// // //   { icon: Sliders, label: "Customize" },
// // //   { icon: Moon, label: "Dark Mode" },
// // //   { icon: User, label: "Profile" },
// // // ];

// // // const NavBtn = ({ Icon, label, active, onClick }) => (
// // //   <button
// // //     onClick={onClick}
// // //     title={label}
// // //     className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
// // //       active
// // //         ? "bg-[#1E1E24] text-white"
// // //         : "text-[#8C8C98] hover:bg-[#1E1E24] hover:text-white"
// // //     }`}
// // //   >
// // //     <Icon size={16} />
// // //   </button>
// // // );

// // // const Sidebar = ({  activeNav,
// // //   setActiveNav,
// // //   sidebarOpen,
// // //   setSidebarOpen,}) => {
// // //   const [active, setActive] = useState("home");

// // //   return (
// // //      <>
// // //       {/* Desktop Sidebar */}

// // //       <div className="hidden w-[90px] shrink-0 flex-col items-center py-5 lg:flex">
// // //         <div className="mb-7 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF] shadow-[0_4px_16px_rgba(184,169,255,0.4)]">
// // //           <ShoppingBag size={16} color="#fff" />
// // //         </div>

// // //         <div className="flex flex-col items-center gap-1 rounded-full border border-[#E6E6EC] bg-white px-2 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
// // //           {navTop.map(({ icon: Icon, label }, i) => (
// // //             <NavBtn
// // //               key={label}
// // //               Icon={Icon}
// // //               label={label}
// // //               active={activeNav === i}
// // //               onClick={() => setActiveNav(i)}
// // //             />
// // //           ))}

// // //           <div className="my-1.5 h-px w-6 bg-[#E6E6EC]" />

// // //           {navBottom.map(({ icon: Icon, label }) => (
// // //             <NavBtn
// // //               key={label}
// // //               Icon={Icon}
// // //               label={label}
// // //               active={false}
// // //               onClick={() => {}}
// // //             />
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Mobile Overlay */}

// // //       {sidebarOpen && (
// // //         <div
// // //           className="fixed inset-0 z-40 bg-black/30 lg:hidden"
// // //           onClick={() => setSidebarOpen(false)}
// // //         />
// // //       )}

// // //       {/* Mobile Sidebar */}

// // //       <div
// // //         className={`fixed bottom-0 left-0 top-0 z-50 flex w-20 flex-col items-center bg-[#F4F4F7] py-5 transition-transform duration-300 lg:hidden ${
// // //           sidebarOpen ? "translate-x-0" : "-translate-x-full"
// // //         }`}
// // //       >
// // //         <button
// // //           onClick={() => setSidebarOpen(false)}
// // //           className="mb-4 text-[#8C8C98]"
// // //         >
// // //           <X size={18} />
// // //         </button>

// // //         <div className="flex flex-col items-center gap-1 rounded-full border border-[#E6E6EC] bg-white px-2 py-3">
// // //           {navTop.map(({ icon: Icon, label }, i) => (
// // //             <NavBtn
// // //               key={label}
// // //               Icon={Icon}
// // //               label={label}
// // //               active={activeNav === i}
// // //               onClick={() => {
// // //                 setActiveNav(i);
// // //                 setSidebarOpen(false);
// // //               }}
// // //             />
// // //           ))}

// // //           <div className="my-1.5 h-px w-6 bg-[#E6E6EC]" />

// // //           {navBottom.map(({ icon: Icon, label }) => (
// // //             <NavBtn
// // //               key={label}
// // //               Icon={Icon}
// // //               label={label}
// // //               active={false}
// // //               onClick={() => {}}
// // //             />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Sidebar;


// // import {
// //   Home,
// //   BarChart2,
// //   Users,
// //   Bell,
// //   Settings,
// //   ShoppingBag,
// //   Sliders,
// //   Moon,
// //   User,
// //   X,
// // } from "lucide-react";

// // const navTop = [
// //   { icon: Home, label: "Dashboard " },
// //   {  icon: ShoppingBag, label: "Products" },
// //   { icon: Users, label: "Customers" },
// //   { icon: Bell, label: "Notifications" },
// //   { icon: Settings, label: "Settings" },
// //   { icon: Sliders, label: "Filters" },
// // ];

// // const navBottom = [
// //   { icon: Sliders, label: "Customize" },
// //   { icon: Moon, label: "Dark Mode" },
// //   { icon: User, label: "Profile" },
// // ];

// // const NavBtn = ({ Icon, label, active, onClick }) => (
// //   <div className="group relative flex items-center">
// //     <button
// //       onClick={onClick}
// //       className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
// //         active
// //           ? "bg-[#1E1E24] text-white"
// //           : "text-[#8C8C98] hover:bg-[#1E1E24] hover:text-white"
// //       }`}
// //     >
// //       <Icon size={16} />
// //     </button>

// //     {/* Hover Tooltip */}
// //     <div
// //       className="
// //         pointer-events-none
// //         absolute
// //         left-12
// //         top-1/2
// //         -translate-y-1/2
// //         whitespace-nowrap
// //         rounded-full
// //         bg-[#1E1E24]
// //         px-3
// //         py-1.5
// //         text-[12px]
// //         font-medium
// //         text-white
// //         opacity-0
// //         shadow-lg
// //         transition-all
// //         duration-200
// //         group-hover:translate-x-1
// //         group-hover:opacity-100
// //       "
// //     >
// //       {label}
// //     </div>
// //   </div>
// // );

// // const Sidebar = ({
// //   activeNav,
// //   setActiveNav,
// //   sidebarOpen,
// //   setSidebarOpen,
// // }) => {
// //   return (
// //     <>
// //       {/* Desktop Sidebar */}

// //       <div className="hidden w-[90px] shrink-0 flex-col items-center py-5 lg:flex">
// //         <div className="mb-7 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF] shadow-[0_4px_16px_rgba(184,169,255,0.4)]">
// //           <ShoppingBag size={16} color="#fff" />
// //         </div>

// //         <div className="flex flex-col items-center gap-1 rounded-full border border-[#E6E6EC] bg-white px-3 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
// //           {navTop.map(({ icon: Icon, label }, i) => (
// //             <NavBtn
// //               key={label}
// //               Icon={Icon}
// //               label={label}
// //               active={activeNav === i}
// //               onClick={() => setActiveNav(i)}
// //             />
// //           ))}

// //           <div className="my-1.5 h-px w-6 bg-[#E6E6EC]" />

// //           {navBottom.map(({ icon: Icon, label }) => (
// //             <NavBtn
// //               key={label}
// //               Icon={Icon}
// //               label={label}
// //               active={false}
// //               onClick={() => {}}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       {/* Mobile Overlay */}

// //       {sidebarOpen && (
// //         <div
// //           className="fixed inset-0 z-40 bg-black/30 lg:hidden"
// //           onClick={() => setSidebarOpen(false)}
// //         />
// //       )}

// //       {/* Mobile Sidebar */}

// //       <div
// //         className={`fixed bottom-0 left-0 top-0 z-50 flex w-20 flex-col items-center bg-[#F4F4F7] py-5 transition-transform duration-300 lg:hidden ${
// //           sidebarOpen ? "translate-x-0" : "-translate-x-full"
// //         }`}
// //       >
// //         <button
// //           onClick={() => setSidebarOpen(false)}
// //           className="mb-4 text-[#8C8C98]"
// //         >
// //           <X size={18} />
// //         </button>

// //         <div className="flex flex-col items-center gap-1 rounded-full border border-[#E6E6EC] bg-white px-2 py-3">
// //           {navTop.map(({ icon: Icon, label }, i) => (
// //             <NavBtn
// //               key={label}
// //               Icon={Icon}
// //               label={label}
// //               active={activeNav === i}
// //               onClick={() => {
// //                 setActiveNav(i);
// //                 setSidebarOpen(false);
// //               }}
// //             />
// //           ))}

// //           <div className="my-1.5 h-px w-6 bg-[#E6E6EC]" />

// //           {navBottom.map(({ icon: Icon, label }) => (
// //             <NavBtn
// //               key={label}
// //               Icon={Icon}
// //               label={label}
// //               active={false}
// //               onClick={() => {}}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Sidebar;


// import {
//   Home,
//   ShoppingBag,
//   Users,
//   Bell,
//   Settings,
//   Sliders,
//   Moon,
//   User,
//   BarChart2,
// } from "lucide-react";

// // ─── NAV ITEMS ────────────────────────────────────────────
// const navTop = [
//   { icon: Home,       label: "Dashboard"     },
//   { icon: ShoppingBag,label: "Products"      },
//   { icon: Users,      label: "Customers"     },
//   { icon: BarChart2,  label: "Analytics"     },
//   { icon: Bell,       label: "Notifications" },
//   { icon: Settings,   label: "Settings"      },
// ];

// const navBottom = [
//   { icon: Sliders, label: "Customize" },
//   { icon: Moon,    label: "Dark Mode" },
//   { icon: User,    label: "Profile"   },
// ];

// // ─── DESKTOP NAV BUTTON (pill sidebar) ───────────────────
// const DesktopNavBtn = ({ Icon, label, active, onClick }) => (
//   <div className="group relative flex items-center">
//     <button
//       onClick={onClick}
//       className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
//         active
//           ? "bg-[var(--text)] text-white shadow-[0_4px_12px_rgba(30,30,36,0.25)]"
//           : "text-[var(--text-muted)] hover:bg-[var(--text)] hover:text-white"
//       }`}
//     >
//       <Icon size={16} />
//     </button>
//     {/* Tooltip */}
//     <div className="pointer-events-none absolute left-12 top-1/2 z-50 -translate-y-1/2 whitespace-nowrap rounded-full bg-[var(--text)] px-3 py-1.5 text-[12px] font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
//       {label}
//     </div>
//   </div>
// );

// // ─── TABLET NAV BUTTON (left icon sidebar) ───────────────
// const TabletNavBtn = ({ Icon, label, active, onClick }) => (
//   <div className="group relative flex items-center">
//     <button
//       onClick={onClick}
//       title={label}
//       className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 ${
//         active
//           ? "bg-gradient-to-br from-[var(--accent)] to-[var(--accent-lt)] text-white shadow-[0_4px_14px_var(--glow)]"
//           : "text-[var(--text-muted)] hover:bg-[var(--accent)]/20 hover:text-[var(--accent-deep)]"
//       }`}
//     >
//       <Icon size={17} />
//     </button>
//     {/* Tooltip */}
//     <div className="pointer-events-none absolute left-14 top-1/2 z-50 -translate-y-1/2 whitespace-nowrap rounded-xl bg-[var(--text)] px-3 py-1.5 text-[12px] font-semibold text-white opacity-0 shadow-xl transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
//       {label}
//     </div>
//   </div>
// );

// // ─── MOBILE BOTTOM NAV BUTTON ────────────────────────────
// const BottomNavBtn = ({ Icon, label, active, onClick }) => (
//   <button
//     onClick={onClick}
//     className="flex flex-1 flex-col items-center justify-center gap-1 py-2 transition-all duration-200"
//   >
//     <span
//       className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 ${
//         active
//           ? "bg-gradient-to-br from-[var(--accent)] to-[var(--accent-lt)] shadow-[0_4px_12px_var(--glow)]"
//           : ""
//       }`}
//     >
//       <Icon
//         size={18}
//         className={
//           active ? "text-white" : "text-[var(--text-muted)]"
//         }
//       />
//     </span>
//     <span
//       className={`text-[10px] font-semibold leading-none transition-colors duration-200 ${
//         active ? "text-[var(--accent-deep)]" : "text-[var(--text-muted)]"
//       }`}
//     >
//       {label}
//     </span>
//   </button>
// );

// // ─── SIDEBAR ─────────────────────────────────────────────
// const Sidebar = ({ activeNav, setActiveNav }) => {
//   // Bottom nav items — 5 most important from navTop
//   const bottomNavItems = navTop.slice(0, 5);

//   return (
//     <>
//       {/* ════════════════════════════════════════════
//           DESKTOP  ≥1024px — Original pill sidebar
//       ════════════════════════════════════════════ */}
//       <div className="hidden w-[90px] shrink-0 flex-col items-center py-5 lg:flex">
//         {/* Logo */}
//         <div className="mb-7 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-lt)] shadow-[0_4px_16px_rgba(184,169,255,0.4)]">
//           <ShoppingBag size={16} color="#fff" />
//         </div>

//         {/* Nav pill */}
//         <div className="flex flex-col items-center gap-1 rounded-full border border-[var(--border)] bg-white px-3 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
//           {navTop.map(({ icon: Icon, label }, i) => (
//             <DesktopNavBtn
//               key={label}
//               Icon={Icon}
//               label={label}
//               active={activeNav === i}
//               onClick={() => setActiveNav(i)}
//             />
//           ))}
//           <div className="my-1.5 h-px w-6 bg-[var(--border)]" />
//           {navBottom.map(({ icon: Icon, label }) => (
//             <DesktopNavBtn
//               key={label}
//               Icon={Icon}
//               label={label}
//               active={false}
//               onClick={() => {}}
//             />
//           ))}
//         </div>
//       </div>

//       {/* ════════════════════════════════════════════
//           TABLET  768px–1023px — Left icon sidebar
//       ════════════════════════════════════════════ */}
//       <div className="hidden w-[68px] shrink-0 flex-col items-center border-r border-[var(--border-soft)] bg-[var(--surface)] py-4 md:flex lg:hidden">
//         {/* Logo */}
//         <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-lt)] shadow-[0_4px_12px_var(--glow)]">
//           <ShoppingBag size={15} color="#fff" />
//         </div>

//         {/* Top nav */}
//         <div className="flex flex-1 flex-col items-center gap-1.5 px-2">
//           {navTop.map(({ icon: Icon, label }, i) => (
//             <TabletNavBtn
//               key={label}
//               Icon={Icon}
//               label={label}
//               active={activeNav === i}
//               onClick={() => setActiveNav(i)}
//             />
//           ))}
//         </div>

//         {/* Divider */}
//         <div className="my-3 h-px w-8 bg-[var(--border)]" />

//         {/* Bottom nav */}
//         <div className="flex flex-col items-center gap-1.5 px-2 pb-2">
//           {navBottom.map(({ icon: Icon, label }) => (
//             <TabletNavBtn
//               key={label}
//               Icon={Icon}
//               label={label}
//               active={false}
//               onClick={() => {}}
//             />
//           ))}
//         </div>
//       </div>

//       {/* ════════════════════════════════════════════
//           MOBILE  <768px — Bottom navigation bar
//       ════════════════════════════════════════════ */}
//       <div
//         className="
//           fixed bottom-0 left-0 right-0 z-50
//           flex items-center
//           border-t border-[var(--border-soft)]
//           bg-[var(--surface)]/95
//           backdrop-blur-md
//           shadow-[0_-4px_24px_rgba(0,0,0,0.08)]
//           md:hidden
//         "
//         style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
//       >
//         {bottomNavItems.map(({ icon: Icon, label }, i) => (
//           <BottomNavBtn
//             key={label}
//             Icon={Icon}
//             label={label}
//             active={activeNav === i}
//             onClick={() => setActiveNav(i)}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default Sidebar;


import {
  Home,
  ShoppingBag,
  Users,
  Bell,
  Settings,
  Sliders,
  Moon,
  User,
  BarChart2,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

// ─── NAV ITEMS ────────────────────────────────────────────
const navTop = [
  {
    icon: Home,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: ShoppingBag,
    label: "Products",
    path: "/products",
  },
  {
    icon: Users,
    label: "Customers",
    path: "/customer",
  },
  {
    icon: BarChart2,
    label: "Order",
    path: "/order",
  },
  {
    icon: Bell,
    label: "Notifications",
    path: "/notifications",
  },
  {
    icon: Settings,
    label: "Settings",
    path: "/settings",
  },
];

const navBottom = [
  {
    icon: Sliders,
    label: "Customize",
    path: "/customize",
  },
  {
    icon: Moon,
    label: "Dark Mode",
    path: "/dark-mode",
  },
  {
    icon: User,
    label: "Profile",
    path: "/profile",
  },
];

// ─── DESKTOP NAV BUTTON ───────────────────────────────────
const DesktopNavBtn = ({
  Icon,
  label,
  active,
  onClick,
}) => (
  <div className="group relative flex items-center">
    <button
      onClick={onClick}
      className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
        active
          ? "bg-[var(--text)] text-white shadow-[0_4px_12px_rgba(30,30,36,0.25)]"
          : "text-[var(--text-muted)] hover:bg-[var(--text)] hover:text-white"
      }`}
    >
      <Icon size={16} />
    </button>

    <div className="pointer-events-none absolute left-12 top-1/2 z-50 -translate-y-1/2 whitespace-nowrap rounded-full bg-[var(--text)] px-3 py-1.5 text-[12px] font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
      {label}
    </div>
  </div>
);

// ─── TABLET NAV BUTTON ────────────────────────────────────
const TabletNavBtn = ({
  Icon,
  label,
  active,
  onClick,
}) => (
  <div className="group relative flex items-center">
    <button
      onClick={onClick}
      title={label}
      className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 ${
        active
          ? "bg-gradient-to-br from-[var(--accent)] to-[var(--accent-lt)] text-white shadow-[0_4px_14px_var(--glow)]"
          : "text-[var(--text-muted)] hover:bg-[var(--accent)]/20 hover:text-[var(--accent-deep)]"
      }`}
    >
      <Icon size={17} />
    </button>

    <div className="pointer-events-none absolute left-14 top-1/2 z-50 -translate-y-1/2 whitespace-nowrap rounded-xl bg-[var(--text)] px-3 py-1.5 text-[12px] font-semibold text-white opacity-0 shadow-xl transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
      {label}
    </div>
  </div>
);

// ─── MOBILE NAV BUTTON ────────────────────────────────────
const BottomNavBtn = ({
  Icon,
  label,
  active,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="flex flex-1 flex-col items-center justify-center gap-1 py-2 transition-all duration-200"
  >
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 ${
        active
          ? "bg-gradient-to-br from-[var(--accent)] to-[var(--accent-lt)] shadow-[0_4px_12px_var(--glow)]"
          : ""
      }`}
    >
      <Icon
        size={18}
        className={
          active
            ? "text-white"
            : "text-[var(--text-muted)]"
        }
      />
    </span>

    <span
      className={`text-[10px] font-semibold leading-none transition-colors duration-200 ${
        active
          ? "text-[var(--accent-deep)]"
          : "text-[var(--text-muted)]"
      }`}
    >
      {label}
    </span>
  </button>
);

// ─── SIDEBAR ──────────────────────────────────────────────
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const bottomNavItems = navTop.slice(0, 5);

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden w-[90px] shrink-0 flex-col items-center py-5 lg:flex">
        {/* LOGO */}
        <div className="mb-7 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-lt)] shadow-[0_4px_16px_rgba(184,169,255,0.4)]">
          <ShoppingBag size={16} color="#fff" />
        </div>

        {/* NAV */}
        <div className="flex flex-col items-center gap-1 rounded-full border border-[var(--border)] bg-white px-3 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          {navTop.map(({ icon: Icon, label, path }) => (
            <DesktopNavBtn
              key={label}
              Icon={Icon}
              label={label}
              active={location.pathname === path}
              onClick={() => navigate(path)}
            />
          ))}

          <div className="my-1.5 h-px w-6 bg-[var(--border)]" />

          {navBottom.map(({ icon: Icon, label, path }) => (
            <DesktopNavBtn
              key={label}
              Icon={Icon}
              label={label}
              active={location.pathname === path}
              onClick={() => navigate(path)}
            />
          ))}
        </div>
      </div>

      {/* TABLET */}
      <div className="hidden w-[68px] shrink-0 flex-col items-center border-r border-[var(--border-soft)] bg-[var(--surface)] py-4 md:flex lg:hidden">
        {/* LOGO */}
        <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-lt)] shadow-[0_4px_12px_var(--glow)]">
          <ShoppingBag size={15} color="#fff" />
        </div>

        {/* TOP NAV */}
        <div className="flex flex-1 flex-col items-center gap-1.5 px-2">
          {navTop.map(({ icon: Icon, label, path }) => (
            <TabletNavBtn
              key={label}
              Icon={Icon}
              label={label}
              active={location.pathname === path}
              onClick={() => navigate(path)}
            />
          ))}
        </div>

        {/* DIVIDER */}
        <div className="my-3 h-px w-8 bg-[var(--border)]" />

        {/* BOTTOM NAV */}
        <div className="flex flex-col items-center gap-1.5 px-2 pb-2">
          {navBottom.map(({ icon: Icon, label, path }) => (
            <TabletNavBtn
              key={label}
              Icon={Icon}
              label={label}
              active={location.pathname === path}
              onClick={() => navigate(path)}
            />
          ))}
        </div>
      </div>

      {/* MOBILE */}
      <div
        className="
          fixed bottom-0 left-0 right-0 z-50
          flex items-center
          border-t border-[var(--border-soft)]
          bg-[var(--surface)]/95
          backdrop-blur-md
          shadow-[0_-4px_24px_rgba(0,0,0,0.08)]
          md:hidden
        "
        style={{
          paddingBottom:
            "env(safe-area-inset-bottom, 0px)",
        }}
      >
        {bottomNavItems.map(
          ({ icon: Icon, label, path }) => (
            <BottomNavBtn
              key={label}
              Icon={Icon}
              label={label}
              active={location.pathname === path}
              onClick={() => navigate(path)}
            />
          )
        )}
      </div>
    </>
  );
};

export default Sidebar;