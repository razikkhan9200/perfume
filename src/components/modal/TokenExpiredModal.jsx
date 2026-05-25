import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldOff } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../constants/routes";

const TokenExpiredModal = () => {
  const { tokenExpired, dismissExpiredModal } = useAuth();
  const navigate = useNavigate();

  // Enter / Escape keyboard shortcut
  useEffect(() => {
    if (!tokenExpired) return;
    const handler = (e) => {
      if (e.key === "Enter" || e.key === "Escape") handleOk();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [tokenExpired]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = tokenExpired ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [tokenExpired]);

  const handleOk = () => {
    dismissExpiredModal();
    navigate(ROUTES.LOGIN, { replace: true });
  };

  if (!tokenExpired) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "rgba(30,30,36,0.45)",
        backdropFilter: "blur(6px)",
        animation: "fadeIn 0.2s ease both",
      }}
    >
      <div
        className="relative mx-4 w-full max-w-[380px] rounded-[28px] p-8 text-center"
        style={{
          background: "linear-gradient(135deg,#FFFFFF 0%,#FAFAFC 50%,#F7F5FF 100%)",
          border:     "1px solid var(--border)",
          boxShadow:  "0 24px 60px rgba(124,108,242,0.16), 0 8px 20px rgba(0,0,0,0.08)",
          animation:  "slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {/* Icon */}
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-lt) 100%)", boxShadow: "0 8px 24px var(--glow)" }}>
          <ShieldOff size={28} color="#fff" strokeWidth={2} />
        </div>

        <h2 className="mb-2 text-[22px] font-black tracking-[-0.03em]" style={{ color: "var(--text-heading)" }}>
          Session Expired
        </h2>
        <p className="mb-7 text-[14px] font-medium leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Your session has expired. Please log in again to continue.
        </p>

        <div className="mb-6 h-px w-full" style={{ background: "var(--border-soft)" }} />

        <button onClick={handleOk}
          className="w-full rounded-full py-3 text-[15px] font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{ background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-lt) 100%)", boxShadow: "0 8px 20px var(--glow)" }}>
          OK, Go to Login
        </button>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp {
          from { opacity:0; transform: translateY(40px) scale(0.95) }
          to   { opacity:1; transform: translateY(0)    scale(1)    }
        }
      `}</style>
    </div>
  );
};

export default TokenExpiredModal;