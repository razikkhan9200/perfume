// // // /**
// // //  * ShoplytixsDashboard.jsx
// // //  * Premium E-commerce Analytics Dashboard
// // //  * Lavender Glassmorphism Theme
// // //  */

// // // import { useState, useEffect } from "react";
// // // import {
// // //   ResponsiveContainer,
// // //   BarChart,
// // //   Bar,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   Cell,
// // // } from "recharts";
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
// // //   Search,
// // //   TrendingUp,
// // //   TrendingDown,
// // //   MoreHorizontal,
// // //   Headphones,
// // //   Watch,
// // //   Speaker,
// // //   Laptop,
// // // } from "lucide-react";

// // // /* ─── DATA ─────────────────────────────────────────────────────────────── */

// // // const salesData = [
// // //   { month: "Jan", sales: 120000 },
// // //   { month: "Feb", sales: 280000 },
// // //   { month: "Mar", sales: 160000 },
// // //   { month: "Apr", sales: 140000 },
// // //   { month: "May", sales: 130000 },
// // //   { month: "Jun", sales: 150000 },
// // // ];

// // // const trafficData = [
// // //   { source: "Organic Search", pct: 85 },
// // //   { source: "Referrals", pct: 60 },
// // //   { source: "Social Media", pct: 45 },
// // //   { source: "Email Campaign", pct: 20 },
// // // ];

// // // const products = [
// // //   { name: "Wireless Headphones", icon: Headphones, color: "#B8A9FF", sales: 1240 },
// // //   { name: "Smart Watch", icon: Watch, color: "#7EE7B8", sales: 1100 },
// // //   { name: "Bluetooth Speaker", icon: Speaker, color: "#93C5FD", sales: 650 },
// // //   { name: "Laptop Stand", icon: Laptop, color: "#F9A8D4", sales: 850 },
// // // ];

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

// // // /* ─── CUSTOM TOOLTIP ────────────────────────────────────────────────────── */

// // // const CustomTooltip = ({ active, payload }) => {
// // //   if (active && payload && payload.length) {
// // //     return (
// // //       <div
// // //         style={{
// // //           background: "#fff",
// // //           border: "1px solid #E6E6EC",
// // //           borderRadius: 10,
// // //           padding: "6px 12px",
// // //           fontSize: 12,
// // //           color: "#1E1E24",
// // //           boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
// // //         }}
// // //       >
// // //         ${payload[0].value.toLocaleString()}
// // //       </div>
// // //     );
// // //   }
// // //   return null;
// // // };

// // // /* ─── FLOATING METRIC CARD ──────────────────────────────────────────────── */

// // // const FloatCard = ({ label, value, change, up, style }) => (
// // //   <div
// // //     style={{
// // //       position: "absolute",
// // //       background: "rgba(255,255,255,0.92)",
// // //       border: "1px solid #E6E6EC",
// // //       borderRadius: 20,
// // //       padding: "14px 18px",
// // //       boxShadow: "0 8px 32px rgba(184,169,255,0.18), 0 2px 8px rgba(0,0,0,0.06)",
// // //       backdropFilter: "blur(16px)",
// // //       minWidth: 140,
// // //       zIndex: 10,
// // //       ...style,
// // //     }}
// // //   >
// // //     <p style={{ fontSize: 10, color: "#8C8C98", marginBottom: 4, fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
// // //       {label}
// // //     </p>
// // //     <p style={{ fontSize: 22, fontWeight: 700, color: "#1E1E24", lineHeight: 1.1, marginBottom: 6 }}>
// // //       {value}
// // //     </p>
// // //     <span
// // //       style={{
// // //         display: "inline-flex",
// // //         alignItems: "center",
// // //         gap: 3,
// // //         fontSize: 11,
// // //         fontWeight: 600,
// // //         color: up ? "#7EE7B8" : "#FF8A8A",
// // //         background: up ? "rgba(126,231,184,0.12)" : "rgba(255,138,138,0.12)",
// // //         borderRadius: 8,
// // //         padding: "2px 8px",
// // //       }}
// // //     >
// // //       {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
// // //       {change}
// // //     </span>
// // //   </div>
// // // );

// // // /* ─── SEMICIRCLE VISUALIZATION ──────────────────────────────────────────── */

// // // const SemiCircleViz = () => {
// // //   return (
// // //     <div
// // //       style={{
// // //         position: "relative",
// // //         width: "100%",
// // //         height: 380,
// // //         display: "flex",
// // //         alignItems: "flex-end",
// // //         justifyContent: "center",
// // //         overflow: "visible",
// // //       }}
// // //     >
// // //       {/* BIG SOFT AMBIENT GLOW */}
// // //       <div
// // //         style={{
// // //           position: "absolute",
// // //           bottom: 0,
// // //           left: "50%",
// // //           transform: "translateX(-50%)",
// // //           width: 520,
// // //           height: 260,
// // //           borderRadius: "260px 260px 0 0",

// // //           filter: "blur(40px)",
// // //           zIndex: 1,
// // //         }}
// // //       />

// // //       {/* OUTER ARC */}
// // //       <div
// // //         style={{
// // //           position: "absolute",
// // //           bottom: 0,
// // //           left: "50%",
// // //           transform: "translateX(-50%)",
// // //           width: 440,
// // //           height: 218,
// // //           borderRadius: "235px 235px 0 0",
// // //           border: "2px solid rgba(191, 177, 255, 0.55)",
// // //           borderBottom: "none",
// // //           zIndex: 2,
// // //           opacity: 0.9,
// // //         }}
// // //       >
// // //         {/* TOP CENTER DOT */}
// // //         <div
// // //           style={{
// // //             position: "absolute",
// // //             top: -5,
// // //             left: "50%",
// // //             transform: "translateX(-50%)",
// // //             width: 8,
// // //             height: 8,
// // //             borderRadius: "50%",
// // //             background: "#B9A9FF",
// // //             boxShadow: "0 0 12px rgba(185,169,255,0.9)",
// // //           }}
// // //         />

// // //         {/* LEFT DOT */}
// // //         <div
// // //           style={{
// // //             position: "absolute",
// // //             left:30,
// // //             bottom: 115,
// // //             width: 8,
// // //             height: 8,
// // //             borderRadius: "50%",
// // //             background: "#C5B8FF",
// // //             boxShadow: "0 0 10px rgba(197,184,255,0.9)",
// // //           }}
// // //         />

// // //         {/* RIGHT DOT */}
// // //         <div
// // //           style={{
// // //             position: "absolute",
// // //             right: 30,
// // //             bottom: 115,
// // //             width: 8,
// // //             height: 8,
// // //             borderRadius: "50%",
// // //             background: "#C5B8FF",
// // //             boxShadow: "0 0 10px rgba(197,184,255,0.9)",
// // //           }}
// // //         />
// // //       </div>

// // //       {/* MAIN SEMICIRCLE */}
// // //       <div
// // //         style={{
// // //           position: "absolute",
// // //           bottom: 0,
// // //           left: "50%",
// // //           transform: "translateX(-50%)",
// // //           width: 410,
// // //           height: 205,
// // //           borderRadius: "205px 205px 0 0",
// // //           background: `linear-gradient(to bottom, rgba(139, 119, 230, 0.5), transparent)`,
// // //           zIndex: 3,
// // //           overflow: "hidden",
// // //         }}
// // //       >
// // //         {/* TOP LIGHT */}
// // //         <div
// // //           style={{
// // //             position: "absolute",
// // //             top: -30,
// // //             left: "50%",
// // //             transform: "translateX(-50%)",
// // //             width: "90%",
// // //             height: "90%",
// // //             borderRadius: "50%",
// // //             background: `
// // //               radial-gradient(
// // //                 ellipse at center,
// // //                 rgba(255,255,255,0.55) 0%,
// // //                 rgba(255,255,255,0.22) 35%,
// // //                 transparent 72%
// // //               )
// // //             `,
// // //           }}
// // //         />

// // //         {/* BOTTOM DEPTH */}
// // //         <div
// // //           style={{
// // //             position: "absolute",
// // //             bottom: 0,
// // //             width: "100%",
// // //             height: "45%",
// // //           }}
// // //         />
// // //       </div>

// // //       {/* INNER CUTOUT */}
// // //       <div
// // //         style={{
// // //           position: "absolute",
// // //           bottom: -1,
// // //           left: "50%",
// // //           transform: "translateX(-50%)",
// // //           width: 300,
// // //           height: 150,
// // //           borderRadius: "150px 150px 0 0",

// // //           zIndex: 4,
// // //         }}
// // //       />

// // //       {/* CENTER TEXT */}
// // //       <div
// // //         style={{
// // //           position: "absolute",
// // //           bottom: 26,
// // //           left: "50%",
// // //           transform: "translateX(-50%)",
// // //           textAlign: "center",
// // //           zIndex: 5,
// // //           whiteSpace: "nowrap",
// // //         }}
// // //       >
// // //         <p
// // //           style={{
// // //             fontSize: 11,
// // //             color: "#8D8D99",
// // //             fontWeight: 600,
// // //             letterSpacing: "0.12em",
// // //             textTransform: "uppercase",
// // //             marginBottom: 8,
// // //           }}
// // //         >
// // //           Total Sales
// // //         </p>

// // //         <p
// // //           style={{
// // //             fontSize: 46,
// // //             fontWeight: 800,
// // //             color: "#19191F",
// // //             letterSpacing: "-0.05em",
// // //             lineHeight: 1,
// // //           }}
// // //         >
// // //           $46,354
// // //           <span
// // //             style={{
// // //               fontSize: 24,
// // //               marginLeft: 2,
// // //             }}
// // //           >
// // //             ,00
// // //           </span>
// // //         </p>
// // //       </div>

// // //       {/* FLOATING CARDS */}
// // //       <FloatCard
// // //         label="Total Orders"
// // //         value="3,460"
// // //         change="+8%"
// // //         up={true}
// // //         style={{
// // //           top: "12%",
// // //           left: "50%",
// // //           transform: "translateX(-50%)",
// // //         }}
// // //       />

// // //       <FloatCard
// // //         label="Total Revenue"
// // //         value="$120,540"
// // //         change="+12%"
// // //         up={true}
// // //         style={{
// // //           top: "56%",
// // //           left: "6%",
// // //           transform: "translateY(-50%)",
// // //         }}
// // //       />

// // //       <FloatCard
// // //         label="Conversion Rate"
// // //         value="3.8%"
// // //         change="-0.4%"
// // //         up={false}
// // //         style={{
// // //           top: "56%",
// // //           right: "6%",
// // //           transform: "translateY(-50%)",
// // //         }}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // /* ─── STAT PILL ─────────────────────────────────────────────────────────── */

// // // const StatPill = ({ label, value }) => (
// // //   <div style={{ borderRight: "1px solid #E6E6EC", paddingRight: 20, marginRight: 20 }}>
// // //     <p style={{ fontSize: 10, color: "#8C8C98", fontWeight: 500, marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
// // //     <p style={{ fontSize: 20, fontWeight: 700, color: "#1E1E24" }}>{value}</p>
// // //   </div>
// // // );

// // // /* ─── SIDEBAR NAV BUTTON ─────────────────────────────────────────────────── */

// // // const NavBtn = ({ Icon, label, active, onClick }) => (
// // //   <button
// // //     onClick={onClick}
// // //     title={label}
// // //     style={{
// // //       width: 40,
// // //       height: 40,
// // //       borderRadius: "50%",
// // //       display: "flex",
// // //       alignItems: "center",
// // //       justifyContent: "center",
// // //       background: active ? "#1E1E24" : "transparent",
// // //       color: active ? "#fff" : "#8C8C98",
// // //       border: "none",
// // //       cursor: "pointer",
// // //       transition: "all 0.18s ease",
// // //       position: "relative",
// // //     }}
// // //     onMouseEnter={e => {
// // //       if (!active) {
// // //         e.currentTarget.style.background = "#1E1E24";
// // //         e.currentTarget.style.color = "#fff";
// // //       }
// // //     }}
// // //     onMouseLeave={e => {
// // //       if (!active) {
// // //         e.currentTarget.style.background = "transparent";
// // //         e.currentTarget.style.color = "#8C8C98";
// // //       }
// // //     }}
// // //   >
// // //     <Icon size={16} />
// // //   </button>
// // // );

// // // /* ─── MAIN DASHBOARD ─────────────────────────────────────────────────────── */

// // // export default function ShoplytixsDashboard() {
// // //   const [activeNav, setActiveNav] = useState(0);
// // //   const [period, setPeriod] = useState("Monthly");
// // //   const [dropdownOpen, setDropdownOpen] = useState(false);

// // //   const css = `
// // //     @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&display=swap');
// // //     * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'DM Sans', sans-serif; }
// // //     :root {
// // //       --bg: #F4F4F7;
// // //       --surface: #FFFFFF;
// // //       --border: #E6E6EC;
// // //       --accent: #CFC5FF;
// // //       --violet: #B8A9FF;
// // //       --text: #1E1E24;
// // //       --muted: #8C8C98;
// // //       --success: #7EE7B8;
// // //       --danger: #FF8A8A;
// // //     }
// // //     body { background: var(--bg); }
// // //     ::-webkit-scrollbar { width: 4px; }
// // //     ::-webkit-scrollbar-thumb { background: #E6E6EC; border-radius: 4px; }
// // //     .card {
// // //       background: #fff;
// // //       border: 1px solid #E6E6EC;
// // //       border-radius: 24px;
// // //       box-shadow: 0 2px 12px rgba(0,0,0,0.04);
// // //     }
// // //     .progress-bar-fill {
// // //       height: 100%;
// // //       border-radius: 999px;
// // //       background: linear-gradient(90deg, #B8A9FF 0%, #CFC5FF 100%);
// // //       transition: width 1s ease;
// // //     }
// // //     .product-row {
// // //       display: flex;
// // //       align-items: center;
// // //       gap: 12px;
// // //       padding: 10px 0;
// // //       border-bottom: 1px solid #F4F4F7;
// // //       transition: background 0.15s;
// // //     }
// // //     .product-row:last-child { border-bottom: none; }
// // //     .product-row:hover { background: #FAFAFC; border-radius: 12px; padding-left: 4px; }
// // //   `;

// // //   return (
// // //     <>
// // //       <style>{css}</style>
// // //       <div
// // //         style={{
// // //           display: "flex",
// // //           height: "100vh",
// // //           overflow: "hidden",
// // //           background: "#F4F4F7",
// // //           color: "#1E1E24",
// // //         }}
// // //       >
// // //         {/* ── SIDEBAR ── */}
// // //         <div
// // //           style={{
// // //             width: 90,
// // //             display: "flex",
// // //             flexDirection: "column",
// // //             alignItems: "center",
// // //             padding: "20px 0",
// // //             flexShrink: 0,
// // //           }}
// // //         >
// // //           {/* Logo */}
// // //           <div
// // //             style={{
// // //               width: 38,
// // //               height: 38,
// // //               borderRadius: "50%",
// // //               background: "linear-gradient(135deg, #CFC5FF, #B8A9FF)",
// // //               display: "flex",
// // //               alignItems: "center",
// // //               justifyContent: "center",
// // //               marginBottom: 28,
// // //               boxShadow: "0 4px 16px rgba(184,169,255,0.4)",
// // //             }}
// // //           >
// // //             <ShoppingBag size={16} color="#fff" />
// // //           </div>

// // //           {/* Nav pill */}
// // //           <div
// // //             style={{
// // //               background: "#fff",
// // //               border: "1px solid #E6E6EC",
// // //               borderRadius: 999,
// // //               padding: "12px 8px",
// // //               display: "flex",
// // //               flexDirection: "column",
// // //               alignItems: "center",
// // //               gap: 4,
// // //               boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
// // //             }}
// // //           >
// // //             {navTop.map(({ icon: Icon, label }, i) => (
// // //               <NavBtn
// // //                 key={label}
// // //                 Icon={Icon}
// // //                 label={label}
// // //                 active={activeNav === i}
// // //                 onClick={() => setActiveNav(i)}
// // //               />
// // //             ))}

// // //             <div style={{ width: 24, height: 1, background: "#E6E6EC", margin: "6px 0" }} />

// // //             {navBottom.map(({ icon: Icon, label }) => (
// // //               <NavBtn key={label} Icon={Icon} label={label} active={false} onClick={() => {}} />
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* ── MAIN ── */}
// // //         <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, overflow: "hidden" }}>

// // //           {/* HEADER */}
// // //           <header
// // //             style={{
// // //               height: 64,
// // //               display: "flex",
// // //               alignItems: "center",
// // //               justifyContent: "space-between",
// // //               padding: "0 28px",
// // //               flexShrink: 0,
// // //             }}
// // //           >
// // //             <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em" }}>Shoplytixs</span>

// // //             <div style={{ flex: 1, maxWidth: 280, margin: "0 32px" }}>
// // //               <div
// // //                 style={{
// // //                   display: "flex",
// // //                   alignItems: "center",
// // //                   gap: 8,
// // //                   background: "#fff",
// // //                   border: "1px solid #E6E6EC",
// // //                   borderRadius: 999,
// // //                   padding: "8px 14px",
// // //                 }}
// // //               >
// // //                 <Search size={13} color="#8C8C98" />
// // //                 <span style={{ fontSize: 12, color: "#8C8C98" }}>Search...</span>
// // //               </div>
// // //             </div>

// // //             <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
// // //               <button
// // //                 style={{
// // //                   width: 36,
// // //                   height: 36,
// // //                   borderRadius: "50%",
// // //                   background: "#fff",
// // //                   border: "1px solid #E6E6EC",
// // //                   display: "flex",
// // //                   alignItems: "center",
// // //                   justifyContent: "center",
// // //                   cursor: "pointer",
// // //                   position: "relative",
// // //                 }}
// // //               >
// // //                 <Bell size={14} color="#1E1E24" />
// // //                 <span
// // //                   style={{
// // //                     position: "absolute",
// // //                     top: 2,
// // //                     right: 2,
// // //                     width: 7,
// // //                     height: 7,
// // //                     borderRadius: "50%",
// // //                     background: "#B8A9FF",
// // //                     border: "1.5px solid #F4F4F7",
// // //                   }}
// // //                 />
// // //               </button>

// // //               <button
// // //                 style={{
// // //                   width: 36,
// // //                   height: 36,
// // //                   borderRadius: "50%",
// // //                   background: "#fff",
// // //                   border: "1px solid #E6E6EC",
// // //                   display: "flex",
// // //                   alignItems: "center",
// // //                   justifyContent: "center",
// // //                   cursor: "pointer",
// // //                 }}
// // //               >
// // //                 <Settings size={14} color="#1E1E24" />
// // //               </button>

// // //               <div
// // //                 style={{
// // //                   display: "flex",
// // //                   alignItems: "center",
// // //                   gap: 8,
// // //                   background: "#fff",
// // //                   border: "1px solid #E6E6EC",
// // //                   borderRadius: 999,
// // //                   padding: "5px 12px 5px 5px",
// // //                   cursor: "pointer",
// // //                 }}
// // //               >
// // //                 <div
// // //                   style={{
// // //                     width: 28,
// // //                     height: 28,
// // //                     borderRadius: "50%",
// // //                     background: "linear-gradient(135deg, #CFC5FF, #B8A9FF)",
// // //                     display: "flex",
// // //                     alignItems: "center",
// // //                     justifyContent: "center",
// // //                     fontSize: 10,
// // //                     fontWeight: 700,
// // //                     color: "#fff",
// // //                   }}
// // //                 >
// // //                   EC
// // //                 </div>
// // //                 <div>
// // //                   <p style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.2 }}>Ethan Carter</p>
// // //                   <p style={{ fontSize: 9, color: "#8C8C98" }}>Owner</p>
// // //                 </div>
// // //                 <MoreHorizontal size={13} color="#8C8C98" />
// // //               </div>
// // //             </div>
// // //           </header>

// // //           {/* CONTENT */}
// // //           <main
// // //             style={{
// // //               flex: 1,
// // //               overflowY: "auto",
// // //               overflowX: "hidden",
// // //               padding: "0 24px 24px",
// // //             }}
// // //           >
// // //             {/* TOP SECTION: Hero + Semicircle */}
// // //             <div  style={{ padding: "15px 23px" }}>
// // //               <div
// // //                 style={{
// // //                   display: "grid",
// // //                   gridTemplateColumns: "1fr 1.6fr",
// // //                   gap: 24,
// // //                   alignItems: "start",
// // //                 }}
// // //               >
// // //                 {/* Left text + stats */}
// // //                 <div>
// // //                   <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 8, lineHeight: 1.15 }}>
// // //                     E-commerce<br />Growth Insights
// // //                   </h2>
// // //                   <p style={{ fontSize: 12, color: "#8C8C98", marginBottom: 24, lineHeight: 1.6 }}>
// // //                     Track and analyze your online store's performance with AI-powered metrics.
// // //                   </p>

// // //                   {/* Stat pills */}
// // //                   <div style={{ display: "flex", alignItems: "stretch" }}>
// // //                     <StatPill label="Refund Rate" value="2.1%" />
// // //                     <StatPill label="Avg. Delivery" value="3.2 days" />
// // //                   </div>
// // //                 </div>

// // //                 {/* Semicircle */}
// // //                 <div style={{ position: "relative" }}>
// // //                   <SemiCircleViz />
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* BOTTOM GRID */}
// // //             <div
// // //               style={{
// // //                 display: "grid",
// // //                 gridTemplateColumns: "1.1fr 1fr 1fr",
// // //                 gap: 16,
// // //               }}
// // //             >
// // //               {/* ── Sales Overview ── */}
// // //               <div className="card" style={{ padding: "20px 20px 12px" }}>
// // //                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
// // //                   <p style={{ fontSize: 13, fontWeight: 700 }}>Sales Overview</p>
// // //                   <div style={{ position: "relative" }}>
// // //                     <button
// // //                       onClick={() => setDropdownOpen(!dropdownOpen)}
// // //                       style={{
// // //                         display: "flex",
// // //                         alignItems: "center",
// // //                         gap: 4,
// // //                         background: "#F4F4F7",
// // //                         border: "1px solid #E6E6EC",
// // //                         borderRadius: 10,
// // //                         padding: "5px 10px",
// // //                         fontSize: 11,
// // //                         fontWeight: 500,
// // //                         cursor: "pointer",
// // //                         color: "#1E1E24",
// // //                       }}
// // //                     >
// // //                       {period}
// // //                       <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
// // //                         <path d="M2 3.5L5 6.5L8 3.5" stroke="#8C8C98" strokeWidth="1.5" strokeLinecap="round" />
// // //                       </svg>
// // //                     </button>
// // //                     {dropdownOpen && (
// // //                       <div
// // //                         style={{
// // //                           position: "absolute",
// // //                           top: "calc(100% + 4px)",
// // //                           right: 0,
// // //                           background: "#fff",
// // //                           border: "1px solid #E6E6EC",
// // //                           borderRadius: 12,
// // //                           padding: 6,
// // //                           zIndex: 20,
// // //                           boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
// // //                           minWidth: 90,
// // //                         }}
// // //                       >
// // //                         {["Daily", "Weekly", "Monthly", "Yearly"].map(p => (
// // //                           <button
// // //                             key={p}
// // //                             onClick={() => { setPeriod(p); setDropdownOpen(false); }}
// // //                             style={{
// // //                               display: "block",
// // //                               width: "100%",
// // //                               textAlign: "left",
// // //                               padding: "6px 10px",
// // //                               fontSize: 11,
// // //                               borderRadius: 8,
// // //                               border: "none",
// // //                               background: p === period ? "#F4F4F7" : "transparent",
// // //                               cursor: "pointer",
// // //                               color: "#1E1E24",
// // //                               fontWeight: p === period ? 600 : 400,
// // //                             }}
// // //                           >
// // //                             {p}
// // //                           </button>
// // //                         ))}
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </div>

// // //                 <ResponsiveContainer width="100%" height={180}>
// // //                   <BarChart data={salesData} barSize={22} barCategoryGap="30%">
// // //                     <XAxis
// // //                       dataKey="month"
// // //                       axisLine={false}
// // //                       tickLine={false}
// // //                       tick={{ fontSize: 10, fill: "#8C8C98" }}
// // //                     />
// // //                     <YAxis
// // //                       axisLine={false}
// // //                       tickLine={false}
// // //                       tick={{ fontSize: 9, fill: "#8C8C98" }}
// // //                       tickFormatter={v => `${v / 1000}k`}
// // //                       width={30}
// // //                     />
// // //                     <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(207,197,255,0.1)", radius: 8 }} />
// // //                     <Bar dataKey="sales" radius={[8, 8, 4, 4]}>
// // //                       {salesData.map((_, i) => (
// // //                         <Cell
// // //                           key={i}
// // //                           fill={i === 1 ? "#B8A9FF" : "rgba(207,197,255,0.35)"}
// // //                         />
// // //                       ))}
// // //                     </Bar>
// // //                   </BarChart>
// // //                 </ResponsiveContainer>
// // //               </div>

// // //               {/* ── Traffic Insights ── */}
// // //               <div className="card" style={{ padding: "20px" }}>
// // //                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
// // //                   <p style={{ fontSize: 13, fontWeight: 700 }}>Traffic Insights</p>
// // //                   <MoreHorizontal size={15} color="#8C8C98" style={{ cursor: "pointer" }} />
// // //                 </div>

// // //                 <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
// // //                   {trafficData.map(({ source, pct }) => (
// // //                     <div key={source}>
// // //                       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
// // //                         <span style={{ fontSize: 11, fontWeight: 500, color: "#1E1E24" }}>{source}</span>
// // //                         <span style={{ fontSize: 11, fontWeight: 600, color: "#B8A9FF" }}>{pct}%</span>
// // //                       </div>
// // //                       <div
// // //                         style={{
// // //                           height: 7,
// // //                           borderRadius: 999,
// // //                           background: "#F0EFF7",
// // //                           overflow: "hidden",
// // //                         }}
// // //                       >
// // //                         <div
// // //                           className="progress-bar-fill"
// // //                           style={{ width: `${pct}%` }}
// // //                         />
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               {/* ── Top Products ── */}
// // //               <div className="card" style={{ padding: "20px" }}>
// // //                 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
// // //                   <p style={{ fontSize: 13, fontWeight: 700 }}>Top Products</p>
// // //                   <MoreHorizontal size={15} color="#8C8C98" style={{ cursor: "pointer" }} />
// // //                 </div>

// // //                 <div style={{ display: "flex", flexDirection: "column" }}>
// // //                   {products.map(({ name, icon: Icon, color, sales }) => (
// // //                     <div key={name} className="product-row">
// // //                       <div
// // //                         style={{
// // //                           width: 36,
// // //                           height: 36,
// // //                           borderRadius: 12,
// // //                           background: `${color}22`,
// // //                           display: "flex",
// // //                           alignItems: "center",
// // //                           justifyContent: "center",
// // //                           flexShrink: 0,
// // //                         }}
// // //                       >
// // //                         <Icon size={16} color={color} />
// // //                       </div>
// // //                       <div style={{ flex: 1, minWidth: 0 }}>
// // //                         <p style={{ fontSize: 12, fontWeight: 600, color: "#1E1E24", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
// // //                           {name}
// // //                         </p>
// // //                         <p style={{ fontSize: 10, color: "#8C8C98", marginTop: 1 }}>units sold</p>
// // //                       </div>
// // //                       <span style={{ fontSize: 14, fontWeight: 700, color: "#1E1E24", flexShrink: 0 }}>
// // //                         {sales.toLocaleString()}
// // //                       </span>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </main>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // /**
// //  * ShoplytixsDashboard.jsx
// //  * Only Tailwind Converted Version
// //  */

// // import { useState } from "react";
// // import {
// //   ResponsiveContainer,
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   Cell,
// //   PieChart,
// //   Pie,
// // } from "recharts";

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
// //   Search,
// //   TrendingUp,
// //   TrendingDown,
// //   MoreHorizontal,
// //   Headphones,
// //   Watch,
// //   Speaker,
// //   Laptop,
// // } from "lucide-react";

// // /* ───────────────── DATA ───────────────── */

// // const salesData = [
// //   { month: "Jan", sales: 120000 },
// //   { month: "Feb", sales: 280000 },
// //   { month: "Mar", sales: 160000 },
// //   { month: "Apr", sales: 140000 },
// //   { month: "May", sales: 130000 },
// //   { month: "Jun", sales: 150000 },
// // ];

// // const trafficData = [
// //   { source: "Organic Search", pct: 85 },
// //   { source: "Referrals", pct: 60 },
// //   { source: "Social Media", pct: 45 },
// //   { source: "Email Campaign", pct: 20 },
// // ];

// // const products = [
// //   {
// //     name: "Wireless Headphones",
// //     icon: Headphones,
// //     color: "#B8A9FF",
// //     sales: 1240,
// //   },
// //   {
// //     name: "Smart Watch",
// //     icon: Watch,
// //     color: "#7EE7B8",
// //     sales: 1100,
// //   },
// //   {
// //     name: "Bluetooth Speaker",
// //     icon: Speaker,
// //     color: "#93C5FD",
// //     sales: 650,
// //   },
// //   {
// //     name: "Laptop Stand",
// //     icon: Laptop,
// //     color: "#F9A8D4",
// //     sales: 850,
// //   },
// // ];

// // const navTop = [
// //   { icon: Home, label: "Home" },
// //   { icon: BarChart2, label: "Analytics" },
// //   { icon: Users, label: "Customers" },
// //   { icon: Bell, label: "Notifications" },
// //   { icon: Settings, label: "Settings" },
// //   { icon: ShoppingBag, label: "Products" },
// //   { icon: Sliders, label: "Filters" },
// // ];

// // const navBottom = [
// //   { icon: Sliders, label: "Customize" },
// //   { icon: Moon, label: "Dark Mode" },
// //   { icon: User, label: "Profile" },
// // ];

// // /* ───────────────── TOOLTIP ───────────────── */

// // const CustomTooltip = ({ active, payload }) => {
// //   if (active && payload && payload.length) {
// //     return (
// //       <div className="rounded-[10px] border border-[#E6E6EC] bg-white px-3 py-2 text-xs text-[#1E1E24] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
// //         ${payload[0].value.toLocaleString()}
// //       </div>
// //     );
// //   }
// //   return null;
// // };

// // /* ───────────────── FLOAT CARD ───────────────── */

// // const FloatCard = ({ label, value, change, up, style }) => (
// //   <div
// //     style={style}
// //     className="absolute z-10 min-w-[140px] rounded-[20px] border border-[#E6E6EC] bg-[rgba(255,255,255,0.92)] p-[14px_18px] shadow-[0_8px_32px_rgba(184,169,255,0.18),0_2px_8px_rgba(0,0,0,0.06)] backdrop-blur-[16px]"
// //   >
// //     <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.05em] text-[#8C8C98]">
// //       {label}
// //     </p>

// //     <p className="mb-[6px] text-[22px] font-bold leading-[1.1] text-[#1E1E24]">
// //       {value}
// //     </p>

// //     <span
// //       className={`inline-flex items-center gap-[3px] rounded-[8px] px-2 py-[2px] text-[11px] font-semibold ${
// //         up
// //           ? "bg-[rgba(126,231,184,0.12)] text-[#7EE7B8]"
// //           : "bg-[rgba(255,138,138,0.12)] text-[#FF8A8A]"
// //       }`}
// //     >
// //       {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
// //       {change}
// //     </span>
// //   </div>
// // );

// // /* ───────────────── SEMICIRCLE ───────────────── */

// // const SemiCircleViz = () => {
// //   return (
// //     <div className="relative flex h-[380px] w-full items-end justify-center overflow-visible">
// //       {/* Glow */}
// //       <div className="absolute bottom-0 left-1/2 z-[1] h-[260px] w-[520px] -translate-x-1/2 rounded-t-full blur-[40px]" />

// //       {/* Outer Arc */}
// //       <div className="absolute bottom-0 left-1/2 z-[2] h-[218px] w-[440px] -translate-x-1/2 rounded-t-full border-2 border-b-0 border-[rgba(191,177,255,0.55)] opacity-90">
// //         <div className="absolute left-1/2 top-[-5px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#B9A9FF] shadow-[0_0_12px_rgba(185,169,255,0.9)]" />

// //         <div className="absolute bottom-[115px] left-[30px] h-2 w-2 rounded-full bg-[#C5B8FF] shadow-[0_0_10px_rgba(197,184,255,0.9)]" />

// //         <div className="absolute bottom-[115px] right-[30px] h-2 w-2 rounded-full bg-[#C5B8FF] shadow-[0_0_10px_rgba(197,184,255,0.9)]" />
// //       </div>

// //       {/* Main */}
// //       <div className="absolute bottom-0 left-1/2 z-[3] h-[205px] w-[410px] -translate-x-1/2 overflow-hidden rounded-t-full bg-gradient-to-b from-[rgba(139,119,230,0.5)] to-transparent">
// //         <div className="absolute left-1/2 top-[-30px] h-[90%] w-[90%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.22)_35%,transparent_72%)]" />
// //       </div>

// //       {/* Cutout */}
// //       <div className="absolute bottom-[-1px] left-1/2 z-[4] h-[150px] w-[300px] -translate-x-1/2 rounded-t-full" />

// //       {/* Center Text */}
// //       <div className="absolute bottom-[26px] left-1/2 z-[5] -translate-x-1/2 whitespace-nowrap text-center">
// //         <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8D8D99]">
// //           Total Sales
// //         </p>

// //         <p className="text-[46px] font-extrabold leading-none tracking-[-0.05em] text-[#19191F]">
// //           $46,354
// //           <span className="ml-[2px] text-[24px]">,00</span>
// //         </p>
// //       </div>

// //       {/* Float Cards */}
// //       <FloatCard
// //         label="Total Orders"
// //         value="3,460"
// //         change="+8%"
// //         up={true}
// //         style={{
// //           top: "12%",
// //           left: "50%",
// //           transform: "translateX(-50%)",
// //         }}
// //       />

// //       <FloatCard
// //         label="Total Revenue"
// //         value="$120,540"
// //         change="+12%"
// //         up={true}
// //         style={{
// //           top: "56%",
// //           left: "0%",
// //           transform: "translateY(-50%)",
// //         }}
// //       />

// //       <FloatCard
// //         label="Conversion Rate"
// //         value="3.8%"
// //         change="-0.4%"
// //         up={false}
// //         style={{
// //           top: "56%",
// //           right: "0%",
// //           transform: "translateY(-50%)",
// //         }}
// //       />
// //     </div>
// //   );
// // };

// // /* ───────────────── STAT PILL ───────────────── */

// // const StatPill = ({ label, value }) => (
// //   <div className="mr-5 border-r border-[#E6E6EC] pr-5">
// //     <p className="mb-[2px] text-[10px] font-medium uppercase tracking-[0.05em] text-[#8C8C98]">
// //       {label}
// //     </p>

// //     <p className="text-[20px] font-bold text-[#1E1E24]">{value}</p>
// //   </div>
// // );

// // /* ───────────────── NAV BUTTON ───────────────── */

// // const NavBtn = ({ Icon, label, active, onClick }) => (
// //   <button
// //     onClick={onClick}
// //     title={label}
// //     className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
// //       active
// //         ? "bg-[#1E1E24] text-white"
// //         : "bg-transparent text-[#8C8C98] hover:bg-[#1E1E24] hover:text-white"
// //     }`}
// //   >
// //     <Icon size={16} />
// //   </button>
// // );

// // /* ───────────────── MAIN ───────────────── */

// // export default function ShoplytixsDashboard() {
// //   const [activeNav, setActiveNav] = useState(0);
// //   const [period, setPeriod] = useState("Monthly");
// //   const [dropdownOpen, setDropdownOpen] = useState(false);

// //   return (
// //     <div className="flex h-screen overflow-hidden bg-[#F4F4F7] text-[#1E1E24]">
// //       {/* SIDEBAR */}
// //       <div className="flex w-[90px] shrink-0 flex-col items-center py-5">
// //         {/* Logo */}
// //         <div className="mb-7 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF] shadow-[0_4px_16px_rgba(184,169,255,0.4)]">
// //           <ShoppingBag size={16} color="#fff" />
// //         </div>

// //         {/* Nav */}
// //         <div className="flex flex-col items-center gap-1 rounded-full border border-[#E6E6EC] bg-white px-2 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
// //           {navTop.map(({ icon: Icon, label }, i) => (
// //             <NavBtn
// //               key={label}
// //               Icon={Icon}
// //               label={label}
// //               active={activeNav === i}
// //               onClick={() => setActiveNav(i)}
// //             />
// //           ))}

// //           <div className="my-[6px] h-[1px] w-6 bg-[#E6E6EC]" />

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

// //       {/* MAIN */}
// //       <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
// //         {/* HEADER */}
// //         <header className="flex h-16 shrink-0 items-center justify-between px-7">
// //           <span className="text-[16px] font-extrabold tracking-[-0.02em]">
// //             Shoplytixs
// //           </span>

// //           {/* Search */}
// //           <div className="mx-8 flex-1 max-w-[280px]">
// //             <div className="flex items-center gap-2 rounded-full border border-[#E6E6EC] bg-white px-[14px] py-2">
// //               <Search size={13} color="#8C8C98" />
// //               <span className="text-xs text-[#8C8C98]">Search...</span>
// //             </div>
// //           </div>

// //           {/* Right */}
// //           <div className="flex items-center gap-[10px]">
// //             {/* Bell */}
// //             <button className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#E6E6EC] bg-white">
// //               <Bell size={14} color="#1E1E24" />

// //               <span className="absolute right-[2px] top-[2px] h-[7px] w-[7px] rounded-full border-[1.5px] border-[#F4F4F7] bg-[#B8A9FF]" />
// //             </button>

// //             {/* Settings */}
// //             <button className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#E6E6EC] bg-white">
// //               <Settings size={14} color="#1E1E24" />
// //             </button>

// //             {/* Profile */}
// //             <div className="flex cursor-pointer items-center gap-2 rounded-full border border-[#E6E6EC] bg-white px-3 py-[5px]">
// //               <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF] text-[10px] font-bold text-white">
// //                 EC
// //               </div>

// //               <div>
// //                 <p className="text-[11px] font-semibold leading-[1.2]">
// //                   Ethan Carter
// //                 </p>

// //                 <p className="text-[9px] text-[#8C8C98]">Owner</p>
// //               </div>

// //               <MoreHorizontal size={13} color="#8C8C98" />
// //             </div>
// //           </div>
// //         </header>

// //         {/* CONTENT */}
// //         <main className="flex-1 overflow-y-auto overflow-x-hidden px-6 pb-6">
// //           {/* Hero */}
// //           <div className="px-[23px] py-[15px]">
// //             <div className="grid grid-cols-[1fr_1.6fr] items-start gap-6">
// //               {/* Left */}
// //               <div>
// //                 <h2 className="mb-2 text-[26px] font-extrabold leading-[1.15] tracking-[-0.03em]">
// //                   E-commerce
// //                   <br />
// //                   Growth Insights
// //                 </h2>

// //                 <p className="mb-6 text-xs leading-[1.6] text-[#8C8C98]">
// //                   Track and analyze your online store's performance with
// //                   AI-powered metrics.
// //                 </p>

// //               </div>

// //               {/* Right */}
// //               <div className="relative">
// //                 <SemiCircleViz />
// //               </div>
// //             </div>
// //           </div>

// //           {/* Bottom Grid */}
// //           <div className="grid grid-cols-[1.1fr_1fr_1fr] gap-4">
// //             {/* Sales */}
// //             <div className="rounded-[24px] border border-[#E6E6EC] bg-white p-[20px_20px_12px] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
// //               <div className="mb-4 flex items-center justify-between">
// //                 <p className="text-[13px] font-bold">Sales Overview</p>

// //                 <div className="relative">
// //                   <button
// //                     onClick={() => setDropdownOpen(!dropdownOpen)}
// //                     className="flex items-center gap-1 rounded-[10px] border border-[#E6E6EC] bg-[#F4F4F7] px-[10px] py-[5px] text-[11px] font-medium text-[#1E1E24]"
// //                   >
// //                     {period}
// //                   </button>

// //                   {dropdownOpen && (
// //                     <div className="absolute right-0 top-[calc(100%+4px)] z-20 min-w-[90px] rounded-xl border border-[#E6E6EC] bg-white p-[6px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
// //                       {["Daily", "Weekly", "Monthly", "Yearly"].map((p) => (
// //                         <button
// //                           key={p}
// //                           onClick={() => {
// //                             setPeriod(p);
// //                             setDropdownOpen(false);
// //                           }}
// //                           className={`block w-full rounded-lg px-[10px] py-[6px] text-left text-[11px] ${
// //                             p === period ? "bg-[#F4F4F7] font-semibold" : ""
// //                           }`}
// //                         >
// //                           {p}
// //                         </button>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>

// //               <ResponsiveContainer width="100%" height={180}>
// //                 <BarChart data={salesData} barSize={22}>
// //                   <XAxis
// //                     dataKey="month"
// //                     axisLine={false}
// //                     tickLine={false}
// //                     tick={{ fontSize: 10, fill: "#8C8C98" }}
// //                   />

// //                   <YAxis
// //                     axisLine={false}
// //                     tickLine={false}
// //                     width={30}
// //                     tick={{ fontSize: 9, fill: "#8C8C98" }}
// //                     tickFormatter={(v) => `${v / 1000}k`}
// //                   />

// //                   <Tooltip
// //                     content={<CustomTooltip />}
// //                     cursor={{
// //                       fill: "rgba(207,197,255,0.1)",
// //                       radius: 8,
// //                     }}
// //                   />

// //                   <Bar dataKey="sales" radius={[8, 8, 4, 4]}>
// //                     {salesData.map((_, i) => (
// //                       <Cell
// //                         key={i}
// //                         fill={i === 1 ? "#B8A9FF" : "rgba(207,197,255,0.35)"}
// //                       />
// //                     ))}
// //                   </Bar>
// //                 </BarChart>
// //               </ResponsiveContainer>
// //             </div>

// //             {/* Traffic */}
// //             <div className="rounded-[24px] border border-[#E6E6EC] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
// //               <div className="mb-5 flex items-center justify-between">
// //                 <p className="text-[13px] font-bold">Traffic Insights</p>

// //                 <MoreHorizontal
// //                   size={15}
// //                   color="#8C8C98"
// //                   className="cursor-pointer"
// //                 />
// //               </div>

// //               <div className="flex flex-col gap-[18px]">
// //                 {trafficData.map(({ source, pct }) => (
// //                   <div key={source}>
// //                     <div className="mb-[6px] flex justify-between">
// //                       <span className="text-[11px] font-medium text-[#1E1E24]">
// //                         {source}
// //                       </span>

// //                       <span className="text-[11px] font-semibold text-[#B8A9FF]">
// //                         {pct}%
// //                       </span>
// //                     </div>

// //                     <div className="h-[7px] overflow-hidden rounded-full bg-[#F0EFF7]">
// //                       <div
// //                         className="h-full rounded-full bg-gradient-to-r from-[#B8A9FF] to-[#CFC5FF]"
// //                         style={{ width: `${pct}%` }}
// //                       />
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Products */}
// //             <div className="rounded-[24px] border border-[#E6E6EC] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
// //               <div className="mb-4 flex items-center justify-between">
// //                 <p className="text-[13px] font-bold">Top Products</p>

// //                 <MoreHorizontal
// //                   size={15}
// //                   color="#8C8C98"
// //                   className="cursor-pointer"
// //                 />
// //               </div>

// //               <div className="flex flex-col">
// //                 {products.map(({ name, icon: Icon, color, sales }) => (
// //                   <div
// //                     key={name}
// //                     className="flex items-center gap-3 border-b border-[#F4F4F7] py-[10px] transition-all duration-150 hover:rounded-xl hover:bg-[#FAFAFC] hover:pl-1"
// //                   >
// //                     <div
// //                       className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
// //                       style={{
// //                         background: `${color}22`,
// //                       }}
// //                     >
// //                       <Icon size={16} color={color} />
// //                     </div>

// //                     <div className="min-w-0 flex-1">
// //                       <p className="truncate text-[12px] font-semibold text-[#1E1E24]">
// //                         {name}
// //                       </p>

// //                       <p className="mt-[1px] text-[10px] text-[#8C8C98]">
// //                         units sold
// //                       </p>
// //                     </div>

// //                     <span className="shrink-0 text-[14px] font-bold text-[#1E1E24]">
// //                       {sales.toLocaleString()}
// //                     </span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Cell,
// } from "recharts";

// import {
//   Home,
//   BarChart2,
//   Users,
//   Bell,
//   Settings,
//   ShoppingBag,
//   Sliders,
//   Moon,
//   User,
//   Search,
//   TrendingUp,
//   TrendingDown,
//   MoreHorizontal,
//   Headphones,
//   Watch,
//   Speaker,
//   Laptop,
//   Menu,
//   X,
// } from "lucide-react";

// const navTop = [
//   { icon: Home, label: "Home" },
//   { icon: BarChart2, label: "Analytics" },
//   { icon: Users, label: "Customers" },
//   { icon: Bell, label: "Notifications" },
//   { icon: Settings, label: "Settings" },
//   { icon: ShoppingBag, label: "Products" },
//   { icon: Sliders, label: "Filters" },
// ];

// const navBottom = [
//   { icon: Sliders, label: "Customize" },
//   { icon: Moon, label: "Dark Mode" },
//   { icon: User, label: "Profile" },
// ];

// /* ───────────── TOOLTIP ───────────── */

// const CustomTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="rounded-[10px] border border-[#E6E6EC] bg-white px-3 py-1.5 text-[12px] text-[#1E1E24] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
//         ${payload[0].value.toLocaleString()}
//       </div>
//     );
//   }

//   return null;
// };

// /* ───────────── FLOAT CARD ───────────── */

// const FloatCard = ({ label, value, change, up, className }) => (
//   <div
//     className={`absolute z-10 min-w-[130px] rounded-[20px] border border-[#E6E6EC] bg-white/90 px-4 py-3 backdrop-blur-xl shadow-[0_8px_32px_rgba(184,169,255,0.18),0_2px_8px_rgba(0,0,0,0.06)] ${className}`}
//   >
//     <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.05em] text-[#8C8C98]">
//       {label}
//     </p>

//     <p className="mb-1.5 text-[20px] font-extrabold leading-none text-[#1E1E24]">
//       {value}
//     </p>

//     <span
//       className={`inline-flex items-center gap-1 rounded-[8px] px-2 py-[2px] text-[11px] font-bold ${
//         up ? "bg-[#7EE7B81F] text-[#7EE7B8]" : "bg-[#FF8A8A1F] text-[#FF8A8A]"
//       }`}
//     >
//       {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
//       {change}
//     </span>
//   </div>
// );

// /* ───────────── SEMICIRCLE ───────────── */

// const SemiCircleViz = () => (
//   <div className="relative flex h-[360px] w-full items-end justify-center overflow-visible">
//     {/* Outer Arc */}
//     <div className="absolute bottom-0 left-1/2 z-[2] h-[210px] w-[420px] -translate-x-1/2 rounded-t-[210px] border-2 border-b-0 border-[rgba(191,177,255,0.55)]">
//       <div className="absolute left-1/2 top-[-5px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#B9A9FF] shadow-[0_0_12px_rgba(185,169,255,0.9)]" />

//       <div className="absolute bottom-[108px] left-7 h-2 w-2 rounded-full bg-[#C5B8FF] shadow-[0_0_10px_rgba(197,184,255,0.9)]" />

//       <div className="absolute bottom-[108px] right-7 h-2 w-2 rounded-full bg-[#C5B8FF] shadow-[0_0_10px_rgba(197,184,255,0.9)]" />
//     </div>

//     {/* Main Fill */}
//     <div className="absolute bottom-0 left-1/2 z-[3] h-[200px] w-[400px] -translate-x-1/2 overflow-hidden rounded-t-[200px] bg-gradient-to-b from-[rgba(139,119,230,0.5)] to-transparent">
//       <div className="absolute left-1/2 top-[-30px] h-[90%] w-[90%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.22)_35%,transparent_72%)]" />
//     </div>

//     {/* Center Text */}
//     <div className="absolute bottom-6 left-1/2 z-[5] -translate-x-1/2 text-center whitespace-nowrap">
//       <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8D8D99]">
//         Total Sales
//       </p>

//       <p className="text-[44px] font-black leading-none tracking-[-0.05em] text-[#19191F]">
//         $46,354<span className="text-[22px]">,00</span>
//       </p>
//     </div>

//     {/* Float Cards */}
//     <FloatCard
//       label="Total Orders"
//       value="3,460"
//       change="+8%"
//       up
//       className="left-1/2 top-[10%] -translate-x-1/2"
//     />

//     <FloatCard
//       label="Total Revenue"
//       value="$120,540"
//       change="+12%"
//       up
//       className="left-0 top-[52%] -translate-y-1/2"
//     />

//     <FloatCard
//       label="Conversion Rate"
//       value="3.8%"
//       change="-0.4%"
//       up={false}
//       className="right-0 top-[52%] -translate-y-1/2"
//     />
//   </div>
// );

// /* ───────────── NAV BUTTON ───────────── */

// const NavBtn = ({ Icon, label, active, onClick }) => (
//   <button
//     onClick={onClick}
//     title={label}
//     className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
//       active
//         ? "bg-[#1E1E24] text-white"
//         : "text-[#8C8C98] hover:bg-[#1E1E24] hover:text-white"
//     }`}
//   >
//     <Icon size={16} />
//   </button>
// );

// /* ───────────── MAIN ───────────── */

// export default function ShoplytixsDashboard() {
//   const [activeNav, setActiveNav] = useState(0);
//   const [period, setPeriod] = useState("Monthly");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen overflow-hidden bg-[#F4F4F7] text-[#1E1E24]">
//       {/* Desktop Sidebar */}

//       <div className="hidden w-[90px] shrink-0 flex-col items-center py-5 lg:flex">
//         <div className="mb-7 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF] shadow-[0_4px_16px_rgba(184,169,255,0.4)]">
//           <ShoppingBag size={16} color="#fff" />
//         </div>

//         <div className="flex flex-col items-center gap-1 rounded-full border border-[#E6E6EC] bg-white px-2 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
//           {navTop.map(({ icon: Icon, label }, i) => (
//             <NavBtn
//               key={label}
//               Icon={Icon}
//               label={label}
//               active={activeNav === i}
//               onClick={() => setActiveNav(i)}
//             />
//           ))}

//           <div className="my-1.5 h-px w-6 bg-[#E6E6EC]" />

//           {navBottom.map(({ icon: Icon, label }) => (
//             <NavBtn
//               key={label}
//               Icon={Icon}
//               label={label}
//               active={false}
//               onClick={() => {}}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Mobile Overlay */}

//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black/30 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Mobile Drawer */}

//       <div
//         className={`fixed bottom-0 left-0 top-0 z-50 flex w-20 flex-col items-center bg-[#F4F4F7] py-5 transition-transform duration-300 lg:hidden ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <button
//           onClick={() => setSidebarOpen(false)}
//           className="mb-4 text-[#8C8C98]"
//         >
//           <X size={18} />
//         </button>

//         <div className="flex flex-col items-center gap-1 rounded-full border border-[#E6E6EC] bg-white px-2 py-3">
//           {navTop.map(({ icon: Icon, label }, i) => (
//             <NavBtn
//               key={label}
//               Icon={Icon}
//               label={label}
//               active={activeNav === i}
//               onClick={() => {
//                 setActiveNav(i);
//                 setSidebarOpen(false);
//               }}
//             />
//           ))}

//           <div className="my-1.5 h-px w-6 bg-[#E6E6EC]" />

//           {navBottom.map(({ icon: Icon, label }) => (
//             <NavBtn
//               key={label}
//               Icon={Icon}
//               label={label}
//               active={false}
//               onClick={() => {}}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Main */}

//       <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
//         {/* Header */}

//         <header className="flex h-16 shrink-0 items-center justify-between px-4 sm:px-7">
//           <div className="flex items-center gap-2.5">
//             <button
//               onClick={() => setSidebarOpen(true)}
//               className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6E6EC] bg-white lg:hidden"
//             >
//               <Menu size={16} />
//             </button>

//             <span className="text-[16px] font-black tracking-[-0.02em]">
//               Shoplytixs
//             </span>
//           </div>

//           {/* Search */}

//           <div className="mx-4 hidden max-w-[280px] flex-1 sm:flex">
//             <div className="flex w-full items-center gap-2 rounded-full border border-[#E6E6EC] bg-white px-4 py-2">
//               <Search size={13} color="#8C8C98" />

//               <span className="text-[12px] text-[#8C8C98]">Search...</span>
//             </div>
//           </div>

//           {/* Right */}

//           <div className="flex items-center gap-2.5">
//             <button className="relative hidden h-9 w-9 items-center justify-center rounded-full border border-[#E6E6EC] bg-white sm:flex">
//               <Bell size={14} />

//               <span className="absolute right-[2px] top-[2px] h-[7px] w-[7px] rounded-full border-[1.5px] border-[#F4F4F7] bg-[#B8A9FF]" />
//             </button>

//             <button className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#E6E6EC] bg-white sm:flex">
//               <Settings size={14} />
//             </button>

//             <div className="flex cursor-pointer items-center gap-2 rounded-full border border-[#E6E6EC] bg-white px-3 py-[5px]">
//               <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF] text-[10px] font-extrabold text-white">
//                 EC
//               </div>

//               <div>
//                 <p className="text-[11px] font-bold leading-[1.2]">
//                   Ethan Carter
//                 </p>

//                 <p className="text-[9px] text-[#8C8C98]">Owner</p>
//               </div>

//               <MoreHorizontal size={13} color="#8C8C98" />
//             </div>
//           </div>
//         </header>

//         {/* Content */}

//         <main className="flex-1 overflow-y-auto overflow-x-hidden px-3 pb-24 sm:px-6 lg:px-10">
//           {/* Hero Grid */}

//           <div className="grid grid-cols-1 gap-6 py-3 lg:grid-cols-[1fr_1.6fr]">
//             {/* Left */}

//             <div>
//               <h2 className="mb-2 text-[clamp(20px,3vw,28px)] font-black leading-[1.15] tracking-[-0.03em]">
//                 E-commerce
//                 <br />
//                 Growth Insights
//               </h2>

//               <p className="mb-6 max-w-[320px] text-[12px] leading-[1.6] text-[#8C8C98]">
//                 Track and analyze your online store's performance with
//                 AI-powered metrics.
//               </p>

//               {/* Customer Card */}
//             </div>

//             {/* Right */}

//             <div className="relative">
//               <SemiCircleViz />
//             </div>
//           </div>

//           {/* Bottom Grid */}
//         </main>
//       </div>
//     </div>
//   );
// }

// // Dashboard.jsx

// import { useEffect, useRef, useState } from "react";

// import Sidebar from "../../components/common/Sidebar";
// import { TrendingDown, TrendingUp, CalendarDays } from "lucide-react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Cell,
//   CartesianGrid,
// } from "recharts";
// import Navbar from "../../components/common/Navbar";
// import { DayPicker } from "react-day-picker";
// import { format } from "date-fns";

// import "react-day-picker/dist/style.css";
// import CustomDateRangePicker from "../../components/calendar";
// const data = [
//   {
//     name: "May 14",
//     successful: 18,
//     pending: 3,
//     cancelled: 1,
//   },
//   {
//     name: "May 15",
//     successful: 22,
//     pending: 4,
//     cancelled: 0.8,
//   },
//   {
//     name: "May 16",
//     successful: 19,
//     pending: 2.5,
//     cancelled: 1.2,
//   },
//   {
//     name: "May 17",
//     successful: 24,
//     pending: 3.8,
//     cancelled: 0.6,
//   },
//   {
//     name: "May 18",
//     successful: 21,
//     pending: 2.8,
//     cancelled: 1,
//   },
//   {
//     name: "May 19",
//     successful: 26,
//     pending: 4.5,
//     cancelled: 0.7,
//   },
//   {
//     name: "May 20",
//     successful: 23,
//     pending: 3.5,
//     cancelled: 0.5,
//   },
// ];

// /* ───────────── FLOAT CARD ───────────── */

// const FloatCard = ({ label, value, change, up, className }) => (
//   <div
//     className={`absolute z-10 min-w-[130px] rounded-[20px] border border-[#E6E6EC] bg-white/90 px-4 py-3 backdrop-blur-xl shadow-[0_8px_32px_rgba(184,169,255,0.18),0_2px_8px_rgba(0,0,0,0.06)] ${className}`}
//   >
//     <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.05em] text-[#8C8C98]">
//       {label}
//     </p>

//     <p className="mb-1.5 text-[20px] font-extrabold leading-none text-[#1E1E24]">
//       {value}
//     </p>

//     <span
//       className={`inline-flex items-center gap-1 rounded-[8px] px-2 py-[2px] text-[11px] font-bold ${
//         up ? "bg-[#7EE7B81F] text-[#7EE7B8]" : "bg-[#FF8A8A1F] text-[#FF8A8A]"
//       }`}
//     >
//       {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
//       {change}
//     </span>
//   </div>
// );

// // /* ───────────── SEMICIRCLE ───────────── */

// const SemiCircleViz = () => (
//   <div className="relative flex h-[300px] w-full items-end justify-center overflow-visible">
//     {/* Outer Arc */}
//     <div className="absolute bottom-0 left-1/2 z-[2] h-[210px] w-[400px] -translate-x-1/2 rounded-t-[210px] border-2 border-b-0 border-[rgba(191,177,255,0.55)]">
//       <div className="absolute left-1/2 top-[-5px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#B9A9FF] shadow-[0_0_12px_rgba(185,169,255,0.9)]" />

//       <div className="absolute bottom-[108px] left-[6%] h-2 w-2 rounded-full bg-[#C5B8FF] shadow-[0_0_10px_rgba(197,184,255,0.9)]" />

//       <div className="absolute bottom-[108px] right-[6%] h-2 w-2 rounded-full bg-[#C5B8FF] shadow-[0_0_10px_rgba(197,184,255,0.9)]" />
//     </div>

//     {/* Main Fill */}
//     <div className="absolute bottom-0 left-1/2 z-[3] h-[200px] w-[370px] -translate-x-1/2 overflow-hidden rounded-t-[200px] bg-gradient-to-b from-[rgba(139,119,230,0.5)] to-transparent">
//       <div className="absolute left-1/2 top-[-30px] h-[90%] w-[90%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.22)_35%,transparent_72%)]" />
//     </div>

//     {/* Center Text */}
//     <div className="absolute bottom-6 left-1/2 z-[5] -translate-x-1/2 text-center whitespace-nowrap">
//       <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8D8D99]">
//         Total Sales
//       </p>

//       <p className="text-[44px] font-black leading-none tracking-[-0.05em] text-[#19191F]">
//         $46,354<span className="text-[22px]">,00</span>
//       </p>
//     </div>

//     {/* Float Cards */}
//     <FloatCard
//       label="Total Orders"
//       value="3,460"
//       change="+8%"
//       up
//       className="left-1/2 top-[-3%] -translate-x-1/2"
//     />

//     <FloatCard
//       label="Total Revenue"
//       value="$120,540"
//       change="+12%"
//       up
//       className="left-[6%] top-[45%] -translate-y-1/2"
//     />

//     <FloatCard
//       label="Conversion Rate"
//       value="3.8%"
//       change="-0.4%"
//       up={false}
//       className="right-[6%] top-[45%] -translate-y-1/2"
//     />
//   </div>
// );

// export default function ShoplytixsDashboard() {
//   const [activeNav, setActiveNav] = useState(0);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [active, setActive] = useState("Last 7 days");
//   const [range, setRange] = useState({
//     from: new Date(),
//     to: new Date(),
//   });
//   const [open, setOpen] = useState(false);

//   const pickerRef = useRef(null);
//   const filters = ["Last 7 days", "Weekly", "Monthly"];

//   {
//     /* BACKEND DATA ONLY */
//   }

//   const dashboardData = [
//     {
//       type: "successful",
//       value: "$156k",
//     },

//     {
//       type: "pending",
//       value: "27",
//     },

//     {
//       type: "cancelled",
//       value: "$7k",
//     },
//   ];

//   {
//     /* AUTO UI CONFIG */
//   }

//   const statusConfig = {
//     successful: {
//       title: "Successful",
//       subtitle: "",
//       badge: "↑ +14% Growth",
//       badgeColor: "text-[#13B981]",
//       badgeBg: "bg-[#DDF5EC]",
//       dot: "bg-[#A995EA]",
//       dotBg: "bg-[#A995EA]/10",
//       cardBg: "from-[#F7F5FF] to-[#F3F1FF]",
//     },

//     pending: {
//       title: "Pending",
//       subtitle: "",
//       badge: "Processing",
//       badgeColor: "text-[#F59E0B]",
//       badgeBg: "bg-[#FFF0D5]",
//       dot: "bg-[#F59E0B]",
//       dotBg: "bg-[#F59E0B]/10",
//       cardBg: "from-[#FFF9EE] to-[#FFF6E7]",
//     },

//     cancelled: {
//       title: "Cancelled",
//       subtitle: "",
//       badge: "↓ -6% Loss",
//       badgeColor: "text-[#EF4444]",
//       badgeBg: "bg-[#FFE2E2]",
//       dot: "bg-[#EF4444]",
//       dotBg: "bg-[#EF4444]/10",
//       cardBg: "from-[#FFF4F4] to-[#FFEFEF]",
//     },
//   };

//   // CLOSE OUTSIDE CLICK
//   useEffect(() => {
//     const handler = (e) => {
//       if (pickerRef.current && !pickerRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handler);

//     return () => {
//       document.removeEventListener("mousedown", handler);
//     };
//   }, []);

//   return (
//     <div className="flex h-screen overflow-hidden bg-[#F4F4F7] text-[#1E1E24]">
//       {/* Sidebar */}

//       <Sidebar
//         activeNav={activeNav}
//         setActiveNav={setActiveNav}
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//       />

//       {/* Main */}

//       <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
//         {/* Navbar */}

//         <Navbar setSidebarOpen={setSidebarOpen} />

//         {/* Content */}

//         <main className="flex-1 overflow-y-auto overflow-x-hidden px-3 pb-24 sm:px-6 lg:px-10">
//           <div className="grid grid-cols-1 py-3 lg:grid-cols-[1fr_1.6fr]">
//             {/* Left */}

//             <div className="flex flex-col">
//               <h2 className="mb-3 text-[clamp(20px,3vw,28px)] font-black leading-[1.1] tracking-[-0.03em] text-[#19191F]">
//                 E-commerce
//                 <br />
//                 Growth Insights
//               </h2>

//               <p className="mb-6 max-w-[320px] text-[12px] leading-[1.7] font-medium text-[#8C8C98]">
//                 Track and analyze your online store's performance with
//                 AI-powered metrics.
//               </p>

//               <div className="flex flex-wrap gap-3">
//                 {[
//                   ["$1.58M", "Revenue"],
//                   ["13.7K", "Orders"],
//                   ["8.4K", "Customers"],
//                 ].map(([v, l]) => (
//                   <div
//                     key={l}
//                     className="min-w-[110px] rounded-2xl border border-white bg-white/80 px-5 py-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//                   >
//                     <p className="text-[18px] font-black tracking-[-0.03em] text-[#19191F]">
//                       {v}
//                     </p>

//                     <div className="mt-1 flex items-center justify-center gap-2">
//                       <div className="h-2 w-2 rounded-full bg-[#C5B8FF]" />

//                       <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8C8C98]">
//                         {l}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right */}

//             <div className="relative">
//               <SemiCircleViz />
//             </div>
//           </div>
//           {/* ───────────────── SALES OVERVIEW ───────────────── */}

//           <div className="w-full rounded-[28px] border border-[#ECECF2] bg-white/95 p-5 shadow-[0_10px_40px_rgba(168,145,255,0.12)] backdrop-blur-xl sm:p-6 lg:p-7">
//             {/* ───────────── TOP SECTION ───────────── */}
//             <div className="mb-7 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
//               {/* TITLE */}
//               <div>
//                 <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9AA0B4]">
//                   Analytics Report
//                 </p>

//                 <h2 className="text-[clamp(22px,3vw,28px)] font-black tracking-[-0.04em] text-[#111827]">
//                   Sales Overview
//                 </h2>
//               </div>

//               {/* BUTTONS */}
//               <div className="flex items-center gap-3">
//                 <div className="flex flex-wrap items-center gap-3">
//                   {filters.map((item) => (
//                     <button
//                       key={item}
//                       onClick={() => setActive(item)}
//                       className={`
//             h-[40px]
//             rounded-full
//             px-5
//             text-[12px]
//             font-semibold
//             transition-all
//             duration-300
//             whitespace-nowrap
//             ${
//               active === item
//                 ? "bg-[#191922] text-white shadow-md"
//                 : "border border-[#E6E7EE] bg-[#F5F5F8] text-[#8B8FA3] hover:bg-white"
//             }
//           `}
//                     >
//                       {item}
//                     </button>
//                   ))}
//                 </div>

//                 {/* DATE RANGE COMPONENT */}
//                 <CustomDateRangePicker />
//               </div>
//             </div>

//             {/* ───────────── STATS CARDS ───────────── */}
//             {/* ───────────── CARDS ───────────── */}

//             <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
//               {dashboardData.map((item, index) => {
//                 const config = statusConfig[item.type];

//                 return (
//                   <div
//                     key={index}
//                     className={`
//           rounded-[22px]
//           border
//           border-white
//           bg-gradient-to-br
//           ${config.cardBg}
//           p-4
//           shadow-sm
//           h-[133px]
//         `}
//                   >
//                     <div className="mb-3 flex items-start justify-between">
//                       <div>
//                         <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8B8FA3]">
//                           {config.title}
//                         </p>

//                         {/* BACKEND VALUE */}
//                         <h3 className="text-[26px] font-black tracking-[-0.04em] text-[#111827]">
//                           {item.value}
//                         </h3>

//                         {config.subtitle && (
//                           <p className="mt-1 text-[11px] font-medium text-[#8B8FA3]">
//                             {config.subtitle}
//                           </p>
//                         )}
//                       </div>

//                       <div className={`rounded-lg p-1.5 ${config.dotBg}`}>
//                         <div
//                           className={`h-2.5 w-2.5 rounded-full ${config.dot}`}
//                         />
//                       </div>
//                     </div>

//                     <div
//                       className={`
//             inline-flex
//             items-center
//             rounded-full
//             px-2.5
//             py-1
//             ${config.badgeBg}
//           `}
//                     >
//                       <span
//                         className={`
//               text-[10px]
//               font-bold
//               ${config.badgeColor}
//             `}
//                       >
//                         {config.badge}
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* ───────────── LEGEND ───────────── */}
//             <div className="mt-8 flex flex-wrap items-center gap-6">
//               <div className="flex items-center gap-2">
//                 <div className="h-3 w-3 rounded-full bg-[#A995EA]" />
//                 <span className="text-[13px] font-medium text-[#70758A]">
//                   Successful
//                 </span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <div className="h-3 w-3 rounded-full bg-[#F59E0B]" />
//                 <span className="text-[13px] font-medium text-[#70758A]">
//                   Pending
//                 </span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <div className="h-3 w-3 rounded-full bg-[#EF4444]" />
//                 <span className="text-[13px] font-medium text-[#70758A]">
//                   Cancelled
//                 </span>
//               </div>
//             </div>

//             {/* ───────────── CHART ───────────── */}
//             <div className="mt-8 h-[340px] w-full rounded-[24px] bg-[#FCFCFD] p-3">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={data} barGap={10}>
//                   <CartesianGrid
//                     strokeDasharray="4 6"
//                     vertical={false}
//                     stroke="#ECECF2"
//                   />

//                   <XAxis
//                     dataKey="name"
//                     tickLine={false}
//                     axisLine={false}
//                     tick={{
//                       fill: "#8B8FA3",
//                       fontSize: 12,
//                       fontWeight: 500,
//                     }}
//                   />

//                   <YAxis
//                     tickLine={false}
//                     axisLine={false}
//                     tick={{
//                       fill: "#8B8FA3",
//                       fontSize: 12,
//                     }}
//                     ticks={[0, 5, 10, 15, 20, 25, 30]}
//                     tickFormatter={(v) => `$${v}k`}
//                   />

//                   <Tooltip
//                     cursor={{ fill: "rgba(169,149,234,0.08)" }}
//                     contentStyle={{
//                       borderRadius: "16px",
//                       border: "1px solid #ECECF2",
//                       fontSize: "12px",
//                     }}
//                   />

//                   {/* SUCCESSFUL */}
//                   <Bar
//                     dataKey="successful"
//                     fill="#A995EA"
//                     radius={[12, 12, 12, 12]}
//                     barSize={42}
//                   />

//                   {/* PENDING */}
//                   <Bar
//                     dataKey="pending"
//                     fill="#FDE9C7"
//                     stroke="#F59E0B"
//                     radius={[12, 12, 12, 12]}
//                     barSize={42}
//                   />

//                   {/* CANCELLED */}
//                   <Bar
//                     dataKey="cancelled"
//                     fill="#F8D7D7"
//                     radius={[12, 12, 12, 12]}
//                     barSize={42}
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//           {/* ───────────────── PREMIUM ANALYTICS CARDS ───────────────── */}
//           <div className="min-h-screen bg-[#111111] p-6 text-white">
//             {/* ───────────────── TOP FILTERS ───────────────── */}
//             <div className="mb-6 flex flex-wrap items-center justify-between gap-5">
//               {/* LEFT */}
//               <div className="flex flex-wrap items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <svg
//                     width="18"
//                     height="18"
//                     fill="none"
//                     stroke="#7A7A7A"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <rect x="3" y="4" width="18" height="18" rx="2" />
//                     <path d="M16 2v4M8 2v4M3 10h18" />
//                   </svg>

//                   <span className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[#7A7A7A]">
//                     Period
//                   </span>
//                 </div>

//                 {["7 days", "14 days", "30 days", "90 days"].map((item, i) => (
//                   <button
//                     key={item}
//                     className={`
//               h-[52px]
//               rounded-2xl
//               border
//               px-6
//               text-[17px]
//               font-semibold
//               transition-all
//               ${
//                 i === 2
//                   ? "border-[#4D4D4D] bg-[#1C1C1C] text-white"
//                   : "border-[#2D2D2D] bg-transparent text-[#EAEAEA]"
//               }
//             `}
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>

//               {/* RIGHT DATE */}
//               <div className="flex flex-wrap items-center gap-4">
//                 {["20-04-2026", "20-05-2026"].map((date) => (
//                   <div
//                     key={date}
//                     className="
//             flex
//             h-[52px]
//             items-center
//             gap-4
//             rounded-xl
//             border
//             border-[#4A4A4A]
//             bg-[#2A2A2A]
//             px-5
//           "
//                   >
//                     <span className="text-[18px] font-medium text-[#EDEDED]">
//                       {date}
//                     </span>

//                     <svg
//                       width="22"
//                       height="22"
//                       fill="none"
//                       stroke="#DADADA"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <rect x="3" y="4" width="18" height="18" rx="2" />
//                       <path d="M16 2v4M8 2v4M3 10h18" />
//                     </svg>
//                   </div>
//                 ))}

//                 <span className="text-[26px] text-[#7A7A7A]">→</span>
//               </div>
//             </div>

//             {/* ───────────────── CARDS ───────────────── */}
//             <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
//               {/* ───────── CARD 1 ───────── */}
//               <div
//                 className="
//         rounded-[34px]
//         border
//         border-[#3A3A3A]
//         bg-gradient-to-br
//         from-[#2C2C2C]
//         to-[#252525]
//         p-7
//       "
//               >
//                 {/* HEADER */}
//                 <div className="mb-10 flex items-start justify-between">
//                   <div>
//                     <div className="mb-2 flex items-center gap-2">
//                       <span className="text-[14px] uppercase tracking-[0.12em] text-[#8B8B8B]">
//                         Total Orders
//                       </span>
//                     </div>

//                     <h2 className="text-[52px] font-light leading-none tracking-[-0.05em] text-white">
//                       34,800
//                     </h2>

//                     <p className="mt-2 text-[16px] font-medium text-[#A0A0A0]">
//                       Last 30 days
//                     </p>
//                   </div>

//                   <div className="rounded-full bg-[#E5F0D1] px-4 py-2">
//                     <span className="text-[13px] font-bold text-[#4A7C16]">
//                       ↗ +4.1%
//                     </span>
//                   </div>
//                 </div>

//                 {/* CENTER */}
//                 <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
//                   {/* DONUT */}
//                   <div className="relative flex items-center justify-center">
//                     <div
//                       className="
//               flex
//               h-[150px]
//               w-[150px]
//               items-center
//               justify-center
//               rounded-full
//               border-[16px]
//               border-[#404040]
//               border-t-[#A9C9F2]
//               border-r-[#1E63B5]
//               rotate-[35deg]
//             "
//                     >
//                       <div className="-rotate-[35deg] text-center">
//                         <p className="text-[15px] text-[#BDBDBD]">processed</p>

//                         <h3 className="text-[22px] font-bold leading-none">
//                           34.8k
//                         </h3>
//                       </div>
//                     </div>
//                   </div>

//                   {/* LEGEND */}
//                   <div className="space-y-5">
//                     <div className="flex items-center justify-between gap-20">
//                       <div className="flex items-center gap-3">
//                         <div className="h-4 w-4 rounded-full bg-[#1E63B5]" />

//                         <span className="text-[16px] font-medium text-[#D9D9D9]">
//                           Completed
//                         </span>
//                       </div>

//                       <span className="text-[16px] font-semibold text-white">
//                         58%
//                       </span>
//                     </div>

//                     <div className="flex items-center justify-between gap-20">
//                       <div className="flex items-center gap-3">
//                         <div className="h-4 w-4 rounded-full bg-[#A9C9F2]" />

//                         <span className="text-[16px] font-medium text-[#D9D9D9]">
//                           Pending
//                         </span>
//                       </div>

//                       <span className="text-[16px] font-semibold text-white">
//                         42%
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* BOTTOM */}
//                 <div className="mt-12 grid grid-cols-3 border-t border-[#3D3D3D] pt-7">
//                   {[
//                     ["20,184", "Completed"],
//                     ["14,616", "Pending"],
//                     ["1,160", "Avg/day"],
//                   ].map(([value, label], i) => (
//                     <div
//                       key={i}
//                       className="border-r border-[#3D3D3D] last:border-none"
//                     >
//                       <h3 className="text-center text-[30px] font-light tracking-[-0.05em]">
//                         {value}
//                       </h3>

//                       <p className="text-center text-[13px] uppercase text-[#8A8A8A]">
//                         {label}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* ───────── CARD 2 ───────── */}
//               <div
//                 className="
//         rounded-[34px]
//         border
//         border-[#3A3A3A]
//         bg-gradient-to-br
//         from-[#2C2C2C]
//         to-[#252525]
//         p-7
//       "
//               >
//                 {/* HEADER */}
//                 <div className="mb-10 flex items-start justify-between">
//                   <div>
//                     <div className="mb-2 flex items-center gap-2">
//                       <span className="text-[14px] uppercase tracking-[0.12em] text-[#8B8B8B]">
//                         New Customers
//                       </span>
//                     </div>

//                     <h2 className="text-[52px] font-light leading-none tracking-[-0.06em]">
//                       740
//                     </h2>

//                     <p className="mt-2 text-[16px] text-[#A0A0A0]">
//                       Last 30 days
//                     </p>
//                   </div>

//                   <div className="rounded-full bg-[#E5F0D1] px-4 py-2">
//                     <span className="text-[14px] font-bold text-[#4A7C16]">
//                       ↗ +31.0%
//                     </span>
//                   </div>
//                 </div>

//                 {/* BUBBLES */}
//                 <div className="flex items-end justify-between gap-3">
//                   {[40, 46, 58, 45, 88, 62, 46, 32, 38].map((s, i) => (
//                     <div
//                       key={i}
//                       className={`
//               rounded-full
//               ${i === 4 ? "bg-[#3D7307]" : "bg-[#C5E18E]"}
//             `}
//                       style={{
//                         width: `${s}px`,
//                         height: `${s}px`,
//                       }}
//                     />
//                   ))}
//                 </div>

//                 {/* DAYS */}
//                 <div className="mt-5 flex justify-between text-[14px] text-[#9A9A9A]">
//                   {[1, 5, 9, 13, 17, 21, 25, 29, 30].map((d) => (
//                     <span key={d}>{d}</span>
//                   ))}
//                 </div>

//                 {/* BOTTOM */}
//                 <div className="mt-10 grid grid-cols-3 border-t border-[#3D3D3D] pt-7">
//                   {[
//                     ["25", "Avg/day"],
//                     ["89", "Peak day"],
//                     ["94%", "Retention"],
//                   ].map(([value, label], i) => (
//                     <div
//                       key={i}
//                       className="border-r border-[#3D3D3D] last:border-none"
//                     >
//                       <h3 className="text-center text-[30px] font-light tracking-[-0.05em]">
//                         {value}
//                       </h3>

//                       <p className="text-center text-[13px] uppercase text-[#8A8A8A]">
//                         {label}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useRef, useState } from "react";
// import {
//   TrendingDown,
//   TrendingUp,
//   ShoppingBag,
//   Users,
//   BarChart2,
//   Home,
//   Settings,
//   Bell,
//   Menu,
//   X,
//   Calendar,
//   ChevronDown,
//   Filter,
//   Download,
//   Plus,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
// } from "recharts";
// import Sidebar from "../../components/common/Sidebar";
// import Navbar from "../../components/common/Navbar";

// import CustomDateRangePicker from "../../components/calendar";
// import Button from "../../components/ui/Button";
// const data = [
//   {
//     name: "May 14",
//     successful: 18,
//     pending: 3,
//     cancelled: 1,
//   },
//   {
//     name: "May 15",
//     successful: 22,
//     pending: 4,
//     cancelled: 0.8,
//   },
//   {
//     name: "May 16",
//     successful: 19,
//     pending: 2.5,
//     cancelled: 1.2,
//   },
//   {
//     name: "May 17",
//     successful: 24,
//     pending: 3.8,
//     cancelled: 0.6,
//   },
//   {
//     name: "May 18",
//     successful: 21,
//     pending: 2.8,
//     cancelled: 1,
//   },
//   {
//     name: "May 19",
//     successful: 26,
//     pending: 4.5,
//     cancelled: 0.7,
//   },
//   {
//     name: "May 20",
//     successful: 23,
//     pending: 3.5,
//     cancelled: 0.5,
//   },
// ];

// // ─── DATA ───────────────────────────────────────────────────────────────────
// const salesData = [
//   { name: "May 14", successful: 18, pending: 3, cancelled: 1 },
//   { name: "May 15", successful: 22, pending: 4, cancelled: 0.8 },
//   { name: "May 16", successful: 19, pending: 2.5, cancelled: 1.2 },
//   { name: "May 17", successful: 24, pending: 3.8, cancelled: 0.6 },
//   { name: "May 18", successful: 21, pending: 2.8, cancelled: 1 },
//   { name: "May 19", successful: 26, pending: 4.5, cancelled: 0.7 },
//   { name: "May 20", successful: 23, pending: 3.5, cancelled: 0.5 },
// ];

// const dashboardData = [
//   { type: "successful", value: "$156k" },
//   { type: "pending", value: "27" },
//   { type: "cancelled", value: "$7k" },
// ];

// const statusConfig = {
//   successful: {
//     title: "Successful",
//     badge: "↑ +14% Growth",
//     badgeColor: "text-emerald-600",
//     badgeBg: "bg-emerald-50",
//     dot: "bg-[#A995EA]",
//     dotBg: "bg-[#A995EA]/10",
//     cardBg: "from-[#F7F5FF] to-[#F3F1FF]",
//   },
//   pending: {
//     title: "Pending",
//     badge: "Processing",
//     badgeColor: "text-amber-600",
//     badgeBg: "bg-amber-50",
//     dot: "bg-amber-400",
//     dotBg: "bg-amber-400/10",
//     cardBg: "from-[#FFF9EE] to-[#FFF6E7]",
//   },
//   cancelled: {
//     title: "Cancelled",
//     badge: "↓ -6% Loss",
//     badgeColor: "text-red-500",
//     badgeBg: "bg-red-50",
//     dot: "bg-red-400",
//     dotBg: "bg-red-400/10",
//     cardBg: "from-[#FFF4F4] to-[#FFEFEF]",
//   },
// };

// // ─── COMPONENTS ──────────────────────────────────────────────────────────────

// const FloatCard = ({ label, value, change, up, className }) => (
//   <div
//     className={`absolute z-10 min-w-[130px] rounded-2xl border border-[#E6E6EC] bg-white/95 px-4 py-3 shadow-lg ${className}`}
//   >
//     <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#8C8C98]">
//       {label}
//     </p>
//     <p className="mb-1.5 text-xl font-extrabold leading-none text-[#1E1E24]">
//       {value}
//     </p>
//     <span
//       className={`inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-[11px] font-bold ${up ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-400"}`}
//     >
//       {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
//       {change}
//     </span>
//   </div>
// );

// const SemiCircleViz = () => (
//   <div className="relative flex h-[280px] w-full items-end justify-center overflow-visible">
//     <div className="absolute bottom-0 left-1/2 z-[2] h-[200px] w-[380px] -translate-x-1/2 rounded-t-[200px] border-2 border-b-0 border-[rgba(191,177,255,0.5)]">
//       <div className="absolute left-1/2 top-[-5px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#B9A9FF]" />
//       <div className="absolute bottom-[104px] left-[6%] h-2 w-2 rounded-full bg-[#C5B8FF]" />
//       <div className="absolute bottom-[104px] right-[6%] h-2 w-2 rounded-full bg-[#C5B8FF]" />
//     </div>
//     <div className="absolute bottom-0 left-1/2 z-[3] h-[190px] w-[355px] -translate-x-1/2 overflow-hidden rounded-t-[190px] bg-gradient-to-b from-[rgba(139,119,230,0.4)] to-transparent" />
//     <div className="absolute bottom-6 left-1/2 z-[5] -translate-x-1/2 text-center whitespace-nowrap">
//       <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-[#8D8D99]">
//         Total Sales
//       </p>
//       <p className="text-[40px] font-black leading-none tracking-[-0.05em] text-[#19191F]">
//         $46,354<span className="text-[20px]">.00</span>
//       </p>
//     </div>
//     <FloatCard
//       label="Total Orders"
//       value="3,460"
//       change="+8%"
//       up
//       className="left-1/2 top-[-2%] -translate-x-1/2"
//     />
//     <FloatCard
//       label="Total Revenue"
//       value="$120,540"
//       change="+12%"
//       up
//       className="left-[4%] top-[44%] -translate-y-1/2"
//     />
//     <FloatCard
//       label="Conversion Rate"
//       value="3.8%"
//       change="-0.4%"
//       up={false}
//       className="right-[4%] top-[44%] -translate-y-1/2"
//     />
//   </div>
// );

// const DonutChart = () => {
//   const ref = useRef(null);
//   useEffect(() => {
//     const canvas = ref.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     const cx = 65,
//       cy = 65,
//       r = 52,
//       lw = 14,
//       gap = 0.06,
//       tau = Math.PI * 2;
//     const draw = (s, e, c) => {
//       ctx.beginPath();
//       ctx.arc(cx, cy, r, s, e);
//       ctx.strokeStyle = c;
//       ctx.lineWidth = lw;
//       ctx.lineCap = "round";
//       ctx.stroke();
//     };
//     ctx.clearRect(0, 0, 130, 130);
//     draw(-Math.PI / 2, -Math.PI / 2 + tau * 0.58 - gap, "#1E63B5");
//     draw(-Math.PI / 2 + tau * 0.58 + gap, -Math.PI / 2 + tau, "#A9C9F2");
//     ctx.fillStyle = "#fff";
//     ctx.font = "bold 11px sans-serif";
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.fillText("processed", cx, cy - 8);
//     ctx.font = "bold 14px sans-serif";
//     ctx.fillText("34.8k", cx, cy + 9);
//   }, []);
//   return <canvas ref={ref} width={130} height={130} />;
// };

// const BubbleChart = () => {
//   const sizes = [40, 46, 58, 45, 88, 62, 46, 32, 38];
//   const days = [1, 5, 9, 13, 17, 21, 25, 29, 30];
//   const max = Math.max(...sizes);
//   return (
//     <div>
//       <div className="flex items-end justify-between gap-2 mb-4">
//         {sizes.map((s, i) => (
//           <div
//             key={i}
//             className={`rounded-full flex-shrink-0 ${s === max ? "bg-[#3D7307]" : "bg-[#C5E18E]"}`}
//             style={{ width: s, height: s }}
//           />
//         ))}
//       </div>
//       <div className="flex justify-between text-[13px] text-[#9A9A9A]">
//         {days.map((d) => (
//           <span key={d}>{d}</span>
//         ))}
//       </div>
//     </div>
//   );
// };

// // ─── SIDEBAR ─────────────────────────────────────────────────────────────────

// const navItems = [
//   { icon: Home, label: "Dashboard" },
//   { icon: ShoppingBag, label: "Orders" },
//   { icon: Users, label: "Customers" },
//   { icon: BarChart2, label: "Analytics" },
//   { icon: Settings, label: "Settings" },
// ];

// // ─── NAVBAR ──────────────────────────────────────────────────────────────────

// // ─── CUSTOM TOOLTIP ───────────────────────────────────────────────────────────

// const CustomTooltip = ({ active, payload, label }) => {
//   if (!active || !payload?.length) return null;
//   return (
//     <div className="rounded-2xl border border-[#ECECF2] bg-white p-3 text-[12px] shadow-lg">
//       <p className="mb-2 font-bold text-[#111827]">{label}</p>
//       {payload.map((p) => (
//         <div key={p.dataKey} className="flex items-center gap-2 mb-1">
//           <span
//             className="w-2 h-2 rounded-full"
//             style={{ background: p.fill }}
//           />
//           <span className="text-[#8B8FA3] capitalize">{p.dataKey}:</span>
//           <span className="font-semibold text-[#111827]">${p.value}k</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// // ─── MAIN DASHBOARD ──────────────────────────────────────────────────────────

// const rankStyle = (i) =>
//   [
//     "bg-[#FFF0C2] text-[#9A6600]",
//     "bg-[#EDEDF4] text-[#5B5B72]",
//     "bg-[#FDEEDE] text-[#8A4A12]",
//   ][i] ?? "bg-[#F5F5F8] text-[#8B8FA3]";

// const statusBadge = (s) =>
//   ({
//     "In Stock": "bg-emerald-50 text-emerald-700",
//     "Low Stock": "bg-amber-50 text-amber-700",
//     "Out of Stock": "bg-red-50 text-red-500",
//   })[s];

// const products = [
//   {
//     name: "AirWave Pro Headphones",
//     sku: "SKU #AW-4821",
//     emoji: "🎧",
//     thumbBg: "bg-[#EEF1FF]",
//     units: 3842,
//     revenue: "$192,100",
//     avgPrice: "$50.00",
//     status: "In Stock",
//     trend: 18.4,
//     stock: 82,
//   },
//   {
//     name: "NovaBand Smart Watch",
//     sku: "SKU #NB-2210",
//     emoji: "⌚",
//     thumbBg: "bg-[#FFF4E5]",
//     units: 2561,
//     revenue: "$307,320",
//     avgPrice: "$120.00",
//     status: "In Stock",
//     trend: 11.2,
//     stock: 61,
//   },
//   {
//     name: "UrbanStep Sneakers",
//     sku: "SKU #US-8803",
//     emoji: "👟",
//     thumbBg: "bg-[#EEFAEA]",
//     units: 2204,
//     revenue: "$154,280",
//     avgPrice: "$70.00",
//     status: "Low Stock",
//     trend: 7.6,
//     stock: 28,
//   },
//   {
//     name: "LightDesk Laptop Stand",
//     sku: "SKU #LD-5590",
//     emoji: "💻",
//     thumbBg: "bg-[#F0EEFF]",
//     units: 1987,
//     revenue: "$89,415",
//     avgPrice: "$45.00",
//     status: "In Stock",
//     trend: -2.1,
//     stock: 74,
//   },
//   {
//     name: "TrailBlaze Backpack",
//     sku: "SKU #TB-1147",
//     emoji: "🎒",
//     thumbBg: "bg-[#FFF0F0]",
//     units: 1654,
//     revenue: "$82,700",
//     avgPrice: "$50.00",
//     status: "Out of Stock",
//     trend: -5.8,
//     stock: 0,
//   },
//   {
//     name: "SolShade Sunglasses",
//     sku: "SKU #SS-3391",
//     emoji: "🕶️",
//     thumbBg: "bg-[#E8FAFF]",
//     units: 1403,
//     revenue: "$56,120",
//     avgPrice: "$40.00",
//     status: "In Stock",
//     trend: 4.3,
//     stock: 55,
//   },
// ];

// export default function ShoplytixDashboard() {
//   const [activeNav, setActiveNav] = useState(0);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeFilter, setActiveFilter] = useState("Last 7 days");
//   const [activePeriod, setActivePeriod] = useState("30 days");
//   const [period, setPeriod] = useState("Monthly");

//   const [activeTab, setActiveTab] = useState("All Products");
//   const [page, setPage] = useState(1);
//   const filters = ["Last 7 days", "Weekly", "Monthly"];
//   const periods = ["7 days", "14 days", "30 days", "90 days"];

//   const [active, setActive] = useState("Last 7 days");
//   const [range, setRange] = useState({
//     from: new Date(),
//     to: new Date(),
//   });
//   const [open, setOpen] = useState(false);

//   const pickerRef = useRef(null);
//   // const filters = ["Last 7 days", "Weekly", "Monthly"];

//   return (
//     <div className="flex h-screen overflow-hidden bg-[#F4F4F7] text-[#1E1E24]">
//       <Sidebar
//         activeNav={activeNav}
//         setActiveNav={setActiveNav}
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//       />
//       <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
//         <Navbar setSidebarOpen={setSidebarOpen} />

//         <main className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-24 sm:px-6 lg:px-8">
//           {/* ── HERO ─────────────────────────────────── */}
//           <div className="grid grid-cols-1 gap-4 py-6 lg:grid-cols-[1fr_1.5fr]">
//             <div className="flex flex-col justify-center">
//               <h2 className="mb-3 text-[clamp(22px,3vw,30px)] font-black leading-[1.1] tracking-[-0.03em] text-[#19191F]">
//                 E-commerce
//                 <br />
//                 Growth Insights
//               </h2>
//               <p className="mb-6 max-w-[300px] text-[12px] font-medium leading-relaxed text-[#8C8C98]">
//                 Track and analyze your online store's performance with
//                 AI-powered metrics.
//               </p>
//               <div className="flex flex-wrap gap-3">
//                 {[
//                   ["$1.58M", "Revenue"],
//                   ["13.7K", "Orders"],
//                   ["8.4K", "Customers"],
//                 ].map(([v, l]) => (
//                   <div
//                     key={l}
//                     className="min-w-[105px] rounded-2xl border border-white bg-white/80 px-4 py-3 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
//                   >
//                     <p className="text-[17px] font-black tracking-[-0.03em] text-[#19191F]">
//                       {v}
//                     </p>
//                     <div className="mt-1 flex items-center justify-center gap-1.5">
//                       <div className="h-1.5 w-1.5 rounded-full bg-[#C5B8FF]" />
//                       <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8C8C98]">
//                         {l}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="relative">
//               <SemiCircleViz />
//             </div>
//           </div>

//           {/* ── SALES OVERVIEW PANEL ─────────────────── */}
//           <div className="w-full rounded-[28px] border border-[#ECECF2] bg-white/95 p-5 sm:p-6 lg:p-7">
//             {/* Top */}
//             <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
//               <div>
//                 <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9AA0B4]">
//                   Analytics Report
//                 </p>
//                 <h2 className="text-[clamp(20px,3vw,26px)] font-black tracking-[-0.04em] text-[#111827]">
//                   Sales Overview
//                 </h2>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="flex flex-wrap items-center gap-3">
//                   {filters.map((item) => (
//                     <Button
//                       key={item}
//                       onClick={() => setActive(item)}
//                       size="sm"
//                       rounded="full"
//                       className={`
//         px-5
//         text-[12px]
//         font-semibold
//         border
//          transition-all
//         duration-300
//         ${
//           active === item
//             ? `
//                 bg-black
//               text-white
//               border-black
//               shadow-lg shadow-black/10
//             `
//             : `

//                bg-[#F5F5F8]
//               text-black
//               border-[#E6E7EE]
//               hover:bg-black
//               hover:text-white
//               hover:border-black
//             `
//         }
//       `}
//                     >
//                       {item}
//                     </Button>
//                   ))}
//                 </div>
//                 {/* DATE RANGE COMPONENT */}
//                 <CustomDateRangePicker />
//               </div>
//             </div>

//             {/* Stat Cards */}
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
//               {dashboardData.map((item, i) => {
//                 const c = statusConfig[item.type];
//                 return (
//                   <div
//                     key={i}
//                     className={`rounded-[20px] border border-white bg-gradient-to-br ${c.cardBg} p-4 h-[130px] flex flex-col justify-between`}
//                   >
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#8B8FA3]">
//                           {c.title}
//                         </p>
//                         <h3 className="text-[24px] font-black tracking-[-0.04em] text-[#111827]">
//                           {item.value}
//                         </h3>
//                       </div>
//                       <div className={`rounded-lg p-1.5 ${c.dotBg}`}>
//                         <div className={`h-2.5 w-2.5 rounded-full ${c.dot}`} />
//                       </div>
//                     </div>
//                     <span
//                       className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold ${c.badgeBg} ${c.badgeColor}`}
//                     >
//                       {c.badge}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Legend */}
//             <div className="flex flex-wrap items-center gap-5 mb-6">
//               {[
//                 ["#A995EA", "Successful"],
//                 ["#F59E0B", "Pending"],
//                 ["#EF4444", "Cancelled"],
//               ].map(([color, label]) => (
//                 <div key={label} className="flex items-center gap-2">
//                   <div
//                     className="h-3 w-3 rounded-full"
//                     style={{ background: color }}
//                   />
//                   <span className="text-[13px] font-medium text-[#70758A]">
//                     {label}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Chart */}
//             <div className="h-[300px] w-full rounded-[20px] bg-[#FCFCFD] p-3">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={salesData} barGap={8}>
//                   <CartesianGrid
//                     strokeDasharray="4 6"
//                     vertical={false}
//                     stroke="#ECECF2"
//                   />
//                   <XAxis
//                     dataKey="name"
//                     tickLine={false}
//                     axisLine={false}
//                     tick={{ fill: "#8B8FA3", fontSize: 11, fontWeight: 500 }}
//                   />
//                   <YAxis
//                     tickLine={false}
//                     axisLine={false}
//                     tick={{ fill: "#8B8FA3", fontSize: 11 }}
//                     ticks={[0, 5, 10, 15, 20, 25, 30]}
//                     tickFormatter={(v) => `$${v}k`}
//                   />
//                   <Tooltip
//                     content={<CustomTooltip />}
//                     cursor={{ fill: "rgba(169,149,234,0.06)" }}
//                   />
//                   <Bar
//                     dataKey="successful"
//                     fill="#A995EA"
//                     radius={[10, 10, 10, 10]}
//                     barSize={36}
//                   />
//                   <Bar
//                     dataKey="pending"
//                     fill="#FDE9C7"
//                     stroke="#F59E0B"
//                     strokeWidth={0}
//                     radius={[10, 10, 10, 10]}
//                     barSize={36}
//                   />
//                   <Bar
//                     dataKey="cancelled"
//                     fill="#F8D7D7"
//                     radius={[10, 10, 10, 10]}
//                     barSize={36}
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* ── TOP SELLING PRODUCTS ─────────────────── */}
//           {/* ── TOP SELLING PRODUCTS ─────────────────── */}
//           <div className="w-full rounded-[28px] border border-[#ECECF2] bg-white/95 p-5 sm:p-6 lg:p-7 mt-6">
//             {/* Header */}
//             <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
//               <div>
//                 <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9AA0B4]">
//                   Product Performance
//                 </p>
//                 <h2 className="text-[clamp(20px,3vw,26px)] font-black tracking-[-0.04em] text-[#111827]">
//                   Top Selling Products
//                 </h2>
//               </div>
//               <div className="flex items-center gap-3">
//                 {/* <Button
//                   variant="outline"
//                   size="sm"
//                   rounded="full"

//                   leftIcon={<Filter size={13} />}
//                 >
//                   Filter
//                 </Button> */}
//                 <Button
//                   leftIcon={<Filter size={13} />}
//                       size="sm"
//                       rounded="full"
//                       className={`
//                bg-[#F5F5F8]
//               text-black
//               border-[#E6E7EE]
//               hover:bg-black
//               hover:text-white
//               hover:border-black
//         px-5
//         text-[12px]
//         font-semibold
//         border
//          transition-all
//         duration-300

//       `}
//                     >
//                      Filter
//                     </Button>

//                 <Button
//                   variant="outline"
//                   size="sm"
//                   rounded="full"
//                   className={`bg-[#F5F5F8]
//               text-black
//               border-[#E6E7EE]
//               hover:bg-black
//               hover:text-white
//               hover:border-black
//         px-5
//         text-[12px]
//         font-semibold
//         border
//          transition-all
//         duration-300`}
//                   leftIcon={<Download size={13} />
//                 }
//                 >
//                   Export
//                 </Button>

//               </div>
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="border-b border-[#ECECF2]">
//                     {[
//                       "#",
//                       "Product",
//                       "Units Sold",
//                       "Revenue",
//                       "Avg. Price",
//                       "Status",
//                       "7-Day Trend",
//                       "Stock Level",
//                     ].map((h, i) => (
//                       <th
//                         key={h}
//                         className={`py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-[#9AA0B4] ${
//                           i >= 2 ? "text-right" : "text-left"
//                         } ${i === 5 ? "text-center" : ""}`}
//                       >
//                         {h}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products.map((product, i) => (
//                     <tr
//                       key={product.sku}
//                       className="border-b border-[#ECECF2] last:border-none hover:bg-[#FAFAFC] cursor-pointer transition-colors"
//                     >
//                       {/* Rank */}
//                       <td className="py-4 px-4">
//                         <span
//                           className={`inline-flex h-6 w-6 items-center justify-center rounded-[8px] text-[11px] font-bold ${rankStyle(i)}`}
//                         >
//                           {i + 1}
//                         </span>
//                       </td>

//                       {/* Product */}
//                       <td className="py-4 px-4">
//                         <div className="flex items-center gap-3">
//                           <div
//                             className={`h-10 w-10 rounded-[12px] flex items-center justify-center text-[18px] flex-shrink-0 ${product.thumbBg}`}
//                           >
//                             {product.emoji}
//                           </div>
//                           <div>
//                             <p className="text-[13px] font-semibold text-[#111827]">
//                               {product.name}
//                             </p>
//                             <p className="text-[11px] font-mono text-[#9AA0B4]">
//                               {product.sku}
//                             </p>
//                           </div>
//                         </div>
//                       </td>

//                       {/* Units */}
//                       <td className="py-4 px-4 text-right text-[13px] font-semibold text-[#111827]">
//                         {product.units.toLocaleString()}
//                       </td>

//                       {/* Revenue */}
//                       <td className="py-4 px-4 text-right text-[13px] font-bold text-[#111827]">
//                         {product.revenue}
//                       </td>

//                       {/* Avg Price */}
//                       <td className="py-4 px-4 text-right text-[13px] text-[#8B8FA3]">
//                         {product.avgPrice}
//                       </td>

//                       {/* Status */}
//                       <td className="py-4 px-4 text-center">
//                         <span
//                           className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${statusBadge(product.status)}`}
//                         >
//                           {product.status}
//                         </span>
//                       </td>

//                       {/* Trend */}
//                       <td className="py-4 px-4 text-right">
//                         <span
//                           className={`text-[12px] font-semibold flex items-center justify-end gap-1 ${product.trend > 0 ? "text-emerald-600" : "text-red-500"}`}
//                         >
//                           {product.trend > 0 ? (
//                             <TrendingUp size={12} />
//                           ) : (
//                             <TrendingDown size={12} />
//                           )}
//                           {product.trend > 0 ? "+" : ""}
//                           {product.trend}%
//                         </span>
//                       </td>

//                       {/* Stock Level */}
//                       <td className="py-4 px-4">
//                         <div className="flex items-center justify-end gap-2">
//                           <span className="text-[11px] text-[#8B8FA3]">
//                             {product.stock}%
//                           </span>
//                           <div className="h-[5px] w-[72px] rounded-full bg-[#F0F0F5] overflow-hidden">
//                             <div
//                               className="h-full rounded-full transition-all"
//                               style={{
//                                 width: `${product.stock}%`,
//                                 background:
//                                   product.stock > 50
//                                     ? "#A995EA"
//                                     : product.stock > 15
//                                       ? "#F59E0B"
//                                       : "#EF4444",
//                               }}
//                             />
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Footer / Pagination */}
//             <div className="mt-5 flex items-center justify-between">
//               <p className="text-[12px] text-[#9AA0B4]">
//                 Showing <span className="font-semibold text-[#111827]">6</span>{" "}
//                 of <span className="font-semibold text-[#111827]">48</span>{" "}
//                 products
//               </p>

//               <div className="flex items-center gap-1.5">
//                 <Button

//                   size="sm"
//                   rounded="full"
//                   className={`bg-black text-white border-[#111827] h-8 w-8 p-0`}
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                 >
//                   <ChevronLeft size={13}/>
//                 </Button>

//                 {[1, 2, 3, "...", 8].map((p, i) => (
//                   <Button
//                     key={i}
//                     size="sm"
//                     rounded="full"
//                     onClick={() => typeof p === "number" && setPage(p)}
//                     className={`
//             h-8 w-8 p-0 text-[12px]
//             border transition-all duration-300
//             ${
//               page === p
//                 ? "bg-black text-white border-[#111827]"
//                 : "bg-[#F5F5F8] text-black border-[#E6E7EE] hover:bg-black hover:text-white"
//             }
//           `}
//                   >
//                     {p}
//                   </Button>
//                 ))}

//                 <Button
//                   variant="outline"
//                   size="sm"
//                   rounded="full"
//                   className="h-8 w-8 p-0 text-[#8B8FA3]"
//                   onClick={() => setPage((p) => Math.min(8, p + 1))}
//                 >
//                   <ChevronRight size={13} />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

import { useEffect, useMemo, useRef, useState } from "react";
import {
  TrendingDown,
  TrendingUp,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
  Search,
  MoreHorizontal,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import Sidebar from "../../components/common/Sidebar";
import Navbar from "../../components/common/Navbar";
import CustomDateRangePicker from "../../components/calendar";
import Button from "../../components/ui/Button";
import Pagination from "../../components/pagination";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const PRODUCTS_PER_PAGE = 6;
const ORDERS_PER_PAGE = 5;

const HERO_STATS = [
  { value: "$1.58M", label: "Revenue" },
  { value: "13.7K", label: "Orders" },
  { value: "8.4K", label: "Customers" },
];

const SEMI_CIRCLE = {
  totalSales: "$46,354.00",
  floatCards: [
    {
      label: "Total Orders",
      value: "3,460",
      change: "+8%",
      up: true,
      position: "top",
    },
    {
      label: "Total Revenue",
      value: "$120,540",
      change: "+12%",
      up: true,
      position: "left",
    },
    {
      label: "Conversion Rate",
      value: "3.8%",
      change: "-0.4%",
      up: false,
      position: "right",
    },
  ],
};

const SALES_CHART = [
  { name: "May 14", successful: 18, pending: 3, cancelled: 1 },
  { name: "May 15", successful: 22, pending: 4, cancelled: 0.8 },
  { name: "May 16", successful: 19, pending: 2.5, cancelled: 1.2 },
  { name: "May 17", successful: 24, pending: 3.8, cancelled: 0.6 },
  { name: "May 18", successful: 21, pending: 2.8, cancelled: 1 },
  { name: "May 19", successful: 26, pending: 4.5, cancelled: 0.7 },
  { name: "May 20", successful: 23, pending: 3.5, cancelled: 0.5 },
];

const STAT_CARDS = [
  { type: "successful", value: "$156k" },
  { type: "pending", value: "27" },
  { type: "cancelled", value: "$7k" },
];

const STATUS_CONFIG = {
  successful: {
    title: "Successful",
    badge: "↑ +14% Growth",
    badgeColor: "text-emerald-600",
    badgeBg: "bg-emerald-50",
    dot: "bg-[#A995EA]",
    dotBg: "bg-[#A995EA]/10",
    cardBg: "from-[#F7F5FF] to-[#F3F1FF]",
  },
  pending: {
    title: "Pending",
    badge: "Processing",
    badgeColor: "text-amber-600",
    badgeBg: "bg-amber-50",
    dot: "bg-amber-400",
    dotBg: "bg-amber-400/10",
    cardBg: "from-[#FFF9EE] to-[#FFF6E7]",
  },
  cancelled: {
    title: "Cancelled",
    badge: "↓ -6% Loss",
    badgeColor: "text-red-500",
    badgeBg: "bg-red-50",
    dot: "bg-red-400",
    dotBg: "bg-red-400/10",
    cardBg: "from-[#FFF4F4] to-[#FFEFEF]",
  },
};

const PRODUCTS = [
  {
    name: "AirWave Pro Headphones",
    sku: "SKU #AW-4821",
    emoji: "🎧",
    thumbBg: "bg-[#EEF1FF]",
    units: 3842,
    revenue: "$192,100",
    avgPrice: "$50.00",
    status: "In Stock",
    trend: 18.4,
    stock: 82,
    category: "Electronics",
  },
  {
    name: "NovaBand Smart Watch",
    sku: "SKU #NB-2210",
    emoji: "⌚",
    thumbBg: "bg-[#FFF4E5]",
    units: 2561,
    revenue: "$307,320",
    avgPrice: "$120.00",
    status: "In Stock",
    trend: 11.2,
    stock: 61,
    category: "Electronics",
  },
  {
    name: "UrbanStep Sneakers",
    sku: "SKU #US-8803",
    emoji: "👟",
    thumbBg: "bg-[#EEFAEA]",
    units: 2204,
    revenue: "$154,280",
    avgPrice: "$70.00",
    status: "Low Stock",
    trend: 7.6,
    stock: 28,
    category: "Apparel",
  },
  {
    name: "LightDesk Laptop Stand",
    sku: "SKU #LD-5590",
    emoji: "💻",
    thumbBg: "bg-[#F0EEFF]",
    units: 1987,
    revenue: "$89,415",
    avgPrice: "$45.00",
    status: "In Stock",
    trend: -2.1,
    stock: 74,
    category: "Home & Garden",
  },
  {
    name: "TrailBlaze Backpack",
    sku: "SKU #TB-1147",
    emoji: "🎒",
    thumbBg: "bg-[#FFF0F0]",
    units: 1654,
    revenue: "$82,700",
    avgPrice: "$50.00",
    status: "Out of Stock",
    trend: -5.8,
    stock: 0,
    category: "Apparel",
  },
  {
    name: "SolShade Sunglasses",
    sku: "SKU #SS-3391",
    emoji: "🕶️",
    thumbBg: "bg-[#E8FAFF]",
    units: 1403,
    revenue: "$56,120",
    avgPrice: "$40.00",
    status: "In Stock",
    trend: 4.3,
    stock: 55,
    category: "Apparel",
  },
  {
    name: "ZenBloom Diffuser",
    sku: "SKU #ZB-7721",
    emoji: "🕯️",
    thumbBg: "bg-[#FFF8F0]",
    units: 1289,
    revenue: "$38,670",
    avgPrice: "$30.00",
    status: "In Stock",
    trend: 6.1,
    stock: 90,
    category: "Home & Garden",
  },
  {
    name: "PulseX Fitness Band",
    sku: "SKU #PX-0044",
    emoji: "💪",
    thumbBg: "bg-[#EDFFF4]",
    units: 1102,
    revenue: "$55,100",
    avgPrice: "$50.00",
    status: "Low Stock",
    trend: 3.7,
    stock: 18,
    category: "Electronics",
  },
  {
    name: "Canvas City Tote",
    sku: "SKU #CC-5512",
    emoji: "👜",
    thumbBg: "bg-[#FDEEFF]",
    units: 987,
    revenue: "$29,610",
    avgPrice: "$30.00",
    status: "In Stock",
    trend: 1.9,
    stock: 67,
    category: "Apparel",
  },
  {
    name: "AeroDesk Fan Pro",
    sku: "SKU #AF-3309",
    emoji: "🌀",
    thumbBg: "bg-[#F0F8FF]",
    units: 876,
    revenue: "$52,560",
    avgPrice: "$60.00",
    status: "Out of Stock",
    trend: -3.2,
    stock: 0,
    category: "Home & Garden",
  },
  {
    name: "HyperCharge Dock",
    sku: "SKU #HC-9981",
    emoji: "🔌",
    thumbBg: "bg-[#FFFAE8]",
    units: 754,
    revenue: "$37,700",
    avgPrice: "$50.00",
    status: "In Stock",
    trend: 8.4,
    stock: 45,
    category: "Electronics",
  },
  {
    name: "GreenLeaf Planter",
    sku: "SKU #GL-2247",
    emoji: "🪴",
    thumbBg: "bg-[#F0FFF4]",
    units: 631,
    revenue: "$12,620",
    avgPrice: "$20.00",
    status: "In Stock",
    trend: 12.0,
    stock: 95,
    category: "Home & Garden",
  },
];

const RECENT_ORDERS = [
  {
    id: "#ORD-1021",
    customer: "Ethan Carter",
    product: "AirPods Pro Max",
    date: "22 May 2026",
    amount: "$499",
    status: "Completed",
    avatar: "EC",
  },
  {
    id: "#ORD-1022",
    customer: "Sophia Lee",
    product: "Gaming Console X",
    date: "21 May 2026",
    amount: "$799",
    status: "Pending",
    avatar: "SL",
  },
  {
    id: "#ORD-1023",
    customer: "James Smith",
    product: "MacBook Air M3",
    date: "20 May 2026",
    amount: "$1499",
    status: "Completed",
    avatar: "JS",
  },
  {
    id: "#ORD-1024",
    customer: "Olivia Brown",
    product: "Smart Watch Ultra",
    date: "20 May 2026",
    amount: "$299",
    status: "Cancelled",
    avatar: "OB",
  },
  {
    id: "#ORD-1025",
    customer: "William Roy",
    product: "Nike Air Jordan",
    date: "19 May 2026",
    amount: "$249",
    status: "Processing",
    avatar: "WR",
  },
  {
    id: "#ORD-1026",
    customer: "Ava Martinez",
    product: "Yoga Mat Premium",
    date: "19 May 2026",
    amount: "$89",
    status: "Completed",
    avatar: "AM",
  },
  {
    id: "#ORD-1027",
    customer: "Noah Wilson",
    product: "Mechanical Keyboard",
    date: "18 May 2026",
    amount: "$179",
    status: "Processing",
    avatar: "NW",
  },
  {
    id: "#ORD-1028",
    customer: "Isabella Clark",
    product: "LED Desk Lamp",
    date: "18 May 2026",
    amount: "$59",
    status: "Pending",
    avatar: "IC",
  },
  {
    id: "#ORD-1029",
    customer: "Liam Johnson",
    product: "Noise Cancelling Buds",
    date: "17 May 2026",
    amount: "$229",
    status: "Completed",
    avatar: "LJ",
  },
  {
    id: "#ORD-1030",
    customer: "Emma Davis",
    product: "Running Shoes Z10",
    date: "17 May 2026",
    amount: "$139",
    status: "Cancelled",
    avatar: "ED",
  },
];

const PRODUCT_TABS = [
  "All Products",
  "Electronics",
  "Apparel",
  "Home & Garden",
];
const CHART_FILTERS = ["Last 7 days", "Weekly", "Monthly"];

// ─── STYLE HELPERS ────────────────────────────────────────────────────────────
const ghost =
  "bg-white text-[#111827] border border-[#E6E7EE] hover:bg-[#111827] hover:text-white hover:border-[#111827] text-[12px] font-semibold transition-all duration-300 cursor-pointer";
const ghostActive =
  "bg-black text-white border border-[#111827] text-[12px] font-semibold transition-all duration-300 cursor-pointer";

const rankStyle = (i) =>
  [
    "bg-[#FFF0C2] text-[#9A6600]",
    "bg-[#EDEDF4] text-[#5B5B72]",
    "bg-[#FDEEDE] text-[#8A4A12]",
  ][i] ?? "bg-[#F5F5F8] text-[#8B8FA3]";

const statusBadgeClass = (s) =>
  ({
    "In Stock": "bg-emerald-50 text-emerald-700",
    "Low Stock": "bg-amber-50 text-amber-700",
    "Out of Stock": "bg-red-50 text-red-500",
  })[s] ?? "";

const orderStatusClass = (s) =>
  ({
    Completed: "bg-emerald-100 text-emerald-600",
    Pending: "bg-orange-100 text-orange-600",
    Cancelled: "bg-red-100 text-red-600",
    Processing: "bg-blue-100 text-blue-600",
  })[s] ?? "";

// ─── FLOAT CARD ───────────────────────────────────────────────────────────────
const FloatCard = ({ label, value, change, up, className }) => (
  <div
    className={`absolute z-10 min-w-[130px] rounded-2xl border border-[#E6E6EC] bg-white/95 px-4 py-3 shadow-lg ${className}`}
  >
    <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#8C8C98]">
      {label}
    </p>
    <p className="mb-1.5 text-xl font-extrabold leading-none text-[#1E1E24]">
      {value}
    </p>
    <span
      className={`inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-[11px] font-bold ${up ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-400"}`}
    >
      {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
      {change}
    </span>
  </div>
);

// ─── SEMI-CIRCLE VIZ ─────────────────────────────────────────────────────────
const posClass = {
  top: "left-1/2 top-[-10%] -translate-x-1/2",
  left: "left-[4%] top-[44%] -translate-y-1/2",
  right: "right-[4%] top-[44%] -translate-y-1/2",
};

const SemiCircleViz = () => (
  <div className="relative flex h-[280px] w-full items-end justify-center overflow-visible">
    <div className="absolute bottom-0 left-1/2 z-[2] h-[200px] w-[380px] -translate-x-1/2 rounded-t-[200px] border-2 border-b-0 border-[rgba(191,177,255,0.5)]">
      <div className="absolute left-1/2 top-[-5px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#B9A9FF]" />
      <div className="absolute bottom-[104px] left-[6%] h-2 w-2 rounded-full bg-[#C5B8FF]" />
      <div className="absolute bottom-[104px] right-[6%] h-2 w-2 rounded-full bg-[#C5B8FF]" />
    </div>
    <div className="absolute bottom-0 left-1/2 z-[3] h-[190px] w-[355px] -translate-x-1/2 overflow-hidden rounded-t-[190px] bg-gradient-to-b from-[rgba(139,119,230,0.4)] to-transparent" />
    <div className="absolute bottom-6 left-1/2 z-[5] -translate-x-1/2 whitespace-nowrap text-center">
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-[#8D8D99]">
        Total Sales
      </p>
      <p className="text-[40px] font-black leading-none tracking-[-0.05em] text-[#19191F]">
        $46,354<span className="text-[20px]">.00</span>
      </p>
    </div>
    {SEMI_CIRCLE.floatCards.map((c) => (
      <FloatCard key={c.label} {...c} className={posClass[c.position]} />
    ))}
  </div>
);

// ─── CUSTOM TOOLTIP ───────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-2xl border border-[#ECECF2] bg-white p-3 text-[12px] shadow-lg">
      <p className="mb-2 font-bold text-[#111827]">{label}</p>
      {payload.map((p) => (
        <div key={p.dataKey} className="mb-1 flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: p.fill }}
          />
          <span className="capitalize text-[#8B8FA3]">{p.dataKey}:</span>
          <span className="font-semibold text-[#111827]">${p.value}k</span>
        </div>
      ))}
    </div>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// MAIN DASHBOARD
// ═════════════════════════════════════════════════════════════════════════════
const Dashboard = () => {
  const [activeNav, setActiveNav] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("Last 7 days");
  // const [activeTab, setActiveTab] = useState("All Products");
  // const [page, setPage] = useState(1);

  // const filters = ["Last 7 days", "Weekly", "Monthly"];
  // const productTabs = [
  //   "All Products",
  //   "Electronics",
  //   "Apparel",
  //   "Home & Garden",
  // ];
  // const totalPages = 8;

  const [activeFilter, setActiveFilter] = useState("Last 7 days");
  const [activeTab, setActiveTab] = useState("All Products");
  const [productPage, setProductPage] = useState(1);
  const [orderPage, setOrderPage] = useState(1);
  const [orderSearch, setOrderSearch] = useState("");

  // ── filtered products
  const filteredProducts = useMemo(
    () =>
      activeTab === "All Products"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === activeTab),
    [activeTab],
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setProductPage(1);
  };

  const totalProductPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE),
  );
  const pagedProducts = filteredProducts.slice(
    (productPage - 1) * PRODUCTS_PER_PAGE,
    productPage * PRODUCTS_PER_PAGE,
  );

  // ── filtered orders
  const filteredOrders = useMemo(() => {
    const q = orderSearch.toLowerCase().trim();
    if (!q) return RECENT_ORDERS;
    return RECENT_ORDERS.filter(
      (o) =>
        o.id.toLowerCase().includes(q) ||
        o.customer.toLowerCase().includes(q) ||
        o.product.toLowerCase().includes(q) ||
        o.status.toLowerCase().includes(q),
    );
  }, [orderSearch]);

  const handleOrderSearch = (val) => {
    setOrderSearch(val);
    setOrderPage(1);
  };

  const totalOrderPages = Math.max(
    1,
    Math.ceil(filteredOrders.length / ORDERS_PER_PAGE),
  );
  const pagedOrders = filteredOrders.slice(
    (orderPage - 1) * ORDERS_PER_PAGE,
    orderPage * ORDERS_PER_PAGE,
  );

  return (
    <div className="flex h-screen overflow-hidden bg-[#F4F4F7] text-[#1E1E24]">
      {/* ── SIDEBAR ── */}
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        {/* ── NAVBAR ── */}
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-24 sm:px-6 lg:px-8">
          {/* ════════════════════════════════════════
              HERO — headline + quick stats + viz
          ════════════════════════════════════════ */}
          <div className="grid grid-cols-1 gap-4 py-4 lg:grid-cols-[1fr_1.5fr]">
            <div className="flex flex-col justify-center">
              <h2 className="mb-3 text-[clamp(22px,3vw,30px)] font-black leading-[1.1] tracking-[-0.03em] text-[#19191F]">
                E-commerce
                <br />
                Growth Insights
              </h2>
              <p className="mb-6 max-w-[300px] text-[12px] font-medium leading-relaxed text-[#8C8C98]">
                Track and analyze your online store's performance with
                AI-powered metrics.
              </p>
              <div className="flex flex-wrap gap-3">
                {HERO_STATS.map(({ value, label }) => (
                  <div
                    key={label}
                    className="min-w-[105px] rounded-2xl border border-white bg-white/80 px-4 py-3 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <p className="text-[17px] font-black tracking-[-0.03em] text-[#19191F]">
                      {value}
                    </p>
                    <div className="mt-1 flex items-center justify-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#C5B8FF]" />
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8C8C98]">
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <SemiCircleViz />
            </div>
          </div>

          {/* ════════════════════════════════════════
              SALES OVERVIEW
          ════════════════════════════════════════ */}
          <div className="w-full rounded-2xl border border-white bg-white/80 p-5 sm:p-6 lg:p-7 shadow-sm transition-all ">
            {/* Header */}
            <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9AA0B4]">
                  Analytics Report
                </p>
                <h2 className="text-[clamp(20px,3vw,26px)] font-black tracking-[-0.04em] text-[#111827]">
                  Sales Overview
                </h2>
              </div>
              <div className="flex items-center gap-3">
                {/* Time range filter tabs */}
                <div className="flex flex-wrap items-center gap-2">
                  {CHART_FILTERS.map((item) => (
                    <Button
                      key={item}
                      variant="outline"
                      onClick={() => setActiveFilter(item)}
                      size="sm"
                      rounded="full"
                      className={active === item ? ghostActive : ghost}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
                <CustomDateRangePicker />
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
              {STAT_CARDS.map((item, i) => {
                const c = STATUS_CONFIG[item.type];
                return (
                  <div
                    key={i}
                    className={`rounded-[20px] border border-white bg-gradient-to-br ${c.cardBg} p-4 h-[130px] flex flex-col justify-between`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#8B8FA3]">
                          {c.title}
                        </p>
                        <h3 className="text-[24px] font-black tracking-[-0.04em] text-[#111827]">
                          {item.value}
                        </h3>
                      </div>
                      <div className={`rounded-lg p-1.5 ${c.dotBg}`}>
                        <div className={`h-2.5 w-2.5 rounded-full ${c.dot}`} />
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold ${c.badgeBg} ${c.badgeColor}`}
                    >
                      {c.badge}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-5 mb-6">
              {[
                ["#A995EA", "Successful"],
                ["#F59E0B", "Pending"],
                ["#EF4444", "Cancelled"],
              ].map(([color, label]) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ background: color }}
                  />
                  <span className="text-[13px] font-medium text-[#70758A]">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="h-[300px] w-full rounded-[20px] bg-[#FCFCFD] p-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SALES_CHART} barGap={8}>
                  <CartesianGrid
                    strokeDasharray="4 6"
                    vertical={false}
                    stroke="#ECECF2"
                  />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#8B8FA3", fontSize: 11, fontWeight: 500 }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#8B8FA3", fontSize: 11 }}
                    ticks={[0, 5, 10, 15, 20, 25, 30]}
                    tickFormatter={(v) => `$${v}k`}
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: "rgba(169,149,234,0.06)" }}
                  />
                  <Bar
                    dataKey="successful"
                    fill="#A995EA"
                    radius={[10, 10, 10, 10]}
                    barSize={36}
                  />
                  <Bar
                    dataKey="pending"
                    fill="#FDE9C7"
                    radius={[10, 10, 10, 10]}
                    barSize={36}
                  />
                  <Bar
                    dataKey="cancelled"
                    fill="#F8D7D7"
                    radius={[10, 10, 10, 10]}
                    barSize={36}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ════════════════════════════════════════
              TOP SELLING PRODUCTS
          ════════════════════════════════════════ */}
          <div className="w-full rounded-[28px] border border-[#ECECF2] bg-white/95 p-5 sm:p-6 lg:p-7 mt-6">
            {/* Header */}
            <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9AA0B4]">
                  Product Performance
                </p>
                <h2 className="text-[clamp(20px,3vw,26px)] font-black tracking-[-0.04em] text-[#111827]">
                  Top Selling Products
                </h2>
              </div>

              {/* Action buttons — icon rendered inside label span so it stays visible */}
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  rounded="full"
                  className={ghost}
                  leftIcon={<Filter size={13} />}
                >
                  {/* ✅ Icon inside the content span — never clipped, inherits current color */}
                  <span className="flex items-center gap-1.5">
                    {/* <Filter size={13} /> */}
                    Filter
                  </span>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  rounded="full"
                  className={ghost}
                  leftIcon={<Download size={13} />}
                >
                  <span className="flex items-center gap-1.5">Export</span>
                </Button>
              </div>
            </div>

            {/* Category tabs */}
            <div className="mb-5 flex gap-1 rounded-full bg-[#F5F5F8] p-1 w-fit">
              {PRODUCT_TABS.map((tab) => (
                <Button
                  key={tab}
                  size="sm"
                  rounded="full"
                  variant="outline"
                  onClick={() => handleTabChange(tab)}
                  className={`px-4 text-[11px] ${activeTab === tab ? ghostActive : ghost}`}
                >
                  {tab}
                </Button>
              ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                {/* TABLE HEAD */}

                <thead>
                  <tr className="border-b border-[#ECECF2]">
                    {[
                      "#",
                      "Product",
                      "Units Sold",
                      "Revenue",
                      "Avg. Price",
                      "Status",
                      "7-Day Trend",
                      "Stock Level",
                    ].map((h, i) => (
                      <th
                        key={h}
                        className={`
              py-3 px-4 text-[10px]
              font-bold uppercase tracking-widest
              text-[#9AA0B4]
              ${i >= 2 ? "text-right" : "text-left"}
              ${i === 5 ? "!text-center" : ""}
            `}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* TABLE BODY */}

                <tbody>
                  {/* EMPTY STATE */}

                  {pagedProducts.length === 0 ? (
                    <tr>
                      <td
                        colSpan={8}
                        className="
              py-10 text-center
              text-[13px] text-[#9AA0B4]
            "
                      >
                        No products found in this category.
                      </td>
                    </tr>
                  ) : (
                    pagedProducts.map((product, i) => {
                      // GLOBAL RANK

                      const globalRank = filteredProducts.indexOf(product) + 1;

                      return (
                        <tr
                          key={product.sku}
                          className="
                cursor-pointer border-b
                border-[#ECECF2]
                transition-colors
                hover:bg-[#FAFAFC]
                last:border-none
              "
                        >
                          {/* RANK */}

                          <td className="py-4 px-4">
                            <span
                              className={`
                    inline-flex h-6 w-6
                    items-center justify-center
                    rounded-[8px]
                    text-[11px] font-bold
                    ${rankStyle(globalRank - 1)}
                  `}
                            >
                              {globalRank}
                            </span>
                          </td>

                          {/* PRODUCT */}

                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              {/* IMAGE */}

                              <div
                                className={`
                      flex h-10 w-10
                      flex-shrink-0 items-center
                      justify-center rounded-[12px]
                      text-[18px]
                      ${product.thumbBg}
                    `}
                              >
                                {product.emoji}
                              </div>

                              {/* INFO */}

                              <div>
                                <p
                                  className="
                        text-[13px]
                        font-semibold
                        text-[#111827]
                      "
                                >
                                  {product.name}
                                </p>

                                <p
                                  className="
                        text-[11px]
                        font-mono
                        text-[#9AA0B4]
                      "
                                >
                                  {product.sku}
                                </p>
                              </div>
                            </div>
                          </td>

                          {/* UNITS */}

                          <td
                            className="
                  py-4 px-4 text-right
                  text-[13px] font-semibold
                  text-[#111827]
                "
                          >
                            {product.units.toLocaleString()}
                          </td>

                          {/* REVENUE */}

                          <td
                            className="
                  py-4 px-4 text-right
                  text-[13px] font-bold
                  text-[#111827]
                "
                          >
                            {product.revenue}
                          </td>

                          {/* AVG PRICE */}

                          <td
                            className="
                  py-4 px-4 text-right
                  text-[13px]
                  text-[#8B8FA3]
                "
                          >
                            {product.avgPrice}
                          </td>

                          {/* STATUS */}

                          <td className="py-4 px-4 text-center">
                            <span
                              className={`
                    inline-flex items-center
                    rounded-full px-3 py-1
                    text-[11px] font-semibold
                    ${statusBadgeClass(product.status)}
                  `}
                            >
                              {product.status}
                            </span>
                          </td>

                          {/* TREND */}

                          <td className="py-4 px-4 text-right">
                            <span
                              className={`
                    flex items-center
                    justify-end gap-1
                    text-[12px] font-semibold
                    ${product.trend > 0 ? "text-emerald-600" : "text-red-500"}
                  `}
                            >
                              {product.trend > 0 ? (
                                <TrendingUp size={12} />
                              ) : (
                                <TrendingDown size={12} />
                              )}
                              {product.trend > 0 ? "+" : ""}
                              {product.trend}%
                            </span>
                          </td>

                          {/* STOCK */}

                          <td className="py-4 px-4">
                            <div className="flex items-center justify-end gap-2">
                              {/* VALUE */}

                              <span
                                className="
                      text-[11px]
                      text-[#8B8FA3]
                    "
                              >
                                {product.stock}%
                              </span>

                              {/* BAR */}

                              <div
                                className="
                      h-[5px] w-[72px]
                      overflow-hidden
                      rounded-full
                      bg-[#F0F0F5]
                    "
                              >
                                <div
                                  className="
                        h-full rounded-full
                        transition-all
                      "
                                  style={{
                                    width: `${product.stock}%`,
                                    background:
                                      product.stock > 50
                                        ? "#A995EA"
                                        : product.stock > 15
                                          ? "#F59E0B"
                                          : "#EF4444",
                                  }}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination footer */}
            <div className="mt-5">
              <Pagination
                page={productPage}
                totalPages={totalProductPages}
                onPageChange={setProductPage}
                showInfo
                totalItems={filteredProducts.length}
                itemsPerPage={PRODUCTS_PER_PAGE}
              />
            </div>
          </div>

          {/* ===================================================== */}
          {/* RECENT ORDERS */}
          {/* ===================================================== */}

          <div
            className="
    mt-6 rounded-[32px]
    border border-[#ECECF2]
    bg-white p-5 sm:p-6 lg:p-7
    shadow-[0_10px_40px_rgba(0,0,0,0.04)]
  "
          >
            {/* Header */}

            <div
              className="
      mb-6 flex flex-col gap-4
      lg:flex-row lg:items-center
      lg:justify-between
    "
            >
              <div>
                <p
                  className="
          mb-2 text-[10px]
          font-bold uppercase
          tracking-[0.25em]
          text-[#A1A1B5]
        "
                >
                  Order Management
                </p>

                <h2
                  className="
          text-[24px] font-black
          tracking-[-0.04em]
          text-[#111827]
        "
                >
                  Recent Orders
                </h2>

                <p className="mt-2 text-[13px] text-[#8B8FA3]">
                  Track latest customer purchases and order activity.
                </p>
              </div>

              {/* Actions */}

              <div className="flex items-center gap-3">
                {/* Search */}

                <div
                  className="
          flex items-center gap-2
          rounded-full border border-[#ECECF2]
          bg-[#FAFAFC]
          px-4 py-2
        "
                >
                  <Search size={14} className="text-[#9AA0B4]" />

                  <input
                    type="text"
                    placeholder="Search orders..."
                    value={orderSearch}
                    onChange={(e) => handleOrderSearch(e.target.value)}
                    className="
            bg-transparent text-[12px]
            outline-none placeholder:text-[#9AA0B4]
          "
                  />
                </div>

                {/* Filter */}

                <Button
                  size="sm"
                  variant="outline"
                  rounded="full"
                  className={ghost}
                  leftIcon={<Filter size={13} />}
                >
                  {/* ✅ Icon inside the content span — never clipped, inherits current color */}
                  <span className="flex items-center gap-1.5">
                    {/* <Filter size={13} /> */}
                    Filter
                  </span>
                </Button>
              </div>
            </div>

            {/* Table */}

            <div className="overflow-x-auto">
              <table className="w-full min-w-[950px] border-collapse">
                {/* TABLE HEAD */}

                <thead>
                  <tr className="border-b border-[#ECECF2]">
                    {[
                      "Order ID",
                      "Customer",
                      "Product",
                      "Date",
                      "Amount",
                      "Status",
                      "Action",
                    ].map((head, i) => (
                      <th
                        key={head}
                        className={`
              px-4 py-4 text-[10px]
              font-bold uppercase
              tracking-[0.18em]
              text-[#9AA0B4]
 ${
   i === 3 ? "text-center" : i >= 4 ? "text-right" : "text-left"
 }${i === 5 ? "!text-center" : ""}            `}
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* TABLE BODY */}

                <tbody>
                  {/* EMPTY STATE */}

                  {pagedOrders.length === 0 ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="
              py-10 text-center
              text-[13px]
              text-[#9AA0B4]
            "
                      >
                        No orders match your search.
                      </td>
                    </tr>
                  ) : (
                    pagedOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="
              border-b border-[#F3F4F6]
              transition-all duration-200
              hover:bg-[#FAFAFC]
              last:border-none
            "
                      >
                        {/* ORDER ID */}

                        <td className="px-4 py-4">
                          <span
                            className="
                  text-[12px]
                  font-bold
                  text-[#7C6CF2]
                "
                          >
                            {order.id}
                          </span>
                        </td>

                        {/* CUSTOMER */}

                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            {/* AVATAR */}

                            <div
                              className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-[#CFC5FF]
                    to-[#B8A9FF]
                    text-[11px]
                    font-bold text-white
                  "
                            >
                              {order.avatar}
                            </div>

                            {/* INFO */}

                            <div>
                              <p
                                className="
                      text-[13px]
                      font-semibold
                      text-[#111827]
                    "
                              >
                                {order.customer}
                              </p>

                              <p
                                className="
                      text-[11px]
                      text-[#9AA0B4]
                    "
                              >
                                Premium Customer
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* PRODUCT */}

                        <td
                          className="
                px-4 py-4
                text-[13px]
                font-medium
                text-[#111827]
              "
                        >
                          {order.product}
                        </td>

                        {/* DATE */}

                        <td
                          className="
                px-4 py-4
                text-center text-[13px]
                text-[#6B7280]
              "
                        >
                          {order.date}
                        </td>

                        {/* AMOUNT */}

                        <td
                          className="
                px-4 py-4
                text-center text-[13px]
                font-bold text-[#111827]
              "
                        >
                          {order.amount}
                        </td>

                        {/* STATUS */}

                        <td className="px-4 py-4 text-center">
                          <span
                            className={`
                  inline-flex rounded-full
                  px-3 py-1
                  text-[11px]
                  font-semibold
                  ${
                    order.status === "Completed"
                      ? "bg-emerald-100 text-emerald-600"
                      : order.status === "Pending"
                        ? "bg-orange-100 text-orange-600"
                        : order.status === "Cancelled"
                          ? "bg-red-100 text-red-600"
                          : "bg-blue-100 text-blue-600"
                  }
                `}
                          >
                            {order.status}
                          </span>
                        </td>

                        {/* ACTION */}

                        <td className="px-4 py-4 text-right">
                          <button
                            className="
                  rounded-full
                  border border-[#ECECF2]
                  bg-[#FAFAFC]
                  p-2 text-[#6B7280]
                  transition-all duration-200
                  hover:bg-[#F3F4F6]
                  hover:text-[#111827]
                "
                          >
                            <MoreHorizontal size={15} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer */}

            <div className="mt-6">
              <Pagination
                page={orderPage}
                totalPages={totalOrderPages}
                onPageChange={setOrderPage}
                showInfo
                totalItems={filteredOrders.length}
                itemsPerPage={ORDERS_PER_PAGE}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
