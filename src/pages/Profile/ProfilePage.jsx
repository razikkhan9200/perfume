import { useState } from "react";
import { Pencil, Eye, EyeOff, ChevronRight, Shield, Lock } from "lucide-react";
import Sidebar from "../../components/common/Sidebar";
import Navbar from "../../components/common/Navbar";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

// ─── SECTION CARD ─────────────────────────────────────────────────────────────
const SectionCard = ({ title, children, onEdit, editLabel = "Edit" }) => (
  <div className="rounded-[20px] border border-[#E6E6EC] bg-white p-6 sm:p-7 mb-5">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-[18px] font-black tracking-[-0.03em] text-[#1E1E24]">
        {title}
      </h2>
      {onEdit && (
        <button
          onClick={onEdit}
          className="flex items-center gap-2 rounded-[12px] border border-[#E6E6EC] bg-white px-4 py-2 text-[12px] font-semibold text-[#1E1E24] hover:bg-[#F5F5F8] transition-all"
        >
          <Pencil size={13} />
          {editLabel}
        </button>
      )}
    </div>
    {children}
  </div>
);

// ─── INFO FIELD ───────────────────────────────────────────────────────────────
const InfoField = ({ label, value }) => (
  <div>
    <p className="text-[12px] font-medium text-[#8C8C98] mb-1">{label}</p>
    <p className="text-[14px] font-bold text-[#1E1E24]">{value || "—"}</p>
  </div>
);

// ─── TOGGLE SWITCH ────────────────────────────────────────────────────────────
const Toggle = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
      enabled ? "bg-[#B8A9FF]" : "bg-[#E6E6EC]"
    }`}
  >
    <span
      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${
        enabled ? "translate-x-5" : "translate-x-0"
      }`}
    />
  </button>
);

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
const UserProfilePage = () => {
  const [activeNav, setActiveNav] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [twoFA, setTwoFA] = useState(false);
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#F4F4F7] text-[#1E1E24]">
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-24 sm:px-6 lg:px-8">
          {/* ── PAGE HEADER ── */}
          <div className="flex items-center justify-between py-5">
            <h1 className="text-[22px] font-black tracking-[-0.03em] text-[#1E1E24]">
              User Profile
            </h1>
            <div className="flex items-center gap-1.5 text-[12px] text-[#8C8C98]">
              <Link
                to={ROUTES.HOME || "/"}
                className="cursor-pointer transition-colors hover:text-[#1E1E24]"
              >
                Home
              </Link>

              <ChevronRight size={13} />

              <span className="font-semibold text-[#1E1E24]">User Profile</span>
            </div>
          </div>

          {/* ── MY PROFILE ── */}
          <SectionCard title="My Profile" onEdit={() => {}}>
            {/* Avatar + Name row */}
            <div className="flex items-center gap-5 mb-7 pb-6 border-b border-[#F0F0F5]">
              <div className="relative flex-shrink-0">
                <div className="h-[72px] w-[72px] rounded-full overflow-hidden bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF] flex items-center justify-center">
                  <span className="text-[22px] font-black text-white">MC</span>
                </div>
                <button className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#1E1E24] border-2 border-white">
                  <Pencil size={10} color="white" />
                </button>
              </div>
              <div>
                <h3 className="text-[18px] font-black tracking-[-0.02em] text-[#1E1E24]">
                  Musharof Chowdhury
                </h3>
                <p className="text-[13px] text-[#8C8C98] mt-0.5">
                  Team Manager &nbsp;|&nbsp; Arizona, United States.
                </p>
              </div>
            </div>

            {/* Fields grid */}
            {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              <InfoField label="First Name" value="Chowdury" />
              <InfoField label="Last Name" value="Musharof" />
              <div className="sm:col-span-2 lg:col-span-2" />
              <InfoField label="Email address" value="randomuser@pimjo.com" />
              <InfoField label="Phone" value="+09 363 398 46" />
              <InfoField label="Bio" value="Team Manager" />
              <div>
                <p className="text-[12px] font-medium text-[#8C8C98] mb-2">Social Links</p>
                <div className="flex items-center gap-3">
                  {[
                    { Icon: Facebook, href: "#" },
                    { Icon: Twitter, href: "#" },
                    { Icon: Linkedin, href: "#" },
                    { Icon: Instagram, href: "#" },
                  ].map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E6E6EC] bg-[#FAFAFC] text-[#8C8C98] hover:border-[#CFC5FF] hover:text-[#B8A9FF] transition-all"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div> */}
          </SectionCard>

          {/* ── ADDRESS ── */}
          <SectionCard title="Address" onEdit={() => {}}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <InfoField label="Country" value="United States" />
              <InfoField label="City/State" value="Arizona, United States." />
              <InfoField label="Postal Code" value="ERT 2489" />
              <InfoField label="TAX ID" value="AS4568384" />
            </div>
          </SectionCard>

          {/* ── SECURITY ── */}
          <SectionCard title="Security">
            <div className="divide-y divide-[#F0F0F5]">
              {/* Change Password */}
              <div className="flex items-center justify-between py-5 first:pt-0">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[12px] bg-[#EEF1FF]">
                    <Lock size={16} className="text-[#7C6CF2]" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#1E1E24]">
                      Change Password
                    </p>
                    <p className="text-[12px] text-[#8C8C98] mt-0.5">
                      Receive real-time notifications and team alerts.
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2 rounded-[12px] border border-[#E6E6EC] bg-white px-4 py-2 text-[12px] font-semibold text-[#1E1E24] hover:bg-[#F5F5F8] transition-all">
                  <Pencil size={13} />
                  Change Password
                </button>
              </div>

              {/* 2FA */}
              <div className="flex items-center justify-between py-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[12px] bg-emerald-50">
                    <Shield size={16} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#1E1E24]">
                      Two-factor authentication (2FA)
                    </p>
                    <p className="text-[12px] text-[#8C8C98] mt-0.5">
                      Keep your account secure by enabling 2FA
                    </p>
                  </div>
                </div>
                <Toggle enabled={twoFA} onToggle={() => setTwoFA((v) => !v)} />
              </div>

              {/* Login alerts */}
              <div className="flex items-center justify-between py-5 last:pb-0">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[12px] bg-amber-50">
                    <Shield size={16} className="text-amber-500" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#1E1E24]">
                      Login alerts
                    </p>
                    <p className="text-[12px] text-[#8C8C98] mt-0.5">
                      Get notified when a new login is detected
                    </p>
                  </div>
                </div>
                <Toggle
                  enabled={loginAlerts}
                  onToggle={() => setLoginAlerts((v) => !v)}
                />
              </div>
            </div>
          </SectionCard>
        </main>
      </div>
    </div>
  );
};

export default UserProfilePage;
