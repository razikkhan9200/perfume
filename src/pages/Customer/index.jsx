import { useState, useMemo, useEffect, useCallback } from "react";
import {
  Users,
  UserCheck,
  UserX,
  TrendingUp,
  Search,
  Plus,
  Download,
  RefreshCw,
  Eye,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  MapPin,
  Mail,
  Phone,
  ShoppingBag,
  Crown,
  Star,
  X,
  Calendar,
  DollarSign,
  MoreHorizontal,
  User,
  Sparkles,
  Filter,
  Ban,
  CheckCircle2,
} from "lucide-react";

import Sidebar from "../../components/common/Sidebar";
import Navbar  from "../../components/common/Navbar";
import { getApi, deleteApi, putApi } from "../../api/apiFunctions";

/* ═══════════════════════════════════════════
   CONSTANTS
═══════════════════════════════════════════ */

const ITEMS_PER_PAGE = 8;

const STATUS_TABS = ["All", "Active", "Premium", "Inactive", "Blocked"];

const STATUS_CONFIG = {
  Active: {
    bg:    "var(--success-bg)",
    color: "var(--success-text)",
    dot:   "var(--success)",
    border:"var(--success)44",
    icon:  CheckCircle2,
  },
  Premium: {
    bg:    "#FFF9EE",
    color: "#9A6600",
    dot:   "#FFB86B",
    border:"#FFB86B44",
    icon:  Crown,
  },
  Inactive: {
    bg:    "var(--card-subtle)",
    color: "var(--text-muted)",
    dot:   "var(--text-soft)",
    border:"var(--border)",
    icon:  UserX,
  },
  Blocked: {
    bg:    "var(--danger-bg)",
    color: "var(--danger-text)",
    dot:   "var(--danger)",
    border:"var(--danger)44",
    icon:  Ban,
  },
};

const TAB_STYLES = {
  All:      { bg:"linear-gradient(135deg,var(--accent-deep),var(--accent-lt))", color:"#fff",                    shadow:"0 6px 16px rgba(124,108,242,0.2)" },
  Active:   { bg:"var(--success-bg)",  color:"var(--success-text)",  shadow:"0 6px 16px rgba(126,231,184,0.25)" },
  Premium:  { bg:"#FFF9EE",           color:"#9A6600",              shadow:"0 6px 16px rgba(255,184,107,0.25)" },
  Inactive: { bg:"var(--card-subtle)", color:"var(--text-muted)",    shadow:"none"                               },
  Blocked:  { bg:"var(--danger-bg)",   color:"var(--danger-text)",   shadow:"0 6px 16px rgba(255,138,138,0.25)" },
};

const AVATAR_COLORS = [
  "#7C6CF2","#0D7451","#9A6600","#C53030",
  "#A995EA","#1D9E75","#06B6D4","#A855F7",
];

const ANALYTICS_META = [
  { id:1, title:"Total Customers", key:"totalCustomers", trendKey:"customersTrend", subtitle:"All Time",    icon:Users,      gradFrom:"#7C6CF2", gradTo:"#A78BFA" },
  { id:2, title:"Active",          key:"active",         trendKey:"activeTrend",    subtitle:"This Month",  icon:UserCheck,  gradFrom:"#0D7451", gradTo:"#7EE7B8" },
  { id:3, title:"Premium Members", key:"premium",        trendKey:"premiumTrend",   subtitle:"Subscribers", icon:Crown,      gradFrom:"#9A6600", gradTo:"#FFB86B" },
  { id:4, title:"Revenue / User",  key:"avgRevenue",     trendKey:"revenueTrend",   subtitle:"Avg Spend",   icon:DollarSign, gradFrom:"#A855F7", gradTo:"#EC4899" },
];

/* ═══════════════════════════════════════════
   SAMPLE DATA
═══════════════════════════════════════════ */

const SAMPLE_CUSTOMERS = [
  { id:"CUS-1001", name:"Arjun Mehta",   email:"arjun@mail.com",  phone:"+91 98201 11234", avatar:"AM", city:"Mumbai",    status:"Premium",  orders:42, spent:182000, joined:"2023-02-14", rating:4.9 },
  { id:"CUS-1002", name:"Priya Sharma",  email:"priya@mail.com",  phone:"+91 99301 22345", avatar:"PS", city:"Delhi",     status:"Active",   orders:18, spent:54200,  joined:"2023-07-01", rating:4.6 },
  { id:"CUS-1003", name:"Rohan Das",     email:"rohan@mail.com",  phone:"+91 97401 33456", avatar:"RD", city:"Bengaluru", status:"Active",   orders:27, spent:93500,  joined:"2022-11-22", rating:4.4 },
  { id:"CUS-1004", name:"Sneha Patel",   email:"sneha@mail.com",  phone:"+91 96501 44567", avatar:"SP", city:"Ahmedabad", status:"Inactive", orders:5,  spent:12300,  joined:"2024-01-10", rating:3.8 },
  { id:"CUS-1005", name:"Vikram Nair",   email:"vikram@mail.com", phone:"+91 95601 55678", avatar:"VN", city:"Kochi",     status:"Premium",  orders:61, spent:274000, joined:"2022-06-05", rating:5.0 },
  { id:"CUS-1006", name:"Ananya Roy",    email:"ananya@mail.com", phone:"+91 94701 66789", avatar:"AR", city:"Kolkata",   status:"Active",   orders:14, spent:41800,  joined:"2023-09-18", rating:4.3 },
  { id:"CUS-1007", name:"Kabir Singh",   email:"kabir@mail.com",  phone:"+91 93801 77890", avatar:"KS", city:"Chandigarh",status:"Blocked",  orders:3,  spent:8900,   joined:"2024-03-02", rating:2.1 },
  { id:"CUS-1008", name:"Meera Iyer",    email:"meera@mail.com",  phone:"+91 92901 88901", avatar:"MI", city:"Chennai",   status:"Active",   orders:22, spent:67400,  joined:"2023-04-25", rating:4.7 },
  { id:"CUS-1009", name:"Dev Kapoor",    email:"dev@mail.com",    phone:"+91 91001 99012", avatar:"DK", city:"Pune",      status:"Premium",  orders:38, spent:156000, joined:"2022-09-11", rating:4.8 },
  { id:"CUS-1010", name:"Isha Verma",    email:"isha@mail.com",   phone:"+91 90101 10123", avatar:"IV", city:"Jaipur",    status:"Active",   orders:11, spent:32100,  joined:"2023-12-07", rating:4.1 },
  { id:"CUS-1011", name:"Ravi Kumar",    email:"ravi@mail.com",   phone:"+91 89201 21234", avatar:"RK", city:"Hyderabad", status:"Active",   orders:19, spent:58700,  joined:"2023-05-30", rating:4.5 },
  { id:"CUS-1012", name:"Nisha Gupta",   email:"nisha@mail.com",  phone:"+91 88301 32345", avatar:"NG", city:"Lucknow",   status:"Inactive", orders:2,  spent:5400,   joined:"2024-04-14", rating:3.5 },
];

const SAMPLE_ANALYTICS = {
  totalCustomers:"48,240", active:"32,180", premium:"5,840",  avgRevenue:"₹12.4K",
  customersTrend:"+14%",   activeTrend:"+9%",premiumTrend:"+22%",revenueTrend:"+18%",
};

/* ═══════════════════════════════════════════
   SMALL COMPONENTS
═══════════════════════════════════════════ */

/* ── Avatar ── */
const Avatar = ({ initials, color, size = "md" }) => {
  const sz = size === "lg"
    ? "h-14 w-14 text-[14px] rounded-2xl"
    : size === "sm"
    ? "h-8 w-8 text-[10px] rounded-xl"
    : "h-10 w-10 text-[12px] rounded-2xl";
  return (
    <div
      className={`flex shrink-0 items-center justify-center font-black text-white ${sz}`}
      style={{
        background: `linear-gradient(135deg,${color},${color}BB)`,
        boxShadow:  `0 4px 12px ${color}33`,
      }}
    >
      {initials}
    </div>
  );
};

/* ── Status Badge ── */
const StatusBadge = ({ status }) => {
  const cfg  = STATUS_CONFIG[status] ?? STATUS_CONFIG.Inactive;
  const Icon = cfg.icon;
  return (
    <div
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold"
      style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}` }}
    >
      <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: cfg.dot }} />
      <Icon size={10} />
      {status}
    </div>
  );
};

/* ── Star Rating ── */
const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1">
    <Star size={12} className="fill-yellow-400 text-yellow-400" />
    <span className="text-[12px] font-bold" style={{ color: "var(--text-primary)" }}>
      {rating?.toFixed(1)}
    </span>
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
        boxShadow:  "0 4px 24px rgba(124,108,242,0.07),0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <div
        className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{ background: `linear-gradient(135deg,${card.gradFrom},${card.gradTo})` }}
      />

      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{
              background: `linear-gradient(135deg,${card.gradFrom},${card.gradTo})`,
              boxShadow:  `0 8px 24px ${card.gradFrom}44`,
            }}
          >
            <Icon size={20} color="#fff" />
          </div>

          {trend !== "—" && (
            <div
              className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold"
              style={
                isUp
                  ? { background:"var(--success-bg)", color:"var(--success-text)" }
                  : { background:"var(--danger-bg)",  color:"var(--danger-text)"  }
              }
            >
              <TIcon size={11} />
              {trend}
            </div>
          )}
        </div>

        <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color:"var(--text-soft)" }}>
          {card.subtitle}
        </p>

        {loading ? (
          <div className="mt-2 h-9 w-24 animate-pulse rounded-xl" style={{ background:"var(--border-soft)" }} />
        ) : (
          <h3 className="mt-1 text-[30px] font-black tracking-[-0.04em]" style={{ color:"var(--text-heading)" }}>
            {value}
          </h3>
        )}

        <p className="mt-1 text-[13px] font-medium" style={{ color:"var(--text-muted)" }}>
          {card.title}
        </p>

        <div className="mt-4 h-1.5 overflow-hidden rounded-full" style={{ background:"var(--border-soft)" }}>
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width:      `${Math.min(100, Math.abs(parseInt(trend)) * 4 || 55)}%`,
              background: `linear-gradient(90deg,${card.gradFrom},${card.gradTo})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

/* ── Skeleton ── */
const SkeletonRow = ({ cols = 9 }) => (
  <tr>
    {Array.from({ length: cols }).map((_, i) => (
      <td key={i} className="px-5 py-4">
        <div className="h-5 animate-pulse rounded-lg" style={{ background:"var(--border-soft)" }} />
      </td>
    ))}
  </tr>
);

/* ═══════════════════════════════════════════
   CUSTOMER DETAIL DRAWER
═══════════════════════════════════════════ */

const CustomerDrawer = ({ customer, onClose, onStatusChange }) => {
  const [updating, setUpdating] = useState(false);

  if (!customer) return null;

  const color = AVATAR_COLORS[customer.id?.charCodeAt(4) % AVATAR_COLORS.length] ?? "#7C6CF2";
  const cfg   = STATUS_CONFIG[customer.status] ?? STATUS_CONFIG.Inactive;

  const handleStatus = async (newStatus) => {
    setUpdating(true);
    try {
      await putApi(`/customers/${customer.id}`, { status: newStatus });
      onStatusChange(customer.id, newStatus);
    } catch { /* silent */ }
    finally { setUpdating(false); }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 backdrop-blur-sm"
        style={{ background:"rgba(30,30,36,0.35)" }}
        onClick={onClose}
      />

      <div
        className="fixed right-0 top-0 z-50 h-full w-full max-w-[440px] overflow-y-auto"
        style={{
          background: "linear-gradient(180deg,var(--surface) 0%,var(--card-alt) 100%)",
          borderLeft: "1px solid var(--border)",
          boxShadow:  "-20px 0 60px rgba(124,108,242,0.10)",
        }}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 py-5"
          style={{
            background:    "rgba(255,255,255,0.88)",
            backdropFilter:"blur(16px)",
            borderBottom:  "1px solid var(--border-soft)",
          }}
        >
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color:"var(--text-soft)" }}>
              Customer Profile
            </p>
            <h3 className="text-[18px] font-black" style={{ color:"var(--text-heading)" }}>
              {customer.id}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:scale-105"
            style={{ background:"var(--card-subtle)", border:"1px solid var(--border-soft)", color:"var(--text-muted)" }}
          >
            <X size={15} />
          </button>
        </div>

        <div className="space-y-4 px-6 py-6">

          {/* Profile hero */}
          <div
            className="flex items-center gap-4 rounded-2xl p-5"
            style={{ background:"var(--card-subtle)", border:"1px solid var(--border-hover)" }}
          >
            <Avatar initials={customer.avatar} color={color} size="lg" />
            <div className="flex-1">
              <h4 className="text-[18px] font-black" style={{ color:"var(--text-heading)" }}>
                {customer.name}
              </h4>
              <p className="text-[13px]" style={{ color:"var(--text-muted)" }}>{customer.email}</p>
              <div className="mt-2 flex items-center gap-2">
                <StatusBadge status={customer.status} />
                <StarRating rating={customer.rating} />
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label:"Total Orders", value:customer.orders, icon:ShoppingBag, color:"#7C6CF2" },
              { label:"Total Spent",  value:`₹${customer.spent?.toLocaleString("en-IN")}`, icon:DollarSign, color:"#0D7451" },
            ].map(({ label, value, icon:Icon, color:c }) => (
              <div
                key={label}
                className="rounded-2xl p-4 text-center"
                style={{ background:"var(--surface)", border:"1px solid var(--border-soft)" }}
              >
                <div
                  className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background:`${c}15`, border:`1px solid ${c}30` }}
                >
                  <Icon size={16} style={{ color:c }} />
                </div>
                <p className="text-[22px] font-black" style={{ color:"var(--text-heading)" }}>{value}</p>
                <p className="text-[11px]" style={{ color:"var(--text-soft)" }}>{label}</p>
              </div>
            ))}
          </div>

          {/* Contact info */}
          {[
            { icon:Mail,     label:"Email",   value:customer.email   },
            { icon:Phone,    label:"Phone",   value:customer.phone   },
            { icon:MapPin,   label:"City",    value:customer.city    },
            { icon:Calendar, label:"Joined",  value:customer.joined  },
          ].map(({ icon:Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-2xl px-4 py-3"
              style={{ background:"var(--surface)", border:"1px solid var(--border-soft)" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background:"var(--card-subtle)" }}>
                  <Icon size={14} style={{ color:"var(--accent-deep)" }} />
                </div>
                <p className="text-[13px]" style={{ color:"var(--text-muted)" }}>{label}</p>
              </div>
              <p className="text-[13px] font-bold" style={{ color:"var(--text-primary)" }}>{value}</p>
            </div>
          ))}

          {/* Status actions */}
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color:"var(--text-soft)" }}>
              Change Status
            </p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(STATUS_CONFIG)
                .filter(([s]) => s !== customer.status)
                .map(([s, c]) => {
                  const Icon = c.icon;
                  return (
                    <button
                      key={s}
                      disabled={updating}
                      onClick={() => handleStatus(s)}
                      className="flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-[12px] font-bold transition-all hover:opacity-80 disabled:opacity-50"
                      style={{ background:c.bg, color:c.color, border:`1px solid ${c.border}` }}
                    >
                      <Icon size={12} />
                      {s}
                    </button>
                  );
                })}
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              className="flex items-center justify-center gap-2 rounded-2xl py-3 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg,var(--accent-deep),var(--accent-lt))",
                boxShadow:  "0 8px 20px rgba(124,108,242,0.25)",
              }}
            >
              <Edit2 size={14} />
              Edit Profile
            </button>
            <button
              className="flex items-center justify-center gap-2 rounded-2xl py-3 text-[13px] font-bold transition-all hover:opacity-80"
              style={{ background:"var(--card-subtle)", border:"1px solid var(--border)", color:"var(--text-muted)" }}
            >
              <Mail size={14} />
              Send Email
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

/* ═══════════════════════════════════════════
   CUSTOMERS PAGE
═══════════════════════════════════════════ */

const CustomersPage = () => {
  const [activeNav,      setActiveNav]      = useState(3);
  const [search,         setSearch]         = useState("");
  const [statusFilter,   setStatusFilter]   = useState("All");
  const [page,           setPage]           = useState(1);
  const [sortField,      setSortField]      = useState("spent");
  const [sortDir,        setSortDir]        = useState("desc");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [customers,        setCustomers]        = useState([]);
  const [analyticsStats,   setAnalyticsStats]   = useState(null);
  const [loadingCustomers, setLoadingCustomers] = useState(false);
  const [loadingAnalytics, setLoadingAnalytics] = useState(false);
  const [deletingId,       setDeletingId]       = useState(null);
  const [error,            setError]            = useState(null);

  /* ── Fetch ── */
  const fetchCustomers = useCallback(async () => {
    setLoadingCustomers(true);
    setError(null);
    try {
      const res  = await getApi("/customers");
      const list = Array.isArray(res) ? res : res.data ?? [];
      setCustomers(list.length ? list : SAMPLE_CUSTOMERS);
    } catch {
      setCustomers(SAMPLE_CUSTOMERS);
    } finally {
      setLoadingCustomers(false);
    }
  }, []);

  const fetchAnalytics = useCallback(async () => {
    setLoadingAnalytics(true);
    try {
      const res = await getApi("/analytics/customers");
      setAnalyticsStats(res?.data ?? res ?? SAMPLE_ANALYTICS);
    } catch {
      setAnalyticsStats(SAMPLE_ANALYTICS);
    } finally {
      setLoadingAnalytics(false);
    }
  }, []);

  useEffect(() => { fetchCustomers(); fetchAnalytics(); }, [fetchCustomers, fetchAnalytics]);

  /* ── Delete ── */
  const handleDelete = useCallback(async (id) => {
    if (!window.confirm("Delete this customer?")) return;
    setDeletingId(id);
    try {
      await deleteApi(`/customers/${id}`);
      setCustomers(prev => prev.filter(c => c.id !== id));
    } catch (err) {
      alert(err?.response?.data?.message ?? "Delete nahi hua.");
    } finally {
      setDeletingId(null);
    }
  }, []);

  /* ── Status change ── */
  const handleStatusChange = useCallback((id, newStatus) => {
    setCustomers(prev => prev.map(c => c.id === id ? { ...c, status: newStatus } : c));
    setSelectedCustomer(prev => prev?.id === id ? { ...prev, status: newStatus } : prev);
  }, []);

  /* ── Sort ── */
  const handleSort = (field) => {
    if (sortField === field) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("desc"); }
  };

  /* ── Filter + sort + paginate ── */
  const filtered = useMemo(() => {
    let data = customers;
    if (statusFilter !== "All") data = data.filter(c => c.status === statusFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(c =>
        c.name?.toLowerCase().includes(q)  ||
        c.email?.toLowerCase().includes(q) ||
        c.city?.toLowerCase().includes(q)  ||
        c.id?.toLowerCase().includes(q)
      );
    }
    return [...data].sort((a, b) => {
      let av = a[sortField], bv = b[sortField];
      if (["spent","orders","rating"].includes(sortField)) { av = Number(av); bv = Number(bv); }
      if (typeof av === "string") av = av.toLowerCase();
      if (typeof bv === "string") bv = bv.toLowerCase();
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ?  1 : -1;
      return 0;
    });
  }, [customers, search, statusFilter, sortField, sortDir]);

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
          <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p
                className="mb-1 text-[11px] font-bold uppercase tracking-[0.25em]"
                style={{ color:"var(--text-soft)" }}
              >
                CRM
              </p>
              <h1
                className="text-[30px] font-black tracking-[-0.05em] sm:text-[34px]"
                style={{ color:"var(--text-heading)" }}
              >
                Customers
              </h1>
              <p className="mt-1 text-[14px]" style={{ color:"var(--text-muted)" }}>
                Manage customer profiles, segments and activity.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => { fetchCustomers(); fetchAnalytics(); }}
                disabled={loadingCustomers}
                className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-[13px] font-semibold transition-all hover:opacity-80 disabled:opacity-50"
                style={{ background:"var(--surface)", border:"1px solid var(--border)", color:"var(--text-muted)" }}
              >
                <RefreshCw size={13} className={loadingCustomers ? "animate-spin" : ""} />
                <span className="hidden sm:inline">Refresh</span>
              </button>

              <button
                className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-[13px] font-semibold transition-all hover:opacity-80"
                style={{ background:"var(--surface)", border:"1px solid var(--border)", color:"var(--text-muted)" }}
              >
                <Download size={13} />
                <span className="hidden sm:inline">Export</span>
              </button>

              <button
                className="flex items-center gap-2 rounded-2xl px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg,var(--accent-deep),var(--accent-lt))",
                  boxShadow:  "0 10px 24px rgba(124,108,242,0.22)",
                }}
              >
                <Plus size={14} />
                Add Customer
              </button>
            </div>
          </div>

          {/* ── ANALYTICS CARDS ── */}
          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {ANALYTICS_META.map(card => (
              <AnalyticsCard key={card.id} card={card} stats={analyticsStats} loading={loadingAnalytics} />
            ))}
          </div>

          {/* ── ERROR ── */}
          {error && (
            <div
              className="mb-6 flex items-center gap-3 rounded-2xl px-5 py-3.5 text-[13px] font-semibold"
              style={{ background:"var(--danger-bg)", border:"1px solid var(--danger)44", color:"var(--danger-text)" }}
            >
              <UserX size={15} />
              {error}
              <button onClick={fetchCustomers} className="ml-auto underline underline-offset-2">Retry</button>
            </div>
          )}

          {/* ── TABLE CARD ── */}
          <div
            className="overflow-hidden rounded-[32px]"
            style={{
              background: "linear-gradient(135deg,var(--surface) 0%,var(--card-alt) 50%,var(--card-subtle) 100%)",
              border:     "1px solid var(--border)",
              boxShadow:  "0 20px 60px rgba(124,108,242,0.08),0 4px 12px rgba(0,0,0,0.04)",
            }}
          >
            {/* Toolbar */}
            <div className="px-4 py-5 sm:px-6" style={{ borderBottom:"1px solid var(--border-soft)" }}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="mb-1.5 flex items-center gap-2">
                    <Sparkles size={13} style={{ color:"var(--accent-deep)" }} />
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color:"var(--text-soft)" }}>
                      Customer List
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <h2
                      className="text-[22px] font-black tracking-[-0.04em] sm:text-[26px]"
                      style={{ color:"var(--text-heading)" }}
                    >
                      All Customers
                    </h2>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                      style={{ background:"var(--card-subtle)", color:"var(--accent-deep)", border:"1px solid var(--border-hover)" }}
                    >
                      {loadingCustomers ? "…" : filtered.length}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Search */}
                  <div
                    className="flex flex-1 items-center gap-2 rounded-2xl px-4 py-2.5 sm:flex-none sm:w-60"
                    style={{ background:"var(--card-alt)", border:"1px solid var(--border-soft)" }}
                  >
                    <Search size={13} style={{ color:"var(--text-soft)" }} className="shrink-0" />
                    <input
                      type="text"
                      placeholder="Search customers..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      className="w-full bg-transparent text-[13px] outline-none"
                      style={{ color:"var(--text-primary)" }}
                    />
                    {search && (
                      <button onClick={() => setSearch("")}>
                        <X size={12} style={{ color:"var(--text-soft)" }} />
                      </button>
                    )}
                  </div>

                  <button
                    className="flex items-center gap-1.5 rounded-2xl px-4 py-2.5 text-[13px] font-semibold transition-all hover:opacity-80"
                    style={{ background:"var(--card-alt)", border:"1px solid var(--border-soft)", color:"var(--text-muted)" }}
                  >
                    <Filter size={13} />
                    <span className="hidden sm:inline">Filter</span>
                  </button>
                </div>
              </div>

              {/* Status tabs */}
              <div className="mt-4 flex flex-wrap gap-2">
                {STATUS_TABS.map(tab => {
                  const active = statusFilter === tab;
                  const s      = TAB_STYLES[tab];
                  return (
                    <button
                      key={tab}
                      onClick={() => { setStatusFilter(tab); setPage(1); }}
                      className="rounded-xl px-3.5 py-1.5 text-[11px] font-bold transition-all duration-200"
                      style={
                        active
                          ? { background:s.bg, color:s.color, boxShadow:s.shadow, border:"1px solid transparent" }
                          : { background:"var(--surface)", color:"var(--text-muted)", border:"1px solid var(--border-soft)" }
                      }
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── DESKTOP TABLE ── */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[960px]">
                <thead>
                  <tr style={{ borderBottom:"1px solid var(--border-soft)" }}>
                    {[
                      { label:"Customer",  field:"name"   },
                      { label:"Contact",   field:null     },
                      { label:"City",      field:"city"   },
                      { label:"Status",    field:"status" },
                      { label:"Orders",    field:"orders" },
                      { label:"Spent",     field:"spent"  },
                      { label:"Rating",    field:"rating" },
                      { label:"Joined",    field:"joined" },
                      { label:"Actions",   field:null     },
                    ].map(({ label, field }) => (
                      <th
                        key={label}
                        onClick={() => field && handleSort(field)}
                        className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.18em]"
                        style={{ color:"var(--text-soft)", cursor:field ? "pointer" : "default", userSelect:"none" }}
                      >
                        {label}
                        {field && <SortChevron field={field} />}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {loadingCustomers && Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} cols={9} />)}

                  {!loadingCustomers && paged.length === 0 && (
                    <tr>
                      <td colSpan={9} className="py-20 text-center">
                        <Users size={40} className="mx-auto mb-3" style={{ color:"var(--border)" }} />
                        <p className="text-[14px] font-semibold" style={{ color:"var(--text-muted)" }}>
                          Koi customer nahi mila
                        </p>
                        <button
                          onClick={() => { setSearch(""); setStatusFilter("All"); }}
                          className="mx-auto mt-4 flex items-center gap-1.5 rounded-xl px-4 py-2 text-[12px] font-bold"
                          style={{ background:"var(--card-subtle)", border:"1px solid var(--border-hover)", color:"var(--accent-deep)" }}
                        >
                          Clear Filters
                        </button>
                      </td>
                    </tr>
                  )}

                  {!loadingCustomers && paged.map((customer, index) => {
                    const color = AVATAR_COLORS[customer.id?.charCodeAt(4) % AVATAR_COLORS.length] ?? "#7C6CF2";
                    const isPremium = customer.status === "Premium";

                    return (
                      <tr
                        key={customer.id}
                        className="transition-all duration-200"
                        style={{
                          background:   index % 2 === 0 ? "transparent" : "rgba(207,197,255,0.04)",
                          borderBottom: "1px solid var(--border-soft)",
                          opacity:      deletingId === customer.id ? 0.4 : 1,
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "var(--card-subtle)"}
                        onMouseLeave={e => e.currentTarget.style.background = index % 2 === 0 ? "transparent" : "rgba(207,197,255,0.04)"}
                      >
                        {/* Customer */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <Avatar initials={customer.avatar} color={color} />
                              {isPremium && (
                                <div
                                  className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full"
                                  style={{ background:"#FFB86B", border:"1.5px solid var(--surface)" }}
                                >
                                  <Crown size={8} color="#fff" />
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="text-[13px] font-bold" style={{ color:"var(--text-primary)" }}>
                                {customer.name}
                              </p>
                              <p className="text-[11px] font-mono" style={{ color:"var(--text-soft)" }}>
                                {customer.id}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Contact */}
                        <td className="px-5 py-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1.5">
                              <Mail size={11} style={{ color:"var(--text-soft)" }} />
                              <span className="text-[12px]" style={{ color:"var(--text-muted)" }}>
                                {customer.email}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Phone size={11} style={{ color:"var(--text-soft)" }} />
                              <span className="text-[12px]" style={{ color:"var(--text-muted)" }}>
                                {customer.phone}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* City */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1.5">
                            <MapPin size={11} style={{ color:"var(--text-soft)" }} />
                            <span className="text-[12px]" style={{ color:"var(--text-muted)" }}>
                              {customer.city}
                            </span>
                          </div>
                        </td>

                        {/* Status */}
                        <td className="px-5 py-4">
                          <StatusBadge status={customer.status} />
                        </td>

                        {/* Orders */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1.5">
                            <ShoppingBag size={12} style={{ color:"var(--accent-deep)" }} />
                            <span className="text-[13px] font-bold" style={{ color:"var(--text-primary)" }}>
                              {customer.orders}
                            </span>
                          </div>
                        </td>

                        {/* Spent */}
                        <td className="px-5 py-4">
                          <span className="text-[14px] font-black" style={{ color:"var(--text-primary)" }}>
                            ₹{customer.spent?.toLocaleString("en-IN")}
                          </span>
                        </td>

                        {/* Rating */}
                        <td className="px-5 py-4">
                          <StarRating rating={customer.rating} />
                        </td>

                        {/* Joined */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={11} style={{ color:"var(--text-soft)" }} />
                            <span className="text-[12px]" style={{ color:"var(--text-muted)" }}>
                              {customer.joined}
                            </span>
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                               style={{ opacity: 1 }}>
                            <button
                              onClick={() => setSelectedCustomer(customer)}
                              className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:scale-105"
                              style={{ background:"var(--card-subtle)", border:"1px solid var(--border-hover)", color:"var(--accent-deep)" }}
                            >
                              <Eye size={14} />
                            </button>
                            <button
                              className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:scale-105"
                              style={{ background:"var(--warning-bg)", border:"1px solid var(--warning)44", color:"var(--warning-text)" }}
                            >
                              <Edit2 size={14} />
                            </button>
                            <button
                              onClick={() => handleDelete(customer.id)}
                              disabled={deletingId === customer.id}
                              className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:scale-105 disabled:opacity-50"
                              style={{ background:"var(--danger-bg)", border:"1px solid var(--danger)44", color:"var(--danger-text)" }}
                            >
                              {deletingId === customer.id
                                ? <RefreshCw size={14} className="animate-spin" />
                                : <Trash2 size={14} />
                              }
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* ── MOBILE CARD LIST ── */}
            <div className="block md:hidden">
              {loadingCustomers && (
                <div className="flex flex-col gap-3 p-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-24 animate-pulse rounded-2xl" style={{ background:"var(--border-soft)" }} />
                  ))}
                </div>
              )}

              {!loadingCustomers && paged.length === 0 && (
                <div className="py-16 text-center">
                  <Users size={36} className="mx-auto mb-3" style={{ color:"var(--border)" }} />
                  <p className="text-[13px] font-semibold" style={{ color:"var(--text-muted)" }}>
                    Koi customer nahi mila
                  </p>
                </div>
              )}

              {!loadingCustomers && paged.map((customer, index) => {
                const color     = AVATAR_COLORS[customer.id?.charCodeAt(4) % AVATAR_COLORS.length] ?? "#7C6CF2";
                const isPremium = customer.status === "Premium";

                return (
                  <div
                    key={customer.id}
                    className="mx-4 my-2 rounded-2xl p-4 transition-all"
                    style={{
                      background: index % 2 === 0 ? "var(--surface)" : "var(--card-alt)",
                      border:     "1px solid var(--border-soft)",
                      opacity:    deletingId === customer.id ? 0.4 : 1,
                    }}
                  >
                    {/* Top */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar initials={customer.avatar} color={color} />
                          {isPremium && (
                            <div
                              className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full"
                              style={{ background:"#FFB86B", border:"1.5px solid var(--surface)" }}
                            >
                              <Crown size={8} color="#fff" />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-[14px] font-bold" style={{ color:"var(--text-primary)" }}>
                            {customer.name}
                          </p>
                          <p className="text-[11px]" style={{ color:"var(--text-soft)" }}>
                            {customer.email}
                          </p>
                        </div>
                      </div>
                      <StatusBadge status={customer.status} />
                    </div>

                    {/* Stats */}
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {[
                        { label:"Orders", value:customer.orders },
                        { label:"Spent",  value:`₹${(customer.spent/1000).toFixed(0)}K` },
                        { label:"Rating", value:customer.rating?.toFixed(1) },
                      ].map(({ label, value }) => (
                        <div
                          key={label}
                          className="rounded-xl px-2.5 py-2 text-center"
                          style={{ background:"var(--card-subtle)" }}
                        >
                          <p className="text-[10px]" style={{ color:"var(--text-soft)" }}>{label}</p>
                          <p className="text-[13px] font-black" style={{ color:"var(--text-primary)" }}>{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Bottom */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={11} style={{ color:"var(--text-soft)" }} />
                        <span className="text-[12px]" style={{ color:"var(--text-muted)" }}>
                          {customer.city}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setSelectedCustomer(customer)}
                          className="flex h-8 w-8 items-center justify-center rounded-xl"
                          style={{ background:"var(--card-subtle)", color:"var(--accent-deep)", border:"1px solid var(--border-hover)" }}
                        >
                          <Eye size={13} />
                        </button>
                        <button
                          className="flex h-8 w-8 items-center justify-center rounded-xl"
                          style={{ background:"var(--warning-bg)", color:"var(--warning-text)", border:"1px solid var(--warning)44" }}
                        >
                          <Edit2 size={13} />
                        </button>
                        <button
                          onClick={() => handleDelete(customer.id)}
                          disabled={deletingId === customer.id}
                          className="flex h-8 w-8 items-center justify-center rounded-xl disabled:opacity-50"
                          style={{ background:"var(--danger-bg)", color:"var(--danger-text)", border:"1px solid var(--danger)44" }}
                        >
                          {deletingId === customer.id
                            ? <RefreshCw size={13} className="animate-spin" />
                            : <Trash2 size={13} />
                          }
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── PAGINATION ── */}
            <div
              className="flex flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6"
              style={{ borderTop:"1px solid var(--border-soft)" }}
            >
              <p className="text-[12px]" style={{ color:"var(--text-muted)" }}>
                Showing{" "}
                <span className="font-bold" style={{ color:"var(--text-primary)" }}>
                  {filtered.length === 0 ? 0 : (page - 1) * ITEMS_PER_PAGE + 1}
                </span>
                {" "}–{" "}
                <span className="font-bold" style={{ color:"var(--text-primary)" }}>
                  {Math.min(page * ITEMS_PER_PAGE, filtered.length)}
                </span>
                {" "}of{" "}
                <span className="font-bold" style={{ color:"var(--text-primary)" }}>
                  {filtered.length}
                </span>{" "}
                customers
              </p>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:opacity-80 disabled:opacity-40"
                  style={{ background:"var(--card-alt)", border:"1px solid var(--border-soft)", color:"var(--text-muted)" }}
                >
                  <ChevronLeft size={14} />
                </button>

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
                          ? { background:"linear-gradient(135deg,var(--accent-deep),var(--accent-lt))", color:"#fff", boxShadow:"0 4px 12px rgba(124,108,242,0.3)" }
                          : { background:"var(--card-alt)", border:"1px solid var(--border-soft)", color:"var(--text-muted)" }
                      }
                    >
                      {p}
                    </button>
                  );
                })}

                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="flex h-9 w-9 items-center justify-center rounded-xl transition-all hover:opacity-80 disabled:opacity-40"
                  style={{ background:"var(--card-alt)", border:"1px solid var(--border-soft)", color:"var(--text-muted)" }}
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Detail Drawer */}
      <CustomerDrawer
        customer={selectedCustomer}
        onClose={() => setSelectedCustomer(null)}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default CustomersPage;