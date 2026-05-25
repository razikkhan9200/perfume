

// // import { useEffect, useMemo, useRef, useState } from "react";
// // import {
// //   TrendingDown,
// //   TrendingUp,
// //   Filter,
// //   Download,
// //   ChevronLeft,
// //   ChevronRight,
// //   Search,
// //   MoreHorizontal,
// // } from "lucide-react";
// // import {
// //   ResponsiveContainer,
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   CartesianGrid,
// // } from "recharts";
// // import Sidebar from "../../components/common/Sidebar";
// // import Navbar from "../../components/common/Navbar";
// // import CustomDateRangePicker from "../../components/calendar";
// // import Button from "../../components/ui/Button";
// // import Pagination from "../../components/pagination";

// // // ─── CONSTANTS ────────────────────────────────────────────────────────────────
// // const PRODUCTS_PER_PAGE = 6;
// // const ORDERS_PER_PAGE = 5;

// // const HERO_STATS = [
// //   { value: "$1.58M", label: "Revenue" },
// //   { value: "13.7K", label: "Orders" },
// //   { value: "8.4K", label: "Customers" },
// // ];

// // const SEMI_CIRCLE = {
// //   totalSales: "$46,354.00",
// //   floatCards: [
// //     {
// //       label: "Total Orders",
// //       value: "3,460",
// //       change: "+8%",
// //       up: true,
// //       position: "top",
// //     },
// //     {
// //       label: "Total Revenue",
// //       value: "$120,540",
// //       change: "+12%",
// //       up: true,
// //       position: "left",
// //     },
// //     {
// //       label: "Conversion Rate",
// //       value: "3.8%",
// //       change: "-0.4%",
// //       up: false,
// //       position: "right",
// //     },
// //   ],
// // };

// // const SALES_CHART = [
// //   { name: "May 14", successful: 18, pending: 3, cancelled: 1 },
// //   { name: "May 15", successful: 22, pending: 4, cancelled: 0.8 },
// //   { name: "May 16", successful: 19, pending: 2.5, cancelled: 1.2 },
// //   { name: "May 17", successful: 24, pending: 3.8, cancelled: 0.6 },
// //   { name: "May 18", successful: 21, pending: 2.8, cancelled: 1 },
// //   { name: "May 19", successful: 26, pending: 4.5, cancelled: 0.7 },
// //   { name: "May 20", successful: 23, pending: 3.5, cancelled: 0.5 },
// // ];

// // const STAT_CARDS = [
// //   { type: "successful", value: "$156k" },
// //   { type: "pending", value: "27" },
// //   { type: "cancelled", value: "$7k" },
// // ];

// // const STATUS_CONFIG = {
// //   successful: {
// //     title: "Successful",
// //     badge: "↑ +14% Growth",
// //     badgeColor: "text-emerald-600",
// //     badgeBg: "bg-emerald-50",
// //     dot: "bg-[#A995EA]",
// //     dotBg: "bg-[#A995EA]/10",
// //     cardBg: "from-[#F7F5FF] to-[#F3F1FF]",
// //   },
// //   pending: {
// //     title: "Pending",
// //     badge: "Processing",
// //     badgeColor: "text-amber-600",
// //     badgeBg: "bg-amber-50",
// //     dot: "bg-amber-400",
// //     dotBg: "bg-amber-400/10",
// //     cardBg: "from-[#FFF9EE] to-[#FFF6E7]",
// //   },
// //   cancelled: {
// //     title: "Cancelled",
// //     badge: "↓ -6% Loss",
// //     badgeColor: "text-red-500",
// //     badgeBg: "bg-red-50",
// //     dot: "bg-red-400",
// //     dotBg: "bg-red-400/10",
// //     cardBg: "from-[#FFF4F4] to-[#FFEFEF]",
// //   },
// // };

// // const PRODUCTS = [
// //   {
// //     name: "AirWave Pro Headphones",
// //     sku: "SKU #AW-4821",
// //     emoji: "🎧",
// //     thumbBg: "bg-[#EEF1FF]",
// //     units: 3842,
// //     revenue: "$192,100",
// //     avgPrice: "$50.00",
// //     status: "In Stock",
// //     trend: 18.4,
// //     stock: 82,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "NovaBand Smart Watch",
// //     sku: "SKU #NB-2210",
// //     emoji: "⌚",
// //     thumbBg: "bg-[#FFF4E5]",
// //     units: 2561,
// //     revenue: "$307,320",
// //     avgPrice: "$120.00",
// //     status: "In Stock",
// //     trend: 11.2,
// //     stock: 61,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "UrbanStep Sneakers",
// //     sku: "SKU #US-8803",
// //     emoji: "👟",
// //     thumbBg: "bg-[#EEFAEA]",
// //     units: 2204,
// //     revenue: "$154,280",
// //     avgPrice: "$70.00",
// //     status: "Low Stock",
// //     trend: 7.6,
// //     stock: 28,
// //     category: "Apparel",
// //   },
// //   {
// //     name: "LightDesk Laptop Stand",
// //     sku: "SKU #LD-5590",
// //     emoji: "💻",
// //     thumbBg: "bg-[#F0EEFF]",
// //     units: 1987,
// //     revenue: "$89,415",
// //     avgPrice: "$45.00",
// //     status: "In Stock",
// //     trend: -2.1,
// //     stock: 74,
// //     category: "Home & Garden",
// //   },
// //   {
// //     name: "TrailBlaze Backpack",
// //     sku: "SKU #TB-1147",
// //     emoji: "🎒",
// //     thumbBg: "bg-[#FFF0F0]",
// //     units: 1654,
// //     revenue: "$82,700",
// //     avgPrice: "$50.00",
// //     status: "Out of Stock",
// //     trend: -5.8,
// //     stock: 0,
// //     category: "Apparel",
// //   },
// //   {
// //     name: "SolShade Sunglasses",
// //     sku: "SKU #SS-3391",
// //     emoji: "🕶️",
// //     thumbBg: "bg-[#E8FAFF]",
// //     units: 1403,
// //     revenue: "$56,120",
// //     avgPrice: "$40.00",
// //     status: "In Stock",
// //     trend: 4.3,
// //     stock: 55,
// //     category: "Apparel",
// //   },
// //   {
// //     name: "ZenBloom Diffuser",
// //     sku: "SKU #ZB-7721",
// //     emoji: "🕯️",
// //     thumbBg: "bg-[#FFF8F0]",
// //     units: 1289,
// //     revenue: "$38,670",
// //     avgPrice: "$30.00",
// //     status: "In Stock",
// //     trend: 6.1,
// //     stock: 90,
// //     category: "Home & Garden",
// //   },
// //   {
// //     name: "PulseX Fitness Band",
// //     sku: "SKU #PX-0044",
// //     emoji: "💪",
// //     thumbBg: "bg-[#EDFFF4]",
// //     units: 1102,
// //     revenue: "$55,100",
// //     avgPrice: "$50.00",
// //     status: "Low Stock",
// //     trend: 3.7,
// //     stock: 18,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Canvas City Tote",
// //     sku: "SKU #CC-5512",
// //     emoji: "👜",
// //     thumbBg: "bg-[#FDEEFF]",
// //     units: 987,
// //     revenue: "$29,610",
// //     avgPrice: "$30.00",
// //     status: "In Stock",
// //     trend: 1.9,
// //     stock: 67,
// //     category: "Apparel",
// //   },
// //   {
// //     name: "AeroDesk Fan Pro",
// //     sku: "SKU #AF-3309",
// //     emoji: "🌀",
// //     thumbBg: "bg-[#F0F8FF]",
// //     units: 876,
// //     revenue: "$52,560",
// //     avgPrice: "$60.00",
// //     status: "Out of Stock",
// //     trend: -3.2,
// //     stock: 0,
// //     category: "Home & Garden",
// //   },
// //   {
// //     name: "HyperCharge Dock",
// //     sku: "SKU #HC-9981",
// //     emoji: "🔌",
// //     thumbBg: "bg-[#FFFAE8]",
// //     units: 754,
// //     revenue: "$37,700",
// //     avgPrice: "$50.00",
// //     status: "In Stock",
// //     trend: 8.4,
// //     stock: 45,
// //     category: "Electronics",
// //   },
// //   {
// //     name: "GreenLeaf Planter",
// //     sku: "SKU #GL-2247",
// //     emoji: "🪴",
// //     thumbBg: "bg-[#F0FFF4]",
// //     units: 631,
// //     revenue: "$12,620",
// //     avgPrice: "$20.00",
// //     status: "In Stock",
// //     trend: 12.0,
// //     stock: 95,
// //     category: "Home & Garden",
// //   },
// // ];

// // const RECENT_ORDERS = [
// //   {
// //     id: "#ORD-1021",
// //     customer: "Ethan Carter",
// //     product: "AirPods Pro Max",
// //     date: "22 May 2026",
// //     amount: "$499",
// //     status: "Completed",
// //     avatar: "EC",
// //   },
// //   {
// //     id: "#ORD-1022",
// //     customer: "Sophia Lee",
// //     product: "Gaming Console X",
// //     date: "21 May 2026",
// //     amount: "$799",
// //     status: "Pending",
// //     avatar: "SL",
// //   },
// //   {
// //     id: "#ORD-1023",
// //     customer: "James Smith",
// //     product: "MacBook Air M3",
// //     date: "20 May 2026",
// //     amount: "$1499",
// //     status: "Completed",
// //     avatar: "JS",
// //   },
// //   {
// //     id: "#ORD-1024",
// //     customer: "Olivia Brown",
// //     product: "Smart Watch Ultra",
// //     date: "20 May 2026",
// //     amount: "$299",
// //     status: "Cancelled",
// //     avatar: "OB",
// //   },
// //   {
// //     id: "#ORD-1025",
// //     customer: "William Roy",
// //     product: "Nike Air Jordan",
// //     date: "19 May 2026",
// //     amount: "$249",
// //     status: "Processing",
// //     avatar: "WR",
// //   },
// //   {
// //     id: "#ORD-1026",
// //     customer: "Ava Martinez",
// //     product: "Yoga Mat Premium",
// //     date: "19 May 2026",
// //     amount: "$89",
// //     status: "Completed",
// //     avatar: "AM",
// //   },
// //   {
// //     id: "#ORD-1027",
// //     customer: "Noah Wilson",
// //     product: "Mechanical Keyboard",
// //     date: "18 May 2026",
// //     amount: "$179",
// //     status: "Processing",
// //     avatar: "NW",
// //   },
// //   {
// //     id: "#ORD-1028",
// //     customer: "Isabella Clark",
// //     product: "LED Desk Lamp",
// //     date: "18 May 2026",
// //     amount: "$59",
// //     status: "Pending",
// //     avatar: "IC",
// //   },
// //   {
// //     id: "#ORD-1029",
// //     customer: "Liam Johnson",
// //     product: "Noise Cancelling Buds",
// //     date: "17 May 2026",
// //     amount: "$229",
// //     status: "Completed",
// //     avatar: "LJ",
// //   },
// //   {
// //     id: "#ORD-1030",
// //     customer: "Emma Davis",
// //     product: "Running Shoes Z10",
// //     date: "17 May 2026",
// //     amount: "$139",
// //     status: "Cancelled",
// //     avatar: "ED",
// //   },
// // ];

// // const PRODUCT_TABS = [
// //   "All Products",
// //   "Electronics",
// //   "Apparel",
// //   "Home & Garden",
// // ];
// // const CHART_FILTERS = ["Last 7 days", "Weekly", "Monthly"];

// // // ─── STYLE HELPERS ────────────────────────────────────────────────────────────
// // const ghost =
// //   "bg-white text-[#111827] border border-[#E6E7EE] hover:bg-[#111827] hover:text-white hover:border-[#111827] text-[12px] font-semibold transition-all duration-300 cursor-pointer";
// // const ghostActive =
// //   "bg-black text-white border border-[#111827] text-[12px] font-semibold transition-all duration-300 cursor-pointer";

// // const rankStyle = (i) =>
// //   [
// //     "bg-[#FFF0C2] text-[#9A6600]",
// //     "bg-[#EDEDF4] text-[#5B5B72]",
// //     "bg-[#FDEEDE] text-[#8A4A12]",
// //   ][i] ?? "bg-[#F5F5F8] text-[#8B8FA3]";

// // const statusBadgeClass = (s) =>
// //   ({
// //     "In Stock": "bg-emerald-50 text-emerald-700",
// //     "Low Stock": "bg-amber-50 text-amber-700",
// //     "Out of Stock": "bg-red-50 text-red-500",
// //   })[s] ?? "";

// // const orderStatusClass = (s) =>
// //   ({
// //     Completed: "bg-emerald-100 text-emerald-600",
// //     Pending: "bg-orange-100 text-orange-600",
// //     Cancelled: "bg-red-100 text-red-600",
// //     Processing: "bg-blue-100 text-blue-600",
// //   })[s] ?? "";

// // // ─── FLOAT CARD ───────────────────────────────────────────────────────────────
// // const FloatCard = ({ label, value, change, up, className }) => (
// //   <div
// //     className={`absolute z-10 min-w-[130px] rounded-2xl border border-[#E6E6EC] bg-white/95 px-4 py-3 shadow-lg ${className}`}
// //   >
// //     <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#8C8C98]">
// //       {label}
// //     </p>
// //     <p className="mb-1.5 text-xl font-extrabold leading-none text-[#1E1E24]">
// //       {value}
// //     </p>
// //     <span
// //       className={`inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-[11px] font-bold ${up ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-400"}`}
// //     >
// //       {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
// //       {change}
// //     </span>
// //   </div>
// // );

// // // ─── SEMI-CIRCLE VIZ ─────────────────────────────────────────────────────────
// // const posClass = {
// //   top: "left-1/2 top-[-10%] -translate-x-1/2",
// //   left: "left-[4%] top-[44%] -translate-y-1/2",
// //   right: "right-[4%] top-[44%] -translate-y-1/2",
// // };

// // const SemiCircleViz = () => (
// //   <div className="relative flex h-[280px] w-full items-end justify-center overflow-visible">
// //     <div className="absolute bottom-0 left-1/2 z-[2] h-[200px] w-[380px] -translate-x-1/2 rounded-t-[200px] border-2 border-b-0 border-[rgba(191,177,255,0.5)]">
// //       <div className="absolute left-1/2 top-[-5px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#B9A9FF]" />
// //       <div className="absolute bottom-[104px] left-[6%] h-2 w-2 rounded-full bg-[#C5B8FF]" />
// //       <div className="absolute bottom-[104px] right-[6%] h-2 w-2 rounded-full bg-[#C5B8FF]" />
// //     </div>
// //     <div className="absolute bottom-0 left-1/2 z-[3] h-[190px] w-[355px] -translate-x-1/2 overflow-hidden rounded-t-[190px] bg-gradient-to-b from-[rgba(139,119,230,0.4)] to-transparent" />
// //     <div className="absolute bottom-6 left-1/2 z-[5] -translate-x-1/2 whitespace-nowrap text-center">
// //       <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-[#8D8D99]">
// //         Total Sales
// //       </p>
// //       <p className="text-[40px] font-black leading-none tracking-[-0.05em] text-[#19191F]">
// //         $46,354<span className="text-[20px]">.00</span>
// //       </p>
// //     </div>
// //     {SEMI_CIRCLE.floatCards.map((c) => (
// //       <FloatCard key={c.label} {...c} className={posClass[c.position]} />
// //     ))}
// //   </div>
// // );

// // // ─── CUSTOM TOOLTIP ───────────────────────────────────────────────────────────
// // const CustomTooltip = ({ active, payload, label }) => {
// //   if (!active || !payload?.length) return null;
// //   return (
// //     <div className="rounded-2xl border border-[#ECECF2] bg-white p-3 text-[12px] shadow-lg">
// //       <p className="mb-2 font-bold text-[#111827]">{label}</p>
// //       {payload.map((p) => (
// //         <div key={p.dataKey} className="mb-1 flex items-center gap-2">
// //           <span
// //             className="h-2 w-2 rounded-full"
// //             style={{ background: p.fill }}
// //           />
// //           <span className="capitalize text-[#8B8FA3]">{p.dataKey}:</span>
// //           <span className="font-semibold text-[#111827]">${p.value}k</span>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // // ═════════════════════════════════════════════════════════════════════════════
// // // MAIN DASHBOARD
// // // ═════════════════════════════════════════════════════════════════════════════
// // const Dashboard = () => {
// //   const [activeNav, setActiveNav] = useState(0);
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [active, setActive] = useState("Last 7 days");
// //   // const [activeTab, setActiveTab] = useState("All Products");
// //   // const [page, setPage] = useState(1);

// //   // const filters = ["Last 7 days", "Weekly", "Monthly"];
// //   // const productTabs = [
// //   //   "All Products",
// //   //   "Electronics",
// //   //   "Apparel",
// //   //   "Home & Garden",
// //   // ];
// //   // const totalPages = 8;

// //   const [activeFilter, setActiveFilter] = useState("Last 7 days");
// //   const [activeTab, setActiveTab] = useState("All Products");
// //   const [productPage, setProductPage] = useState(1);
// //   const [orderPage, setOrderPage] = useState(1);
// //   const [orderSearch, setOrderSearch] = useState("");

// //   // ── filtered products
// //   const filteredProducts = useMemo(
// //     () =>
// //       activeTab === "All Products"
// //         ? PRODUCTS
// //         : PRODUCTS.filter((p) => p.category === activeTab),
// //     [activeTab],
// //   );

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //     setProductPage(1);
// //   };

// //   const totalProductPages = Math.max(
// //     1,
// //     Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE),
// //   );
// //   const pagedProducts = filteredProducts.slice(
// //     (productPage - 1) * PRODUCTS_PER_PAGE,
// //     productPage * PRODUCTS_PER_PAGE,
// //   );

// //   // ── filtered orders
// //   const filteredOrders = useMemo(() => {
// //     const q = orderSearch.toLowerCase().trim();
// //     if (!q) return RECENT_ORDERS;
// //     return RECENT_ORDERS.filter(
// //       (o) =>
// //         o.id.toLowerCase().includes(q) ||
// //         o.customer.toLowerCase().includes(q) ||
// //         o.product.toLowerCase().includes(q) ||
// //         o.status.toLowerCase().includes(q),
// //     );
// //   }, [orderSearch]);

// //   const handleOrderSearch = (val) => {
// //     setOrderSearch(val);
// //     setOrderPage(1);
// //   };

// //   const totalOrderPages = Math.max(
// //     1,
// //     Math.ceil(filteredOrders.length / ORDERS_PER_PAGE),
// //   );
// //   const pagedOrders = filteredOrders.slice(
// //     (orderPage - 1) * ORDERS_PER_PAGE,
// //     orderPage * ORDERS_PER_PAGE,
// //   );

// //   return (
// //     <div className="flex h-screen overflow-hidden text-[#1E1E24]" style={{
// //         background:
// //           "linear-gradient(135deg,var(--grad-hero-from),var(--grad-hero-from),var(--grad-hero-via),var(--grad-hero-to))",
// //       }}>
// //       {/* ── SIDEBAR ── */}
// //       <Sidebar
// //         activeNav={activeNav}
// //         setActiveNav={setActiveNav}
// //         sidebarOpen={sidebarOpen}
// //         setSidebarOpen={setSidebarOpen}
// //       />

// //       <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
// //         {/* ── NAVBAR ── */}
// //         <Navbar setSidebarOpen={setSidebarOpen} />

// //         <main className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-24 sm:px-6 lg:px-8">
// //           {/* ════════════════════════════════════════
// //               HERO — headline + quick stats + viz
// //           ════════════════════════════════════════ */}
// //           <div className="grid grid-cols-1 gap-4 py-4 lg:grid-cols-[1fr_1.5fr]">
// //             <div className="flex flex-col justify-center">
// //               <h2 className="mb-3 text-[clamp(22px,3vw,30px)] font-black leading-[1.1] tracking-[-0.03em] text-[#19191F]">
// //                 E-commerce
// //                 <br />
// //                 Growth Insights
// //               </h2>
// //               <p className="mb-6 max-w-[300px] text-[12px] font-medium leading-relaxed text-[#8C8C98]">
// //                 Track and analyze your online store's performance with
// //                 AI-powered metrics.
// //               </p>
// //               <div className="flex flex-wrap gap-3">
// //                 {HERO_STATS.map(({ value, label }) => (
// //                   <div
// //                     key={label}
// //                     className="min-w-[105px] rounded-2xl border border-white bg-white/80 px-4 py-3 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
// //                   >
// //                     <p className="text-[17px] font-black tracking-[-0.03em] text-[#19191F]">
// //                       {value}
// //                     </p>
// //                     <div className="mt-1 flex items-center justify-center gap-1.5">
// //                       <div className="h-1.5 w-1.5 rounded-full bg-[#C5B8FF]" />
// //                       <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8C8C98]">
// //                         {label}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             <div className="relative">
// //               <SemiCircleViz />
// //             </div>
// //           </div>

// //           {/* ════════════════════════════════════════
// //               SALES OVERVIEW
// //           ════════════════════════════════════════ */}
// //           <div className="w-full rounded-2xl border border-white bg-white/80 p-5 sm:p-6 lg:p-7 shadow-sm transition-all ">
// //             {/* Header */}
// //             <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
// //               <div>
// //                 <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9AA0B4]">
// //                   Analytics Report
// //                 </p>
// //                 <h2 className="text-[clamp(20px,3vw,26px)] font-black tracking-[-0.04em] text-[#111827]">
// //                   Sales Overview
// //                 </h2>
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 {/* Time range filter tabs */}
// //                 <div className="flex flex-wrap items-center gap-2">
// //                   {CHART_FILTERS.map((item) => (
// //                     <Button
// //                       key={item}
// //                       variant="outline"
// //                       onClick={() => setActiveFilter(item)}
// //                       size="sm"
// //                       rounded="full"
// //                       className={active === item ? ghostActive : ghost}
// //                     >
// //                       {item}
// //                     </Button>
// //                   ))}
// //                 </div>
// //                 <CustomDateRangePicker />
// //               </div>
// //             </div>

// //             {/* Stat cards */}
// //             <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
// //               {STAT_CARDS.map((item, i) => {
// //                 const c = STATUS_CONFIG[item.type];
// //                 return (
// //                   <div
// //                     key={i}
// //                     className={`rounded-[20px] border border-white bg-gradient-to-br ${c.cardBg} p-4 h-[130px] flex flex-col justify-between`}
// //                   >
// //                     <div className="flex items-start justify-between">
// //                       <div>
// //                         <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#8B8FA3]">
// //                           {c.title}
// //                         </p>
// //                         <h3 className="text-[24px] font-black tracking-[-0.04em] text-[#111827]">
// //                           {item.value}
// //                         </h3>
// //                       </div>
// //                       <div className={`rounded-lg p-1.5 ${c.dotBg}`}>
// //                         <div className={`h-2.5 w-2.5 rounded-full ${c.dot}`} />
// //                       </div>
// //                     </div>
// //                     <span
// //                       className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold ${c.badgeBg} ${c.badgeColor}`}
// //                     >
// //                       {c.badge}
// //                     </span>
// //                   </div>
// //                 );
// //               })}
// //             </div>

// //             {/* Legend */}
// //             <div className="flex flex-wrap items-center gap-5 mb-6">
// //               {[
// //                 ["#A995EA", "Successful"],
// //                 ["#F59E0B", "Pending"],
// //                 ["#EF4444", "Cancelled"],
// //               ].map(([color, label]) => (
// //                 <div key={label} className="flex items-center gap-2">
// //                   <div
// //                     className="h-3 w-3 rounded-full"
// //                     style={{ background: color }}
// //                   />
// //                   <span className="text-[13px] font-medium text-[#70758A]">
// //                     {label}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Bar chart */}
// //             <div className="h-[300px] w-full rounded-[20px] bg-[#FCFCFD] p-3">
// //               <ResponsiveContainer width="100%" height="100%">
// //                 <BarChart data={SALES_CHART} barGap={8}>
// //                   <CartesianGrid
// //                     strokeDasharray="4 6"
// //                     vertical={false}
// //                     stroke="#ECECF2"
// //                   />
// //                   <XAxis
// //                     dataKey="name"
// //                     tickLine={false}
// //                     axisLine={false}
// //                     tick={{ fill: "#8B8FA3", fontSize: 11, fontWeight: 500 }}
// //                   />
// //                   <YAxis
// //                     tickLine={false}
// //                     axisLine={false}
// //                     tick={{ fill: "#8B8FA3", fontSize: 11 }}
// //                     ticks={[0, 5, 10, 15, 20, 25, 30]}
// //                     tickFormatter={(v) => `$${v}k`}
// //                   />
// //                   <Tooltip
// //                     content={<CustomTooltip />}
// //                     cursor={{ fill: "rgba(169,149,234,0.06)" }}
// //                   />
// //                   <Bar
// //                     dataKey="successful"
// //                     fill="#A995EA"
// //                     radius={[10, 10, 10, 10]}
// //                     barSize={36}
// //                   />
// //                   <Bar
// //                     dataKey="pending"
// //                     fill="#FDE9C7"
// //                     radius={[10, 10, 10, 10]}
// //                     barSize={36}
// //                   />
// //                   <Bar
// //                     dataKey="cancelled"
// //                     fill="#F8D7D7"
// //                     radius={[10, 10, 10, 10]}
// //                     barSize={36}
// //                   />
// //                 </BarChart>
// //               </ResponsiveContainer>
// //             </div>
// //           </div>

// //           {/* ════════════════════════════════════════
// //               TOP SELLING PRODUCTS
// //           ════════════════════════════════════════ */}
// //           <div className="w-full rounded-[28px] border border-[#ECECF2] bg-white/95 p-5 sm:p-6 lg:p-7 mt-6">
// //             {/* Header */}
// //             <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
// //               <div>
// //                 <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9AA0B4]">
// //                   Product Performance
// //                 </p>
// //                 <h2 className="text-[clamp(20px,3vw,26px)] font-black tracking-[-0.04em] text-[#111827]">
// //                   Top Selling Products
// //                 </h2>
// //               </div>

// //               {/* Action buttons — icon rendered inside label span so it stays visible */}
// //               <div className="flex items-center gap-3">
// //                 <Button
// //                   size="sm"
// //                   variant="outline"
// //                   rounded="full"
// //                   className={ghost}
// //                   leftIcon={<Filter size={13} />}
// //                 >
// //                   {/* ✅ Icon inside the content span — never clipped, inherits current color */}
// //                   <span className="flex items-center gap-1.5">
// //                     {/* <Filter size={13} /> */}
// //                     Filter
// //                   </span>
// //                 </Button>
// //                 <Button
// //                   size="sm"
// //                   variant="outline"
// //                   rounded="full"
// //                   className={ghost}
// //                   leftIcon={<Download size={13} />}
// //                 >
// //                   <span className="flex items-center gap-1.5">Export</span>
// //                 </Button>
// //               </div>
// //             </div>

// //             {/* Category tabs */}
// //             <div className="mb-5 flex gap-1 rounded-full bg-[#F5F5F8] p-1 w-fit">
// //               {PRODUCT_TABS.map((tab) => (
// //                 <Button
// //                   key={tab}
// //                   size="sm"
// //                   rounded="full"
// //                   variant="outline"
// //                   onClick={() => handleTabChange(tab)}
// //                   className={`px-4 text-[11px] ${activeTab === tab ? ghostActive : ghost}`}
// //                 >
// //                   {tab}
// //                 </Button>
// //               ))}
// //             </div>

// //             {/* Table */}
// //             <div className="overflow-x-auto">
// //               <table className="w-full border-collapse">
// //                 {/* TABLE HEAD */}

// //                 <thead>
// //                   <tr className="border-b border-[#ECECF2]">
// //                     {[
// //                       "#",
// //                       "Product",
// //                       "Units Sold",
// //                       "Revenue",
// //                       "Avg. Price",
// //                       "Status",
// //                       "7-Day Trend",
// //                       "Stock Level",
// //                     ].map((h, i) => (
// //                       <th
// //                         key={h}
// //                         className={`
// //               py-3 px-4 text-[10px]
// //               font-bold uppercase tracking-widest
// //               text-[#9AA0B4]
// //               ${i >= 2 ? "text-right" : "text-left"}
// //               ${i === 5 ? "!text-center" : ""}
// //             `}
// //                       >
// //                         {h}
// //                       </th>
// //                     ))}
// //                   </tr>
// //                 </thead>

// //                 {/* TABLE BODY */}

// //                 <tbody>
// //                   {/* EMPTY STATE */}

// //                   {pagedProducts.length === 0 ? (
// //                     <tr>
// //                       <td
// //                         colSpan={8}
// //                         className="
// //               py-10 text-center
// //               text-[13px] text-[#9AA0B4]
// //             "
// //                       >
// //                         No products found in this category.
// //                       </td>
// //                     </tr>
// //                   ) : (
// //                     pagedProducts.map((product, i) => {
// //                       // GLOBAL RANK

// //                       const globalRank = filteredProducts.indexOf(product) + 1;

// //                       return (
// //                         <tr
// //                           key={product.sku}
// //                           className="
// //                 cursor-pointer border-b
// //                 border-[#ECECF2]
// //                 transition-colors
// //                 hover:bg-[#FAFAFC]
// //                 last:border-none
// //               "
// //                         >
// //                           {/* RANK */}

// //                           <td className="py-4 px-4">
// //                             <span
// //                               className={`
// //                     inline-flex h-6 w-6
// //                     items-center justify-center
// //                     rounded-[8px]
// //                     text-[11px] font-bold
// //                     ${rankStyle(globalRank - 1)}
// //                   `}
// //                             >
// //                               {globalRank}
// //                             </span>
// //                           </td>

// //                           {/* PRODUCT */}

// //                           <td className="py-4 px-4">
// //                             <div className="flex items-center gap-3">
// //                               {/* IMAGE */}

// //                               <div
// //                                 className={`
// //                       flex h-10 w-10
// //                       flex-shrink-0 items-center
// //                       justify-center rounded-[12px]
// //                       text-[18px]
// //                       ${product.thumbBg}
// //                     `}
// //                               >
// //                                 {product.emoji}
// //                               </div>

// //                               {/* INFO */}

// //                               <div>
// //                                 <p
// //                                   className="
// //                         text-[13px]
// //                         font-semibold
// //                         text-[#111827]
// //                       "
// //                                 >
// //                                   {product.name}
// //                                 </p>

// //                                 <p
// //                                   className="
// //                         text-[11px]
// //                         font-mono
// //                         text-[#9AA0B4]
// //                       "
// //                                 >
// //                                   {product.sku}
// //                                 </p>
// //                               </div>
// //                             </div>
// //                           </td>

// //                           {/* UNITS */}

// //                           <td
// //                             className="
// //                   py-4 px-4 text-right
// //                   text-[13px] font-semibold
// //                   text-[#111827]
// //                 "
// //                           >
// //                             {product.units.toLocaleString()}
// //                           </td>

// //                           {/* REVENUE */}

// //                           <td
// //                             className="
// //                   py-4 px-4 text-right
// //                   text-[13px] font-bold
// //                   text-[#111827]
// //                 "
// //                           >
// //                             {product.revenue}
// //                           </td>

// //                           {/* AVG PRICE */}

// //                           <td
// //                             className="
// //                   py-4 px-4 text-right
// //                   text-[13px]
// //                   text-[#8B8FA3]
// //                 "
// //                           >
// //                             {product.avgPrice}
// //                           </td>

// //                           {/* STATUS */}

// //                           <td className="py-4 px-4 text-center">
// //                             <span
// //                               className={`
// //                     inline-flex items-center
// //                     rounded-full px-3 py-1
// //                     text-[11px] font-semibold
// //                     ${statusBadgeClass(product.status)}
// //                   `}
// //                             >
// //                               {product.status}
// //                             </span>
// //                           </td>

// //                           {/* TREND */}

// //                           <td className="py-4 px-4 text-right">
// //                             <span
// //                               className={`
// //                     flex items-center
// //                     justify-end gap-1
// //                     text-[12px] font-semibold
// //                     ${product.trend > 0 ? "text-emerald-600" : "text-red-500"}
// //                   `}
// //                             >
// //                               {product.trend > 0 ? (
// //                                 <TrendingUp size={12} />
// //                               ) : (
// //                                 <TrendingDown size={12} />
// //                               )}
// //                               {product.trend > 0 ? "+" : ""}
// //                               {product.trend}%
// //                             </span>
// //                           </td>

// //                           {/* STOCK */}

// //                           <td className="py-4 px-4">
// //                             <div className="flex items-center justify-end gap-2">
// //                               {/* VALUE */}

// //                               <span
// //                                 className="
// //                       text-[11px]
// //                       text-[#8B8FA3]
// //                     "
// //                               >
// //                                 {product.stock}%
// //                               </span>

// //                               {/* BAR */}

// //                               <div
// //                                 className="
// //                       h-[5px] w-[72px]
// //                       overflow-hidden
// //                       rounded-full
// //                       bg-[#F0F0F5]
// //                     "
// //                               >
// //                                 <div
// //                                   className="
// //                         h-full rounded-full
// //                         transition-all
// //                       "
// //                                   style={{
// //                                     width: `${product.stock}%`,
// //                                     background:
// //                                       product.stock > 50
// //                                         ? "#A995EA"
// //                                         : product.stock > 15
// //                                           ? "#F59E0B"
// //                                           : "#EF4444",
// //                                   }}
// //                                 />
// //                               </div>
// //                             </div>
// //                           </td>
// //                         </tr>
// //                       );
// //                     })
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>

// //             {/* Pagination footer */}
// //             <div className="mt-5">
// //               <Pagination
// //                 page={productPage}
// //                 totalPages={totalProductPages}
// //                 onPageChange={setProductPage}
// //                 showInfo
// //                 totalItems={filteredProducts.length}
// //                 itemsPerPage={PRODUCTS_PER_PAGE}
// //               />
// //             </div>
// //           </div>

// //           {/* ===================================================== */}
// //           {/* RECENT ORDERS */}
// //           {/* ===================================================== */}

// //           <div
// //             className="
// //     mt-6 rounded-[32px]
// //     border border-[#ECECF2]
// //     bg-white p-5 sm:p-6 lg:p-7
// //     shadow-[0_10px_40px_rgba(0,0,0,0.04)]
// //   "
// //           >
// //             {/* Header */}

// //             <div
// //               className="
// //       mb-6 flex flex-col gap-4
// //       lg:flex-row lg:items-center
// //       lg:justify-between
// //     "
// //             >
// //               <div>
// //                 <p
// //                   className="
// //           mb-2 text-[10px]
// //           font-bold uppercase
// //           tracking-[0.25em]
// //           text-[#A1A1B5]
// //         "
// //                 >
// //                   Order Management
// //                 </p>

// //                 <h2
// //                   className="
// //           text-[24px] font-black
// //           tracking-[-0.04em]
// //           text-[#111827]
// //         "
// //                 >
// //                   Recent Orders
// //                 </h2>

// //                 <p className="mt-2 text-[13px] text-[#8B8FA3]">
// //                   Track latest customer purchases and order activity.
// //                 </p>
// //               </div>

// //               {/* Actions */}

// //               <div className="flex items-center gap-3">
// //                 {/* Search */}

// //                 <div
// //                   className="
// //           flex items-center gap-2
// //           rounded-full border border-[#ECECF2]
// //           bg-[#FAFAFC]
// //           px-4 py-2
// //         "
// //                 >
// //                   <Search size={14} className="text-[#9AA0B4]" />

// //                   <input
// //                     type="text"
// //                     placeholder="Search orders..."
// //                     value={orderSearch}
// //                     onChange={(e) => handleOrderSearch(e.target.value)}
// //                     className="
// //             bg-transparent text-[12px]
// //             outline-none placeholder:text-[#9AA0B4]
// //           "
// //                   />
// //                 </div>

// //                 {/* Filter */}

// //                 <Button
// //                   size="sm"
// //                   variant="outline"
// //                   rounded="full"
// //                   className={ghost}
// //                   leftIcon={<Filter size={13} />}
// //                 >
// //                   {/* ✅ Icon inside the content span — never clipped, inherits current color */}
// //                   <span className="flex items-center gap-1.5">
// //                     {/* <Filter size={13} /> */}
// //                     Filter
// //                   </span>
// //                 </Button>
// //               </div>
// //             </div>

// //             {/* Table */}

// //             <div className="overflow-x-auto">
// //               <table className="w-full min-w-[950px] border-collapse">
// //                 {/* TABLE HEAD */}

// //                 <thead>
// //                   <tr className="border-b border-[#ECECF2]">
// //                     {[
// //                       "Order ID",
// //                       "Customer",
// //                       "Product",
// //                       "Date",
// //                       "Amount",
// //                       "Status",
// //                       "Action",
// //                     ].map((head, i) => (
// //                       <th
// //                         key={head}
// //                         className={`
// //               px-4 py-4 text-[10px]
// //               font-bold uppercase
// //               tracking-[0.18em]
// //               text-[#9AA0B4]
// //  ${
// //    i === 3 ? "text-center" : i >= 4 ? "text-right" : "text-left"
// //  }${i === 5 ? "!text-center" : ""}            `}
// //                       >
// //                         {head}
// //                       </th>
// //                     ))}
// //                   </tr>
// //                 </thead>

// //                 {/* TABLE BODY */}

// //                 <tbody>
// //                   {/* EMPTY STATE */}

// //                   {pagedOrders.length === 0 ? (
// //                     <tr>
// //                       <td
// //                         colSpan={7}
// //                         className="
// //               py-10 text-center
// //               text-[13px]
// //               text-[#9AA0B4]
// //             "
// //                       >
// //                         No orders match your search.
// //                       </td>
// //                     </tr>
// //                   ) : (
// //                     pagedOrders.map((order) => (
// //                       <tr
// //                         key={order.id}
// //                         className="
// //               border-b border-[#F3F4F6]
// //               transition-all duration-200
// //               hover:bg-[#FAFAFC]
// //               last:border-none
// //             "
// //                       >
// //                         {/* ORDER ID */}

// //                         <td className="px-4 py-4">
// //                           <span
// //                             className="
// //                   text-[12px]
// //                   font-bold
// //                   text-[#7C6CF2]
// //                 "
// //                           >
// //                             {order.id}
// //                           </span>
// //                         </td>

// //                         {/* CUSTOMER */}

// //                         <td className="px-4 py-4">
// //                           <div className="flex items-center gap-3">
// //                             {/* AVATAR */}

// //                             <div
// //                               className="
// //                     flex h-10 w-10
// //                     items-center justify-center
// //                     rounded-full
// //                     bg-gradient-to-br
// //                     from-[#CFC5FF]
// //                     to-[#B8A9FF]
// //                     text-[11px]
// //                     font-bold text-white
// //                   "
// //                             >
// //                               {order.avatar}
// //                             </div>

// //                             {/* INFO */}

// //                             <div>
// //                               <p
// //                                 className="
// //                       text-[13px]
// //                       font-semibold
// //                       text-[#111827]
// //                     "
// //                               >
// //                                 {order.customer}
// //                               </p>

// //                               <p
// //                                 className="
// //                       text-[11px]
// //                       text-[#9AA0B4]
// //                     "
// //                               >
// //                                 Premium Customer
// //                               </p>
// //                             </div>
// //                           </div>
// //                         </td>

// //                         {/* PRODUCT */}

// //                         <td
// //                           className="
// //                 px-4 py-4
// //                 text-[13px]
// //                 font-medium
// //                 text-[#111827]
// //               "
// //                         >
// //                           {order.product}
// //                         </td>

// //                         {/* DATE */}

// //                         <td
// //                           className="
// //                 px-4 py-4
// //                 text-center text-[13px]
// //                 text-[#6B7280]
// //               "
// //                         >
// //                           {order.date}
// //                         </td>

// //                         {/* AMOUNT */}

// //                         <td
// //                           className="
// //                 px-4 py-4
// //                 text-center text-[13px]
// //                 font-bold text-[#111827]
// //               "
// //                         >
// //                           {order.amount}
// //                         </td>

// //                         {/* STATUS */}

// //                         <td className="px-4 py-4 text-center">
// //                           <span
// //                             className={`
// //                   inline-flex rounded-full
// //                   px-3 py-1
// //                   text-[11px]
// //                   font-semibold
// //                   ${
// //                     order.status === "Completed"
// //                       ? "bg-emerald-100 text-emerald-600"
// //                       : order.status === "Pending"
// //                         ? "bg-orange-100 text-orange-600"
// //                         : order.status === "Cancelled"
// //                           ? "bg-red-100 text-red-600"
// //                           : "bg-blue-100 text-blue-600"
// //                   }
// //                 `}
// //                           >
// //                             {order.status}
// //                           </span>
// //                         </td>

// //                         {/* ACTION */}

// //                         <td className="px-4 py-4 text-right">
// //                           <button
// //                             className="
// //                   rounded-full
// //                   border border-[#ECECF2]
// //                   bg-[#FAFAFC]
// //                   p-2 text-[#6B7280]
// //                   transition-all duration-200
// //                   hover:bg-[#F3F4F6]
// //                   hover:text-[#111827]
// //                 "
// //                           >
// //                             <MoreHorizontal size={15} />
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>

// //             {/* Footer */}

// //             <div className="mt-6">
// //               <Pagination
// //                 page={orderPage}
// //                 totalPages={totalOrderPages}
// //                 onPageChange={setOrderPage}
// //                 showInfo
// //                 totalItems={filteredOrders.length}
// //                 itemsPerPage={ORDERS_PER_PAGE}
// //               />
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;


// import { useEffect, useMemo, useRef, useState } from "react";
// import {
//   TrendingDown,
//   TrendingUp,
//   Filter,
//   Download,
//   Search,
//   MoreHorizontal,
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
// import Navbar   from "../../components/common/Navbar";
// import CustomDateRangePicker from "../../components/calendar";
// import Button     from "../../components/ui/Button";
// import Pagination from "../../components/pagination";
// import { getApi } from "../../api/apiFunctions";   // ← API helper

// // ─── FALLBACK / STATIC DATA (jab tak API na aaye) ────────────────────────────
// const FALLBACK_HERO_STATS = [
//   { value: "$1.58M", label: "Revenue"   },
//   { value: "13.7K",  label: "Orders"    },
//   { value: "8.4K",   label: "Customers" },
// ];

// const FALLBACK_SEMI_CIRCLE = {
//   totalSales: "$46,354.00",
//   floatCards: [
//     { label: "Total Orders",    value: "3,460",    change: "+8%",   up: true,  position: "top"   },
//     { label: "Total Revenue",   value: "$120,540",  change: "+12%",  up: true,  position: "left"  },
//     { label: "Conversion Rate", value: "3.8%",      change: "-0.4%", up: false, position: "right" },
//   ],
// };

// const FALLBACK_SALES_CHART = [
//   { name: "May 14", successful: 18, pending: 3,   cancelled: 1   },
//   { name: "May 15", successful: 22, pending: 4,   cancelled: 0.8 },
//   { name: "May 16", successful: 19, pending: 2.5, cancelled: 1.2 },
//   { name: "May 17", successful: 24, pending: 3.8, cancelled: 0.6 },
//   { name: "May 18", successful: 21, pending: 2.8, cancelled: 1   },
//   { name: "May 19", successful: 26, pending: 4.5, cancelled: 0.7 },
//   { name: "May 20", successful: 23, pending: 3.5, cancelled: 0.5 },
// ];

// const FALLBACK_STAT_CARDS = [
//   { type: "successful", value: "$156k" },
//   { type: "pending",    value: "27"    },
//   { type: "cancelled",  value: "$7k"   },
// ];

// const FALLBACK_PRODUCTS = [
//   { name: "AirWave Pro Headphones", sku: "SKU #AW-4821", emoji: "🎧", thumbBg: "bg-[#EEF1FF]", units: 3842, revenue: "$192,100", avgPrice: "$50.00",  status: "In Stock",     trend: 18.4, stock: 82, category: "Electronics"   },
//   { name: "NovaBand Smart Watch",   sku: "SKU #NB-2210", emoji: "⌚", thumbBg: "bg-[#FFF4E5]", units: 2561, revenue: "$307,320", avgPrice: "$120.00", status: "In Stock",     trend: 11.2, stock: 61, category: "Electronics"   },
//   { name: "UrbanStep Sneakers",     sku: "SKU #US-8803", emoji: "👟", thumbBg: "bg-[#EEFAEA]", units: 2204, revenue: "$154,280", avgPrice: "$70.00",  status: "Low Stock",    trend: 7.6,  stock: 28, category: "Apparel"       },
//   { name: "LightDesk Laptop Stand", sku: "SKU #LD-5590", emoji: "💻", thumbBg: "bg-[#F0EEFF]", units: 1987, revenue: "$89,415",  avgPrice: "$45.00",  status: "In Stock",     trend: -2.1, stock: 74, category: "Home & Garden" },
//   { name: "TrailBlaze Backpack",    sku: "SKU #TB-1147", emoji: "🎒", thumbBg: "bg-[#FFF0F0]", units: 1654, revenue: "$82,700",  avgPrice: "$50.00",  status: "Out of Stock", trend: -5.8, stock: 0,  category: "Apparel"       },
//   { name: "SolShade Sunglasses",    sku: "SKU #SS-3391", emoji: "🕶️", thumbBg: "bg-[#E8FAFF]", units: 1403, revenue: "$56,120",  avgPrice: "$40.00",  status: "In Stock",     trend: 4.3,  stock: 55, category: "Apparel"       },
//   { name: "ZenBloom Diffuser",      sku: "SKU #ZB-7721", emoji: "🕯️", thumbBg: "bg-[#FFF8F0]", units: 1289, revenue: "$38,670",  avgPrice: "$30.00",  status: "In Stock",     trend: 6.1,  stock: 90, category: "Home & Garden" },
//   { name: "PulseX Fitness Band",    sku: "SKU #PX-0044", emoji: "💪", thumbBg: "bg-[#EDFFF4]", units: 1102, revenue: "$55,100",  avgPrice: "$50.00",  status: "Low Stock",    trend: 3.7,  stock: 18, category: "Electronics"   },
//   { name: "Canvas City Tote",       sku: "SKU #CC-5512", emoji: "👜", thumbBg: "bg-[#FDEEFF]", units: 987,  revenue: "$29,610",  avgPrice: "$30.00",  status: "In Stock",     trend: 1.9,  stock: 67, category: "Apparel"       },
//   { name: "AeroDesk Fan Pro",       sku: "SKU #AF-3309", emoji: "🌀", thumbBg: "bg-[#F0F8FF]", units: 876,  revenue: "$52,560",  avgPrice: "$60.00",  status: "Out of Stock", trend: -3.2, stock: 0,  category: "Home & Garden" },
//   { name: "HyperCharge Dock",       sku: "SKU #HC-9981", emoji: "🔌", thumbBg: "bg-[#FFFAE8]", units: 754,  revenue: "$37,700",  avgPrice: "$50.00",  status: "In Stock",     trend: 8.4,  stock: 45, category: "Electronics"   },
//   { name: "GreenLeaf Planter",      sku: "SKU #GL-2247", emoji: "🪴", thumbBg: "bg-[#F0FFF4]", units: 631,  revenue: "$12,620",  avgPrice: "$20.00",  status: "In Stock",     trend: 12.0, stock: 95, category: "Home & Garden" },
// ];

// const FALLBACK_ORDERS = [
//   { id: "#ORD-1021", customer: "Ethan Carter",   product: "AirPods Pro Max",       date: "22 May 2026", amount: "$499",  status: "Completed",  avatar: "EC" },
//   { id: "#ORD-1022", customer: "Sophia Lee",     product: "Gaming Console X",      date: "21 May 2026", amount: "$799",  status: "Pending",    avatar: "SL" },
//   { id: "#ORD-1023", customer: "James Smith",    product: "MacBook Air M3",        date: "20 May 2026", amount: "$1499", status: "Completed",  avatar: "JS" },
//   { id: "#ORD-1024", customer: "Olivia Brown",   product: "Smart Watch Ultra",     date: "20 May 2026", amount: "$299",  status: "Cancelled",  avatar: "OB" },
//   { id: "#ORD-1025", customer: "William Roy",    product: "Nike Air Jordan",       date: "19 May 2026", amount: "$249",  status: "Processing", avatar: "WR" },
//   { id: "#ORD-1026", customer: "Ava Martinez",   product: "Yoga Mat Premium",      date: "19 May 2026", amount: "$89",   status: "Completed",  avatar: "AM" },
//   { id: "#ORD-1027", customer: "Noah Wilson",    product: "Mechanical Keyboard",   date: "18 May 2026", amount: "$179",  status: "Processing", avatar: "NW" },
//   { id: "#ORD-1028", customer: "Isabella Clark", product: "LED Desk Lamp",         date: "18 May 2026", amount: "$59",   status: "Pending",    avatar: "IC" },
//   { id: "#ORD-1029", customer: "Liam Johnson",   product: "Noise Cancelling Buds", date: "17 May 2026", amount: "$229",  status: "Completed",  avatar: "LJ" },
//   { id: "#ORD-1030", customer: "Emma Davis",     product: "Running Shoes Z10",     date: "17 May 2026", amount: "$139",  status: "Cancelled",  avatar: "ED" },
// ];

// // ─── CONSTANTS ────────────────────────────────────────────────────────────────
// const PRODUCTS_PER_PAGE = 6;
// const ORDERS_PER_PAGE   = 5;
// const PRODUCT_TABS      = ["All Products", "Electronics", "Apparel", "Home & Garden"];
// const CHART_FILTERS     = ["Last 7 days", "Weekly", "Monthly"];

// // ─── STATUS CONFIG ────────────────────────────────────────────────────────────
// const STATUS_CONFIG = {
//   successful: {
//     title: "Successful", badge: "↑ +14% Growth",
//     badgeColor: "text-emerald-600", badgeBg: "bg-emerald-50",
//     dot: "bg-[#A995EA]", dotBg: "bg-[#A995EA]/10",
//     cardBg: "from-[#F7F5FF] to-[#F3F1FF]",
//   },
//   pending: {
//     title: "Pending", badge: "Processing",
//     badgeColor: "text-amber-600", badgeBg: "bg-amber-50",
//     dot: "bg-amber-400", dotBg: "bg-amber-400/10",
//     cardBg: "from-[#FFF9EE] to-[#FFF6E7]",
//   },
//   cancelled: {
//     title: "Cancelled", badge: "↓ -6% Loss",
//     badgeColor: "text-red-500", badgeBg: "bg-red-50",
//     dot: "bg-red-400", dotBg: "bg-red-400/10",
//     cardBg: "from-[#FFF4F4] to-[#FFEFEF]",
//   },
// };

// // ─── STYLE HELPERS ────────────────────────────────────────────────────────────
// const ghost =
//   "bg-white text-[#111827] border border-[#E6E7EE] hover:bg-[#111827] hover:text-white hover:border-[#111827] text-[12px] font-semibold transition-all duration-300 cursor-pointer";
// const ghostActive =
//   "bg-black text-white border border-[#111827] text-[12px] font-semibold transition-all duration-300 cursor-pointer";

// const rankStyle = (i) =>
//   ["bg-[#FFF0C2] text-[#9A6600]", "bg-[#EDEDF4] text-[#5B5B72]", "bg-[#FDEEDE] text-[#8A4A12]"][i]
//   ?? "bg-[#F5F5F8] text-[#8B8FA3]";

// const statusBadgeClass = (s) =>
//   ({ "In Stock": "bg-emerald-50 text-emerald-700", "Low Stock": "bg-amber-50 text-amber-700", "Out of Stock": "bg-red-50 text-red-500" })[s] ?? "";

// // ─── SKELETON LOADER ─────────────────────────────────────────────────────────
// const Skeleton = ({ className = "" }) => (
//   <div className={`animate-pulse rounded-xl bg-[#ECECF2] ${className}`} />
// );

// // ─── FLOAT CARD ───────────────────────────────────────────────────────────────
// const FloatCard = ({ label, value, change, up, className }) => (
//   <div className={`absolute z-10 min-w-[130px] rounded-2xl border border-[#E6E6EC] bg-white/95 px-4 py-3 shadow-lg ${className}`}>
//     <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#8C8C98]">{label}</p>
//     <p className="mb-1.5 text-xl font-extrabold leading-none text-[#1E1E24]">{value}</p>
//     <span className={`inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-[11px] font-bold ${up ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-400"}`}>
//       {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
//       {change}
//     </span>
//   </div>
// );

// // ─── SEMI-CIRCLE VIZ ─────────────────────────────────────────────────────────
// const posClass = {
//   top:   "left-1/2 top-[-10%] -translate-x-1/2",
//   left:  "left-[4%] top-[44%] -translate-y-1/2",
//   right: "right-[4%] top-[44%] -translate-y-1/2",
// };

// const SemiCircleViz = ({ data }) => (
//   <div className="relative flex h-[280px] w-full items-end justify-center overflow-visible">
//     <div className="absolute bottom-0 left-1/2 z-[2] h-[200px] w-[380px] -translate-x-1/2 rounded-t-[200px] border-2 border-b-0 border-[rgba(191,177,255,0.5)]">
//       <div className="absolute left-1/2 top-[-5px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#B9A9FF]" />
//       <div className="absolute bottom-[104px] left-[6%]  h-2 w-2 rounded-full bg-[#C5B8FF]" />
//       <div className="absolute bottom-[104px] right-[6%] h-2 w-2 rounded-full bg-[#C5B8FF]" />
//     </div>
//     <div className="absolute bottom-0 left-1/2 z-[3] h-[190px] w-[355px] -translate-x-1/2 overflow-hidden rounded-t-[190px] bg-gradient-to-b from-[rgba(139,119,230,0.4)] to-transparent" />
//     <div className="absolute bottom-6 left-1/2 z-[5] -translate-x-1/2 whitespace-nowrap text-center">
//       <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-[#8D8D99]">Total Sales</p>
//       <p className="text-[40px] font-black leading-none tracking-[-0.05em] text-[#19191F]">
//         {data.totalSales}<span className="text-[20px]"></span>
//       </p>
//     </div>
//     {data.floatCards.map((c) => (
//       <FloatCard key={c.label} {...c} className={posClass[c.position]} />
//     ))}
//   </div>
// );

// // ─── CUSTOM TOOLTIP ───────────────────────────────────────────────────────────
// const CustomTooltip = ({ active, payload, label }) => {
//   if (!active || !payload?.length) return null;
//   return (
//     <div className="rounded-2xl border border-[#ECECF2] bg-white p-3 text-[12px] shadow-lg">
//       <p className="mb-2 font-bold text-[#111827]">{label}</p>
//       {payload.map((p) => (
//         <div key={p.dataKey} className="mb-1 flex items-center gap-2">
//           <span className="h-2 w-2 rounded-full" style={{ background: p.fill }} />
//           <span className="capitalize text-[#8B8FA3]">{p.dataKey}:</span>
//           <span className="font-semibold text-[#111827]">${p.value}k</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// // ═════════════════════════════════════════════════════════════════════════════
// // MAIN DASHBOARD
// // ═════════════════════════════════════════════════════════════════════════════
// const Dashboard = () => {
//   const [activeNav,    setActiveNav]    = useState(0);
//   const [sidebarOpen,  setSidebarOpen]  = useState(false);
//   const [activeFilter, setActiveFilter] = useState("Last 7 days");
//   const [activeTab,    setActiveTab]    = useState("All Products");
//   const [productPage,  setProductPage]  = useState(1);
//   const [orderPage,    setOrderPage]    = useState(1);
//   const [orderSearch,  setOrderSearch]  = useState("");

//   // ── API DATA STATE ─────────────────────────────
//   const [heroStats,  setHeroStats]  = useState(FALLBACK_HERO_STATS);
//   const [semiCircle, setSemiCircle] = useState(FALLBACK_SEMI_CIRCLE);
//   const [salesChart, setSalesChart] = useState(FALLBACK_SALES_CHART);
//   const [statCards,  setStatCards]  = useState(FALLBACK_STAT_CARDS);
//   const [products,   setProducts]   = useState(FALLBACK_PRODUCTS);
//   const [orders,     setOrders]     = useState(FALLBACK_ORDERS);

//   // ── LOADING / ERROR STATE ──────────────────────
//   const [loadingStats,    setLoadingStats]    = useState(true);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [loadingOrders,   setLoadingOrders]   = useState(true);
//   const [errorStats,      setErrorStats]      = useState(null);
//   const [errorProducts,   setErrorProducts]   = useState(null);
//   const [errorOrders,     setErrorOrders]     = useState(null);

//   // ════════════════════════════════════════════════
//   // API CALLS
//   // Token axios interceptor automatically lagayega
//   // ════════════════════════════════════════════════

//   // ── 1. Dashboard Stats ──
//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         setLoadingStats(true);
//         setErrorStats(null);
//         const data = await getApi("/admin/dashboard/stats");
//         if (data.heroStats)  setHeroStats(data.heroStats);
//         if (data.semiCircle) setSemiCircle(data.semiCircle);
//         if (data.salesChart) setSalesChart(data.salesChart);
//         if (data.statCards)  setStatCards(data.statCards);
//       } catch (err) {
//         console.error("Dashboard stats fetch failed:", err);
//         setErrorStats("Stats load nahi hue. Fallback data dikh raha hai.");
//       } finally {
//         setLoadingStats(false);
//       }
//     };
//     fetchStats();
//   }, []);

//   // ── 2. Products ──
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoadingProducts(true);
//         setErrorProducts(null);
//         const data = await getApi("/admin/products");
//         const list = Array.isArray(data) ? data : data.products ?? data.data ?? [];
//         if (list.length > 0) setProducts(list);
//       } catch (err) {
//         console.error("Products fetch failed:", err);
//         setErrorProducts("Products load nahi hue.");
//       } finally {
//         setLoadingProducts(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // ── 3. Recent Orders ──
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         setLoadingOrders(true);
//         setErrorOrders(null);
//         const data = await getApi("/admin/orders/recent");
//         const list = Array.isArray(data) ? data : data.orders ?? data.data ?? [];
//         if (list.length > 0) setOrders(list);
//       } catch (err) {
//         console.error("Orders fetch failed:", err);
//         setErrorOrders("Orders load nahi hue.");
//       } finally {
//         setLoadingOrders(false);
//       }
//     };
//     fetchOrders();
//   }, []);

//   // ── Filtered products ──
//   const filteredProducts = useMemo(
//     () => activeTab === "All Products" ? products : products.filter((p) => p.category === activeTab),
//     [activeTab, products],
//   );
//   const handleTabChange = (tab) => { setActiveTab(tab); setProductPage(1); };
//   const totalProductPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
//   const pagedProducts = filteredProducts.slice(
//     (productPage - 1) * PRODUCTS_PER_PAGE,
//     productPage * PRODUCTS_PER_PAGE,
//   );

//   // ── Filtered orders ──
//   const filteredOrders = useMemo(() => {
//     const q = orderSearch.toLowerCase().trim();
//     if (!q) return orders;
//     return orders.filter(
//       (o) =>
//         o.id?.toLowerCase().includes(q) ||
//         o.customer?.toLowerCase().includes(q) ||
//         o.product?.toLowerCase().includes(q) ||
//         o.status?.toLowerCase().includes(q),
//     );
//   }, [orderSearch, orders]);
//   const handleOrderSearch = (val) => { setOrderSearch(val); setOrderPage(1); };
//   const totalOrderPages = Math.max(1, Math.ceil(filteredOrders.length / ORDERS_PER_PAGE));
//   const pagedOrders = filteredOrders.slice(
//     (orderPage - 1) * ORDERS_PER_PAGE,
//     orderPage * ORDERS_PER_PAGE,
//   );

//   return (
//     <div
//       className="flex h-screen overflow-hidden text-[#1E1E24]"
//       style={{ background: "linear-gradient(135deg,#FFFFFF 0%,#FAFAFC 50%,#F7F5FF 100%)" }}
//     >
//       <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

//       <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
//         <Navbar setSidebarOpen={setSidebarOpen} />

//         <main className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-24 sm:px-6 md:pb-6 lg:px-8">

//           {/* ── HERO ── */}
//           <div className="grid grid-cols-1 gap-4 py-4 lg:grid-cols-[1fr_1.5fr]">
//             <div className="flex flex-col justify-center">
//               <h2 className="mb-3 text-[clamp(22px,3vw,30px)] font-black leading-[1.1] tracking-[-0.03em] text-[#19191F]">
//                 E-commerce<br />Growth Insights
//               </h2>
//               <p className="mb-6 max-w-[300px] text-[12px] font-medium leading-relaxed text-[#8C8C98]">
//                 Track and analyze your online store's performance with AI-powered metrics.
//               </p>
//               <div className="flex flex-wrap gap-3">
//                 {loadingStats
//                   ? Array(3).fill(0).map((_, i) => <Skeleton key={i} className="h-[70px] min-w-[105px]" />)
//                   : heroStats.map(({ value, label }) => (
//                       <div key={label} className="min-w-[105px] rounded-2xl border border-white bg-white/80 px-4 py-3 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
//                         <p className="text-[17px] font-black tracking-[-0.03em] text-[#19191F]">{value}</p>
//                         <div className="mt-1 flex items-center justify-center gap-1.5">
//                           <div className="h-1.5 w-1.5 rounded-full bg-[#C5B8FF]" />
//                           <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8C8C98]">{label}</p>
//                         </div>
//                       </div>
//                     ))
//                 }
//               </div>
//             </div>
//             <div className="relative">
//               <SemiCircleViz data={semiCircle} />
//             </div>
//           </div>

//           {/* ── SALES OVERVIEW ── */}
//           <div className="w-full rounded-2xl border border-white bg-white/80 p-5 sm:p-6 lg:p-7 shadow-sm">
//             <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
//               <div>
//                 <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9AA0B4]">Analytics Report</p>
//                 <h2 className="text-[clamp(20px,3vw,26px)] font-black tracking-[-0.04em] text-[#111827]">Sales Overview</h2>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="flex flex-wrap items-center gap-2">
//                   {CHART_FILTERS.map((item) => (
//                     <Button key={item} variant="outline" onClick={() => setActiveFilter(item)} size="sm" rounded="full"
//                       className={activeFilter === item ? ghostActive : ghost}>
//                       {item}
//                     </Button>
//                   ))}
//                 </div>
//                 <CustomDateRangePicker />
//               </div>
//             </div>

//             {/* Stat Cards */}
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
//               {loadingStats
//                 ? Array(3).fill(0).map((_, i) => <Skeleton key={i} className="h-[130px]" />)
//                 : statCards.map((item, i) => {
//                     const c = STATUS_CONFIG[item.type];
//                     return (
//                       <div key={i} className={`rounded-[20px] border border-white bg-gradient-to-br ${c.cardBg} p-4 h-[130px] flex flex-col justify-between`}>
//                         <div className="flex items-start justify-between">
//                           <div>
//                             <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#8B8FA3]">{c.title}</p>
//                             <h3 className="text-[24px] font-black tracking-[-0.04em] text-[#111827]">{item.value}</h3>
//                           </div>
//                           <div className={`rounded-lg p-1.5 ${c.dotBg}`}>
//                             <div className={`h-2.5 w-2.5 rounded-full ${c.dot}`} />
//                           </div>
//                         </div>
//                         <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold ${c.badgeBg} ${c.badgeColor}`}>
//                           {c.badge}
//                         </span>
//                       </div>
//                     );
//                   })
//               }
//             </div>

//             {/* Legend */}
//             <div className="flex flex-wrap items-center gap-5 mb-6">
//               {[["#A995EA","Successful"],["#F59E0B","Pending"],["#EF4444","Cancelled"]].map(([color, label]) => (
//                 <div key={label} className="flex items-center gap-2">
//                   <div className="h-3 w-3 rounded-full" style={{ background: color }} />
//                   <span className="text-[13px] font-medium text-[#70758A]">{label}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Bar Chart */}
//             <div className="h-[300px] w-full rounded-[20px] bg-[#FCFCFD] p-3">
//               {loadingStats
//                 ? <Skeleton className="h-full w-full rounded-[16px]" />
//                 : (
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={salesChart} barGap={8}>
//                       <CartesianGrid strokeDasharray="4 6" vertical={false} stroke="#ECECF2" />
//                       <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: "#8B8FA3", fontSize: 11, fontWeight: 500 }} />
//                       <YAxis tickLine={false} axisLine={false} tick={{ fill: "#8B8FA3", fontSize: 11 }} ticks={[0,5,10,15,20,25,30]} tickFormatter={(v) => `$${v}k`} />
//                       <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(169,149,234,0.06)" }} />
//                       <Bar dataKey="successful" fill="#A995EA" radius={[10,10,10,10]} barSize={36} />
//                       <Bar dataKey="pending"    fill="#FDE9C7" radius={[10,10,10,10]} barSize={36} />
//                       <Bar dataKey="cancelled"  fill="#F8D7D7" radius={[10,10,10,10]} barSize={36} />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 )
//               }
//             </div>
//           </div>

//           {/* ── TOP SELLING PRODUCTS ── */}
//           <div className="w-full rounded-[28px] border border-[#ECECF2] bg-white/95 p-5 sm:p-6 lg:p-7 mt-6">
//             <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
//               <div>
//                 <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9AA0B4]">Product Performance</p>
//                 <h2 className="text-[clamp(20px,3vw,26px)] font-black tracking-[-0.04em] text-[#111827]">Top Selling Products</h2>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Button size="sm" variant="outline" rounded="full" className={ghost} leftIcon={<Filter size={13} />}>
//                   <span className="flex items-center gap-1.5">Filter</span>
//                 </Button>
//                 <Button size="sm" variant="outline" rounded="full" className={ghost} leftIcon={<Download size={13} />}>
//                   <span className="flex items-center gap-1.5">Export</span>
//                 </Button>
//               </div>
//             </div>

//             <div className="mb-5 flex gap-1 rounded-full bg-[#F5F5F8] p-1 w-fit">
//               {PRODUCT_TABS.map((tab) => (
//                 <Button key={tab} size="sm" rounded="full" variant="outline" onClick={() => handleTabChange(tab)}
//                   className={`px-4 text-[11px] ${activeTab === tab ? ghostActive : ghost}`}>
//                   {tab}
//                 </Button>
//               ))}
//             </div>

//             {errorProducts && (
//               <div className="mb-4 rounded-xl bg-amber-50 px-4 py-2.5 text-[12px] font-medium text-amber-700">
//                 ⚠️ {errorProducts} Fallback data dikh raha hai.
//               </div>
//             )}

//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="border-b border-[#ECECF2]">
//                     {["#","Product","Units Sold","Revenue","Avg. Price","Status","7-Day Trend","Stock Level"].map((h, i) => (
//                       <th key={h} className={`py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-[#9AA0B4] ${i >= 2 ? "text-right" : "text-left"} ${i === 5 ? "!text-center" : ""}`}>
//                         {h}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {loadingProducts
//                     ? Array(PRODUCTS_PER_PAGE).fill(0).map((_, i) => (
//                         <tr key={i} className="border-b border-[#ECECF2]">
//                           {Array(8).fill(0).map((__, j) => (
//                             <td key={j} className="py-4 px-4"><Skeleton className="h-4 w-full" /></td>
//                           ))}
//                         </tr>
//                       ))
//                     : pagedProducts.length === 0
//                       ? <tr><td colSpan={8} className="py-10 text-center text-[13px] text-[#9AA0B4]">No products found in this category.</td></tr>
//                       : pagedProducts.map((product) => {
//                           const globalRank = filteredProducts.indexOf(product) + 1;
//                           return (
//                             <tr key={product.sku} className="cursor-pointer border-b border-[#ECECF2] transition-colors hover:bg-[#FAFAFC] last:border-none">
//                               <td className="py-4 px-4">
//                                 <span className={`inline-flex h-6 w-6 items-center justify-center rounded-[8px] text-[11px] font-bold ${rankStyle(globalRank - 1)}`}>
//                                   {globalRank}
//                                 </span>
//                               </td>
//                               <td className="py-4 px-4">
//                                 <div className="flex items-center gap-3">
//                                   <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[12px] text-[18px] ${product.thumbBg}`}>
//                                     {product.emoji}
//                                   </div>
//                                   <div>
//                                     <p className="text-[13px] font-semibold text-[#111827]">{product.name}</p>
//                                     <p className="text-[11px] font-mono text-[#9AA0B4]">{product.sku}</p>
//                                   </div>
//                                 </div>
//                               </td>
//                               <td className="py-4 px-4 text-right text-[13px] font-semibold text-[#111827]">{product.units?.toLocaleString()}</td>
//                               <td className="py-4 px-4 text-right text-[13px] font-bold text-[#111827]">{product.revenue}</td>
//                               <td className="py-4 px-4 text-right text-[13px] text-[#8B8FA3]">{product.avgPrice}</td>
//                               <td className="py-4 px-4 text-center">
//                                 <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${statusBadgeClass(product.status)}`}>
//                                   {product.status}
//                                 </span>
//                               </td>
//                               <td className="py-4 px-4 text-right">
//                                 <span className={`flex items-center justify-end gap-1 text-[12px] font-semibold ${product.trend > 0 ? "text-emerald-600" : "text-red-500"}`}>
//                                   {product.trend > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
//                                   {product.trend > 0 ? "+" : ""}{product.trend}%
//                                 </span>
//                               </td>
//                               <td className="py-4 px-4">
//                                 <div className="flex items-center justify-end gap-2">
//                                   <span className="text-[11px] text-[#8B8FA3]">{product.stock}%</span>
//                                   <div className="h-[5px] w-[72px] overflow-hidden rounded-full bg-[#F0F0F5]">
//                                     <div className="h-full rounded-full transition-all"
//                                       style={{ width: `${product.stock}%`, background: product.stock > 50 ? "#A995EA" : product.stock > 15 ? "#F59E0B" : "#EF4444" }} />
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                           );
//                         })
//                   }
//                 </tbody>
//               </table>
//             </div>
//             <div className="mt-5">
//               <Pagination page={productPage} totalPages={totalProductPages} onPageChange={setProductPage}
//                 showInfo totalItems={filteredProducts.length} itemsPerPage={PRODUCTS_PER_PAGE} />
//             </div>
//           </div>

//           {/* ── RECENT ORDERS ── */}
//           <div className="mt-6 rounded-[32px] border border-[#ECECF2] bg-white p-5 sm:p-6 lg:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
//             <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//               <div>
//                 <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#A1A1B5]">Order Management</p>
//                 <h2 className="text-[24px] font-black tracking-[-0.04em] text-[#111827]">Recent Orders</h2>
//                 <p className="mt-2 text-[13px] text-[#8B8FA3]">Track latest customer purchases and order activity.</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="flex items-center gap-2 rounded-full border border-[#ECECF2] bg-[#FAFAFC] px-4 py-2">
//                   <Search size={14} className="text-[#9AA0B4]" />
//                   <input type="text" placeholder="Search orders..." value={orderSearch}
//                     onChange={(e) => handleOrderSearch(e.target.value)}
//                     className="bg-transparent text-[12px] outline-none placeholder:text-[#9AA0B4]" />
//                 </div>
//                 <Button size="sm" variant="outline" rounded="full" className={ghost} leftIcon={<Filter size={13} />}>
//                   <span className="flex items-center gap-1.5">Filter</span>
//                 </Button>
//               </div>
//             </div>

//             {errorOrders && (
//               <div className="mb-4 rounded-xl bg-amber-50 px-4 py-2.5 text-[12px] font-medium text-amber-700">
//                 ⚠️ {errorOrders} Fallback data dikh raha hai.
//               </div>
//             )}

//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[950px] border-collapse">
//                 <thead>
//                   <tr className="border-b border-[#ECECF2]">
//                     {["Order ID","Customer","Product","Date","Amount","Status","Action"].map((head, i) => (
//                       <th key={head} className={`px-4 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9AA0B4] ${i === 3 ? "text-center" : i >= 4 ? "text-right" : "text-left"} ${i === 5 ? "!text-center" : ""}`}>
//                         {head}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {loadingOrders
//                     ? Array(ORDERS_PER_PAGE).fill(0).map((_, i) => (
//                         <tr key={i} className="border-b border-[#ECECF2]">
//                           {Array(7).fill(0).map((__, j) => (
//                             <td key={j} className="px-4 py-4"><Skeleton className="h-4 w-full" /></td>
//                           ))}
//                         </tr>
//                       ))
//                     : pagedOrders.length === 0
//                       ? <tr><td colSpan={7} className="py-10 text-center text-[13px] text-[#9AA0B4]">No orders match your search.</td></tr>
//                       : pagedOrders.map((order) => (
//                           <tr key={order.id} className="border-b border-[#F3F4F6] transition-all duration-200 hover:bg-[#FAFAFC] last:border-none">
//                             <td className="px-4 py-4">
//                               <span className="text-[12px] font-bold text-[#7C6CF2]">{order.id}</span>
//                             </td>
//                             <td className="px-4 py-4">
//                               <div className="flex items-center gap-3">
//                                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF] text-[11px] font-bold text-white">
//                                   {order.avatar}
//                                 </div>
//                                 <div>
//                                   <p className="text-[13px] font-semibold text-[#111827]">{order.customer}</p>
//                                   <p className="text-[11px] text-[#9AA0B4]">Premium Customer</p>
//                                 </div>
//                               </div>
//                             </td>
//                             <td className="px-4 py-4 text-[13px] font-medium text-[#111827]">{order.product}</td>
//                             <td className="px-4 py-4 text-center text-[13px] text-[#6B7280]">{order.date}</td>
//                             <td className="px-4 py-4 text-center text-[13px] font-bold text-[#111827]">{order.amount}</td>
//                             <td className="px-4 py-4 text-center">
//                               <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${
//                                 order.status === "Completed"  ? "bg-emerald-100 text-emerald-600" :
//                                 order.status === "Pending"    ? "bg-orange-100 text-orange-600"   :
//                                 order.status === "Cancelled"  ? "bg-red-100 text-red-600"          :
//                                                                 "bg-blue-100 text-blue-600"
//                               }`}>
//                                 {order.status}
//                               </span>
//                             </td>
//                             <td className="px-4 py-4 text-right">
//                               <button className="rounded-full border border-[#ECECF2] bg-[#FAFAFC] p-2 text-[#6B7280] transition-all duration-200 hover:bg-[#F3F4F6] hover:text-[#111827]">
//                                 <MoreHorizontal size={15} />
//                               </button>
//                             </td>
//                           </tr>
//                         ))
//                   }
//                 </tbody>
//               </table>
//             </div>
//             <div className="mt-6">
//               <Pagination page={orderPage} totalPages={totalOrderPages} onPageChange={setOrderPage}
//                 showInfo totalItems={filteredOrders.length} itemsPerPage={ORDERS_PER_PAGE} />
//             </div>
//           </div>

//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import { useEffect, useMemo, useRef, useState } from "react";
import {
  TrendingDown,
  TrendingUp,
  Filter,
  Download,
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
import Navbar   from "../../components/common/Navbar";
import CustomDateRangePicker from "../../components/calendar";
import Button     from "../../components/ui/Button";
import Pagination from "../../components/pagination";
import { getApi } from "../../api/apiFunctions";   // ← API helper

// ─── FALLBACK / STATIC DATA (jab tak API na aaye) ────────────────────────────
const FALLBACK_HERO_STATS = [
  { value: "$1.58M", label: "Revenue"   },
  { value: "13.7K",  label: "Orders"    },
  { value: "8.4K",   label: "Customers" },
];

const FALLBACK_SEMI_CIRCLE = {
  totalSales: "$46,354.00",
  floatCards: [
    { label: "Total Orders",    value: "3,460",    change: "+8%",   up: true,  position: "top"   },
    { label: "Total Revenue",   value: "$120,540",  change: "+12%",  up: true,  position: "left"  },
    { label: "Conversion Rate", value: "3.8%",      change: "-0.4%", up: false, position: "right" },
  ],
};

const FALLBACK_SALES_CHART = [
  { name: "May 14", successful: 18, pending: 3,   cancelled: 1   },
  { name: "May 15", successful: 22, pending: 4,   cancelled: 0.8 },
  { name: "May 16", successful: 19, pending: 2.5, cancelled: 1.2 },
  { name: "May 17", successful: 24, pending: 3.8, cancelled: 0.6 },
  { name: "May 18", successful: 21, pending: 2.8, cancelled: 1   },
  { name: "May 19", successful: 26, pending: 4.5, cancelled: 0.7 },
  { name: "May 20", successful: 23, pending: 3.5, cancelled: 0.5 },
];

const FALLBACK_STAT_CARDS = [
  { type: "successful", value: "$156k" },
  { type: "pending",    value: "27"    },
  { type: "cancelled",  value: "$7k"   },
];

const FALLBACK_PRODUCTS = [
  { name: "AirWave Pro Headphones", sku: "SKU #AW-4821", emoji: "🎧", thumbBg: "bg-[#EEF1FF]", units: 3842, revenue: "$192,100", avgPrice: "$50.00",  status: "In Stock",     trend: 18.4, stock: 82, category: "Electronics"   },
  { name: "NovaBand Smart Watch",   sku: "SKU #NB-2210", emoji: "⌚", thumbBg: "bg-[#FFF4E5]", units: 2561, revenue: "$307,320", avgPrice: "$120.00", status: "In Stock",     trend: 11.2, stock: 61, category: "Electronics"   },
  { name: "UrbanStep Sneakers",     sku: "SKU #US-8803", emoji: "👟", thumbBg: "bg-[#EEFAEA]", units: 2204, revenue: "$154,280", avgPrice: "$70.00",  status: "Low Stock",    trend: 7.6,  stock: 28, category: "Apparel"       },
  { name: "LightDesk Laptop Stand", sku: "SKU #LD-5590", emoji: "💻", thumbBg: "bg-[#F0EEFF]", units: 1987, revenue: "$89,415",  avgPrice: "$45.00",  status: "In Stock",     trend: -2.1, stock: 74, category: "Home & Garden" },
  { name: "TrailBlaze Backpack",    sku: "SKU #TB-1147", emoji: "🎒", thumbBg: "bg-[#FFF0F0]", units: 1654, revenue: "$82,700",  avgPrice: "$50.00",  status: "Out of Stock", trend: -5.8, stock: 0,  category: "Apparel"       },
  { name: "SolShade Sunglasses",    sku: "SKU #SS-3391", emoji: "🕶️", thumbBg: "bg-[#E8FAFF]", units: 1403, revenue: "$56,120",  avgPrice: "$40.00",  status: "In Stock",     trend: 4.3,  stock: 55, category: "Apparel"       },
  { name: "ZenBloom Diffuser",      sku: "SKU #ZB-7721", emoji: "🕯️", thumbBg: "bg-[#FFF8F0]", units: 1289, revenue: "$38,670",  avgPrice: "$30.00",  status: "In Stock",     trend: 6.1,  stock: 90, category: "Home & Garden" },
  { name: "PulseX Fitness Band",    sku: "SKU #PX-0044", emoji: "💪", thumbBg: "bg-[#EDFFF4]", units: 1102, revenue: "$55,100",  avgPrice: "$50.00",  status: "Low Stock",    trend: 3.7,  stock: 18, category: "Electronics"   },
  { name: "Canvas City Tote",       sku: "SKU #CC-5512", emoji: "👜", thumbBg: "bg-[#FDEEFF]", units: 987,  revenue: "$29,610",  avgPrice: "$30.00",  status: "In Stock",     trend: 1.9,  stock: 67, category: "Apparel"       },
  { name: "AeroDesk Fan Pro",       sku: "SKU #AF-3309", emoji: "🌀", thumbBg: "bg-[#F0F8FF]", units: 876,  revenue: "$52,560",  avgPrice: "$60.00",  status: "Out of Stock", trend: -3.2, stock: 0,  category: "Home & Garden" },
  { name: "HyperCharge Dock",       sku: "SKU #HC-9981", emoji: "🔌", thumbBg: "bg-[#FFFAE8]", units: 754,  revenue: "$37,700",  avgPrice: "$50.00",  status: "In Stock",     trend: 8.4,  stock: 45, category: "Electronics"   },
  { name: "GreenLeaf Planter",      sku: "SKU #GL-2247", emoji: "🪴", thumbBg: "bg-[#F0FFF4]", units: 631,  revenue: "$12,620",  avgPrice: "$20.00",  status: "In Stock",     trend: 12.0, stock: 95, category: "Home & Garden" },
];

const FALLBACK_ORDERS = [
  { id: "#ORD-1021", customer: "Ethan Carter",   product: "AirPods Pro Max",       date: "22 May 2026", amount: "$499",  status: "Completed",  avatar: "EC" },
  { id: "#ORD-1022", customer: "Sophia Lee",     product: "Gaming Console X",      date: "21 May 2026", amount: "$799",  status: "Pending",    avatar: "SL" },
  { id: "#ORD-1023", customer: "James Smith",    product: "MacBook Air M3",        date: "20 May 2026", amount: "$1499", status: "Completed",  avatar: "JS" },
  { id: "#ORD-1024", customer: "Olivia Brown",   product: "Smart Watch Ultra",     date: "20 May 2026", amount: "$299",  status: "Cancelled",  avatar: "OB" },
  { id: "#ORD-1025", customer: "William Roy",    product: "Nike Air Jordan",       date: "19 May 2026", amount: "$249",  status: "Processing", avatar: "WR" },
  { id: "#ORD-1026", customer: "Ava Martinez",   product: "Yoga Mat Premium",      date: "19 May 2026", amount: "$89",   status: "Completed",  avatar: "AM" },
  { id: "#ORD-1027", customer: "Noah Wilson",    product: "Mechanical Keyboard",   date: "18 May 2026", amount: "$179",  status: "Processing", avatar: "NW" },
  { id: "#ORD-1028", customer: "Isabella Clark", product: "LED Desk Lamp",         date: "18 May 2026", amount: "$59",   status: "Pending",    avatar: "IC" },
  { id: "#ORD-1029", customer: "Liam Johnson",   product: "Noise Cancelling Buds", date: "17 May 2026", amount: "$229",  status: "Completed",  avatar: "LJ" },
  { id: "#ORD-1030", customer: "Emma Davis",     product: "Running Shoes Z10",     date: "17 May 2026", amount: "$139",  status: "Cancelled",  avatar: "ED" },
];

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const PRODUCTS_PER_PAGE = 6;
const ORDERS_PER_PAGE   = 5;
const PRODUCT_TABS      = ["All Products", "Electronics", "Apparel", "Home & Garden"];
const CHART_FILTERS     = ["Last 7 days", "Weekly", "Monthly"];

// ─── STATUS CONFIG ────────────────────────────────────────────────────────────
const STATUS_CONFIG = {
  successful: {
    title: "Successful", badge: "↑ +14% Growth",
    badgeColor: "text-emerald-600", badgeBg: "bg-emerald-50",
    dot: "bg-[#A995EA]", dotBg: "bg-[#A995EA]/10",
    cardBg: "from-[#F7F5FF] to-[#F3F1FF]",
  },
  pending: {
    title: "Pending", badge: "Processing",
    badgeColor: "text-amber-600", badgeBg: "bg-amber-50",
    dot: "bg-amber-400", dotBg: "bg-amber-400/10",
    cardBg: "from-[#FFF9EE] to-[#FFF6E7]",
  },
  cancelled: {
    title: "Cancelled", badge: "↓ -6% Loss",
    badgeColor: "text-red-500", badgeBg: "bg-red-50",
    dot: "bg-red-400", dotBg: "bg-red-400/10",
    cardBg: "from-[#FFF4F4] to-[#FFEFEF]",
  },
};

// ─── STYLE HELPERS ────────────────────────────────────────────────────────────
const ghost =
  "bg-white text-[#111827] border border-[#E6E7EE] hover:bg-[#111827] hover:text-white hover:border-[#111827] text-[12px] font-semibold transition-all duration-300 cursor-pointer";
const ghostActive =
  "bg-black text-white border border-[#111827] text-[12px] font-semibold transition-all duration-300 cursor-pointer";

const rankStyle = (i) =>
  ["bg-[#FFF0C2] text-[#9A6600]", "bg-[#EDEDF4] text-[#5B5B72]", "bg-[#FDEEDE] text-[#8A4A12]"][i]
  ?? "bg-[#F5F5F8] text-[#8B8FA3]";

const statusBadgeClass = (s) =>
  ({ "In Stock": "bg-emerald-50 text-emerald-700", "Low Stock": "bg-amber-50 text-amber-700", "Out of Stock": "bg-red-50 text-red-500" })[s] ?? "";

// ─── SKELETON LOADER ─────────────────────────────────────────────────────────
const Skeleton = ({ className = "" }) => (
  <div className={`animate-pulse rounded-xl bg-[#ECECF2] ${className}`} />
);

// ─── FLOAT CARD ───────────────────────────────────────────────────────────────
const FloatCard = ({ label, value, change, up, className }) => (
  <div className={`absolute z-10 min-w-[130px] rounded-2xl border border-[#E6E6EC] bg-white/95 px-4 py-3 shadow-lg ${className}`}>
    <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#8C8C98]">{label}</p>
    <p className="mb-1.5 text-xl font-extrabold leading-none text-[#1E1E24]">{value}</p>
    <span className={`inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-[11px] font-bold ${up ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-400"}`}>
      {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
      {change}
    </span>
  </div>
);

// ─── SEMI-CIRCLE VIZ ─────────────────────────────────────────────────────────
const posClass = {
  top:   "left-1/2 top-[-10%] -translate-x-1/2",
  left:  "left-[4%] top-[44%] -translate-y-1/2",
  right: "right-[4%] top-[44%] -translate-y-1/2",
};

const SemiCircleViz = ({ data }) => (
  <div className="relative flex h-[280px] w-full items-end justify-center overflow-visible">
    <div className="absolute bottom-0 left-1/2 z-[2] h-[200px] w-[380px] -translate-x-1/2 rounded-t-[200px] border-2 border-b-0 border-[rgba(191,177,255,0.5)]">
      <div className="absolute left-1/2 top-[-5px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#B9A9FF]" />
      <div className="absolute bottom-[104px] left-[6%]  h-2 w-2 rounded-full bg-[#C5B8FF]" />
      <div className="absolute bottom-[104px] right-[6%] h-2 w-2 rounded-full bg-[#C5B8FF]" />
    </div>
    <div className="absolute bottom-0 left-1/2 z-[3] h-[190px] w-[355px] -translate-x-1/2 overflow-hidden rounded-t-[190px] bg-gradient-to-b from-[rgba(139,119,230,0.4)] to-transparent" />
    <div className="absolute bottom-6 left-1/2 z-[5] -translate-x-1/2 whitespace-nowrap text-center">
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-[#8D8D99]">Total Sales</p>
      <p className="text-[40px] font-black leading-none tracking-[-0.05em] text-[#19191F]">
        {data.totalSales}<span className="text-[20px]"></span>
      </p>
    </div>
    {data.floatCards.map((c) => (
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
          <span className="h-2 w-2 rounded-full" style={{ background: p.fill }} />
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
  const [activeNav,    setActiveNav]    = useState(0);
  const [sidebarOpen,  setSidebarOpen]  = useState(false);
  const [activeFilter, setActiveFilter] = useState("Last 7 days");
  const [activeTab,    setActiveTab]    = useState("All Products");
  const [productPage,  setProductPage]  = useState(1);
  const [orderPage,    setOrderPage]    = useState(1);
  const [orderSearch,  setOrderSearch]  = useState("");

  // ── API DATA STATE ─────────────────────────────
  const [heroStats,  setHeroStats]  = useState(FALLBACK_HERO_STATS);
  const [semiCircle, setSemiCircle] = useState(FALLBACK_SEMI_CIRCLE);
  const [salesChart, setSalesChart] = useState(FALLBACK_SALES_CHART);
  const [statCards,  setStatCards]  = useState(FALLBACK_STAT_CARDS);
  const [products,   setProducts]   = useState(FALLBACK_PRODUCTS);
  const [orders,     setOrders]     = useState(FALLBACK_ORDERS);

  // ── LOADING / ERROR STATE ──────────────────────
  const [loadingStats,    setLoadingStats]    = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingOrders,   setLoadingOrders]   = useState(true);
  const [errorStats,      setErrorStats]      = useState(null);
  const [errorProducts,   setErrorProducts]   = useState(null);
  const [errorOrders,     setErrorOrders]     = useState(null);

  // ════════════════════════════════════════════════
  // API CALLS
  // Token axios interceptor automatically lagayega
  // ════════════════════════════════════════════════

  // ── 1. Dashboard Stats ──
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoadingStats(true);
        setErrorStats(null);
        const data = await getApi("/dashboard");
        
      } catch (err) {
        console.error("Dashboard stats fetch failed:", err);
        setErrorStats("Stats load nahi hue. Fallback data dikh raha hai.");
      } finally {
        setLoadingStats(false);
      }
    };
    fetchStats();
  }, []);

  // ── 2. Products ──
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       setLoadingProducts(true);
  //       setErrorProducts(null);
  //       const data = await getApi("/admin/products");
  //       const list = Array.isArray(data) ? data : data.products ?? data.data ?? [];
  //       if (list.length > 0) setProducts(list);
  //     } catch (err) {
  //       console.error("Products fetch failed:", err);
  //       setErrorProducts("Products load nahi hue.");
  //     } finally {
  //       setLoadingProducts(false);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  // ── 3. Recent Orders ──
  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     try {
  //       setLoadingOrders(true);
  //       setErrorOrders(null);
  //       const data = await getApi("/admin/orders/recent");
  //       const list = Array.isArray(data) ? data : data.orders ?? data.data ?? [];
  //       if (list.length > 0) setOrders(list);
  //     } catch (err) {
  //       console.error("Orders fetch failed:", err);
  //       setErrorOrders("Orders load nahi hue.");
  //     } finally {
  //       setLoadingOrders(false);
  //     }
  //   };
  //   fetchOrders();
  // }, []);

  // ── Filtered products ──
  const filteredProducts = useMemo(
    () => activeTab === "All Products" ? products : products.filter((p) => p.category === activeTab),
    [activeTab, products],
  );
  const handleTabChange = (tab) => { setActiveTab(tab); setProductPage(1); };
  const totalProductPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const pagedProducts = filteredProducts.slice(
    (productPage - 1) * PRODUCTS_PER_PAGE,
    productPage * PRODUCTS_PER_PAGE,
  );

  // ── Filtered orders ──
  const filteredOrders = useMemo(() => {
    const q = orderSearch.toLowerCase().trim();
    if (!q) return orders;
    return orders.filter(
      (o) =>
        o.id?.toLowerCase().includes(q) ||
        o.customer?.toLowerCase().includes(q) ||
        o.product?.toLowerCase().includes(q) ||
        o.status?.toLowerCase().includes(q),
    );
  }, [orderSearch, orders]);
  const handleOrderSearch = (val) => { setOrderSearch(val); setOrderPage(1); };
  const totalOrderPages = Math.max(1, Math.ceil(filteredOrders.length / ORDERS_PER_PAGE));
  const pagedOrders = filteredOrders.slice(
    (orderPage - 1) * ORDERS_PER_PAGE,
    orderPage * ORDERS_PER_PAGE,
  );

  return (
    <div
      className="flex h-screen overflow-hidden text-[#1E1E24]"
      style={{
        background:
          "linear-gradient(135deg,var(--grad-hero-from),var(--grad-hero-via),var(--grad-hero-to))",
      }}
    >
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-24 sm:px-6 md:pb-6 lg:px-8">

          {/* ── HERO ── */}
          <div className="grid grid-cols-1 gap-4 py-4 lg:grid-cols-[1fr_1.5fr]">
            <div className="flex flex-col justify-center">
              <h2 className="mb-3 text-[clamp(22px,3vw,30px)] font-black leading-[1.1] tracking-[-0.03em] text-[#19191F]">
                E-commerce<br />Growth Insights
              </h2>
              <p className="mb-6 max-w-[300px] text-[12px] font-medium leading-relaxed text-[#8C8C98]">
                Track and analyze your online store's performance with AI-powered metrics.
              </p>
              <div className="flex flex-wrap gap-3">
                {loadingStats
                  ? Array(3).fill(0).map((_, i) => <Skeleton key={i} className="h-[70px] min-w-[105px]" />)
                  : heroStats.map(({ value, label }) => (
                      <div key={label} className="min-w-[105px] rounded-2xl border border-white bg-white/80 px-4 py-3 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                        <p className="text-[17px] font-black tracking-[-0.03em] text-[#19191F]">{value}</p>
                        <div className="mt-1 flex items-center justify-center gap-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#C5B8FF]" />
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8C8C98]">{label}</p>
                        </div>
                      </div>
                    ))
                }
              </div>
            </div>
            <div className="relative">
              <SemiCircleViz data={semiCircle} />
            </div>
          </div>

          {/* ── SALES OVERVIEW ── */}
          <div className="w-full rounded-2xl border border-white bg-white/80 p-5 sm:p-6 lg:p-7 shadow-sm">
            <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9AA0B4]">Analytics Report</p>
                <h2 className="text-[clamp(20px,3vw,26px)] font-black tracking-[-0.04em] text-[#111827]">Sales Overview</h2>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {CHART_FILTERS.map((item) => (
                    <Button key={item} variant="outline" onClick={() => setActiveFilter(item)} size="sm" rounded="full"
                      className={activeFilter === item ? ghostActive : ghost}>
                      {item}
                    </Button>
                  ))}
                </div>
                <CustomDateRangePicker />
              </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
              {loadingStats
                ? Array(3).fill(0).map((_, i) => <Skeleton key={i} className="h-[130px]" />)
                : statCards.map((item, i) => {
                    const c = STATUS_CONFIG[item.type];
                    return (
                      <div key={i} className={`rounded-[20px] border border-white bg-gradient-to-br ${c.cardBg} p-4 h-[130px] flex flex-col justify-between`}>
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#8B8FA3]">{c.title}</p>
                            <h3 className="text-[24px] font-black tracking-[-0.04em] text-[#111827]">{item.value}</h3>
                          </div>
                          <div className={`rounded-lg p-1.5 ${c.dotBg}`}>
                            <div className={`h-2.5 w-2.5 rounded-full ${c.dot}`} />
                          </div>
                        </div>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold ${c.badgeBg} ${c.badgeColor}`}>
                          {c.badge}
                        </span>
                      </div>
                    );
                  })
              }
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-5 mb-6">
              {[["#A995EA","Successful"],["#F59E0B","Pending"],["#EF4444","Cancelled"]].map(([color, label]) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ background: color }} />
                  <span className="text-[13px] font-medium text-[#70758A]">{label}</span>
                </div>
              ))}
            </div>

            {/* Bar Chart */}
            <div className="h-[300px] w-full rounded-[20px] bg-[#FCFCFD] p-3">
              {loadingStats
                ? <Skeleton className="h-full w-full rounded-[16px]" />
                : (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesChart} barGap={8}>
                      <CartesianGrid strokeDasharray="4 6" vertical={false} stroke="#ECECF2" />
                      <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: "#8B8FA3", fontSize: 11, fontWeight: 500 }} />
                      <YAxis tickLine={false} axisLine={false} tick={{ fill: "#8B8FA3", fontSize: 11 }} ticks={[0,5,10,15,20,25,30]} tickFormatter={(v) => `$${v}k`} />
                      <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(169,149,234,0.06)" }} />
                      <Bar dataKey="successful" fill="#A995EA" radius={[10,10,10,10]} barSize={36} />
                      <Bar dataKey="pending"    fill="#FDE9C7" radius={[10,10,10,10]} barSize={36} />
                      <Bar dataKey="cancelled"  fill="#F8D7D7" radius={[10,10,10,10]} barSize={36} />
                    </BarChart>
                  </ResponsiveContainer>
                )
              }
            </div>
          </div>

          {/* ── TOP SELLING PRODUCTS ── */}
          <div className="w-full rounded-[28px] border border-[#ECECF2] bg-white/95 p-5 sm:p-6 lg:p-7 mt-6">
            <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9AA0B4]">Product Performance</p>
                <h2 className="text-[clamp(20px,3vw,26px)] font-black tracking-[-0.04em] text-[#111827]">Top Selling Products</h2>
              </div>
              <div className="flex items-center gap-3">
                <Button size="sm" variant="outline" rounded="full" className={ghost} leftIcon={<Filter size={13} />}>
                  <span className="flex items-center gap-1.5">Filter</span>
                </Button>
                <Button size="sm" variant="outline" rounded="full" className={ghost} leftIcon={<Download size={13} />}>
                  <span className="flex items-center gap-1.5">Export</span>
                </Button>
              </div>
            </div>

            <div className="mb-5 flex gap-1 rounded-full bg-[#F5F5F8] p-1 w-fit">
              {PRODUCT_TABS.map((tab) => (
                <Button key={tab} size="sm" rounded="full" variant="outline" onClick={() => handleTabChange(tab)}
                  className={`px-4 text-[11px] ${activeTab === tab ? ghostActive : ghost}`}>
                  {tab}
                </Button>
              ))}
            </div>

            {/* {errorProducts && (
              <div className="mb-4 rounded-xl bg-amber-50 px-4 py-2.5 text-[12px] font-medium text-amber-700">
                ⚠️ {errorProducts} Fallback data dikh raha hai.
              </div>
            )} */}

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#ECECF2]">
                    {["#","Product","Units Sold","Revenue","Avg. Price","Status","7-Day Trend","Stock Level"].map((h, i) => (
                      <th key={h} className={`py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-[#9AA0B4] ${i >= 2 ? "text-right" : "text-left"} ${i === 5 ? "!text-center" : ""}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {loadingProducts
                    ? Array(PRODUCTS_PER_PAGE).fill(0).map((_, i) => (
                        <tr key={i} className="border-b border-[#ECECF2]">
                          {Array(8).fill(0).map((__, j) => (
                            <td key={j} className="py-4 px-4"><Skeleton className="h-4 w-full" /></td>
                          ))}
                        </tr>
                      ))
                    : pagedProducts.length === 0
                      ? <tr><td colSpan={8} className="py-10 text-center text-[13px] text-[#9AA0B4]">No products found in this category.</td></tr>
                      : pagedProducts.map((product) => {
                          const globalRank = filteredProducts.indexOf(product) + 1;
                          return (
                            <tr key={product.sku} className="cursor-pointer border-b border-[#ECECF2] transition-colors hover:bg-[#FAFAFC] last:border-none">
                              <td className="py-4 px-4">
                                <span className={`inline-flex h-6 w-6 items-center justify-center rounded-[8px] text-[11px] font-bold ${rankStyle(globalRank - 1)}`}>
                                  {globalRank}
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[12px] text-[18px] ${product.thumbBg}`}>
                                    {product.emoji}
                                  </div>
                                  <div>
                                    <p className="text-[13px] font-semibold text-[#111827]">{product.name}</p>
                                    <p className="text-[11px] font-mono text-[#9AA0B4]">{product.sku}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 px-4 text-right text-[13px] font-semibold text-[#111827]">{product.units?.toLocaleString()}</td>
                              <td className="py-4 px-4 text-right text-[13px] font-bold text-[#111827]">{product.revenue}</td>
                              <td className="py-4 px-4 text-right text-[13px] text-[#8B8FA3]">{product.avgPrice}</td>
                              <td className="py-4 px-4 text-center">
                                <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${statusBadgeClass(product.status)}`}>
                                  {product.status}
                                </span>
                              </td>
                              <td className="py-4 px-4 text-right">
                                <span className={`flex items-center justify-end gap-1 text-[12px] font-semibold ${product.trend > 0 ? "text-emerald-600" : "text-red-500"}`}>
                                  {product.trend > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                                  {product.trend > 0 ? "+" : ""}{product.trend}%
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center justify-end gap-2">
                                  <span className="text-[11px] text-[#8B8FA3]">{product.stock}%</span>
                                  <div className="h-[5px] w-[72px] overflow-hidden rounded-full bg-[#F0F0F5]">
                                    <div className="h-full rounded-full transition-all"
                                      style={{ width: `${product.stock}%`, background: product.stock > 50 ? "#A995EA" : product.stock > 15 ? "#F59E0B" : "#EF4444" }} />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                  }
                </tbody>
              </table>
            </div>
            <div className="mt-5">
              <Pagination page={productPage} totalPages={totalProductPages} onPageChange={setProductPage}
                showInfo totalItems={filteredProducts.length} itemsPerPage={PRODUCTS_PER_PAGE} />
            </div>
          </div>

          {/* ── RECENT ORDERS ── */}
          <div className="mt-6 rounded-[32px] border border-[#ECECF2] bg-white p-5 sm:p-6 lg:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#A1A1B5]">Order Management</p>
                <h2 className="text-[24px] font-black tracking-[-0.04em] text-[#111827]">Recent Orders</h2>
                <p className="mt-2 text-[13px] text-[#8B8FA3]">Track latest customer purchases and order activity.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-[#ECECF2] bg-[#FAFAFC] px-4 py-2">
                  <Search size={14} className="text-[#9AA0B4]" />
                  <input type="text" placeholder="Search orders..." value={orderSearch}
                    onChange={(e) => handleOrderSearch(e.target.value)}
                    className="bg-transparent text-[12px] outline-none placeholder:text-[#9AA0B4]" />
                </div>
                <Button size="sm" variant="outline" rounded="full" className={ghost} leftIcon={<Filter size={13} />}>
                  <span className="flex items-center gap-1.5">Filter</span>
                </Button>
              </div>
            </div>

            {/* {errorOrders && (
              <div className="mb-4 rounded-xl bg-amber-50 px-4 py-2.5 text-[12px] font-medium text-amber-700">
                ⚠️ {errorOrders} Fallback data dikh raha hai.
              </div>
            )} */}

            <div className="overflow-x-auto">
              <table className="w-full min-w-[950px] border-collapse">
                <thead>
                  <tr className="border-b border-[#ECECF2]">
                    {["Order ID","Customer","Product","Date","Amount","Status","Action"].map((head, i) => (
                      <th key={head} className={`px-4 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9AA0B4] ${i === 3 ? "text-center" : i >= 4 ? "text-right" : "text-left"} ${i === 5 ? "!text-center" : ""}`}>
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {loadingOrders
                    ? Array(ORDERS_PER_PAGE).fill(0).map((_, i) => (
                        <tr key={i} className="border-b border-[#ECECF2]">
                          {Array(7).fill(0).map((__, j) => (
                            <td key={j} className="px-4 py-4"><Skeleton className="h-4 w-full" /></td>
                          ))}
                        </tr>
                      ))
                    : pagedOrders.length === 0
                      ? <tr><td colSpan={7} className="py-10 text-center text-[13px] text-[#9AA0B4]">No orders match your search.</td></tr>
                      : pagedOrders.map((order) => (
                          <tr key={order.id} className="border-b border-[#F3F4F6] transition-all duration-200 hover:bg-[#FAFAFC] last:border-none">
                            <td className="px-4 py-4">
                              <span className="text-[12px] font-bold text-[#7C6CF2]">{order.id}</span>
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF] text-[11px] font-bold text-white">
                                  {order.avatar}
                                </div>
                                <div>
                                  <p className="text-[13px] font-semibold text-[#111827]">{order.customer}</p>
                                  <p className="text-[11px] text-[#9AA0B4]">Premium Customer</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-[13px] font-medium text-[#111827]">{order.product}</td>
                            <td className="px-4 py-4 text-center text-[13px] text-[#6B7280]">{order.date}</td>
                            <td className="px-4 py-4 text-center text-[13px] font-bold text-[#111827]">{order.amount}</td>
                            <td className="px-4 py-4 text-center">
                              <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${
                                order.status === "Completed"  ? "bg-emerald-100 text-emerald-600" :
                                order.status === "Pending"    ? "bg-orange-100 text-orange-600"   :
                                order.status === "Cancelled"  ? "bg-red-100 text-red-600"          :
                                                                "bg-blue-100 text-blue-600"
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-right">
                              <button className="rounded-full border border-[#ECECF2] bg-[#FAFAFC] p-2 text-[#6B7280] transition-all duration-200 hover:bg-[#F3F4F6] hover:text-[#111827]">
                                <MoreHorizontal size={15} />
                              </button>
                            </td>
                          </tr>
                        ))
                  }
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <Pagination page={orderPage} totalPages={totalOrderPages} onPageChange={setOrderPage}
                showInfo totalItems={filteredOrders.length} itemsPerPage={ORDERS_PER_PAGE} />
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;