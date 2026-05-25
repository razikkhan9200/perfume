// import { useState, useMemo, useEffect, useCallback } from "react";
// import {
//   Package,
//   TrendingUp,
//   TrendingDown,
//   ShoppingCart,
//   AlertTriangle,
//   DollarSign,
//   Search,
//   Filter,
//   Download,
//   Plus,
//   Star,
//   Eye,
//   Edit2,
//   Trash2,
//   ChevronLeft,
//   ChevronRight,
//   Sparkles,
//   ArrowUpRight,
//   ArrowDownRight,
//   RefreshCw,
// } from "lucide-react";

// import Sidebar from "../../components/common/Sidebar";
// import Navbar from "../../components/common/Navbar";
// import { getApi, deleteApi } from "../../api/apiFunctions"; // ← apna path adjust karo

// /* ─────────────────────────────────────────
//    CONSTANTS
// ───────────────────────────────────────── */

// const ITEMS_PER_PAGE = 5;
// const STATUS_TABS = ["All", "Active", "Pending", "Out of Stock"];

// // Fallback analytics agar API na ho
// const DEFAULT_ANALYTICS = [
//   {
//     id: 1,
//     title: "Total Products",
//     value: "—",
//     subtitle: "Inventory Items",
//     trend: "—",
//     trendUp: true,
//     progress: 0,
//     icon: Package,
//     gradFrom: "#7C6CF2",
//     gradTo: "#B8A9FF",
//   },
//   {
//     id: 2,
//     title: "Monthly Sales",
//     value: "—",
//     subtitle: "Revenue Growth",
//     trend: "—",
//     trendUp: true,
//     progress: 0,
//     icon: ShoppingCart,
//     gradFrom: "#7C6CF2",
//     gradTo: "#CFC5FF",
//   },
//   {
//     id: 3,
//     title: "Out of Stock",
//     value: "—",
//     subtitle: "Need Restock",
//     trend: "—",
//     trendUp: false,
//     progress: 0,
//     icon: AlertTriangle,
//     gradFrom: "#FF8A8A",
//     gradTo: "#F8D7D7",
//   },
//   {
//     id: 4,
//     title: "Revenue Growth",
//     value: "—",
//     subtitle: "This Year",
//     trend: "—",
//     trendUp: true,
//     progress: 0,
//     icon: DollarSign,
//     gradFrom: "#A995EA",
//     gradTo: "#CFC5FF",
//   },
// ];

// /* ─────────────────────────────────────────
//    STATUS BADGE
// ───────────────────────────────────────── */

// const StatusBadge = ({ status }) => {
//   const styles = {
//     Active: {
//       bg: "var(--success-bg)",
//       color: "var(--success-text)",
//       dot: "var(--success)",
//     },
//     Pending: {
//       bg: "var(--warning-bg)",
//       color: "var(--warning-text)",
//       dot: "var(--warning)",
//     },
//     "Out of Stock": {
//       bg: "var(--danger-bg)",
//       color: "var(--danger-text)",
//       dot: "var(--danger)",
//     },
//   };

//   const cfg = styles[status] ?? styles["Pending"];

//   return (
//     <div
//       className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold"
//       style={{ background: cfg.bg, color: cfg.color }}
//     >
//       <div
//         className="h-2 w-2 rounded-full animate-pulse"
//         style={{ background: cfg.dot }}
//       />
//       {status}
//     </div>
//   );
// };

// /* ─────────────────────────────────────────
//    STAR RATING
// ───────────────────────────────────────── */

// const StarRating = ({ rating }) => (
//   <div className="flex items-center justify-center gap-1">
//     <Star size={12} className="fill-yellow-400 text-yellow-400" />
//     <span className="text-[12px] font-semibold text-[var(--text-primary)]">
//       {rating}
//     </span>
//   </div>
// );

// /* ─────────────────────────────────────────
//    ANALYTICS CARD
// ───────────────────────────────────────── */

// const AnalyticsCard = ({ card, loading }) => {
//   const Icon = card.icon;
//   const TrendIcon = card.trendUp ? ArrowUpRight : ArrowDownRight;

//   return (
//     <div
//       className="group relative overflow-hidden rounded-[30px] p-5 transition-all duration-500 hover:-translate-y-1"
//       style={{
//         background:
//           "linear-gradient(135deg,#FFFFFF 0%,#FAFAFC 50%,#F7F5FF 100%)",
//         border: "1px solid var(--border)",
//         boxShadow:
//           "0 10px 30px rgba(124,108,242,0.08),0 4px 10px rgba(0,0,0,0.03)",
//       }}
//     >
//       <div
//         className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//         style={{
//           background: `radial-gradient(circle at top right, ${card.gradFrom}20, transparent 60%)`,
//         }}
//       />

//       <div className="relative z-10">
//         <div className="mb-5 flex items-start justify-between">
//           <div
//             className="flex h-14 w-14 items-center justify-center rounded-2xl"
//             style={{
//               background: `linear-gradient(135deg,${card.gradFrom},${card.gradTo})`,
//               boxShadow: `0 10px 24px ${card.gradFrom}40`,
//             }}
//           >
//             <Icon size={22} color="#fff" />
//           </div>

//           <div
//             className="flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold"
//             style={{
//               background: card.trendUp
//                 ? "var(--success-bg)"
//                 : "var(--danger-bg)",
//               color: card.trendUp
//                 ? "var(--success-text)"
//                 : "var(--danger-text)",
//             }}
//           >
//             <TrendIcon size={12} />
//             {card.trend}
//           </div>
//         </div>

//         <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-soft)]">
//           {card.subtitle}
//         </p>

//         {loading ? (
//           <div className="mt-2 h-9 w-28 animate-pulse rounded-xl bg-[var(--border-soft)]" />
//         ) : (
//           <h3 className="mt-2 text-[34px] font-black tracking-[-0.05em] text-[var(--text-heading)]">
//             {card.value}
//           </h3>
//         )}

//         <p className="mt-1 text-[13px] font-medium text-[var(--text-muted)]">
//           {card.title}
//         </p>

//         <div className="mt-5">
//           <div className="mb-2 flex items-center justify-between">
//             <span className="text-[11px] text-[var(--text-soft)]">Progress</span>
//             <span className="text-[11px] font-bold text-[var(--text-muted)]">
//               {card.progress}%
//             </span>
//           </div>

//           <div className="h-[6px] overflow-hidden rounded-full bg-[var(--border-soft)]">
//             <div
//               className="h-full rounded-full transition-all duration-700"
//               style={{
//                 width: `${card.progress}%`,
//                 background: `linear-gradient(90deg,${card.gradFrom},${card.gradTo})`,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────
//    SKELETON ROW
// ───────────────────────────────────────── */

// const SkeletonRow = () => (
//   <tr>
//     {Array.from({ length: 8 }).map((_, i) => (
//       <td key={i} className="px-6 py-5">
//         <div className="h-5 animate-pulse rounded-lg bg-[var(--border-soft)]" />
//       </td>
//     ))}
//   </tr>
// );

// /* ─────────────────────────────────────────
//    PRODUCTS PAGE
// ───────────────────────────────────────── */

// const ProductsPage = () => {
//   const [activeNav, setActiveNav] = useState(1);
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [page, setPage] = useState(1);

//   // ── API State ──────────────────────────────
//   const [products, setProducts] = useState([]);
//   const [analytics, setAnalytics] = useState(DEFAULT_ANALYTICS);
//   const [loadingProducts, setLoadingProducts] = useState(false);
//   const [loadingAnalytics, setLoadingAnalytics] = useState(false);
//   const [error, setError] = useState(null);
//   const [deletingId, setDeletingId] = useState(null);

//   /* ── Products fetch ── */
//   const fetchProducts = useCallback(async () => {
//     setLoadingProducts(true);
//     setError(null);
//     try {
//       // GET /products  →  array ya { data: [...] } dono handle hote hain
//       const res = await getApi("/products");
//       const list = Array.isArray(res) ? res : res.data ?? [];
//       setProducts(list);
//     } catch (err) {
//       setError(err?.response?.data?.message ?? "Products load karne mein error aaya.");
//     } finally {
//       setLoadingProducts(false);
//     }
//   }, []);

//   /* ── Analytics fetch ── */
//   const fetchAnalytics = useCallback(async () => {
//     setLoadingAnalytics(true);
//     try {
//       // GET /analytics/products  →  array of 4 cards (same shape as DEFAULT_ANALYTICS)
//       // const res = await getApi("/analytics/products");
//       const list = Array.isArray(res) ? res : res.data ?? [];
//       if (list.length) {
//         // icon fields backend se nahi aate, isliye DEFAULT se merge karo
//         const merged = DEFAULT_ANALYTICS.map((def, i) => ({
//           ...def,
//           ...(list[i] ?? {}),
//           icon: def.icon, // icon hamesha frontend ka rahega
//         }));
//         setAnalytics(merged);
//       }
//     } catch {
//       // Analytics fail hone par silently default reh jao
//     } finally {
//       setLoadingAnalytics(false);
//     }
//   }, []);

//   /* ── Delete handler ── */
//   const handleDelete = useCallback(
//     async (id) => {
//       if (!window.confirm("Kya aap yeh product delete karna chahte hain?")) return;
//       setDeletingId(id);
//       try {
//         await deleteApi(`/products/${id}`);
//         setProducts((prev) => prev.filter((p) => p.id !== id));
//       } catch (err) {
//         alert(err?.response?.data?.message ?? "Delete karne mein masla aaya.");
//       } finally {
//         setDeletingId(null);
//       }
//     },
//     []
//   );

//   /* ── Initial load ── */
//   useEffect(() => {
//     fetchProducts();
//     fetchAnalytics();
//   }, [fetchProducts, fetchAnalytics]);

//   /* ── Filtering + pagination ── */
//   const filtered = useMemo(() => {
//     let data = products;

//     if (statusFilter !== "All") {
//       data = data.filter((p) => p.status === statusFilter);
//     }

//     if (search.trim()) {
//       const q = search.toLowerCase();
//       data = data.filter(
//         (p) =>
//           p.name?.toLowerCase().includes(q) ||
//           p.category?.toLowerCase().includes(q) ||
//           p.sku?.toLowerCase().includes(q)
//       );
//     }

//     return data;
//   }, [products, search, statusFilter]);

//   const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

//   const paged = filtered.slice(
//     (page - 1) * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE
//   );

//   /* ── Reset page on filter change ── */
//   useEffect(() => {
//     setPage(1);
//   }, [search, statusFilter]);

//   /* ─────────────────────────────────────────
//      RENDER
//   ───────────────────────────────────────── */

//   return (
//     <div
//       className="flex h-screen overflow-hidden text-[var(--text)]"
//       style={{
//         background:
//           "linear-gradient(135deg,var(--grad-hero-from),var(--grad-hero-via),var(--grad-hero-to))",
//       }}
//     >
//       <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

//       <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
//         <Navbar />

//         <main className="flex-1 overflow-y-auto px-4 pb-10 sm:px-6 lg:px-8">
//           {/* Header */}
//           <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--text-soft)]">
//                 Catalog Management
//               </p>
//               <h1 className="text-[34px] font-black tracking-[-0.05em] text-[var(--text-heading)]">
//                 Products Dashboard
//               </h1>
//               <p className="mt-1 text-[14px] text-[var(--text-muted)]">
//                 Manage inventory, pricing and analytics.
//               </p>
//             </div>

//             <div className="flex items-center gap-3">
//               {/* Refresh button */}
//               <button
//                 onClick={fetchProducts}
//                 disabled={loadingProducts}
//                 className="flex items-center gap-2 rounded-2xl px-4 py-3 text-[13px] font-semibold transition-all hover:opacity-80 disabled:opacity-50"
//                 style={{
//                   background: "var(--card-alt)",
//                   border: "1px solid var(--border-soft)",
//                   color: "var(--text-muted)",
//                 }}
//               >
//                 <RefreshCw
//                   size={14}
//                   className={loadingProducts ? "animate-spin" : ""}
//                 />
//                 Refresh
//               </button>

//               <button
//                 className="flex items-center gap-2 rounded-2xl px-5 py-3 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
//                 style={{
//                   background:
//                     "linear-gradient(135deg,var(--grad-accent-from),var(--grad-accent-to))",
//                   boxShadow: "0 10px 24px rgba(124,108,242,0.22)",
//                 }}
//               >
//                 <Plus size={16} />
//                 Add Product
//               </button>
//             </div>
//           </div>

//           {/* Analytics Cards */}
//           <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
//             {analytics.map((card) => (
//               <AnalyticsCard
//                 key={card.id}
//                 card={card}
//                 loading={loadingAnalytics}
//               />
//             ))}
//           </div>

//           {/* Global Error Banner */}
//           {/* {error && (
//             <div
//               className="mb-6 flex items-center gap-3 rounded-2xl px-5 py-4 text-[13px] font-semibold"
//               style={{
//                 background: "var(--danger-bg)",
//                 color: "var(--danger-text)",
//                 border: "1px solid var(--danger-text)22",
//               }}
//             >
//               <AlertTriangle size={16} />
//               {error}
//               <button
//                 onClick={fetchProducts}
//                 className="ml-auto underline underline-offset-2"
//               >
//                 Dobara try karo
//               </button>
//             </div>
//           )} */}

//           {/* Table Card */}
//           <div
//             className="overflow-hidden rounded-[32px] backdrop-blur-xl"
//             style={{
//               background:
//                 "linear-gradient(135deg,#FFFFFF 0%,#FAFAFC 50%,#F7F5FF 100%)",
//               border: "1px solid var(--border)",
//               boxShadow:
//                 "0 20px 60px rgba(124,108,242,0.08),0 4px 12px rgba(0,0,0,0.04)",
//             }}
//           >
//             {/* Table Header */}
//             <div className="border-b border-[var(--border-soft)] px-6 py-6">
//               <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//                 <div>
//                   <div className="mb-2 flex items-center gap-2">
//                     <Sparkles size={14} className="text-[var(--accent-deep)]" />
//                     <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--text-soft)]">
//                       Inventory
//                     </p>
//                   </div>

//                   <h2 className="flex items-center gap-3 text-[26px] font-black tracking-[-0.04em] text-[var(--text-heading)]">
//                     All Products
//                     <span
//                       className="rounded-full px-3 py-1 text-[11px]"
//                       style={{
//                         background: "var(--card-subtle)",
//                         color: "var(--accent-deep)",
//                       }}
//                     >
//                       {loadingProducts ? "..." : filtered.length}
//                     </span>
//                   </h2>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex flex-wrap gap-3">
//                   <div
//                     className="flex items-center gap-2 rounded-2xl px-4 py-3"
//                     style={{
//                       background: "var(--card-alt)",
//                       border: "1px solid var(--border-soft)",
//                     }}
//                   >
//                     <Search size={14} className="text-[var(--text-soft)]" />
//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       value={search}
//                       onChange={(e) => setSearch(e.target.value)}
//                       className="bg-transparent text-[13px] outline-none placeholder:text-[var(--text-soft)]"
//                     />
//                   </div>

//                   <button
//                     className="flex items-center gap-2 rounded-2xl px-4 py-3 text-[13px] font-semibold"
//                     style={{
//                       background: "var(--card-alt)",
//                       border: "1px solid var(--border-soft)",
//                       color: "var(--text-muted)",
//                     }}
//                   >
//                     <Filter size={14} />
//                     Filter
//                   </button>

//                   <button
//                     className="flex items-center gap-2 rounded-2xl px-4 py-3 text-[13px] font-semibold"
//                     style={{
//                       background: "var(--card-alt)",
//                       border: "1px solid var(--border-soft)",
//                       color: "var(--text-muted)",
//                     }}
//                   >
//                     <Download size={14} />
//                     Export
//                   </button>
//                 </div>
//               </div>

//               {/* Status Tabs */}
//               <div className="mt-5 flex flex-wrap gap-2">
//                 {STATUS_TABS.map((tab) => {
//                   const active = statusFilter === tab;
//                   return (
//                     <button
//                       key={tab}
//                       onClick={() => setStatusFilter(tab)}
//                       className="rounded-2xl px-4 py-2 text-[12px] font-bold transition-all"
//                       style={
//                         active
//                           ? {
//                               background:
//                                 "linear-gradient(135deg,var(--grad-accent-from),var(--grad-accent-to))",
//                               color: "#fff",
//                               boxShadow: "0 8px 20px rgba(124,108,242,0.18)",
//                             }
//                           : {
//                               background: "var(--card-alt)",
//                               color: "var(--text-muted)",
//                               border: "1px solid var(--border-soft)",
//                             }
//                       }
//                     >
//                       {tab}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Table Body */}
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[950px]">
//                 <thead>
//                   <tr className="border-b border-[var(--border-soft)]">
//                     {[
//                       "Product",
//                       "Category",
//                       "Price",
//                       "Stock",
//                       "Status",
//                       "Rating",
//                       "Sales",
//                       "Actions",
//                     ].map((item) => (
//                       <th
//                         key={item}
//                         className="px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[0.2em]"
//                         style={{ color: "var(--text-soft)" }}
//                       >
//                         {item}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {/* Loading skeleton */}
//                   {loadingProducts &&
//                     Array.from({ length: 5 }).map((_, i) => (
//                       <SkeletonRow key={i} />
//                     ))}

//                   {/* Empty state */}
//                   {!loadingProducts && paged.length === 0 && (
//                     <tr>
//                       <td colSpan={8} className="py-16 text-center">
//                         <Package
//                           size={40}
//                           className="mx-auto mb-3 opacity-20"
//                           style={{ color: "var(--accent-deep)" }}
//                         />
//                         <p
//                           className="text-[14px] font-semibold"
//                           style={{ color: "var(--text-muted)" }}
//                         >
//                           Koi product nahi mila
//                         </p>
//                       </td>
//                     </tr>
//                   )}

//                   {/* Actual rows */}
//                   {!loadingProducts &&
//                     paged.map((product, index) => (
//                       <tr
//                         key={product.id}
//                         className="transition-all duration-200 hover:bg-[rgba(207,197,255,0.16)]"
//                         style={{
//                           background:
//                             index % 2 === 0
//                               ? "transparent"
//                               : "rgba(207,197,255,0.05)",
//                           opacity: deletingId === product.id ? 0.4 : 1,
//                         }}
//                       >
//                         {/* Product */}
//                         <td className="px-6 py-5">
//                           <div className="flex items-center gap-4">
//                             <div
//                               className="h-14 w-14 overflow-hidden rounded-2xl"
//                               style={{ border: "1px solid var(--border-soft)" }}
//                             >
//                               {product.image ? (
//                                 <img
//                                   src={product.image}
//                                   alt={product.name}
//                                   className="h-full w-full object-cover"
//                                 />
//                               ) : (
//                                 <div
//                                   className="flex h-full w-full items-center justify-center"
//                                   style={{ background: "var(--card-subtle)" }}
//                                 >
//                                   <Package
//                                     size={20}
//                                     style={{ color: "var(--accent-deep)" }}
//                                   />
//                                 </div>
//                               )}
//                             </div>

//                             <div>
//                               <h4 className="text-[14px] font-bold text-[var(--text-primary)]">
//                                 {product.name}
//                               </h4>
//                               <p className="mt-1 text-[11px] text-[var(--text-soft)]">
//                                 #{product.sku}
//                               </p>
//                             </div>
//                           </div>
//                         </td>

//                         {/* Category */}
//                         <td className="px-6 py-5">
//                           <span
//                             className="rounded-xl px-3 py-1 text-[11px] font-semibold"
//                             style={{
//                               background: "var(--card-subtle)",
//                               color: "var(--accent-deep)",
//                             }}
//                           >
//                             {product.category}
//                           </span>
//                         </td>

//                         {/* Price */}
//                         <td className="px-6 py-5">
//                           <span className="text-[14px] font-bold text-[var(--text-primary)]">
//                             ${product.price}
//                           </span>
//                         </td>

//                         {/* Stock */}
//                         <td className="px-6 py-5">
//                           <div className="flex flex-col gap-2">
//                             <span
//                               className="text-[13px] font-bold"
//                               style={{
//                                 color:
//                                   product.stock === 0
//                                     ? "var(--danger-text)"
//                                     : product.stock < 30
//                                     ? "var(--warning-text)"
//                                     : "var(--text-primary)",
//                               }}
//                             >
//                               {product.stock}
//                             </span>

//                             <div className="h-[5px] w-20 overflow-hidden rounded-full bg-[var(--border-soft)]">
//                               <div
//                                 className="h-full rounded-full"
//                                 style={{
//                                   width: `${Math.min(
//                                     100,
//                                     (product.stock / 1000) * 100
//                                   )}%`,
//                                   background:
//                                     "linear-gradient(90deg,var(--grad-accent-from),var(--grad-accent-to))",
//                                 }}
//                               />
//                             </div>
//                           </div>
//                         </td>

//                         {/* Status */}
//                         <td className="px-6 py-5">
//                           <StatusBadge status={product.status} />
//                         </td>

//                         {/* Rating */}
//                         <td className="px-6 py-5">
//                           <StarRating rating={product.rating} />
//                         </td>

//                         {/* Sales */}
//                         <td className="px-6 py-5">
//                           <div>
//                             <p className="text-[14px] font-bold text-[var(--text-primary)]">
//                               {product.sales}
//                             </p>
//                             <div
//                               className="mt-1 flex items-center gap-1 text-[11px] font-bold"
//                               style={{
//                                 color:
//                                   product.trend > 0
//                                     ? "var(--success-text)"
//                                     : "var(--danger-text)",
//                               }}
//                             >
//                               {product.trend > 0 ? (
//                                 <TrendingUp size={11} />
//                               ) : (
//                                 <TrendingDown size={11} />
//                               )}
//                               {product.trend}%
//                             </div>
//                           </div>
//                         </td>

//                         {/* Actions */}
//                         <td className="px-6 py-5">
//                           <div className="flex items-center gap-2">
//                             <button
//                               className="flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-105"
//                               style={{
//                                 background: "var(--card-subtle)",
//                                 color: "var(--accent-deep)",
//                               }}
//                             >
//                               <Eye size={15} />
//                             </button>

//                             <button
//                               className="flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-105"
//                               style={{
//                                 background: "var(--warning-bg)",
//                                 color: "var(--warning-text)",
//                               }}
//                             >
//                               <Edit2 size={15} />
//                             </button>

//                             <button
//                               onClick={() => handleDelete(product.id)}
//                               disabled={deletingId === product.id}
//                               className="flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
//                               style={{
//                                 background: "var(--danger-bg)",
//                                 color: "var(--danger-text)",
//                               }}
//                             >
//                               {deletingId === product.id ? (
//                                 <RefreshCw size={15} className="animate-spin" />
//                               ) : (
//                                 <Trash2 size={15} />
//                               )}
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Pagination */}
//             <div className="flex items-center justify-between border-t border-[var(--border-soft)] px-6 py-5">
//               <p className="text-[13px] text-[var(--text-muted)]">
//                 Showing{" "}
//                 <span className="font-bold text-[var(--text-primary)]">
//                   {paged.length}
//                 </span>{" "}
//                 of{" "}
//                 <span className="font-bold text-[var(--text-primary)]">
//                   {filtered.length}
//                 </span>{" "}
//                 products
//               </p>

//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   disabled={page === 1}
//                   className="flex h-10 w-10 items-center justify-center rounded-xl disabled:opacity-40"
//                   style={{
//                     background: "var(--card-alt)",
//                     border: "1px solid var(--border-soft)",
//                     color: "var(--text-muted)",
//                   }}
//                 >
//                   <ChevronLeft size={15} />
//                 </button>

//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                   (p) => (
//                     <button
//                       key={p}
//                       onClick={() => setPage(p)}
//                       className="flex h-10 w-10 items-center justify-center rounded-xl text-[13px] font-bold"
//                       style={
//                         page === p
//                           ? {
//                               background:
//                                 "linear-gradient(135deg,var(--grad-accent-from),var(--grad-accent-to))",
//                               color: "#fff",
//                             }
//                           : {
//                               background: "var(--card-alt)",
//                               border: "1px solid var(--border-soft)",
//                               color: "var(--text-muted)",
//                             }
//                       }
//                     >
//                       {p}
//                     </button>
//                   )
//                 )}

//                 <button
//                   onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                   disabled={page === totalPages}
//                   className="flex h-10 w-10 items-center justify-center rounded-xl disabled:opacity-40"
//                   style={{
//                     background: "var(--card-alt)",
//                     border: "1px solid var(--border-soft)",
//                     color: "var(--text-muted)",
//                   }}
//                 >
//                   <ChevronRight size={15} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

// import { useState, useMemo, useEffect, useCallback } from "react";
// import {
//   Package,
//   TrendingUp,
//   TrendingDown,
//   ShoppingCart,
//   AlertTriangle,
//   DollarSign,
//   Search,
//   Filter,
//   Download,
//   Plus,
//   Star,
//   Eye,
//   Edit2,
//   Trash2,
//   ChevronLeft,
//   ChevronRight,
//   Sparkles,
//   ArrowUpRight,
//   ArrowDownRight,
//   RefreshCw,
//   MoreHorizontal,
// } from "lucide-react";

// import Sidebar from "../../components/common/Sidebar";
// import Navbar from "../../components/common/Navbar";
// import { getApi, deleteApi } from "../../api/apiFunctions";

// const ITEMS_PER_PAGE = 5;

// const STATUS_TABS = ["All", "Active", "Pending", "Out of Stock"];

// const DEFAULT_ANALYTICS = [
//   {
//     id: 1,
//     title: "Total Products",
//     value: "12.4K",
//     subtitle: "Inventory Items",
//     trend: "+12%",
//     trendUp: true,
//     progress: 82,
//     icon: Package,
//     gradFrom: "#7C6CF2",
//     gradTo: "#A78BFA",
//   },
//   {
//     id: 2,
//     title: "Monthly Sales",
//     value: "$84.2K",
//     subtitle: "Revenue Growth",
//     trend: "+18%",
//     trendUp: true,
//     progress: 74,
//     icon: ShoppingCart,
//     gradFrom: "#06B6D4",
//     gradTo: "#3B82F6",
//   },
//   {
//     id: 3,
//     title: "Out of Stock",
//     value: "23",
//     subtitle: "Need Restock",
//     trend: "-8%",
//     trendUp: false,
//     progress: 28,
//     icon: AlertTriangle,
//     gradFrom: "#EF4444",
//     gradTo: "#F97316",
//   },
//   {
//     id: 4,
//     title: "Revenue Growth",
//     value: "32%",
//     subtitle: "This Year",
//     trend: "+24%",
//     trendUp: true,
//     progress: 91,
//     icon: DollarSign,
//     gradFrom: "#A855F7",
//     gradTo: "#EC4899",
//   },
// ];

// const StatusBadge = ({ status }) => {
//   const styles = {
//     Active: {
//       bg: "rgba(34,197,94,0.12)",
//       color: "#16A34A",
//       dot: "#22C55E",
//     },
//     Pending: {
//       bg: "rgba(234,179,8,0.12)",
//       color: "#CA8A04",
//       dot: "#EAB308",
//     },
//     "Out of Stock": {
//       bg: "rgba(239,68,68,0.12)",
//       color: "#DC2626",
//       dot: "#EF4444",
//     },
//   };

//   const cfg = styles[status] ?? styles.Pending;

//   return (
//     <div
//       className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold"
//       style={{
//         background: cfg.bg,
//         color: cfg.color,
//         border: `1px solid ${cfg.dot}30`,
//       }}
//     >
//       <div
//         className="h-2 w-2 rounded-full animate-pulse"
//         style={{ background: cfg.dot }}
//       />
//       {status}
//     </div>
//   );
// };

// const StarRating = ({ rating }) => (
//   <div className="flex items-center gap-1">
//     <Star size={13} className="fill-yellow-400 text-yellow-400" />
//     <span className="text-[12px] font-semibold text-[var(--text-primary)]">
//       {rating}
//     </span>
//   </div>
// );

// const AnalyticsCard = ({ card }) => {
//   const Icon = card.icon;
//   const TrendIcon = card.trendUp ? ArrowUpRight : ArrowDownRight;

//   return (
//     <div
//       className="group relative overflow-hidden rounded-[32px] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(124,108,242,0.25)]"
//       style={{
//         background: "rgba(255,255,255,0.75)",
//         backdropFilter: "blur(18px)",
//         WebkitBackdropFilter: "blur(18px)",
//         border: "1px solid rgba(255,255,255,0.45)",
//         boxShadow: `
//           0 10px 40px rgba(124,108,242,0.15),
//           0 4px 20px rgba(0,0,0,0.06),
//           inset 0 1px 0 rgba(255,255,255,0.6)
//         `,
//       }}
//     >
//       {/* Glow */}
//       <div
//         className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-20 transition-all duration-500 group-hover:scale-125"
//         style={{
//           background: `linear-gradient(135deg,${card.gradFrom},${card.gradTo})`,
//         }}
//       />

//       <div className="relative z-10">
//         <div className="mb-5 flex items-start justify-between">
//           <div
//             className="flex h-16 w-16 items-center justify-center rounded-[24px] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
//             style={{
//               background: `linear-gradient(135deg,${card.gradFrom},${card.gradTo})`,
//               boxShadow: `0 15px 35px ${card.gradFrom}50`,
//             }}
//           >
//             <Icon size={26} color="#fff" />
//           </div>

//           <div
//             className="flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold"
//             style={{
//               background: card.trendUp
//                 ? "rgba(34,197,94,0.12)"
//                 : "rgba(239,68,68,0.12)",
//               color: card.trendUp ? "#16A34A" : "#DC2626",
//             }}
//           >
//             <TrendIcon size={12} />
//             {card.trend}
//           </div>
//         </div>

//         <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-soft)]">
//           {card.subtitle}
//         </p>

//         <h3 className="mt-2 text-[36px] font-black tracking-[-0.05em] text-[var(--text-heading)]">
//           {card.value}
//         </h3>

//         <p className="mt-1 text-[13px] text-[var(--text-muted)]">
//           {card.title}
//         </p>

//         <div className="mt-5">
//           <div className="mb-2 flex items-center justify-between">
//             <span className="text-[11px] text-[var(--text-soft)]">
//               Progress
//             </span>

//             <span className="text-[11px] font-bold text-[var(--text-muted)]">
//               {card.progress}%
//             </span>
//           </div>

//           <div className="h-[7px] overflow-hidden rounded-full bg-[rgba(124,108,242,0.08)]">
//             <div
//               className="h-full rounded-full"
//               style={{
//                 width: `${card.progress}%`,
//                 background: `linear-gradient(90deg,${card.gradFrom},${card.gradTo})`,
//                 boxShadow: `0 0 18px ${card.gradFrom}55`,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProductsPage = () => {
//   const [activeNav, setActiveNav] = useState(1);
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [page, setPage] = useState(1);

//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(false);
//   const [deletingId, setDeletingId] = useState(null);

//   const fetchProducts = useCallback(async () => {
//     setLoadingProducts(true);

//     try {
//       const res = await getApi("/products");
//       const list = Array.isArray(res) ? res : res.data ?? [];
//       setProducts(list);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   }, []);

//   const handleDelete = useCallback(async (id) => {
//     if (!window.confirm("Delete this product?")) return;

//     setDeletingId(id);

//     try {
//       await deleteApi(`/products/${id}`);

//       setProducts((prev) => prev.filter((p) => p.id !== id));
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setDeletingId(null);
//     }
//   }, []);

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   const filtered = useMemo(() => {
//     let data = products;

//     if (statusFilter !== "All") {
//       data = data.filter((p) => p.status === statusFilter);
//     }

//     if (search.trim()) {
//       const q = search.toLowerCase();

//       data = data.filter(
//         (p) =>
//           p.name?.toLowerCase().includes(q) ||
//           p.category?.toLowerCase().includes(q) ||
//           p.sku?.toLowerCase().includes(q)
//       );
//     }

//     return data;
//   }, [products, search, statusFilter]);

//   const totalPages = Math.max(
//     1,
//     Math.ceil(filtered.length / ITEMS_PER_PAGE)
//   );

//   const paged = filtered.slice(
//     (page - 1) * ITEMS_PER_PAGE,
//     page * ITEMS_PER_PAGE
//   );

//   return (
//     <div
//       className="flex h-screen overflow-hidden text-[var(--text)]"
//       style={{
//         background:
//           "linear-gradient(135deg,var(--grad-hero-from),var(--grad-hero-via),var(--grad-hero-to))",
//       }}
//     >
//       <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

//       <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
//         <Navbar />

//         <main className="flex-1 overflow-y-auto px-4 pb-10 sm:px-6 lg:px-8">
//           {/* Header */}
//           <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
//             <div>
//               <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--text-soft)]">
//                 Catalog Management
//               </p>

//               <h1 className="text-[36px] font-black tracking-[-0.05em] text-[var(--text-heading)]">
//                 Products Dashboard
//               </h1>

//               <p className="mt-1 text-[14px] text-[var(--text-muted)]">
//                 Manage inventory, pricing and analytics.
//               </p>
//             </div>

//             <div className="flex items-center gap-3">
//               <button
//                 onClick={fetchProducts}
//                 className="flex items-center gap-2 rounded-2xl px-4 py-3 text-[13px] font-semibold"
//                 style={{
//                   background: "rgba(255,255,255,0.65)",
//                   backdropFilter: "blur(12px)",
//                   WebkitBackdropFilter: "blur(12px)",
//                   border: "1px solid rgba(255,255,255,0.4)",
//                 }}
//               >
//                 <RefreshCw
//                   size={14}
//                   className={loadingProducts ? "animate-spin" : ""}
//                 />
//                 Refresh
//               </button>

//               <button
//                 className="flex items-center gap-2 rounded-2xl px-5 py-3 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-1"
//                 style={{
//                   background:
//                     "linear-gradient(135deg,var(--grad-accent-from),var(--grad-accent-to))",
//                   boxShadow: "0 10px 24px rgba(124,108,242,0.22)",
//                 }}
//               >
//                 <Plus size={16} />
//                 Add Product
//               </button>
//             </div>
//           </div>

//           {/* Analytics */}
//           <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
//             {DEFAULT_ANALYTICS.map((card) => (
//               <AnalyticsCard key={card.id} card={card} />
//             ))}
//           </div>

//           {/* Table */}
//           <div
//             className="overflow-hidden rounded-[36px]"
//             style={{
//               background: "rgba(255,255,255,0.72)",
//               backdropFilter: "blur(20px)",
//               WebkitBackdropFilter: "blur(20px)",
//               border: "1px solid rgba(255,255,255,0.4)",
//               boxShadow: `
//                 0 20px 60px rgba(124,108,242,0.12),
//                 0 8px 20px rgba(0,0,0,0.05)
//               `,
//             }}
//           >
//             {/* Header */}
//             <div className="border-b border-white/40 px-6 py-6">
//               <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//                 <div>
//                   <div className="mb-2 flex items-center gap-2">
//                     <Sparkles
//                       size={14}
//                       className="text-[var(--accent-deep)]"
//                     />

//                     <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--text-soft)]">
//                       Inventory
//                     </p>
//                   </div>

//                   <h2 className="text-[28px] font-black tracking-[-0.04em] text-[var(--text-heading)]">
//                     All Products
//                   </h2>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex flex-wrap gap-3">
//                   <div
//                     className="flex items-center gap-2 rounded-2xl px-4 py-3"
//                     style={{
//                       background: "rgba(255,255,255,0.6)",
//                       backdropFilter: "blur(14px)",
//                       WebkitBackdropFilter: "blur(14px)",
//                       border: "1px solid rgba(255,255,255,0.4)",
//                     }}
//                   >
//                     <Search
//                       size={14}
//                       className="text-[var(--text-soft)]"
//                     />

//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       value={search}
//                       onChange={(e) => setSearch(e.target.value)}
//                       className="bg-transparent text-[13px] outline-none placeholder:text-[var(--text-soft)]"
//                     />
//                   </div>

//                   <button
//                     className="flex items-center gap-2 rounded-2xl px-4 py-3 text-[13px] font-semibold"
//                     style={{
//                       background: "rgba(255,255,255,0.65)",
//                       backdropFilter: "blur(12px)",
//                       border: "1px solid rgba(255,255,255,0.4)",
//                     }}
//                   >
//                     <Filter size={14} />
//                     Filter
//                   </button>

//                   <button
//                     className="flex items-center gap-2 rounded-2xl px-4 py-3 text-[13px] font-semibold"
//                     style={{
//                       background: "rgba(255,255,255,0.65)",
//                       backdropFilter: "blur(12px)",
//                       border: "1px solid rgba(255,255,255,0.4)",
//                     }}
//                   >
//                     <Download size={14} />
//                     Export
//                   </button>
//                 </div>
//               </div>

//               {/* Tabs */}
//               <div className="mt-5 flex flex-wrap gap-2">
//                 {STATUS_TABS.map((tab) => {
//                   const active = statusFilter === tab;

//                   return (
//                     <button
//                       key={tab}
//                       onClick={() => setStatusFilter(tab)}
//                       className="rounded-2xl px-4 py-2 text-[12px] font-bold transition-all"
//                       style={
//                         active
//                           ? {
//                               background:
//                                 "linear-gradient(135deg,var(--grad-accent-from),var(--grad-accent-to))",
//                               color: "#fff",
//                               boxShadow:
//                                 "0 10px 24px rgba(124,108,242,0.22)",
//                             }
//                           : {
//                               background: "rgba(255,255,255,0.55)",
//                               backdropFilter: "blur(12px)",
//                               border: "1px solid rgba(255,255,255,0.4)",
//                               color: "var(--text-muted)",
//                             }
//                       }
//                     >
//                       {tab}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[950px]">
//                 <thead>
//                   <tr className="border-b border-white/40">
//                     {[
//                       "Product",
//                       "Category",
//                       "Price",
//                       "Stock",
//                       "Status",
//                       "Rating",
//                       "Sales",
//                       "Actions",
//                     ].map((item) => (
//                       <th
//                         key={item}
//                         className="px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[0.2em]"
//                         style={{ color: "var(--text-soft)" }}
//                       >
//                         {item}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {!loadingProducts &&
//                     paged.map((product) => (
//                       <tr
//                         key={product.id}
//                         className="transition-all duration-300 hover:bg-white/60"
//                       >
//                         {/* Product */}
//                         <td className="px-6 py-5">
//                           <div className="flex items-center gap-4">
//                             <div
//                               className="h-14 w-14 overflow-hidden rounded-2xl"
//                               style={{
//                                 border: "1px solid rgba(255,255,255,0.4)",
//                                 background: "rgba(255,255,255,0.45)",
//                               }}
//                             >
//                               {product.image ? (
//                                 <img
//                                   src={product.image}
//                                   alt={product.name}
//                                   className="h-full w-full object-cover"
//                                 />
//                               ) : (
//                                 <div className="flex h-full w-full items-center justify-center">
//                                   <Package
//                                     size={20}
//                                     className="text-[var(--accent-deep)]"
//                                   />
//                                 </div>
//                               )}
//                             </div>

//                             <div>
//                               <h4 className="text-[14px] font-bold text-[var(--text-primary)]">
//                                 {product.name}
//                               </h4>

//                               <p className="mt-1 text-[11px] text-[var(--text-soft)]">
//                                 #{product.sku}
//                               </p>
//                             </div>
//                           </div>
//                         </td>

//                         {/* Category */}
//                         <td className="px-6 py-5">
//                           <span
//                             className="rounded-xl px-3 py-1 text-[11px] font-semibold"
//                             style={{
//                               background: "rgba(124,108,242,0.1)",
//                               color: "var(--accent-deep)",
//                             }}
//                           >
//                             {product.category}
//                           </span>
//                         </td>

//                         {/* Price */}
//                         <td className="px-6 py-5">
//                           <span className="text-[14px] font-bold text-[var(--text-primary)]">
//                             ${product.price}
//                           </span>
//                         </td>

//                         {/* Stock */}
//                         <td className="px-6 py-5">
//                           <div className="flex flex-col gap-2">
//                             <span className="text-[13px] font-bold text-[var(--text-primary)]">
//                               {product.stock}
//                             </span>

//                             <div className="h-[6px] w-20 overflow-hidden rounded-full bg-[rgba(124,108,242,0.08)]">
//                               <div
//                                 className="h-full rounded-full"
//                                 style={{
//                                   width: `${Math.min(
//                                     100,
//                                     (product.stock / 1000) * 100
//                                   )}%`,
//                                   background:
//                                     "linear-gradient(90deg,var(--grad-accent-from),var(--grad-accent-to))",
//                                 }}
//                               />
//                             </div>
//                           </div>
//                         </td>

//                         {/* Status */}
//                         <td className="px-6 py-5">
//                           <StatusBadge status={product.status} />
//                         </td>

//                         {/* Rating */}
//                         <td className="px-6 py-5">
//                           <StarRating rating={product.rating} />
//                         </td>

//                         {/* Sales */}
//                         <td className="px-6 py-5">
//                           <div>
//                             <p className="text-[14px] font-bold text-[var(--text-primary)]">
//                               {product.sales}
//                             </p>

//                             <div
//                               className="mt-1 flex items-center gap-1 text-[11px] font-bold"
//                               style={{
//                                 color:
//                                   product.trend > 0
//                                     ? "#16A34A"
//                                     : "#DC2626",
//                               }}
//                             >
//                               {product.trend > 0 ? (
//                                 <TrendingUp size={11} />
//                               ) : (
//                                 <TrendingDown size={11} />
//                               )}

//                               {product.trend}%
//                             </div>
//                           </div>
//                         </td>

//                         {/* Actions */}
//                         <td className="px-6 py-5">
//                           <div className="flex items-center gap-2">
//                             <button
//                               className="flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-105"
//                               style={{
//                                 background: "rgba(255,255,255,0.65)",
//                                 backdropFilter: "blur(12px)",
//                                 border:
//                                   "1px solid rgba(255,255,255,0.4)",
//                               }}
//                             >
//                               <Eye size={15} />
//                             </button>

//                             <button
//                               className="flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-105"
//                               style={{
//                                 background: "rgba(255,255,255,0.65)",
//                                 backdropFilter: "blur(12px)",
//                                 border:
//                                   "1px solid rgba(255,255,255,0.4)",
//                               }}
//                             >
//                               <Edit2 size={15} />
//                             </button>

//                             <button
//                               onClick={() =>
//                                 handleDelete(product.id)
//                               }
//                               disabled={deletingId === product.id}
//                               className="flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-105"
//                               style={{
//                                 background: "rgba(255,255,255,0.65)",
//                                 backdropFilter: "blur(12px)",
//                                 border:
//                                   "1px solid rgba(255,255,255,0.4)",
//                               }}
//                             >
//                               {deletingId === product.id ? (
//                                 <RefreshCw
//                                   size={15}
//                                   className="animate-spin"
//                                 />
//                               ) : (
//                                 <Trash2 size={15} />
//                               )}
//                             </button>

//                             <button
//                               className="flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-105"
//                               style={{
//                                 background: "rgba(255,255,255,0.65)",
//                                 backdropFilter: "blur(12px)",
//                                 border:
//                                   "1px solid rgba(255,255,255,0.4)",
//                               }}
//                             >
//                               <MoreHorizontal size={15} />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Pagination */}
//             <div className="flex items-center justify-between border-t border-white/40 px-6 py-5">
//               <p className="text-[13px] text-[var(--text-muted)]">
//                 Showing{" "}
//                 <span className="font-bold text-[var(--text-primary)]">
//                   {paged.length}
//                 </span>{" "}
//                 of{" "}
//                 <span className="font-bold text-[var(--text-primary)]">
//                   {filtered.length}
//                 </span>{" "}
//                 products
//               </p>

//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   disabled={page === 1}
//                   className="flex h-10 w-10 items-center justify-center rounded-xl"
//                   style={{
//                     background: "rgba(255,255,255,0.65)",
//                     backdropFilter: "blur(12px)",
//                     border: "1px solid rgba(255,255,255,0.4)",
//                   }}
//                 >
//                   <ChevronLeft size={15} />
//                 </button>

//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                   (p) => (
//                     <button
//                       key={p}
//                       onClick={() => setPage(p)}
//                       className="flex h-10 w-10 items-center justify-center rounded-xl text-[13px] font-bold"
//                       style={
//                         page === p
//                           ? {
//                               background:
//                                 "linear-gradient(135deg,var(--grad-accent-from),var(--grad-accent-to))",
//                               color: "#fff",
//                             }
//                           : {
//                               background: "rgba(255,255,255,0.65)",
//                               backdropFilter: "blur(12px)",
//                               border:
//                                 "1px solid rgba(255,255,255,0.4)",
//                             }
//                       }
//                     >
//                       {p}
//                     </button>
//                   )
//                 )}

//                 <button
//                   onClick={() =>
//                     setPage((p) => Math.min(totalPages, p + 1))
//                   }
//                   disabled={page === totalPages}
//                   className="flex h-10 w-10 items-center justify-center rounded-xl"
//                   style={{
//                     background: "rgba(255,255,255,0.65)",
//                     backdropFilter: "blur(12px)",
//                     border: "1px solid rgba(255,255,255,0.4)",
//                   }}
//                 >
//                   <ChevronRight size={15} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

import { useState, useMemo, useEffect, useCallback } from "react";
import {
  Package,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  AlertTriangle,
  DollarSign,
  Search,
  Filter,
  Download,
  Plus,
  Star,
  Eye,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  MoreHorizontal,
  X,
} from "lucide-react";

import Sidebar from "../../components/common/Sidebar";
import Navbar from "../../components/common/Navbar";
import { getApi, deleteApi } from "../../api/apiFunctions";

/* ═══════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════ */

const ITEMS_PER_PAGE = 8;
const STATUS_TABS = ["All",  "Out of Stock"];

const DEFAULT_ANALYTICS = [
  {
    id: 1,
    title: "Total Products",
    value: "12.4K",
    subtitle: "Inventory Items",
    trend: "+12%",
    trendUp: true,
    progress: 82,
    icon: Package,
    gradFrom: "#7C6CF2",
    gradTo: "#A78BFA",
  },
  {
    id: 2,
    title: "Monthly Sales",
    value: "$84.2K",
    subtitle: "Revenue Growth",
    trend: "+18%",
    trendUp: true,
    progress: 74,
    icon: ShoppingCart,
    gradFrom: "#06B6D4",
    gradTo: "#3B82F6",
  },
  {
    id: 3,
    title: "Out of Stock",
    value: "23",
    subtitle: "Need Restock",
    trend: "-8%",
    trendUp: false,
    progress: 28,
    icon: AlertTriangle,
    gradFrom: "#EF4444",
    gradTo: "#F97316",
  },
  {
    id: 4,
    title: "Revenue Growth",
    value: "32%",
    subtitle: "This Year",
    trend: "+24%",
    trendUp: true,
    progress: 91,
    icon: DollarSign,
    gradFrom: "#A855F7",
    gradTo: "#EC4899",
  },
];

/* ═══════════════════════════════════════════
   STATUS BADGE
═══════════════════════════════════════════ */

const StatusBadge = ({ status }) => {
  const styles = {
    Active: {
      bg: "var(--success-bg)",
      color: "var(--success-text)",
      dot: "var(--success)",
    },
    Pending: {
      bg: "var(--warning-bg)",
      color: "var(--warning-text)",
      dot: "var(--warning)",
    },
    "Out of Stock": {
      bg: "var(--danger-bg)",
      color: "var(--danger-text)",
      dot: "var(--danger)",
    },
  };

  const cfg = styles[status] ?? styles.Pending;

  return (
    <div
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold"
      style={{
        background: cfg.bg,
        color: cfg.color,
        border: `1px solid ${cfg.dot}44`,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full animate-pulse"
        style={{ background: cfg.dot }}
      />
      {status}
    </div>
  );
};

/* ═══════════════════════════════════════════
   STAR RATING
═══════════════════════════════════════════ */

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1">
    <Star size={13} className="fill-yellow-400 text-yellow-400" />
    <span
      className="text-[12px] font-semibold"
      style={{ color: "var(--text-primary)" }}
    >
      {rating}
    </span>
  </div>
);

/* ═══════════════════════════════════════════
   ANALYTICS CARD
═══════════════════════════════════════════ */

const AnalyticsCard = ({ card }) => {
  const Icon = card.icon;
  const TrendIcon = card.trendUp ? ArrowUpRight : ArrowDownRight;

  return (
    <div
      className="group relative overflow-hidden rounded-[28px] p-5 transition-all duration-500 hover:-translate-y-1"
      style={{
        background:
          "linear-gradient(135deg,var(--surface) 0%,var(--card-alt) 50%,var(--card-subtle) 100%)",
        border: "1px solid var(--border)",
        boxShadow:
          "0 4px 24px rgba(124,108,242,0.07), 0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Ambient glow on hover */}
      <div
        className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-25"
        style={{
          background: `linear-gradient(135deg,${card.gradFrom},${card.gradTo})`,
        }}
      />

      <div className="relative z-10">
        {/* Icon + trend */}
        <div className="mb-5 flex items-start justify-between">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg,${card.gradFrom},${card.gradTo})`,
              boxShadow: `0 8px 24px ${card.gradFrom}44`,
            }}
          >
            <Icon size={22} color="#fff" />
          </div>

          <div
            className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold"
            style={
              card.trendUp
                ? {
                    background: "var(--success-bg)",
                    color: "var(--success-text)",
                  }
                : {
                    background: "var(--danger-bg)",
                    color: "var(--danger-text)",
                  }
            }
          >
            <TrendIcon size={11} />
            {card.trend}
          </div>
        </div>

        <p
          className="text-[11px] font-bold uppercase tracking-[0.2em]"
          style={{ color: "var(--text-soft)" }}
        >
          {card.subtitle}
        </p>

        <h3
          className="mt-2 text-[32px] font-black tracking-[-0.05em]"
          style={{ color: "var(--text-heading)" }}
        >
          {card.value}
        </h3>

        <p className="mt-1 text-[13px]" style={{ color: "var(--text-muted)" }}>
          {card.title}
        </p>

        {/* Progress */}
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px]" style={{ color: "var(--text-soft)" }}>
              Progress
            </span>
            <span
              className="text-[11px] font-bold"
              style={{ color: "var(--text-muted)" }}
            >
              {card.progress}%
            </span>
          </div>

          <div
            className="h-[6px] overflow-hidden rounded-full"
            style={{ background: "var(--border-soft)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${card.progress}%`,
                background: `linear-gradient(90deg,${card.gradFrom},${card.gradTo})`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   SKELETON ROW
═══════════════════════════════════════════ */

const SkeletonRow = ({ cols = 8 }) => (
  <tr>
    {Array.from({ length: cols }).map((_, i) => (
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
   PRODUCTS PAGE
═══════════════════════════════════════════ */

const ProductsPage = () => {
  const [activeNav, setActiveNav] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);

  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState(null);

  /* ── Fetch ── */
  const fetchProducts = useCallback(async () => {
    setLoadingProducts(true);
    setError(null);
    try {
      const res = await getApi("/products");
      const list = Array.isArray(res) ? res : (res.data ?? []);
      setProducts(list);
    } catch (err) {
      setError(
        err?.response?.data?.message ?? "Products loading",
      );
    } finally {
      setLoadingProducts(false);
    }
  }, []);

  /* ── Delete ── */
  const handleDelete = useCallback(async (id) => {
    if (!window.confirm("Delete this product?")) return;
    setDeletingId(id);
    try {
      await deleteApi(`/products/${id}`);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      alert(err?.response?.data?.message ?? "Delete karne mein masla aaya.");
    } finally {
      setDeletingId(null);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  /* ── Filter + paginate ── */
  const filtered = useMemo(() => {
    let data = products;
    if (statusFilter !== "All")
      data = data.filter((p) => p.status === statusFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q) ||
          p.sku?.toLowerCase().includes(q),
      );
    }
    return data;
  }, [products, search, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paged = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  useEffect(() => {
    setPage(1);
  }, [search, statusFilter]);

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
          <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p
                className="mb-1 text-[11px] font-bold uppercase tracking-[0.25em]"
                style={{ color: "var(--text-soft)" }}
              >
                Catalog Management
              </p>

              <h1
                className="text-[30px] font-black tracking-[-0.05em] sm:text-[34px]"
                style={{ color: "var(--text-heading)" }}
              >
                Products Dashboard
              </h1>

              <p
                className="mt-1 text-[14px]"
                style={{ color: "var(--text-muted)" }}
              >
                Manage inventory, pricing and analytics.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={fetchProducts}
                disabled={loadingProducts}
                className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-[13px] font-semibold transition-all hover:opacity-80 disabled:opacity-50"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                <RefreshCw
                  size={14}
                  className={loadingProducts ? "animate-spin" : ""}
                />
                <span className="hidden sm:inline">Refresh</span>
              </button>

              <button
                className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-[13px] font-semibold transition-all hover:opacity-80"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                <Download size={14} />
                <span className="hidden sm:inline">Export</span>
              </button>

              <button
                className="flex items-center gap-2 rounded-2xl px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg,var(--accent-deep),var(--accent-lt))",
                  boxShadow: "0 10px 24px rgba(124,108,242,0.22)",
                }}
              >
                <Plus size={15} />
                <span>Add Product</span>
              </button>
            </div>
          </div>

          {/* ── ANALYTICS CARDS ── */}
          <div className="mb-8 grid grid-cols-1 gap-5 xs:grid-cols-2 sm:grid-cols-2 xl:grid-cols-4">
            {DEFAULT_ANALYTICS.map((card) => (
              <AnalyticsCard key={card.id} card={card} />
            ))}
          </div>

          {/* ── ERROR BANNER ── */}
          {error && (
            <div
              className="mb-6 flex items-center gap-3 rounded-2xl px-5 py-3.5 text-[13px] font-semibold"
              style={{
                background: "var(--danger-bg)",
                border: "1px solid var(--danger)44",
                color: "var(--danger-text)",
              }}
            >
              <AlertTriangle size={15} />
              {error}
              <button
                onClick={fetchProducts}
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
              background:
                "linear-gradient(135deg,var(--surface) 0%,var(--card-alt) 50%,var(--card-subtle) 100%)",
              border: "1px solid var(--border)",
              boxShadow:
                "0 20px 60px rgba(124,108,242,0.08), 0 4px 12px rgba(0,0,0,0.04)",
            }}
          >
            {/* Toolbar */}
            <div
              className="px-4 py-5 sm:px-6"
              style={{ borderBottom: "1px solid var(--border-soft)" }}
            >
              {/* Top row: title + actions */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="mb-1.5 flex items-center gap-2">
                    <Sparkles
                      size={13}
                      style={{ color: "var(--accent-deep)" }}
                    />
                    <p
                      className="text-[11px] font-bold uppercase tracking-[0.25em]"
                      style={{ color: "var(--text-soft)" }}
                    >
                      Inventory
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <h2
                      className="text-[22px] font-black tracking-[-0.04em] sm:text-[26px]"
                      style={{ color: "var(--text-heading)" }}
                    >
                      All Products
                    </h2>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                      style={{
                        background: "var(--card-subtle)",
                        color: "var(--accent-deep)",
                        border: "1px solid var(--border-hover)",
                      }}
                    >
                      {loadingProducts ? "…" : filtered.length}
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Search */}
                  <div
                    className="flex flex-1 items-center gap-2 rounded-2xl px-4 py-2.5 sm:flex-none sm:w-56"
                    style={{
                      background: "var(--card-alt)",
                      border: "1px solid var(--border-soft)",
                    }}
                  >
                    <Search
                      size={13}
                      style={{ color: "var(--text-soft)" }}
                      className="shrink-0"
                    />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full bg-transparent text-[13px] outline-none placeholder:text-[var(--text-soft)]"
                      style={{ color: "var(--text-primary)" }}
                    />
                    {search && (
                      <button onClick={() => setSearch("")}>
                        <X size={12} style={{ color: "var(--text-soft)" }} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Status tabs */}
              <div className="mt-4 flex flex-wrap gap-2">
                {STATUS_TABS.map((tab) => {
                  const active = statusFilter === tab;

                  const TAB_STYLES = {
                    All: {
                      bg: "linear-gradient(135deg,var(--accent-deep),var(--accent-lt))",
                      color: "#fff",
                      shadow: "0 6px 16px rgba(124,108,242,0.2)",
                    },
                   
                   
                    "Out of Stock": {
                      bg: "var(--danger-bg)",
                      color: "var(--danger-text)",
                      shadow: "0 6px 16px rgba(255,138,138,0.25)",
                    },
                  };

                  const s = TAB_STYLES[tab];

                  return (
                    <button
                      key={tab}
                      onClick={() => {
                        setStatusFilter(tab);
                        setPage(1);
                      }}
                      className="rounded-xl px-3.5 py-1.5 text-[11px] font-bold transition-all duration-200"
                      style={
                        active
                          ? {
                              background: s.bg,
                              color: s.color,
                              boxShadow: s.shadow,
                              border: "1px solid transparent",
                            }
                          : {
                              background: "var(--surface)",
                              color: "var(--text-muted)",
                              border: "1px solid var(--border-soft)",
                            }
                      }
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── TABLE (desktop) ── */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border-soft)" }}>
                    {[
                      "Product",
                      "Category",
                      "Price",
                      "Stock",
                      "Status",
                      "Rating",
                      "Sales",
                      "Actions",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: "var(--text-soft)" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {/* Loading */}
                  {loadingProducts &&
                    Array.from({ length: 6 }).map((_, i) => (
                      <SkeletonRow key={i} cols={8} />
                    ))}

                  {/* Empty */}
                  {!loadingProducts && paged.length === 0 && (
                    <tr>
                      <td colSpan={8} className="py-20 text-center">
                        <Package
                          size={40}
                          className="mx-auto mb-3"
                          style={{ color: "var(--border)" }}
                        />
                        <p
                          className="text-[14px] font-semibold"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Koi product nahi mila
                        </p>
                        <button
                          onClick={() => {
                            setSearch("");
                            setStatusFilter("All");
                          }}
                          className="mx-auto mt-4 flex items-center gap-1.5 rounded-xl px-4 py-2 text-[12px] font-bold transition-all hover:opacity-80"
                          style={{
                            background: "var(--card-subtle)",
                            border: "1px solid var(--border-hover)",
                            color: "var(--accent-deep)",
                          }}
                        >
                          Clear Filters
                        </button>
                      </td>
                    </tr>
                  )}

                  {/* Rows */}
                  {!loadingProducts &&
                    paged.map((product, index) => (
                      <tr
                        key={product.id}
                        className="transition-all duration-200"
                        style={{
                          background:
                            index % 2 === 0
                              ? "transparent"
                              : "rgba(207,197,255,0.04)",
                          borderBottom: "1px solid var(--border-soft)",
                          opacity: deletingId === product.id ? 0.4 : 1,
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background =
                            "var(--card-subtle)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background =
                            index % 2 === 0
                              ? "transparent"
                              : "rgba(207,197,255,0.04)")
                        }
                      >
                        {/* Product */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="h-12 w-12 shrink-0 overflow-hidden rounded-2xl"
                              style={{
                                border: "1px solid var(--border-soft)",
                                background: "var(--card-alt)",
                              }}
                            >
                              {product.image ? (
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center">
                                  <Package
                                    size={18}
                                    style={{ color: "var(--accent-deep)" }}
                                  />
                                </div>
                              )}
                            </div>
                            <div>
                              <h4
                                className="text-[13px] font-bold"
                                style={{ color: "var(--text-primary)" }}
                              >
                                {product.name}
                              </h4>
                              <p
                                className="mt-0.5 text-[11px]"
                                style={{ color: "var(--text-soft)" }}
                              >
                                #{product.sku}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Category */}
                        <td className="px-5 py-4">
                          <span
                            className="rounded-xl px-2.5 py-1 text-[11px] font-semibold"
                            style={{
                              background: "var(--card-subtle)",
                              color: "var(--accent-deep)",
                            }}
                          >
                            {product.category}
                          </span>
                        </td>

                        {/* Price */}
                        <td className="px-5 py-4">
                          <span
                            className="text-[14px] font-bold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            ${product.price}
                          </span>
                        </td>

                        {/* Stock */}
                        <td className="px-5 py-4">
                          <div className="flex flex-col gap-1.5">
                            <span
                              className="text-[13px] font-bold"
                              style={{
                                color:
                                  product.stock === 0
                                    ? "var(--danger-text)"
                                    : product.stock < 30
                                      ? "var(--warning-text)"
                                      : "var(--text-primary)",
                              }}
                            >
                              {product.stock}
                            </span>
                            <div
                              className="h-[5px] w-20 overflow-hidden rounded-full"
                              style={{ background: "var(--border-soft)" }}
                            >
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${Math.min(100, (product.stock / 1000) * 100)}%`,
                                  background:
                                    "linear-gradient(90deg,var(--accent-deep),var(--accent-lt))",
                                }}
                              />
                            </div>
                          </div>
                        </td>

                        {/* Status */}
                        <td className="px-5 py-4">
                          <StatusBadge status={product.status} />
                        </td>

                        {/* Rating */}
                        <td className="px-5 py-4">
                          <StarRating rating={product.rating} />
                        </td>

                        {/* Sales */}
                        <td className="px-5 py-4">
                          <p
                            className="text-[14px] font-bold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {product.sales}
                          </p>
                          <div
                            className="mt-1 flex items-center gap-1 text-[11px] font-bold"
                            style={{
                              color:
                                product.trend > 0
                                  ? "var(--success-text)"
                                  : "var(--danger-text)",
                            }}
                          >
                            {product.trend > 0 ? (
                              <TrendingUp size={11} />
                            ) : (
                              <TrendingDown size={11} />
                            )}
                            {product.trend}%
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1.5">
                            {[
                              {
                                icon: Eye,
                                bg: "var(--card-subtle)",
                                color: "var(--accent-deep)",
                                border: "var(--border-hover)",
                                onClick: undefined,
                              },
                              {
                                icon: Edit2,
                                bg: "var(--warning-bg)",
                                color: "var(--warning-text)",
                                border: "var(--warning)44",
                                onClick: undefined,
                              },
                              {
                                icon:
                                  deletingId === product.id
                                    ? RefreshCw
                                    : Trash2,
                                bg: "var(--danger-bg)",
                                color: "var(--danger-text)",
                                border: "var(--danger)44",
                                onClick: () => handleDelete(product.id),
                                disabled: deletingId === product.id,
                                spin: deletingId === product.id,
                              },
                            ].map(
                              (
                                {
                                  icon: Icon,
                                  bg,
                                  color,
                                  border,
                                  onClick,
                                  disabled,
                                  spin,
                                },
                                i,
                              ) => (
                                <button
                                  key={i}
                                  onClick={onClick}
                                  disabled={disabled}
                                  className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:scale-105 disabled:opacity-50"
                                  style={{
                                    background: bg,
                                    color,
                                    border: `1px solid ${border}`,
                                  }}
                                >
                                  <Icon
                                    size={14}
                                    className={spin ? "animate-spin" : ""}
                                  />
                                </button>
                              ),
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* ── MOBILE CARD LIST (< md) ── */}
            <div className="block md:hidden">
              {loadingProducts && (
                <div className="flex flex-col gap-3 p-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-20 animate-pulse rounded-2xl"
                      style={{ background: "var(--border-soft)" }}
                    />
                  ))}
                </div>
              )}

              {!loadingProducts && paged.length === 0 && (
                <div className="py-16 text-center">
                  <Package
                    size={36}
                    className="mx-auto mb-3"
                    style={{ color: "var(--border)" }}
                  />
                  <p
                    className="text-[13px] font-semibold"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Koi product nahi mila
                  </p>
                </div>
              )}

              {!loadingProducts &&
                paged.map((product, index) => (
                  <div
                    key={product.id}
                    className="mx-4 my-2 rounded-2xl p-4 transition-all"
                    style={{
                      background:
                        index % 2 === 0 ? "var(--surface)" : "var(--card-alt)",
                      border: "1px solid var(--border-soft)",
                      opacity: deletingId === product.id ? 0.4 : 1,
                    }}
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="h-12 w-12 shrink-0 overflow-hidden rounded-xl"
                          style={{
                            border: "1px solid var(--border-soft)",
                            background: "var(--card-subtle)",
                          }}
                        >
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <Package
                                size={16}
                                style={{ color: "var(--accent-deep)" }}
                              />
                            </div>
                          )}
                        </div>
                        <div>
                          <p
                            className="text-[14px] font-bold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {product.name}
                          </p>
                          <p
                            className="text-[11px]"
                            style={{ color: "var(--text-soft)" }}
                          >
                            #{product.sku}
                          </p>
                        </div>
                      </div>
                      <StatusBadge status={product.status} />
                    </div>

                    {/* Details grid */}
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div
                        className="rounded-xl px-2.5 py-2 text-center"
                        style={{ background: "var(--card-subtle)" }}
                      >
                        <p
                          className="text-[10px]"
                          style={{ color: "var(--text-soft)" }}
                        >
                          Price
                        </p>
                        <p
                          className="text-[13px] font-black"
                          style={{ color: "var(--text-primary)" }}
                        >
                          ${product.price}
                        </p>
                      </div>
                      <div
                        className="rounded-xl px-2.5 py-2 text-center"
                        style={{ background: "var(--card-subtle)" }}
                      >
                        <p
                          className="text-[10px]"
                          style={{ color: "var(--text-soft)" }}
                        >
                          Stock
                        </p>
                        <p
                          className="text-[13px] font-black"
                          style={{
                            color:
                              product.stock === 0
                                ? "var(--danger-text)"
                                : product.stock < 30
                                  ? "var(--warning-text)"
                                  : "var(--text-primary)",
                          }}
                        >
                          {product.stock}
                        </p>
                      </div>
                      <div
                        className="rounded-xl px-2.5 py-2 text-center"
                        style={{ background: "var(--card-subtle)" }}
                      >
                        <p
                          className="text-[10px]"
                          style={{ color: "var(--text-soft)" }}
                        >
                          Sales
                        </p>
                        <p
                          className="text-[13px] font-black"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {product.sales}
                        </p>
                      </div>
                    </div>

                    {/* Bottom row: rating + actions */}
                    <div className="mt-3 flex items-center justify-between">
                      <StarRating rating={product.rating} />
                      <div className="flex items-center gap-1.5">
                        <button
                          className="flex h-8 w-8 items-center justify-center rounded-xl transition-all hover:scale-105"
                          style={{
                            background: "var(--card-subtle)",
                            color: "var(--accent-deep)",
                            border: "1px solid var(--border-hover)",
                          }}
                        >
                          <Eye size={13} />
                        </button>
                        <button
                          className="flex h-8 w-8 items-center justify-center rounded-xl transition-all hover:scale-105"
                          style={{
                            background: "var(--warning-bg)",
                            color: "var(--warning-text)",
                            border: "1px solid var(--warning)44",
                          }}
                        >
                          <Edit2 size={13} />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          disabled={deletingId === product.id}
                          className="flex h-8 w-8 items-center justify-center rounded-xl transition-all hover:scale-105 disabled:opacity-50"
                          style={{
                            background: "var(--danger-bg)",
                            color: "var(--danger-text)",
                            border: "1px solid var(--danger)44",
                          }}
                        >
                          {deletingId === product.id ? (
                            <RefreshCw size={13} className="animate-spin" />
                          ) : (
                            <Trash2 size={13} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* ── PAGINATION ── */}
            <div
              className="flex flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6"
              style={{ borderTop: "1px solid var(--border-soft)" }}
            >
              <p className="text-[12px]" style={{ color: "var(--text-muted)" }}>
                Showing{" "}
                <span
                  className="font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {filtered.length === 0 ? 0 : (page - 1) * ITEMS_PER_PAGE + 1}
                </span>{" "}
                –{" "}
                <span
                  className="font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {Math.min(page * ITEMS_PER_PAGE, filtered.length)}
                </span>{" "}
                of{" "}
                <span
                  className="font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {filtered.length}
                </span>{" "}
                products
              </p>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:opacity-80 disabled:opacity-40"
                  style={{
                    background: "var(--card-alt)",
                    border: "1px solid var(--border-soft)",
                    color: "var(--text-muted)",
                  }}
                >
                  <ChevronLeft size={14} />
                </button>

                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  const p =
                    totalPages <= 5 ? i + 1 : page <= 3 ? i + 1 : page + i - 2;
                  if (p < 1 || p > totalPages) return null;
                  return (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className="flex h-9 w-9 items-center justify-center rounded-xl text-[13px] font-bold transition-all"
                      style={
                        page === p
                          ? {
                              background:
                                "linear-gradient(135deg,var(--accent-deep),var(--accent-lt))",
                              color: "#fff",
                              boxShadow: "0 4px 12px rgba(124,108,242,0.3)",
                            }
                          : {
                              background: "var(--card-alt)",
                              border: "1px solid var(--border-soft)",
                              color: "var(--text-muted)",
                            }
                      }
                    >
                      {p}
                    </button>
                  );
                })}

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:opacity-80 disabled:opacity-40"
                  style={{
                    background: "var(--card-alt)",
                    border: "1px solid var(--border-soft)",
                    color: "var(--text-muted)",
                  }}
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;
