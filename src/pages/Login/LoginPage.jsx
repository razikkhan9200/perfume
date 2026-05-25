/**
 * LoginPage.jsx
 * ─────────────────────────────────────────────
 * Clean, simple login page.
 *
 * FLOW:
 *  1. Admin email + password bharta hai
 *  2. handleSubmit → login(email, password)
 *  3. authService → POST /admin/login → token milta hai
 *  4. Token localStorage mein save
 *  5. Dashboard par redirect
 */

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../constants/routes";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles } from "lucide-react";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // ===========================================
  // Login ke baad kahan jana hai (agar protected route se aaya tha)
  // ===========================================

  const from = location.state?.from?.pathname || ROUTES.DASHBOARD;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ===========================================
  // LOGIN SUBMIT
  // ===========================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // VALIDATION
    if (!email || !password) {
      setError("Email aur password dono bharo.");
      return;
    }

    try {
      setLoading(true);

      // LOGIN CALL
      const response = await login(email, password);

      console.log("LOGIN SUCCESS", response);

      // TOKEN CHECK
      console.log("LOCAL TOKEN:", localStorage.getItem("token"));

      // REDIRECT
      navigate(from, {replace: true,});
    } catch (err) {
       console.log(err);
      setError(err?.response?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  // ── RENDER ─────────────────────────────────
  return (
    <div className="min-h-screen bg-[#F4F4F7] flex">
      {/* ── LEFT PANEL ── */}
      <div
        className="hidden lg:flex flex-1 flex-col justify-center px-16
        bg-gradient-to-br from-[#EDEAFF] via-[#F4F4F7] to-[#EBF9F3]"
      >
        <div className="flex items-center gap-3 mb-10">
          <div
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-violet-700
            flex items-center justify-center"
          >
            <Sparkles size={22} className="text-white" />
          </div>
          <span className="text-xl font-bold text-zinc-900">Aromalytics</span>
        </div>

        <h1 className="text-5xl font-bold text-zinc-900 mb-4 leading-tight">
          Luxury Scent
          <br />
          <span className="text-violet-600">Intelligence</span>
        </h1>
        <p className="text-zinc-500 text-base">
          Premium analytics for your fragrance empire.
        </p>
      </div>

      {/* ── RIGHT PANEL (Form) ── */}
      <div className="w-full lg:w-[500px] flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-[420px] bg-white rounded-3xl p-8 shadow-xl">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-violet-700
              flex items-center justify-center mb-4"
            >
              <Sparkles size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900">Welcome back</h2>
            <p className="text-sm text-zinc-500 mt-1">
              Admin dashboard mein login karo
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                Email Address
              </label>
              <div className="flex items-center border border-zinc-200 rounded-xl bg-zinc-50 px-4">
                <Mail size={16} className="text-zinc-400 shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full bg-transparent outline-none py-3 pl-3 text-sm text-zinc-800 placeholder:text-zinc-400"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                Password
              </label>
              <div className="flex items-center border border-zinc-200 rounded-xl bg-zinc-50 px-4">
                <Lock size={16} className="text-zinc-400 shrink-0" />
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-transparent outline-none py-3 pl-3 text-sm text-zinc-800 placeholder:text-zinc-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="text-zinc-400 hover:text-zinc-700"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-500">
                ⚠ {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full h-[52px] rounded-xl
                bg-gradient-to-r from-violet-600 to-violet-500
                text-white font-semibold flex items-center justify-center gap-2
                shadow-lg transition-opacity disabled:opacity-60"
            >
              {loading ? (
                <div className="w-5 h-5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
              ) : (
                <>
                  Sign In <ArrowRight size={17} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
