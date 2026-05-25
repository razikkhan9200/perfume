// import { useState, useMemo, useEffect, useCallback } from "react";
// import {
//   ShoppingBag,
//   Clock,
//   CheckCircle2,
//   XCircle,
//   TruckIcon,
//   Download,
//   RefreshCw,
//   ChevronLeft,
//   ChevronRight,
//   Eye,
//   Printer,
//   MoreHorizontal,
//   ArrowUpRight,
//   ArrowDownRight,
//   PackageOpen,
//   Zap,
//   MapPin,
//   Calendar,
//   CreditCard,
//   ChevronDown,
//   X,
//   Search,
//   Plus,
//   FileText,
//   Ban,
//   CheckCheck,
//   RotateCcw,
// } from "lucide-react";

// import Sidebar  from "../../components/common/Sidebar";
// import Navbar   from "../../components/common/Navbar";
// import Button   from "../../components/ui/Button";       
// import Spinner  from "../../components/ui/Spinner";      
// import InputField from "../../components/forms/InputField"; 
// import { getApi, putApi } from "../../api/apiFunctions";    

// /* ═══════════════════════════════════════════
//    CONSTANTS & CONFIG
// ═══════════════════════════════════════════ */

// const ITEMS_PER_PAGE = 8;

// const STATUS_CONFIG = {
//   Delivered: {
//     bg:     "rgba(16,185,129,0.12)",
//     color:  "#10B981",
//     border: "rgba(16,185,129,0.25)",
//     icon:   CheckCircle2,
//     glow:   "0 0 12px rgba(16,185,129,0.3)",
//   },
//   Processing: {
//     bg:     "rgba(245,158,11,0.12)",
//     color:  "#F59E0B",
//     border: "rgba(245,158,11,0.25)",
//     icon:   Clock,
//     glow:   "0 0 12px rgba(245,158,11,0.3)",
//   },
//   Shipped: {
//     bg:     "rgba(99,102,241,0.12)",
//     color:  "#818CF8",
//     border: "rgba(99,102,241,0.25)",
//     icon:   TruckIcon,
//     glow:   "0 0 12px rgba(99,102,241,0.3)",
//   },
//   Cancelled: {
//     bg:     "rgba(239,68,68,0.12)",
//     color:  "#EF4444",
//     border: "rgba(239,68,68,0.25)",
//     icon:   XCircle,
//     glow:   "0 0 12px rgba(239,68,68,0.3)",
//   },
//   Pending: {
//     bg:     "rgba(156,163,175,0.12)",
//     color:  "#9CA3AF",
//     border: "rgba(156,163,175,0.25)",
//     icon:   PackageOpen,
//     glow:   "0 0 12px rgba(156,163,175,0.2)",
//   },
// };

// const STATUS_TABS = ["All","Processing","Shipped","Delivered","Cancelled","Pending"];

// const ANALYTICS_META = [
//   { id:1, title:"Total Orders", key:"totalOrders", trendKey:"ordersTrend", subtitle:"All Time",    icon:ShoppingBag, accent:"#818CF8", accentSoft:"rgba(129,140,248,0.15)" },
//   { id:2, title:"Revenue",      key:"revenue",     trendKey:"revenueTrend", subtitle:"This Month", icon:CreditCard,  accent:"#34D399", accentSoft:"rgba(52,211,153,0.15)"  },
//   { id:3, title:"Pending",      key:"pending",     trendKey:"pendingTrend", subtitle:"Need Action",icon:Clock,       accent:"#F59E0B", accentSoft:"rgba(245,158,11,0.15)"  },
//   { id:4, title:"Cancelled",    key:"cancelled",   trendKey:"cancelledTrend",subtitle:"This Month",icon:XCircle,     accent:"#F87171", accentSoft:"rgba(248,113,113,0.15)" },
// ];

// const AVATAR_COLORS = [
//   "#818CF8","#34D399","#F59E0B","#F87171",
//   "#A78BFA","#38BDF8","#FB923C","#4ADE80",
// ];

// /* ═══════════════════════════════════════════
//    SAMPLE / FALLBACK DATA
// ═══════════════════════════════════════════ */

// const SAMPLE_ORDERS = [
//   { id:"ORD-8821", customer:"Arjun Mehta",   email:"arjun@mail.com",  avatar:"AM", items:3, total:4200,  status:"Delivered",  date:"2025-05-20", payment:"UPI",  city:"Mumbai"     },
//   { id:"ORD-8820", customer:"Priya Sharma",  email:"priya@mail.com",  avatar:"PS", items:1, total:1899,  status:"Processing", date:"2025-05-21", payment:"Card", city:"Delhi"      },
//   { id:"ORD-8819", customer:"Rohan Das",     email:"rohan@mail.com",  avatar:"RD", items:5, total:8750,  status:"Shipped",    date:"2025-05-19", payment:"COD",  city:"Bengaluru"  },
//   { id:"ORD-8818", customer:"Sneha Patel",   email:"sneha@mail.com",  avatar:"SP", items:2, total:3100,  status:"Cancelled",  date:"2025-05-18", payment:"UPI",  city:"Ahmedabad"  },
//   { id:"ORD-8817", customer:"Vikram Nair",   email:"vikram@mail.com", avatar:"VN", items:4, total:6500,  status:"Pending",    date:"2025-05-22", payment:"Card", city:"Kochi"      },
//   { id:"ORD-8816", customer:"Ananya Roy",    email:"ananya@mail.com", avatar:"AR", items:2, total:2200,  status:"Delivered",  date:"2025-05-17", payment:"UPI",  city:"Kolkata"    },
//   { id:"ORD-8815", customer:"Kabir Singh",   email:"kabir@mail.com",  avatar:"KS", items:6, total:11200, status:"Shipped",    date:"2025-05-16", payment:"Card", city:"Chandigarh" },
//   { id:"ORD-8814", customer:"Meera Iyer",    email:"meera@mail.com",  avatar:"MI", items:1, total:990,   status:"Processing", date:"2025-05-23", payment:"UPI",  city:"Chennai"    },
//   { id:"ORD-8813", customer:"Dev Kapoor",    email:"dev@mail.com",    avatar:"DK", items:3, total:5500,  status:"Delivered",  date:"2025-05-15", payment:"Card", city:"Pune"       },
//   { id:"ORD-8812", customer:"Isha Verma",    email:"isha@mail.com",   avatar:"IV", items:2, total:2800,  status:"Pending",    date:"2025-05-14", payment:"UPI",  city:"Jaipur"     },
//   { id:"ORD-8811", customer:"Ravi Kumar",    email:"ravi@mail.com",   avatar:"RK", items:7, total:13400, status:"Shipped",    date:"2025-05-13", payment:"COD",  city:"Hyderabad"  },
//   { id:"ORD-8810", customer:"Nisha Gupta",   email:"nisha@mail.com",  avatar:"NG", items:1, total:749,   status:"Cancelled",  date:"2025-05-12", payment:"Card", city:"Lucknow"    },
// ];

// const SAMPLE_ANALYTICS = {
//   totalOrders:"12,840", revenue:"₹28.4L", pending:"142", cancelled:"38",
//   ordersTrend:"+18%",   revenueTrend:"+24%", pendingTrend:"-6%", cancelledTrend:"+3%",
// };

// /* ═══════════════════════════════════════════
//    SMALL COMPONENTS
// ═══════════════════════════════════════════ */

// /* ── Status Badge ── */
// const StatusBadge = ({ status }) => {
//   const cfg = STATUS_CONFIG[status] ?? STATUS_CONFIG.Pending;
//   const Icon = cfg.icon;
//   return (
//     <div
//       className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold"
//       style={{ background:cfg.bg, color:cfg.color, border:`1px solid ${cfg.border}`, boxShadow:cfg.glow }}
//     >
//       <Icon size={11} />
//       {status}
//     </div>
//   );
// };

// /* ── Coloured Avatar ── */
// const Avatar = ({ initials, color }) => (
//   <div
//     className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[12px] font-black text-white"
//     style={{ background:`linear-gradient(135deg,${color},${color}99)`, boxShadow:`0 4px 12px ${color}40` }}
//   >
//     {initials}
//   </div>
// );

// /* ── Stat Card ── */
// const StatCard = ({ card, stats, loading }) => {
//   const Icon = card.icon;
//   const value   = stats?.[card.key]      ?? "—";
//   const trend   = stats?.[card.trendKey] ?? "—";
//   const isUp    = trend.startsWith("+");
//   const TIcon   = isUp ? ArrowUpRight : ArrowDownRight;

//   return (
//     <div
//       className="group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 cursor-default"
//       style={{
//         background:"linear-gradient(145deg,#1A1A2E 0%,#16213E 60%,#0F3460 100%)",
//         border:"1px solid rgba(255,255,255,0.07)",
//         boxShadow:"0 8px 32px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.05)",
//       }}
//     >
//       {/* Glow */}
//       <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40" style={{ background:card.accent }} />
//       {/* Grid */}
//       <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage:"linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize:"24px 24px" }} />

//       <div className="relative z-10">
//         <div className="mb-4 flex items-center justify-between">
//           <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background:card.accentSoft, border:`1px solid ${card.accent}30`, boxShadow:`0 4px 16px ${card.accent}20` }}>
//             <Icon size={20} style={{ color:card.accent }} />
//           </div>
//           {trend !== "—" && (
//             <div className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold"
//               style={{ background:isUp?"rgba(52,211,153,0.12)":"rgba(248,113,113,0.12)", color:isUp?"#34D399":"#F87171", border:isUp?"1px solid rgba(52,211,153,0.2)":"1px solid rgba(248,113,113,0.2)" }}>
//               <TIcon size={11} />{trend}
//             </div>
//           )}
//         </div>
//         <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">{card.subtitle}</p>
//         {loading
//           ? <div className="mt-2 h-9 w-24 animate-pulse rounded-lg bg-white/10" />
//           : <h3 className="mt-1 text-[32px] font-black tracking-[-0.04em]" style={{ color:card.accent }}>{value}</h3>
//         }
//         <p className="mt-1 text-[13px] font-medium text-gray-400">{card.title}</p>
//       </div>
//     </div>
//   );
// };

// /* ── Skeleton row ── */
// const SkeletonRow = () => (
//   <tr>
//     {Array.from({length:8}).map((_,i)=>(
//       <td key={i} className="px-5 py-4">
//         <div className="h-5 animate-pulse rounded-lg bg-white/5" />
//       </td>
//     ))}
//   </tr>
// );

// /* ═══════════════════════════════════════════
//    ORDER DETAIL DRAWER
// ═══════════════════════════════════════════ */

// const STATUS_ACTIONS = [
//   { label:"Mark Delivered", newStatus:"Delivered", variant:"success-dark", icon:CheckCheck   },
//   { label:"Mark Shipped",   newStatus:"Shipped",   variant:"dark",         icon:TruckIcon    },
//   { label:"Cancel Order",   newStatus:"Cancelled", variant:"danger-dark",  icon:Ban          },
//   { label:"Revert Pending", newStatus:"Pending",   variant:"dark",         icon:RotateCcw    },
// ];

// const OrderDrawer = ({ order, onClose, onStatusChange }) => {
//   const [updatingStatus, setUpdatingStatus] = useState(false);
//   const [note, setNote] = useState("");

//   if (!order) return null;
//   const cfg = STATUS_CONFIG[order.status] ?? STATUS_CONFIG.Pending;
//   const StatusIcon = cfg.icon;

//   const handleStatusChange = async (newStatus) => {
//     setUpdatingStatus(true);
//     try {
//       await putApi(`/orders/${order.id}`, { status: newStatus });
//       onStatusChange(order.id, newStatus);
//     } catch {
//       // silently fail — UI will stay same
//     } finally {
//       setUpdatingStatus(false);
//     }
//   };

//   return (
//     <>
//       {/* Backdrop */}
//       <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={onClose} />

//       {/* Drawer panel */}
//       <div
//         className="fixed right-0 top-0 z-50 h-full w-full max-w-[420px] overflow-y-auto"
//         style={{
//           background:"linear-gradient(180deg,#1A1A2E 0%,#0D0D1A 100%)",
//           borderLeft:"1px solid rgba(255,255,255,0.07)",
//           boxShadow:"-24px 0 80px rgba(0,0,0,0.5)",
//         }}
//       >
//         {/* Drawer header */}
//         <div
//           className="sticky top-0 z-10 flex items-center justify-between px-6 py-5"
//           style={{ background:"rgba(13,13,26,0.92)", backdropFilter:"blur(20px)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}
//         >
//           <div>
//             <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Order Details</p>
//             <h3 className="text-[20px] font-black text-white">{order.id}</h3>
//           </div>
//           <Button variant="ghost" size="sm" rounded="xl" onClick={onClose} leftIcon={<X size={15} />} />
//         </div>

//         <div className="px-6 py-6 space-y-5">

//           {/* Status banner */}
//           <div
//             className="flex items-center justify-between rounded-2xl p-4"
//             style={{ background:cfg.bg, border:`1px solid ${cfg.border}` }}
//           >
//             <div>
//               <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Current Status</p>
//               <StatusBadge status={order.status} />
//             </div>
//             <div className="h-14 w-14 rounded-full flex items-center justify-center" style={{ background:`${cfg.color}20`, boxShadow:cfg.glow }}>
//               <StatusIcon size={22} style={{ color:cfg.color }} />
//             </div>
//           </div>

//           {/* Customer */}
//           <div className="rounded-2xl p-4 space-y-3" style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)" }}>
//             <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Customer</p>
//             <div className="flex items-center gap-3">
//               <Avatar
//                 initials={order.avatar}
//                 color={AVATAR_COLORS[order.id?.charCodeAt(4) % AVATAR_COLORS.length] ?? "#818CF8"}
//               />
//               <div>
//                 <p className="font-bold text-white">{order.customer}</p>
//                 <p className="text-[12px] text-gray-400">{order.email}</p>
//               </div>
//             </div>
//           </div>

//           {/* Info rows */}
//           {[
//             { icon:Calendar,    label:"Order Date", value:order.date             },
//             { icon:MapPin,      label:"City",       value:order.city             },
//             { icon:CreditCard,  label:"Payment",    value:order.payment          },
//             { icon:PackageOpen, label:"Items",      value:`${order.items} items` },
//           ].map(({ icon:Icon, label, value }) => (
//             <div key={label}
//               className="flex items-center justify-between rounded-2xl px-4 py-3"
//               style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)" }}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background:"rgba(129,140,248,0.12)" }}>
//                   <Icon size={15} style={{ color:"#818CF8" }} />
//                 </div>
//                 <p className="text-[13px] text-gray-400">{label}</p>
//               </div>
//               <p className="text-[13px] font-bold text-white">{value}</p>
//             </div>
//           ))}

//           {/* Total */}
//           <div className="rounded-2xl p-5 text-center"
//             style={{ background:"linear-gradient(135deg,rgba(129,140,248,0.15),rgba(129,140,248,0.05))", border:"1px solid rgba(129,140,248,0.2)" }}>
//             <p className="text-[12px] font-semibold uppercase tracking-wider text-gray-400 mb-1">Order Total</p>
//             <p className="text-[40px] font-black text-white tracking-tight">
//               ₹{order.total?.toLocaleString("en-IN")}
//             </p>
//           </div>

//           {/* Internal note */}
//           <InputField
//             label="Internal Note"
//             name="note"
//             type="textarea"
//             rows={3}
//             placeholder="Add a private note about this order..."
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//             hint="Only visible to admin staff."
//           />

//           {/* Status change actions */}
//           <div>
//             <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">Update Status</p>
//             <div className="grid grid-cols-2 gap-2">
//               {STATUS_ACTIONS.filter(a => a.newStatus !== order.status).map(({ label, newStatus, variant, icon:Icon }) => (
//                 <Button
//                   key={newStatus}
//                   variant={variant}
//                   size="sm"
//                   rounded="xl"
//                   fullWidth
//                   loading={updatingStatus}
//                   leftIcon={<Icon size={12} />}
//                   onClick={() => handleStatusChange(newStatus)}
//                 >
//                   {label}
//                 </Button>
//               ))}
//             </div>
//           </div>

//           {/* Print / Invoice */}
//           <div className="grid grid-cols-2 gap-3 pt-1">
//             <Button variant="indigo" size="md" rounded="2xl" fullWidth leftIcon={<Printer size={14} />}>
//               Print
//             </Button>
//             <Button variant="dark" size="md" rounded="2xl" fullWidth leftIcon={<Download size={14} />}>
//               Invoice
//             </Button>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// /* ═══════════════════════════════════════════
//    ORDERS PAGE
// ═══════════════════════════════════════════ */

// const OrdersPage = () => {
//   const [activeNav, setActiveNav] = useState(2);

//   // ── Filters & UI ──────────────────────────
//   const [search,       setSearch]       = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [page,         setPage]         = useState(1);
//   const [sortField,    setSortField]    = useState("date");
//   const [sortDir,      setSortDir]      = useState("desc");
//   const [selectedOrder,setSelectedOrder]= useState(null);

//   // ── API state ─────────────────────────────
//   const [orders,         setOrders]         = useState([]);
//   const [analyticsStats, setAnalyticsStats] = useState(null);
//   const [loadingOrders,  setLoadingOrders]  = useState(false);
//   const [loadingAnalytics,setLoadingAnalytics]=useState(false);
//   const [error,          setError]          = useState(null);

//   /* ── Fetch orders ── */
//   const fetchOrders = useCallback(async () => {
//     setLoadingOrders(true);
//     setError(null);
//     try {
//       const res  = await getApi("/orders");
//       const list = Array.isArray(res) ? res : res.data ?? [];
//       setOrders(list.length ? list : SAMPLE_ORDERS);
//     } catch {
//       setOrders(SAMPLE_ORDERS);
//     } finally {
//       setLoadingOrders(false);
//     }
//   }, []);

//   /* ── Fetch analytics ── */
//   const fetchAnalytics = useCallback(async () => {
//     setLoadingAnalytics(true);
//     try {
//       const res = await getApi("/analytics/orders");
//       setAnalyticsStats(res?.data ?? res ?? SAMPLE_ANALYTICS);
//     } catch {
//       setAnalyticsStats(SAMPLE_ANALYTICS);
//     } finally {
//       setLoadingAnalytics(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchOrders();
//     fetchAnalytics();
//   }, [fetchOrders, fetchAnalytics]);

//   /* ── Drawer status change callback ── */
//   const handleStatusChange = useCallback((id, newStatus) => {
//     setOrders(prev =>
//       prev.map(o => o.id === id ? { ...o, status: newStatus } : o)
//     );
//     setSelectedOrder(prev => prev?.id === id ? { ...prev, status: newStatus } : prev);
//   }, []);

//   /* ── Sort ── */
//   const handleSort = (field) => {
//     if (sortField === field) setSortDir(d => d === "asc" ? "desc" : "asc");
//     else { setSortField(field); setSortDir("desc"); }
//   };

//   /* ── Filter + sort + paginate ── */
//   const filtered = useMemo(() => {
//     let data = orders;
//     if (statusFilter !== "All") data = data.filter(o => o.status === statusFilter);
//     if (search.trim()) {
//       const q = search.toLowerCase();
//       data = data.filter(o =>
//         o.id?.toLowerCase().includes(q)       ||
//         o.customer?.toLowerCase().includes(q) ||
//         o.email?.toLowerCase().includes(q)    ||
//         o.city?.toLowerCase().includes(q)
//       );
//     }
//     return [...data].sort((a, b) => {
//       let av = a[sortField], bv = b[sortField];
//       if (sortField === "total") { av = Number(av); bv = Number(bv); }
//       if (typeof av === "string") av = av.toLowerCase();
//       if (typeof bv === "string") bv = bv.toLowerCase();
//       if (av < bv) return sortDir === "asc" ? -1 : 1;
//       if (av > bv) return sortDir === "asc" ?  1 : -1;
//       return 0;
//     });
//   }, [orders, search, statusFilter, sortField, sortDir]);

//   const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
//   const paged      = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

//   useEffect(() => { setPage(1); }, [search, statusFilter]);

//   const SortChevron = ({ field }) => (
//     <ChevronDown size={11} className="inline ml-1 transition-transform"
//       style={{ opacity: sortField === field ? 1 : 0.25,
//                transform: sortField === field && sortDir === "asc" ? "rotate(180deg)" : "none" }} />
//   );

//   /* ═══════════════════════════════════════════
//      RENDER
//   ═══════════════════════════════════════════ */

//   return (
//     <div
//   className="flex h-screen overflow-hidden"
//    style={{
//         background:
//           "linear-gradient(135deg,var(--grad-hero-from),var(--grad-hero-via),var(--grad-hero-to))",
//       }}
// >
//   <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

//   <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
//     <Navbar />

//     <main className="flex-1 overflow-y-auto px-4 pb-10 sm:px-6 lg:px-8">

//       {/* ───────────────── HEADER ───────────────── */}
//       <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-end sm:justify-between">

//         <div>
//           <div className="mb-2 flex items-center gap-2">
//             <div
//               className="flex h-8 w-8 items-center justify-center rounded-xl"
//               style={{
//                 background: "var(--accent-soft)",
//                 border: "1px solid var(--border-hover)",
//               }}
//             >
//               <Zap size={14} style={{ color: "var(--accent-deep)" }} />
//             </div>

//             <span
//               className="text-[11px] font-bold uppercase tracking-[0.3em]"
//               style={{ color: "var(--text-muted)" }}
//             >
//               Order Management
//             </span>
//           </div>

//          <h1 className="text-[34px] font-black tracking-[-0.05em] text-[var(--text-heading)]">
//                 ORDER Dashboard
//               </h1>

//           <p
//             className="mt-2 text-[14px]"
//             style={{ color: "var(--text-muted)" }}
//           >
//             Track, manage and fulfill customer orders in real-time.
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="flex items-center gap-3">

//           <Button
//             variant="dark"
//             size="sm"
//             rounded="2xl"
//             loading={loadingOrders}
//             leftIcon={
//               <RefreshCw
//                 size={13}
//                 className={loadingOrders ? "animate-spin" : ""}
//               />
//             }
//             onClick={() => {
//               fetchOrders();
//               fetchAnalytics();
//             }}
//           >
//             Refresh
//           </Button>

//           <Button
//             variant="dark"
//             size="sm"
//             rounded="2xl"
//             leftIcon={<Download size={13} />}
//           >
//             Export CSV
//           </Button>

//           <Button
//             variant="indigo"
//             size="sm"
//             rounded="2xl"
//             leftIcon={<Plus size={13} />}
//           >
//             New Order
//           </Button>
//         </div>
//       </div>

//       {/* ───────────────── ANALYTICS ───────────────── */}
//       <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//         {ANALYTICS_META.map((card) => (
//           <div
//             key={card.id}
//             className="group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1"
//             style={{
//               background:
//                 "linear-gradient(145deg,var(--surface) 0%,var(--card-subtle) 100%)",
//               border: "1px solid var(--border)",
//               boxShadow: "var(--shadow-md)",
//             }}
//           >
//             <div
//               className="absolute -top-8 -right-8 h-32 w-32 rounded-full opacity-20 blur-3xl"
//               style={{ background: card.accent }}
//             />

//             <div className="relative z-10">

//               <div className="mb-4 flex items-center justify-between">

//                 <div
//                   className="flex h-12 w-12 items-center justify-center rounded-2xl"
//                   style={{
//                     background: "var(--accent-soft)",
//                     border: "1px solid var(--border-hover)",
//                   }}
//                 >
//                   <card.icon
//                     size={20}
//                     style={{ color: "var(--accent-deep)" }}
//                   />
//                 </div>

//                 <div
//                   className="rounded-full px-2.5 py-1 text-[11px] font-bold"
//                   style={{
//                     background: "rgba(52,211,153,0.12)",
//                     color: "var(--success-text)",
//                   }}
//                 >
//                   {analyticsStats?.[card.trendKey]}
//                 </div>
//               </div>

//               <p
//                 className="text-[11px] font-semibold uppercase tracking-[0.2em]"
//                 style={{ color: "var(--text-muted)" }}
//               >
//                 {card.subtitle}
//               </p>

//               <h3
//                 className="mt-1 text-[32px] font-black tracking-[-0.04em]"
//                 style={{ color: "var(--text-primary)" }}
//               >
//                 {analyticsStats?.[card.key]}
//               </h3>

//               <p
//                 className="mt-1 text-[13px] font-medium"
//                 style={{ color: "var(--text-soft)" }}
//               >
//                 {card.title}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ───────────────── TABLE CARD ───────────────── */}
//       <div
//         className="overflow-hidden rounded-[28px]"
//         style={{
//           background:
//             "linear-gradient(145deg,var(--surface) 0%,var(--card-alt) 100%)",
//           border: "1px solid var(--border)",
//           boxShadow: "var(--shadow-lg)",
//         }}
//       >

//         {/* Toolbar */}
//         <div
//           className="px-6 py-5"
//           style={{
//             borderBottom: "1px solid var(--border-soft)",
//           }}
//         >
//           <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

//             <div className="flex items-center gap-3">
//               <h2
//                 className="text-[20px] font-black"
//                 style={{ color: "var(--text-heading)" }}
//               >
//                 All Orders
//               </h2>

//               <span
//                 className="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
//                 style={{
//                   background: "var(--accent-soft)",
//                   color: "var(--accent-deep)",
//                   border: "1px solid var(--border-hover)",
//                 }}
//               >
//                 {filtered.length}
//               </span>
//             </div>

//             <div className="w-full md:w-72">
//               <InputField
//                 name="search"
//                 placeholder="Search orders..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 leftIcon={<Search size={14} />}
//               />
//             </div>
//           </div>

//           {/* Tabs */}
//           <div className="mt-4 flex flex-wrap gap-2">

//             {STATUS_TABS.map((tab) => {
//               const active = statusFilter === tab;

//               return (
//                 <button
//                   key={tab}
//                   onClick={() => setStatusFilter(tab)}
//                   className="rounded-xl px-3.5 py-1.5 text-[11px] font-bold transition-all duration-200"
//                   style={
//                     active
//                       ? {
//                           background: "var(--accent-soft)",
//                           color: "var(--accent-deep)",
//                           border: "1px solid var(--border-hover)",
//                           boxShadow: "var(--shadow-sm)",
//                         }
//                       : {
//                           background: "var(--surface)",
//                           color: "var(--text-muted)",
//                           border: "1px solid var(--border-soft)",
//                         }
//                   }
//                 >
//                   {tab}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">

//           <table className="w-full min-w-[900px]">

//             <thead>
//               <tr
//                 style={{
//                   borderBottom: "1px solid var(--border-soft)",
//                 }}
//               >
//                 {[
//                   "Order ID",
//                   "Customer",
//                   "Date",
//                   "Items",
//                   "Total",
//                   "Payment",
//                   "Status",
//                   "Actions",
//                 ].map((label) => (
//                   <th
//                     key={label}
//                     className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.18em]"
//                     style={{
//                       color: "var(--text-muted)",
//                     }}
//                   >
//                     {label}
//                   </th>
//                 ))}
//               </tr>
//             </thead>

//             <tbody>

//               {paged.map((order, index) => {

//                 const avatarColor =
//                   AVATAR_COLORS[
//                     order.id?.charCodeAt(4) %
//                       AVATAR_COLORS.length
//                   ] ?? "#A78BFA";

//                 return (
//                   <tr
//                     key={order.id}
//                     className="group transition-all duration-200 hover:bg-[#F7F4FF]"
//                     style={{
//                       background:
//                         index % 2 === 0
//                           ? "transparent"
//                           : "rgba(167,139,250,0.03)",
//                       borderBottom:
//                         "1px solid var(--border-soft)",
//                     }}
//                   >

//                     {/* Order ID */}
//                     <td className="px-5 py-4">
//                       <span
//                         className="font-mono text-[13px] font-bold"
//                         style={{
//                           color: "var(--accent-deep)",
//                         }}
//                       >
//                         {order.id}
//                       </span>
//                     </td>

//                     {/* Customer */}
//                     <td className="px-5 py-4">

//                       <div className="flex items-center gap-3">

//                         <Avatar
//                           initials={order.avatar}
//                           color={avatarColor}
//                         />

//                         <div>
//                           <p
//                             className="text-[13px] font-bold"
//                             style={{
//                               color: "var(--text-primary)",
//                             }}
//                           >
//                             {order.customer}
//                           </p>

//                           <div className="mt-0.5 flex items-center gap-1">

//                             <MapPin
//                               size={10}
//                               style={{
//                                 color: "var(--text-soft)",
//                               }}
//                             />

//                             <p
//                               className="text-[11px]"
//                               style={{
//                                 color: "var(--text-muted)",
//                               }}
//                             >
//                               {order.city}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </td>

//                     {/* Date */}
//                     <td className="px-5 py-4">
//                       <span
//                         className="text-[12px]"
//                         style={{
//                           color: "var(--text-muted)",
//                         }}
//                       >
//                         {order.date}
//                       </span>
//                     </td>

//                     {/* Items */}
//                     <td className="px-5 py-4">

//                       <span
//                         className="rounded-lg px-2.5 py-1 text-[12px] font-bold"
//                         style={{
//                           background: "var(--card-subtle)",
//                           color: "var(--text-muted)",
//                         }}
//                       >
//                         {order.items} items
//                       </span>
//                     </td>

//                     {/* Total */}
//                     <td className="px-5 py-4">

//                       <span
//                         className="text-[15px] font-black"
//                         style={{
//                           color: "var(--text-primary)",
//                         }}
//                       >
//                         ₹{order.total?.toLocaleString("en-IN")}
//                       </span>
//                     </td>

//                     {/* Payment */}
//                     <td className="px-5 py-4">

//                       <span
//                         className="text-[12px]"
//                         style={{
//                           color: "var(--text-muted)",
//                         }}
//                       >
//                         {order.payment}
//                       </span>
//                     </td>

//                     {/* Status */}
//                     <td className="px-5 py-4">
//                       <StatusBadge status={order.status} />
//                     </td>

//                     {/* Actions */}
//                     <td className="px-5 py-4">

//                       <div className="flex items-center gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">

//                         <Button
//                           variant="indigo"
//                           size="xs"
//                           rounded="xl"
//                           leftIcon={<Eye size={12} />}
//                           onClick={() => setSelectedOrder(order)}
//                         />

//                         <Button
//                           variant="dark"
//                           size="xs"
//                           rounded="xl"
//                           leftIcon={<Printer size={12} />}
//                         />

//                         <Button
//                           variant="dark"
//                           size="xs"
//                           rounded="xl"
//                           leftIcon={<MoreHorizontal size={12} />}
//                         />
//                       </div>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div
//           className="flex items-center justify-between px-6 py-4"
//           style={{
//             borderTop: "1px solid var(--border-soft)",
//           }}
//         >

//           <p
//             className="text-[12px]"
//             style={{ color: "var(--text-muted)" }}
//           >
//             Showing{" "}
//             <span
//               style={{ color: "var(--text-primary)" }}
//               className="font-bold"
//             >
//               {(page - 1) * ITEMS_PER_PAGE + 1}
//             </span>
//             {" "}to{" "}
//             <span
//               style={{ color: "var(--text-primary)" }}
//               className="font-bold"
//             >
//               {Math.min(page * ITEMS_PER_PAGE, filtered.length)}
//             </span>
//           </p>

//           <div className="flex items-center gap-2">

//             <Button
//               variant="dark"
//               size="xs"
//               rounded="xl"
//               disabled={page === 1}
//               leftIcon={<ChevronLeft size={14} />}
//               onClick={() =>
//                 setPage((p) => Math.max(1, p - 1))
//               }
//             />

//             <Button
//               variant="dark"
//               size="xs"
//               rounded="xl"
//               disabled={page === totalPages}
//               leftIcon={<ChevronRight size={14} />}
//               onClick={() =>
//                 setPage((p) =>
//                   Math.min(totalPages, p + 1)
//                 )
//               }
//             />
//           </div>
//         </div>
//       </div>
//     </main>
//   </div>

//   {/* Drawer */}
//   <OrderDrawer
//     order={selectedOrder}
//     onClose={() => setSelectedOrder(null)}
//     onStatusChange={handleStatusChange}
//   />
// </div>
//   );
// };

// export default OrdersPage;



import { useState, useMemo, useEffect, useCallback } from "react";
import {
  ShoppingBag,
  Clock,
  CheckCircle2,
  XCircle,
  TruckIcon,
  Download,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Eye,
  Printer,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  PackageOpen,
  Zap,
  MapPin,
  Calendar,
  CreditCard,
  ChevronDown,
  X,
  Search,
  Plus,
  Ban,
  CheckCheck,
  RotateCcw,
} from "lucide-react";

import Sidebar    from "../../components/common/Sidebar";
import Navbar     from "../../components/common/Navbar";
import Button     from "../../components/ui/Button";
import InputField from "../../components/forms/InputField";
import { getApi, putApi } from "../../api/apiFunctions";

/* ═══════════════════════════════════════════
   CONSTANTS & CONFIG
═══════════════════════════════════════════ */

const ITEMS_PER_PAGE = 8;

const STATUS_CONFIG = {
  Delivered: {
    bg:     "var(--success-bg)",
    color:  "var(--success-text)",
    border: "var(--success)",
    dot:    "var(--success)",
    icon:   CheckCircle2,
  },
  Processing: {
    bg:     "var(--warning-bg)",
    color:  "var(--warning-text)",
    border: "var(--warning)",
    dot:    "var(--warning)",
    icon:   Clock,
  },
  Shipped: {
    bg:     "#EEF2FF",
    color:  "#4338CA",
    border: "#A5B4FC",
    dot:    "#818CF8",
    icon:   TruckIcon,
  },
  Cancelled: {
    bg:     "var(--danger-bg)",
    color:  "var(--danger-text)",
    border: "var(--danger)",
    dot:    "var(--danger)",
    icon:   XCircle,
  },
  Pending: {
    bg:     "var(--card-subtle)",
    color:  "var(--text-muted)",
    border: "var(--border)",
    dot:    "var(--text-soft)",
    icon:   PackageOpen,
  },
};

const STATUS_TABS = ["All", "Processing", "Shipped", "Delivered", "Cancelled", "Pending"];

const ANALYTICS_META = [
  { id:1, title:"Total Orders", key:"totalOrders", trendKey:"ordersTrend",   subtitle:"All Time",    icon:ShoppingBag, gradFrom:"#7C6CF2", gradTo:"#B8A9FF" },
  { id:2, title:"Revenue",      key:"revenue",     trendKey:"revenueTrend",   subtitle:"This Month",  icon:CreditCard,  gradFrom:"#0D7451", gradTo:"#7EE7B8" },
  { id:3, title:"Pending",      key:"pending",     trendKey:"pendingTrend",   subtitle:"Need Action", icon:Clock,       gradFrom:"#9A6600", gradTo:"#FFB86B" },
  { id:4, title:"Cancelled",    key:"cancelled",   trendKey:"cancelledTrend", subtitle:"This Month",  icon:XCircle,     gradFrom:"#C53030", gradTo:"#FF8A8A" },
];

const AVATAR_COLORS = [
  "#7C6CF2","#0D7451","#9A6600","#C53030",
  "#A995EA","#1D9E75","#FFB86B","#B8A9FF",
];

/* ═══════════════════════════════════════════
   FALLBACK DATA
═══════════════════════════════════════════ */

const SAMPLE_ORDERS = [
  { id:"ORD-8821", customer:"Arjun Mehta",  email:"arjun@mail.com",  avatar:"AM", items:3, total:4200,  status:"Delivered",  date:"2025-05-20", payment:"UPI",  city:"Mumbai"     },
  { id:"ORD-8820", customer:"Priya Sharma", email:"priya@mail.com",  avatar:"PS", items:1, total:1899,  status:"Processing", date:"2025-05-21", payment:"Card", city:"Delhi"      },
  { id:"ORD-8819", customer:"Rohan Das",    email:"rohan@mail.com",  avatar:"RD", items:5, total:8750,  status:"Shipped",    date:"2025-05-19", payment:"COD",  city:"Bengaluru"  },
  { id:"ORD-8818", customer:"Sneha Patel",  email:"sneha@mail.com",  avatar:"SP", items:2, total:3100,  status:"Cancelled",  date:"2025-05-18", payment:"UPI",  city:"Ahmedabad"  },
  { id:"ORD-8817", customer:"Vikram Nair",  email:"vikram@mail.com", avatar:"VN", items:4, total:6500,  status:"Pending",    date:"2025-05-22", payment:"Card", city:"Kochi"      },
  { id:"ORD-8816", customer:"Ananya Roy",   email:"ananya@mail.com", avatar:"AR", items:2, total:2200,  status:"Delivered",  date:"2025-05-17", payment:"UPI",  city:"Kolkata"    },
  { id:"ORD-8815", customer:"Kabir Singh",  email:"kabir@mail.com",  avatar:"KS", items:6, total:11200, status:"Shipped",    date:"2025-05-16", payment:"Card", city:"Chandigarh" },
  { id:"ORD-8814", customer:"Meera Iyer",   email:"meera@mail.com",  avatar:"MI", items:1, total:990,   status:"Processing", date:"2025-05-23", payment:"UPI",  city:"Chennai"    },
  { id:"ORD-8813", customer:"Dev Kapoor",   email:"dev@mail.com",    avatar:"DK", items:3, total:5500,  status:"Delivered",  date:"2025-05-15", payment:"Card", city:"Pune"       },
  { id:"ORD-8812", customer:"Isha Verma",   email:"isha@mail.com",   avatar:"IV", items:2, total:2800,  status:"Pending",    date:"2025-05-14", payment:"UPI",  city:"Jaipur"     },
  { id:"ORD-8811", customer:"Ravi Kumar",   email:"ravi@mail.com",   avatar:"RK", items:7, total:13400, status:"Shipped",    date:"2025-05-13", payment:"COD",  city:"Hyderabad"  },
  { id:"ORD-8810", customer:"Nisha Gupta",  email:"nisha@mail.com",  avatar:"NG", items:1, total:749,   status:"Cancelled",  date:"2025-05-12", payment:"Card", city:"Lucknow"    },
];

const SAMPLE_ANALYTICS = {
  totalOrders:"12,840", revenue:"₹28.4L", pending:"142", cancelled:"38",
  ordersTrend:"+18%",   revenueTrend:"+24%", pendingTrend:"-6%", cancelledTrend:"+3%",
};

/* ═══════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════ */

/* ── Status Badge ── */
const StatusBadge = ({ status }) => {
  const cfg  = STATUS_CONFIG[status] ?? STATUS_CONFIG.Pending;
  const Icon = cfg.icon;
  return (
    <div
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold"
      style={{
        background: cfg.bg,
        color:      cfg.color,
        border:     `1px solid ${cfg.border}44`,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full animate-pulse"
        style={{ background: cfg.dot }}
      />
      <Icon size={11} />
      {status}
    </div>
  );
};

/* ── Avatar ── */
const Avatar = ({ initials, color }) => (
  <div
    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[12px] font-black text-white"
    style={{
      background: `linear-gradient(135deg,${color},${color}BB)`,
      boxShadow:  `0 4px 12px ${color}33`,
    }}
  >
    {initials}
  </div>
);

/* ── Analytics Card ── */
const AnalyticsCard = ({ card, stats, loading }) => {
  const Icon    = card.icon;
  const value   = stats?.[card.key]      ?? "—";
  const trend   = stats?.[card.trendKey] ?? "—";
  const isUp    = typeof trend === "string" && trend.startsWith("+");
  const TIcon   = isUp ? ArrowUpRight : ArrowDownRight;

  return (
    <div
      className="group relative overflow-hidden rounded-[28px] p-5 transition-all duration-500 hover:-translate-y-1"
      style={{
        background: "linear-gradient(135deg,var(--surface) 0%,var(--card-alt) 50%,var(--card-subtle) 100%)",
        border:     "1px solid var(--border)",
        boxShadow:  "0 4px 24px rgba(124,108,242,0.07), 0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* soft glow */}
      <div
        className="absolute -top-6 -right-6 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: card.gradFrom }}
      />

      <div className="relative z-10">
        {/* Icon + trend row */}
        <div className="mb-4 flex items-start justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{
              background: `linear-gradient(135deg,${card.gradFrom}22,${card.gradTo}22)`,
              border:     `1px solid ${card.gradFrom}33`,
            }}
          >
            <Icon size={20} style={{ color: card.gradFrom }} />
          </div>

          {trend !== "—" && (
            <div
              className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold"
              style={
                isUp
                  ? { background: "var(--success-bg)", color: "var(--success-text)" }
                  : { background: "var(--danger-bg)",  color: "var(--danger-text)"  }
              }
            >
              <TIcon size={11} />
              {trend}
            </div>
          )}
        </div>

        <p
          className="text-[11px] font-bold uppercase tracking-[0.2em]"
          style={{ color: "var(--text-soft)" }}
        >
          {card.subtitle}
        </p>

        {loading ? (
          <div
            className="mt-2 h-9 w-24 animate-pulse rounded-xl"
            style={{ background: "var(--border-soft)" }}
          />
        ) : (
          <h3
            className="mt-1 text-[32px] font-black tracking-[-0.04em]"
            style={{ color: "var(--text-heading)" }}
          >
            {value}
          </h3>
        )}

        <p
          className="mt-1 text-[13px] font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          {card.title}
        </p>

        {/* progress bar */}
        <div
          className="mt-4 h-1.5 overflow-hidden rounded-full"
          style={{ background: "var(--border-soft)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${Math.min(100, Math.abs(parseInt(trend)) * 4 || 60)}%`,
              background: `linear-gradient(90deg,${card.gradFrom},${card.gradTo})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

/* ── Skeleton Row ── */
const SkeletonRow = () => (
  <tr>
    {Array.from({ length: 8 }).map((_, i) => (
      <td key={i} className="px-5 py-4">
        <div
          className="h-5 animate-pulse rounded-lg"
          style={{ background: "var(--border-soft)" }}
        />
      </td>
    ))}
  </tr>
);

/* ═══════════════════════════════════════════
   ORDER DETAIL DRAWER
═══════════════════════════════════════════ */

const STATUS_ACTIONS = [
  { label:"Mark Delivered", newStatus:"Delivered", icon:CheckCheck  },
  { label:"Mark Shipped",   newStatus:"Shipped",   icon:TruckIcon   },
  { label:"Cancel Order",   newStatus:"Cancelled", icon:Ban         },
  { label:"Revert Pending", newStatus:"Pending",   icon:RotateCcw   },
];

const OrderDrawer = ({ order, onClose, onStatusChange }) => {
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [note, setNote] = useState("");

  if (!order) return null;

  const cfg        = STATUS_CONFIG[order.status] ?? STATUS_CONFIG.Pending;
  const StatusIcon = cfg.icon;

  const handleStatusChange = async (newStatus) => {
    setUpdatingStatus(true);
    try {
      await putApi(`/orders/${order.id}`, { status: newStatus });
      onStatusChange(order.id, newStatus);
    } catch {
      /* silent */
    } finally {
      setUpdatingStatus(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 backdrop-blur-sm"
        style={{ background: "rgba(30,30,36,0.35)" }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed right-0 top-0 z-50 h-full w-full max-w-[420px] overflow-y-auto"
        style={{
          background: "linear-gradient(180deg,var(--surface) 0%,var(--card-alt) 100%)",
          borderLeft: "1px solid var(--border)",
          boxShadow:  "-20px 0 60px rgba(124,108,242,0.10)",
        }}
      >
        {/* Drawer header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 py-5"
          style={{
            background:    "rgba(255,255,255,0.88)",
            backdropFilter:"blur(16px)",
            borderBottom:  "1px solid var(--border-soft)",
          }}
        >
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--text-soft)" }}
            >
              Order Details
            </p>
            <h3
              className="text-[20px] font-black"
              style={{ color: "var(--text-heading)" }}
            >
              {order.id}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:scale-105"
            style={{
              background: "var(--card-subtle)",
              border:     "1px solid var(--border-soft)",
              color:      "var(--text-muted)",
            }}
          >
            <X size={15} />
          </button>
        </div>

        <div className="space-y-4 px-6 py-6">

          {/* Status banner */}
          <div
            className="flex items-center justify-between rounded-2xl p-4"
            style={{
              background: cfg.bg,
              border:     `1px solid ${cfg.border}55`,
            }}
          >
            <div>
              <p
                className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider"
                style={{ color: "var(--text-soft)" }}
              >
                Current Status
              </p>
              <StatusBadge status={order.status} />
            </div>
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{
                background: `${cfg.dot}22`,
                border:     `1px solid ${cfg.border}44`,
              }}
            >
              <StatusIcon size={22} style={{ color: cfg.color }} />
            </div>
          </div>

          {/* Customer */}
          <div
            className="rounded-2xl p-4"
            style={{
              background: "var(--card-subtle)",
              border:     "1px solid var(--border-soft)",
            }}
          >
            <p
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--text-soft)" }}
            >
              Customer
            </p>
            <div className="flex items-center gap-3">
              <Avatar
                initials={order.avatar}
                color={AVATAR_COLORS[order.id?.charCodeAt(4) % AVATAR_COLORS.length] ?? "#7C6CF2"}
              />
              <div>
                <p className="font-bold" style={{ color: "var(--text-primary)" }}>
                  {order.customer}
                </p>
                <p className="text-[12px]" style={{ color: "var(--text-muted)" }}>
                  {order.email}
                </p>
              </div>
            </div>
          </div>

          {/* Info rows */}
          {[
            { icon: Calendar,    label: "Order Date", value: order.date             },
            { icon: MapPin,      label: "City",       value: order.city             },
            { icon: CreditCard,  label: "Payment",    value: order.payment          },
            { icon: PackageOpen, label: "Items",      value: `${order.items} items` },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-2xl px-4 py-3"
              style={{
                background: "var(--surface)",
                border:     "1px solid var(--border-soft)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: "var(--card-subtle)" }}
                >
                  <Icon size={15} style={{ color: "var(--accent-deep)" }} />
                </div>
                <p className="text-[13px]" style={{ color: "var(--text-muted)" }}>
                  {label}
                </p>
              </div>
              <p className="text-[13px] font-bold" style={{ color: "var(--text-primary)" }}>
                {value}
              </p>
            </div>
          ))}

          {/* Total */}
          <div
            className="rounded-2xl p-5 text-center"
            style={{
              background: "linear-gradient(135deg,var(--card-subtle),var(--card-alt))",
              border:     "1px solid var(--border-hover)",
            }}
          >
            <p
              className="mb-1 text-[12px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-soft)" }}
            >
              Order Total
            </p>
            <p
              className="text-[40px] font-black tracking-tight"
              style={{ color: "var(--text-heading)" }}
            >
              ₹{order.total?.toLocaleString("en-IN")}
            </p>
          </div>

          {/* Internal note */}
          <InputField
            label="Internal Note"
            name="note"
            type="textarea"
            rows={3}
            placeholder="Add a private note about this order..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            hint="Only visible to admin staff."
            theme="light"
          />

          {/* Status actions */}
          <div>
            <p
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--text-soft)" }}
            >
              Update Status
            </p>
            <div className="grid grid-cols-2 gap-2">
              {STATUS_ACTIONS.filter(a => a.newStatus !== order.status).map(({ label, newStatus, icon: Icon }) => {
                const isCfg = STATUS_CONFIG[newStatus];
                return (
                  <button
                    key={newStatus}
                    disabled={updatingStatus}
                    onClick={() => handleStatusChange(newStatus)}
                    className="flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-[12px] font-bold transition-all hover:opacity-80 disabled:opacity-50"
                    style={{
                      background: isCfg?.bg   ?? "var(--card-subtle)",
                      color:      isCfg?.color ?? "var(--text-muted)",
                      border:     `1px solid ${isCfg?.border ?? "var(--border)"}55`,
                    }}
                  >
                    <Icon size={12} />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Print / Invoice */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              className="flex items-center justify-center gap-2 rounded-2xl py-3 text-[13px] font-bold text-white transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg,var(--accent-deep),var(--accent-lt))",
                boxShadow:  "0 8px 20px rgba(124,108,242,0.25)",
              }}
            >
              <Printer size={14} />
              Print
            </button>
            <button
              className="flex items-center justify-center gap-2 rounded-2xl py-3 text-[13px] font-bold transition-all hover:opacity-80"
              style={{
                background: "var(--card-subtle)",
                border:     "1px solid var(--border)",
                color:      "var(--text-muted)",
              }}
            >
              <Download size={14} />
              Invoice
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

/* ═══════════════════════════════════════════
   ORDERS PAGE
═══════════════════════════════════════════ */

const OrdersPage = () => {
  const [activeNav,     setActiveNav]     = useState(2);
  const [search,        setSearch]        = useState("");
  const [statusFilter,  setStatusFilter]  = useState("All");
  const [page,          setPage]          = useState(1);
  const [sortField,     setSortField]     = useState("date");
  const [sortDir,       setSortDir]       = useState("desc");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [orders,          setOrders]          = useState([]);
  const [analyticsStats,  setAnalyticsStats]  = useState(null);
  const [loadingOrders,   setLoadingOrders]   = useState(false);
  const [loadingAnalytics,setLoadingAnalytics]= useState(false);
  const [error,           setError]           = useState(null);

  const fetchOrders = useCallback(async () => {
    setLoadingOrders(true);
    setError(null);
    try {
      const res  = await getApi("/orders");
      const list = Array.isArray(res) ? res : res.data ?? [];
      setOrders(list.length ? list : SAMPLE_ORDERS);
    } catch {
      setOrders(SAMPLE_ORDERS);
    } finally {
      setLoadingOrders(false);
    }
  }, []);

  const fetchAnalytics = useCallback(async () => {
    setLoadingAnalytics(true);
    try {
      const res = await getApi("/analytics/orders");
      setAnalyticsStats(res?.data ?? res ?? SAMPLE_ANALYTICS);
    } catch {
      setAnalyticsStats(SAMPLE_ANALYTICS);
    } finally {
      setLoadingAnalytics(false);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
    fetchAnalytics();
  }, [fetchOrders, fetchAnalytics]);

  const handleStatusChange = useCallback((id, newStatus) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
    setSelectedOrder(prev => prev?.id === id ? { ...prev, status: newStatus } : prev);
  }, []);

  const handleSort = (field) => {
    if (sortField === field) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("desc"); }
  };

  const filtered = useMemo(() => {
    let data = orders;
    if (statusFilter !== "All") data = data.filter(o => o.status === statusFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(o =>
        o.id?.toLowerCase().includes(q)       ||
        o.customer?.toLowerCase().includes(q) ||
        o.email?.toLowerCase().includes(q)    ||
        o.city?.toLowerCase().includes(q)
      );
    }
    return [...data].sort((a, b) => {
      let av = a[sortField], bv = b[sortField];
      if (sortField === "total") { av = Number(av); bv = Number(bv); }
      if (typeof av === "string") av = av.toLowerCase();
      if (typeof bv === "string") bv = bv.toLowerCase();
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ?  1 : -1;
      return 0;
    });
  }, [orders, search, statusFilter, sortField, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paged      = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  useEffect(() => { setPage(1); }, [search, statusFilter]);

  const SortChevron = ({ field }) => (
    <ChevronDown
      size={11}
      className="inline ml-1 transition-transform"
      style={{
        opacity:   sortField === field ? 1 : 0.25,
        transform: sortField === field && sortDir === "asc" ? "rotate(180deg)" : "none",
      }}
    />
  );

  /* ═══════════════════════════════════════════
     RENDER
  ═══════════════════════════════════════════ */

  return (
    <div
      className="flex h-screen overflow-hidden text-[var(--text)]"
      style={{
        background:
          "linear-gradient(135deg,var(--grad-hero-from),var(--grad-hero-via),var(--grad-hero-to))",
      }}
    >
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto px-4 pb-10 sm:px-6 lg:px-8">

          {/* ── PAGE HEADER ── */}
          <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-xl"
                  style={{
                    background: "var(--card-subtle)",
                    border:     "1px solid var(--border-hover)",
                  }}
                >
                  <Zap size={14} style={{ color: "var(--accent-deep)" }} />
                </div>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.25em]"
                  style={{ color: "var(--text-soft)" }}
                >
                  Order Management
                </span>
              </div>

              <h1
                className="text-[34px] font-black tracking-[-0.05em]"
                style={{ color: "var(--text-heading)" }}
              >
                Orders Dashboard
              </h1>

              <p
                className="mt-1 text-[14px]"
                style={{ color: "var(--text-muted)" }}
              >
                Track, manage and fulfill customer orders in real-time.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => { fetchOrders(); fetchAnalytics(); }}
                disabled={loadingOrders}
                className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-[12px] font-bold transition-all hover:opacity-80 disabled:opacity-50"
                style={{
                  background: "var(--surface)",
                  border:     "1px solid var(--border)",
                  color:      "var(--text-muted)",
                }}
              >
                <RefreshCw size={13} className={loadingOrders ? "animate-spin" : ""} />
                Refresh
              </button>

              <button
                className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-[12px] font-bold transition-all hover:opacity-80"
                style={{
                  background: "var(--surface)",
                  border:     "1px solid var(--border)",
                  color:      "var(--text-muted)",
                }}
              >
                <Download size={13} />
                Export CSV
              </button>

              <button
                className="flex items-center gap-2 rounded-2xl px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg,var(--accent-deep),var(--accent-lt))",
                  boxShadow:  "0 10px 24px rgba(124,108,242,0.22)",
                }}
              >
                <Plus size={13} />
                New Order
              </button>
            </div>
          </div>

          {/* ── ANALYTICS CARDS ── */}
          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {ANALYTICS_META.map(card => (
              <AnalyticsCard
                key={card.id}
                card={card}
                stats={analyticsStats}
                loading={loadingAnalytics}
              />
            ))}
          </div>

          {/* ── ERROR BANNER ── */}
          {error && (
            <div
              className="mb-6 flex items-center gap-3 rounded-2xl px-5 py-3.5 text-[13px] font-semibold"
              style={{
                background: "var(--danger-bg)",
                border:     "1px solid var(--danger)44",
                color:      "var(--danger-text)",
              }}
            >
              <XCircle size={15} />
              {error}
              <button
                onClick={fetchOrders}
                className="ml-auto underline underline-offset-2"
              >
                Retry
              </button>
            </div>
          )}

          {/* ── TABLE CARD ── */}
          <div
            className="overflow-hidden rounded-[32px]"
            style={{
              background: "linear-gradient(135deg,var(--surface) 0%,var(--card-alt) 50%,var(--card-subtle) 100%)",
              border:     "1px solid var(--border)",
              boxShadow:  "0 20px 60px rgba(124,108,242,0.08), 0 4px 12px rgba(0,0,0,0.04)",
            }}
          >
            {/* Toolbar */}
            <div
              className="px-6 py-5"
              style={{ borderBottom: "1px solid var(--border-soft)" }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <h2
                    className="text-[20px] font-black"
                    style={{ color: "var(--text-heading)" }}
                  >
                    All Orders
                  </h2>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                    style={{
                      background: "var(--card-subtle)",
                      color:      "var(--accent-deep)",
                      border:     "1px solid var(--border-hover)",
                    }}
                  >
                    {loadingOrders ? "…" : filtered.length}
                  </span>
                </div>

                {/* Search */}
                <div
                  className="flex w-full items-center gap-2 rounded-2xl px-4 py-2.5 md:w-72"
                  style={{
                    background: "var(--card-alt)",
                    border:     "1px solid var(--border-soft)",
                  }}
                >
                  <Search size={14} style={{ color: "var(--text-soft)" }} className="shrink-0" />
                  <input
                    type="text"
                    placeholder="Search orders, customers…"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full bg-transparent text-[13px] outline-none"
                    style={{
                      color: "var(--text-primary)",
                    }}
                  />
                  {search && (
                    <button onClick={() => setSearch("")}>
                      <X size={13} style={{ color: "var(--text-soft)" }} />
                    </button>
                  )}
                </div>
              </div>

              {/* Status tabs */}
              <div className="mt-4 flex flex-wrap gap-2">
                {STATUS_TABS.map(tab => {
                  const active = statusFilter === tab;
                  const cfg    = STATUS_CONFIG[tab];
                  return (
                    <button
                      key={tab}
                      onClick={() => setStatusFilter(tab)}
                      className="rounded-xl px-3.5 py-1.5 text-[11px] font-bold transition-all duration-200"
                      style={
                        active && tab !== "All"
                          ? {
                              background: cfg?.bg    ?? "var(--card-subtle)",
                              color:      cfg?.color ?? "var(--accent-deep)",
                              border:     `1px solid ${cfg?.border ?? "var(--border-hover)"}55`,
                            }
                          : active
                          ? {
                              background: "var(--card-subtle)",
                              color:      "var(--accent-deep)",
                              border:     "1px solid var(--border-hover)",
                              boxShadow:  "0 4px 12px rgba(124,108,242,0.12)",
                            }
                          : {
                              background: "var(--surface)",
                              color:      "var(--text-muted)",
                              border:     "1px solid var(--border-soft)",
                            }
                      }
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border-soft)" }}>
                    {[
                      { label:"Order ID", field:"id"       },
                      { label:"Customer", field:"customer" },
                      { label:"Date",     field:"date"     },
                      { label:"Items",    field:"items"    },
                      { label:"Total",    field:"total"    },
                      { label:"Payment",  field:"payment"  },
                      { label:"Status",   field:"status"   },
                      { label:"Actions",  field:null       },
                    ].map(({ label, field }) => (
                      <th
                        key={label}
                        onClick={() => field && handleSort(field)}
                        className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.18em]"
                        style={{
                          color:  "var(--text-soft)",
                          cursor: field ? "pointer" : "default",
                          userSelect: "none",
                        }}
                      >
                        {label}
                        {field && <SortChevron field={field} />}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {/* Loading skeleton */}
                  {loadingOrders &&
                    Array.from({ length: 8 }).map((_, i) => <SkeletonRow key={i} />)}

                  {/* Empty state */}
                  {!loadingOrders && paged.length === 0 && (
                    <tr>
                      <td colSpan={8} className="py-20 text-center">
                        <ShoppingBag
                          size={40}
                          className="mx-auto mb-3"
                          style={{ color: "var(--border)" }}
                        />
                        <p
                          className="text-[14px] font-semibold"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Koi order nahi mila
                        </p>
                        <button
                          onClick={() => { setSearch(""); setStatusFilter("All"); }}
                          className="mx-auto mt-4 flex items-center gap-2 rounded-xl px-4 py-2 text-[12px] font-bold transition-all hover:opacity-80"
                          style={{
                            background: "var(--card-subtle)",
                            border:     "1px solid var(--border-hover)",
                            color:      "var(--accent-deep)",
                          }}
                        >
                          Clear Filters
                        </button>
                      </td>
                    </tr>
                  )}

                  {/* Data rows */}
                  {!loadingOrders && paged.map((order, index) => {
                    const avatarColor =
                      AVATAR_COLORS[order.id?.charCodeAt(4) % AVATAR_COLORS.length] ?? "#7C6CF2";

                    return (
                      <tr
                        key={order.id}
                        className="group transition-all duration-200"
                        style={{
                          background:   index % 2 === 0 ? "transparent" : "rgba(207,197,255,0.04)",
                          borderBottom: "1px solid var(--border-soft)",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "var(--card-subtle)"}
                        onMouseLeave={e => e.currentTarget.style.background = index % 2 === 0 ? "transparent" : "rgba(207,197,255,0.04)"}
                      >
                        {/* Order ID */}
                        <td className="px-5 py-4">
                          <span
                            className="font-mono text-[13px] font-bold"
                            style={{ color: "var(--accent-deep)" }}
                          >
                            {order.id}
                          </span>
                        </td>

                        {/* Customer */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <Avatar initials={order.avatar} color={avatarColor} />
                            <div>
                              <p
                                className="text-[13px] font-bold"
                                style={{ color: "var(--text-primary)" }}
                              >
                                {order.customer}
                              </p>
                              <div className="mt-0.5 flex items-center gap-1">
                                <MapPin size={10} style={{ color: "var(--text-soft)" }} />
                                <p
                                  className="text-[11px]"
                                  style={{ color: "var(--text-muted)" }}
                                >
                                  {order.city}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Date */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={11} style={{ color: "var(--text-soft)" }} />
                            <span
                              className="text-[12px]"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {order.date}
                            </span>
                          </div>
                        </td>

                        {/* Items */}
                        <td className="px-5 py-4">
                          <span
                            className="rounded-lg px-2.5 py-1 text-[12px] font-bold"
                            style={{
                              background: "var(--card-subtle)",
                              color:      "var(--text-muted)",
                            }}
                          >
                            {order.items} items
                          </span>
                        </td>

                        {/* Total */}
                        <td className="px-5 py-4">
                          <span
                            className="text-[15px] font-black"
                            style={{ color: "var(--text-primary)" }}
                          >
                            ₹{order.total?.toLocaleString("en-IN")}
                          </span>
                        </td>

                        {/* Payment */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1.5">
                            <CreditCard size={11} style={{ color: "var(--text-soft)" }} />
                            <span
                              className="text-[12px]"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {order.payment}
                            </span>
                          </div>
                        </td>

                        {/* Status */}
                        <td className="px-5 py-4">
                          <StatusBadge status={order.status} />
                        </td>

                        {/* Actions */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            <button
                              onClick={() => setSelectedOrder(order)}
                              className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:scale-105"
                              style={{
                                background: "var(--card-subtle)",
                                border:     "1px solid var(--border-hover)",
                                color:      "var(--accent-deep)",
                              }}
                            >
                              <Eye size={14} />
                            </button>
                            <button
                              className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:scale-105"
                              style={{
                                background: "var(--card-alt)",
                                border:     "1px solid var(--border-soft)",
                                color:      "var(--text-muted)",
                              }}
                            >
                              <Printer size={14} />
                            </button>
                            <button
                              className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:scale-105"
                              style={{
                                background: "var(--card-alt)",
                                border:     "1px solid var(--border-soft)",
                                color:      "var(--text-muted)",
                              }}
                            >
                              <MoreHorizontal size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ borderTop: "1px solid var(--border-soft)" }}
            >
              <p
                className="text-[12px]"
                style={{ color: "var(--text-muted)" }}
              >
                Showing{" "}
                <span className="font-bold" style={{ color: "var(--text-primary)" }}>
                  {filtered.length === 0 ? 0 : (page - 1) * ITEMS_PER_PAGE + 1}
                </span>
                {" "}–{" "}
                <span className="font-bold" style={{ color: "var(--text-primary)" }}>
                  {Math.min(page * ITEMS_PER_PAGE, filtered.length)}
                </span>
                {" "}of{" "}
                <span className="font-bold" style={{ color: "var(--text-primary)" }}>
                  {filtered.length}
                </span>{" "}
                orders
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:opacity-80 disabled:opacity-40"
                  style={{
                    background: "var(--card-alt)",
                    border:     "1px solid var(--border-soft)",
                    color:      "var(--text-muted)",
                  }}
                >
                  <ChevronLeft size={14} />
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    const p = totalPages <= 5 ? i + 1 : page <= 3 ? i + 1 : page + i - 2;
                    if (p < 1 || p > totalPages) return null;
                    return (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className="flex h-9 w-9 items-center justify-center rounded-xl text-[13px] font-bold transition-all"
                        style={
                          page === p
                            ? {
                                background: "linear-gradient(135deg,var(--accent-deep),var(--accent-lt))",
                                color:      "#fff",
                                boxShadow:  "0 4px 12px rgba(124,108,242,0.3)",
                              }
                            : {
                                background: "var(--card-alt)",
                                border:     "1px solid var(--border-soft)",
                                color:      "var(--text-muted)",
                              }
                        }
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:opacity-80 disabled:opacity-40"
                  style={{
                    background: "var(--card-alt)",
                    border:     "1px solid var(--border-soft)",
                    color:      "var(--text-muted)",
                  }}
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Drawer */}
      <OrderDrawer
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default OrdersPage;