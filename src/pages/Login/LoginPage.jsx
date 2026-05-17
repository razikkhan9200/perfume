// // /**
// //  * LoginPage.jsx
// //  * Public page — accessible only when NOT authenticated.
// //  * Demo credentials shown on the card for easy testing.
// //  */

// // import { useState } from 'react'
// // import { useNavigate, useLocation } from 'react-router-dom'
// // import { useAuth } from '../../hooks/useAuth'
// // import { ROUTES } from '../../constants/routes'
// // import InputField from '../../components/forms/InputField'
// // import Button from '../../components/ui/Button'

// // const LoginPage = () => {
// //   const { login }   = useAuth()
// //   const navigate    = useNavigate()
// //   const location    = useLocation()
// //   const from        = location.state?.from?.pathname || ROUTES.DASHBOARD

// //   const [form, setForm]       = useState({ email: '', password: '' })
// //   const [error, setError]     = useState('')
// //   const [loading, setLoading] = useState(false)

// //   const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

// //   const handleSubmit = async e => {
// //     e.preventDefault()
// //     setError('')
// //     if (!form.email || !form.password) { setError('All fields are required.'); return }
// //     try {
// //       setLoading(true)
// //       await login(form.email, form.password)
// //       navigate(from, { replace: true })
// //     } catch (err) {
// //       setError(err.message || 'Login failed')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return (
// //     <div className="bg-surface border border-border rounded-xl
// //                     px-8 py-10 w-full max-w-[420px] animate-fade-up">

// //       {/* Header */}
// //       <div className="text-center mb-7">
// //         <div className="text-[36px] mb-2">⚡</div>
// //         <h1 className="text-text text-2xl font-bold m-0">ReactPro</h1>
// //         <p className="text-muted text-sm mt-1.5 mb-0">Sign in to your account</p>
// //       </div>

// //       {/* Demo hint */}
// //       <div className="bg-accent/5 border border-accent/25 rounded-md
// //                       px-3.5 py-2.5 mb-5 text-xs text-accent-lt">
// //         <strong>Admin:</strong> admin@app.com / admin123<br />
// //         <strong>User:</strong> user@app.com / user123
// //       </div>

// //       {/* Form */}
// //       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
// //         <InputField
// //           label="Email" type="email" name="email"
// //           value={form.email} onChange={handleChange}
// //           placeholder="you@example.com" required
// //         />
// //         <InputField
// //           label="Password" type="password" name="password"
// //           value={form.password} onChange={handleChange}
// //           placeholder="••••••••" required
// //         />

// //         {error && (
// //           <p className="text-danger text-[13px] m-0 bg-danger/10 px-3.5 py-2.5 rounded-md">
// //             ⚠ {error}
// //           </p>
// //         )}

// //         <Button type="submit" loading={loading} className="!mt-1 !py-3 w-full">
// //           Sign In
// //         </Button>
// //       </form>
// //     </div>
// //   )
// // }

// // export default LoginPage


// /**
//  * LuxuryLoginPage.jsx
//  * Premium split-screen luxury login — soft lavender + monochrome palette
//  * Uses: React, Framer Motion (via CDN), Lucide React, Tailwind CSS
//  *
//  * Drop this into the existing project:
//  *   src/pages/Login/LuxuryLoginPage.jsx
//  * Then update AppRoutes to use it in place of LoginPage.
//  */

// import { useState, useEffect, useRef } from 'react'
// import { useNavigate, useLocation } from 'react-router-dom'
// import { useAuth } from '../../hooks/useAuth'
// import { ROUTES } from '../../constants/routes'
// import {
//   Eye, EyeOff, Mail, Lock, ArrowRight,
//   Sparkles, TrendingUp, ShoppingBag, Star,
 
// } from 'lucide-react'

// /* ─── Colour tokens ─────────────────────────────────────────── */
// const C = {
//   bg:        '#F4F4F7',
//   card:      '#FFFFFF',
//   lavender:  '#CFC5FF',
//   violet:    '#2f0ed5',
//   dark:      '#1E1E24',
//   muted:     '#8C8C98',
//   border:    '#E6E6EC',
//   mint:      '#7EE7B8',
//   coral:     '#FF8A8A',
//   glow:      'rgba(207,197,255,0.25)',
//   glowStrong:'rgba(207,197,255,0.45)',
// }

// /* ─── Floating Analytics Cards data ─────────────────────────── */
// const analyticsCards = [
//   { label: 'Revenue',      value: '$84.2K', delta: '+18%', icon: TrendingUp, color: C.lavender },
//   { label: 'Orders',       value: '3,241',  delta: '+9%',  icon: ShoppingBag, color: C.mint   },
//   { label: 'Avg Rating',   value: '4.9 ★',  delta: '+0.2', icon: Star,        color: C.violet },
// ]

// /* ─── Animated Blob ─────────────────────────────────────────── */
// const Blob = ({ style, color, size, delay = 0 }) => (
//   <div
//     aria-hidden="true"
//     style={{
//       position:     'absolute',
//       width:        size,
//       height:       size,
//       borderRadius: '50%',
//       background:   color,
//       filter:       'blur(80px)',
//       opacity:      0.55,
//       animation:    `blobFloat 8s ease-in-out ${delay}s infinite alternate`,
//       ...style,
//     }}
//   />
// )

// /* ─── Particle dot ─────────────────────────────────────────── */
// const Particle = ({ style, delay }) => (
//   <div
//     aria-hidden="true"
//     style={{
//       position:     'absolute',
//       width:        4,
//       height:       4,
//       borderRadius: '50%',
//       background:   C.violet,
//       opacity:      0.5,
//       animation:    `particlePulse 3s ease-in-out ${delay}s infinite alternate`,
//       ...style,
//     }}
//   />
// )

// /* ─── Social Button ─────────────────────────────────────────── */
// const SocialBtn = ({ icon: Icon, label, onClick }) => (
//   <button
//     type="button"
//     onClick={onClick}
//     aria-label={`Sign in with ${label}`}
//     style={{
//       flex:           1,
//       display:        'flex',
//       alignItems:     'center',
//       justifyContent: 'center',
//       gap:            8,
//       padding:        '10px 0',
//       background:     '#FAFAFC',
//       border:         `1px solid ${C.border}`,
//       borderRadius:   12,
//       cursor:         'pointer',
//       color:          C.dark,
//       fontSize:       13,
//       fontWeight:     500,
//       transition:     'all 0.2s ease',
//       fontFamily:     'inherit',
//     }}
//     onMouseEnter={e => {
//       e.currentTarget.style.background = C.glow
//       e.currentTarget.style.borderColor = C.lavender
//       e.currentTarget.style.transform = 'translateY(-2px)'
//     }}
//     onMouseLeave={e => {
//       e.currentTarget.style.background = '#FAFAFC'
//       e.currentTarget.style.borderColor = C.border
//       e.currentTarget.style.transform = 'translateY(0)'
//     }}
//   >
//     <Icon size={16} />
//     {label}
//   </button>
// )

// /* ─── Input Field ─────────────────────────────────────────── */
// const GlassInput = ({ icon: Icon, label, type, value, onChange, name, placeholder, required }) => {
//   const [focused, setFocused] = useState(false)
//   const [show, setShow]       = useState(false)
//   const isPassword = type === 'password'
//   const inputType  = isPassword ? (show ? 'text' : 'password') : type

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
//       <label
//         htmlFor={name}
//         style={{ fontSize: 12, fontWeight: 600, color: C.muted, letterSpacing: '0.05em', textTransform: 'uppercase' }}
//       >
//         {label}
//       </label>
//       <div
//         style={{
//           position:     'relative',
//           display:      'flex',
//           alignItems:   'center',
//           border:       `1.5px solid ${focused ? C.lavender : C.border}`,
//           borderRadius: 14,
//           background:   focused ? 'rgba(207,197,255,0.08)' : '#FAFAFC',
//           boxShadow:    focused ? `0 0 0 4px ${C.glow}` : 'none',
//           transition:   'all 0.25s ease',
//         }}
//       >
//         <span style={{ position: 'absolute', left: 14, color: focused ? C.violet : C.muted, transition: 'color 0.2s' }}>
//           <Icon size={16} />
//         </span>
//         <input
//           id={name}
//           name={name}
//           type={inputType}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           required={required}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//           style={{
//             flex:        1,
//             background:  'transparent',
//             border:      'none',
//             outline:     'none',
//             padding:     '13px 14px 13px 40px',
//             fontSize:    14,
//             color:       C.dark,
//             fontFamily:  'inherit',
//             paddingRight: isPassword ? 44 : 14,
//           }}
//         />
//         {isPassword && (
//           <button
//             type="button"
//             onClick={() => setShow(s => !s)}
//             aria-label={show ? 'Hide password' : 'Show password'}
//             style={{ position: 'absolute', right: 14, background: 'none', border: 'none', cursor: 'pointer', color: C.muted, padding: 0, display: 'flex' }}
//           >
//             {show ? <EyeOff size={16} /> : <Eye size={16} />}
//           </button>
//         )}
//       </div>
//     </div>
//   )
// }

// /* ─── Main Component ─────────────────────────────────────────── */
// const LuxuryLoginPage = () => {
//   const { login }   = useAuth()
//   const navigate    = useNavigate()
//   const location    = useLocation()
//   const from        = location.state?.from?.pathname || ROUTES.DASHBOARD

//   const [form, setForm]         = useState({ email: '', password: '' })
//   const [error, setError]       = useState('')
//   const [loading, setLoading]   = useState(false)
//   const [remember, setRemember] = useState(false)
//   const [mounted, setMounted]   = useState(false)

//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 80)
//     return () => clearTimeout(t)
//   }, [])

//   const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

//   const handleSubmit = async e => {
//     e.preventDefault()
//     setError('')
//     if (!form.email || !form.password) { setError('Please fill in all fields.'); return }
//     try {
//       setLoading(true)
//       await login(form.email, form.password)
//       navigate(from, { replace: true })
//     } catch (err) {
//       setError(err.message || 'Invalid credentials. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const particles = [
//     { top: '10%', left: '8%',  delay: 0   },
//     { top: '25%', left: '20%', delay: 0.7 },
//     { top: '70%', left: '5%',  delay: 1.2 },
//     { top: '80%', left: '30%', delay: 0.3 },
//     { top: '50%', left: '42%', delay: 1.8 },
//     { top: '15%', left: '38%', delay: 2.1 },
//     { top: '90%', left: '18%', delay: 0.9 },
//   ]

//   return (
//     <>
//       {/* ── Keyframe CSS ── */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
//         @keyframes blobFloat {
//           0%   { transform: translate(0,0) scale(1); }
//           100% { transform: translate(20px, -30px) scale(1.08); }
//         }
//         @keyframes particlePulse {
//           0%   { opacity: 0.2; transform: scale(1); }
//           100% { opacity: 0.8; transform: scale(1.6); }
//         }
//         @keyframes fadeSlideIn {
//           from { opacity: 0; transform: translateY(24px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeSlideRight {
//           from { opacity: 0; transform: translateX(-32px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes cardFloat {
//           0%   { transform: translateY(0px); }
//           100% { transform: translateY(-8px); }
//         }
//         @keyframes shimmer {
//           0%   { background-position: -200% center; }
//           100% { background-position:  200% center; }
//         }
//         @keyframes spin {
//           to { transform: rotate(360deg); }
//         }
//         .lux-login * { box-sizing: border-box; }
//         .lux-login { font-family: 'DM Sans', system-ui, sans-serif; }
//         .lux-heading { font-family: 'Playfair Display', Georgia, serif; }
//         .analytics-card { animation: cardFloat 3s ease-in-out infinite alternate; }
//         .analytics-card:nth-child(2) { animation-delay: 0.6s; }
//         .analytics-card:nth-child(3) { animation-delay: 1.2s; }
//         .login-btn:hover .btn-shimmer {
//           background-size: 200% 100%;
//           animation: shimmer 1.2s linear infinite;
//         }
//       `}</style>

//       <div
//         className="lux-login"
//         style={{
//           minHeight:  '100vh',
//           background: C.bg,
//           display:    'flex',
//           position:   'relative',
//           overflow:   'hidden',
//         }}
//       >
//         {/* ────────────────────────────────────────────────
//             LEFT SIDE — Branding + Preview
//         ──────────────────────────────────────────────── */}
//         <div
//           style={{
//             flex:         1,
//             position:     'relative',
//             display:      'flex',
//             flexDirection:'column',
//             justifyContent:'center',
//             padding:      '60px 56px',
//             overflow:     'hidden',
//             background:   'linear-gradient(145deg, #EDEAFF 0%, #F4F4F7 60%, #EBF9F3 100%)',
//             opacity:      mounted ? 1 : 0,
//             transform:    mounted ? 'none' : 'translateX(-32px)',
//             transition:   'opacity 0.7s ease, transform 0.7s ease',
//           }}
//         >
//           {/* Background blobs */}
//           <Blob color={C.lavender} size="420px" style={{ top: '-80px', left: '-100px'  }} delay={0}   />
//           <Blob color={C.mint}     size="300px" style={{ bottom: '-60px', right: '-60px'}} delay={2}   />
//           <Blob color={C.violet}   size="200px" style={{ top: '50%', left: '55%'       }} delay={1}   />

//           {/* Particles */}
//           {particles.map((p, i) => (
//             <Particle key={i} style={{ top: p.top, left: p.left }} delay={p.delay} />
//           ))}

//           {/* Brand mark */}
//           <div style={{ position: 'relative', zIndex: 2, marginBottom: 48, animation: 'fadeSlideIn 0.7s ease 0.1s both' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
//               <div style={{
//                 width: 44, height: 44, borderRadius: 14,
//                 background: `linear-gradient(135deg, ${C.lavender}, ${C.violet})`,
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 boxShadow: `0 8px 24px ${C.glowStrong}`,
//               }}>
//                 <Sparkles size={22} color="#fff" />
//               </div>
//               <span style={{ fontWeight: 700, fontSize: 20, color: C.dark, letterSpacing: '-0.02em' }}>
//                 Aromalytics
//               </span>
//             </div>
//           </div>

//           {/* Hero text */}
//           <div style={{ position: 'relative', zIndex: 2, marginBottom: 56, animation: 'fadeSlideIn 0.7s ease 0.2s both' }}>
//             <h1
//               className="lux-heading"
//               style={{
//                 fontSize:   'clamp(32px, 4vw, 48px)',
//                 fontWeight: 700,
//                 color:      C.dark,
//                 lineHeight: 1.15,
//                 margin:     0,
//                 marginBottom: 16,
//                 letterSpacing: '-0.02em',
//               }}
//             >
//               Luxury Scent <br />
//               <span style={{
//                 background: `linear-gradient(90deg, ${C.violet}, ${C.lavender})`,
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//               }}>
//                 Intelligence
//               </span>
//             </h1>
//             <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7, margin: 0, maxWidth: 360 }}>
//               Premium analytics for your fragrance empire. Real-time insights, luxury-grade performance.
//             </p>
//           </div>

//           {/* Analytics floating cards */}
//           <div
//             style={{
//               position:  'relative',
//               zIndex:    2,
//               display:   'flex',
//               flexDirection: 'column',
//               gap:       16,
//               maxWidth:  380,
//               animation: 'fadeSlideIn 0.7s ease 0.35s both',
//             }}
//           >
//             {analyticsCards.map((card, i) => {
//               const Icon = card.icon
//               return (
//                 <div
//                   key={card.label}
//                   className="analytics-card"
//                   style={{
//                     background:   'rgba(255,255,255,0.72)',
//                     backdropFilter: 'blur(20px)',
//                     WebkitBackdropFilter: 'blur(20px)',
//                     border:       `1px solid rgba(207,197,255,0.35)`,
//                     borderRadius: 18,
//                     padding:      '16px 20px',
//                     display:      'flex',
//                     alignItems:   'center',
//                     gap:          16,
//                     boxShadow:    '0 4px 24px rgba(30,30,36,0.06)',
//                     animationDelay: `${i * 0.6}s`,
//                   }}
//                 >
//                   <div style={{
//                     width: 42, height: 42, borderRadius: 12,
//                     background: `${card.color}30`,
//                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                     flexShrink: 0,
//                   }}>
//                     <Icon size={20} color={card.color === C.mint ? '#3db88a' : C.violet} />
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <div style={{ fontSize: 12, color: C.muted, fontWeight: 500, marginBottom: 2 }}>{card.label}</div>
//                     <div style={{ fontSize: 18, fontWeight: 700, color: C.dark, lineHeight: 1 }}>{card.value}</div>
//                   </div>
//                   <div style={{
//                     fontSize: 12, fontWeight: 600,
//                     color: '#3db88a',
//                     background: 'rgba(126,231,184,0.18)',
//                     padding: '4px 10px', borderRadius: 20,
//                   }}>
//                     {card.delta}
//                   </div>
//                 </div>
//               )
//             })}
//           </div>

//           {/* Decorative radial glow */}
//           <div
//             aria-hidden="true"
//             style={{
//               position: 'absolute', bottom: 0, right: -40, width: 320, height: 320,
//               background: `radial-gradient(circle, ${C.glowStrong} 0%, transparent 70%)`,
//               pointerEvents: 'none',
//             }}
//           />
//         </div>

//         {/* ────────────────────────────────────────────────
//             RIGHT SIDE — Login Card
//         ──────────────────────────────────────────────── */}
//         <div
//           style={{
//             width:          'min(520px, 100%)',
//             display:        'flex',
//             alignItems:     'center',
//             justifyContent: 'center',
//             padding:        '40px 32px',
//             opacity:        mounted ? 1 : 0,
//             transform:      mounted ? 'none' : 'translateY(24px)',
//             transition:     'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
//           }}
//         >
//           {/* Glass card */}
//           <div
//             style={{
//               width:        '100%',
//               maxWidth:     440,
//               background:   'rgba(255,255,255,0.88)',
//               backdropFilter: 'blur(32px)',
//               WebkitBackdropFilter: 'blur(32px)',
//               borderRadius: 28,
//               border:       `1px solid rgba(207,197,255,0.4)`,
//               padding:      '44px 40px',
//               boxShadow:    '0 24px 64px rgba(30,30,36,0.10), 0 0 0 1px rgba(255,255,255,0.6) inset',
//             }}
//           >
//             {/* Logo row */}
//             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 36 }}>
//               <div style={{
//                 width: 56, height: 56, borderRadius: 18,
//                 background: `linear-gradient(135deg, ${C.lavender} 0%, ${C.violet} 100%)`,
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 boxShadow: `0 12px 32px ${C.glowStrong}`,
//                 marginBottom: 20,
//               }}>
//                 <Sparkles size={26} color="#fff" />
//               </div>
//               <h2
//                 className="lux-heading"
//                 style={{
//                   fontSize:     26,
//                   fontWeight:   700,
//                   color:        C.dark,
//                   margin:       0,
//                   marginBottom: 6,
//                   letterSpacing: '-0.02em',
//                 }}
//               >
//                 Welcome back
//               </h2>
//               <p style={{ fontSize: 13, color: C.muted, margin: 0 }}>
//                 Sign in to your Aromalytics dashboard
//               </p>
//             </div>

//             {/* Demo hint */}
//             <div style={{
//               background: `rgba(207,197,255,0.15)`,
//               border: `1px solid rgba(207,197,255,0.5)`,
//               borderRadius: 12,
//               padding: '10px 14px',
//               marginBottom: 28,
//               fontSize: 12,
//               color: '#6a5faa',
//               lineHeight: 1.6,
//             }}>
//               <strong>Admin:</strong> admin@app.com / admin123 &nbsp;·&nbsp;
//               <strong>User:</strong> user@app.com / user123
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
//               <GlassInput
//                 icon={Mail}  label="Email address" type="email"    name="email"
//                 value={form.email}    onChange={handleChange} placeholder="you@example.com" required
//               />
//               <GlassInput
//                 icon={Lock}  label="Password"       type="password" name="password"
//                 value={form.password} onChange={handleChange} placeholder="••••••••" required
//               />

//               {/* Remember + Forgot row */}
//               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: -4 }}>
//                 <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 13, color: C.muted }}>
//                   <input
//                     type="checkbox"
//                     checked={remember}
//                     onChange={e => setRemember(e.target.checked)}
//                     style={{ accentColor: C.violet, width: 15, height: 15, cursor: 'pointer' }}
//                   />
//                   Remember me
//                 </label>
//                 <a
//                   href="#"
//                   style={{ fontSize: 13, color: C.violet, textDecoration: 'none', fontWeight: 500 }}
//                   onMouseEnter={e => e.target.style.textDecoration = 'underline'}
//                   onMouseLeave={e => e.target.style.textDecoration = 'none'}
//                 >
//                   Forgot password?
//                 </a>
//               </div>

//               {/* Error */}
//               {error && (
//                 <div style={{
//                   background: 'rgba(255,138,138,0.12)',
//                   border:     `1px solid rgba(255,138,138,0.4)`,
//                   borderRadius: 12,
//                   padding:    '10px 14px',
//                   fontSize:   13,
//                   color:      '#c0454f',
//                   display:    'flex',
//                   alignItems: 'center',
//                   gap:        8,
//                 }}>
//                   ⚠ {error}
//                 </div>
//               )}

//               {/* Sign in button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="login-btn"
//                 style={{
//                   position:     'relative',
//                   overflow:     'hidden',
//                   width:        '100%',
//                   padding:      '15px',
//                   borderRadius: 14,
//                   border:       'none',
//                   background:   loading
//                     ? C.muted
//                     : `linear-gradient(120deg, ${C.violet} 0%, ${C.lavender} 50%, ${C.violet} 100%)`,
//                   backgroundSize: '200% 100%',
//                   color:        '#fff',
//                   fontWeight:   600,
//                   fontSize:     15,
//                   cursor:       loading ? 'not-allowed' : 'pointer',
//                   display:      'flex',
//                   alignItems:   'center',
//                   justifyContent: 'center',
//                   gap:          8,
//                   boxShadow:    loading ? 'none' : `0 8px 24px ${C.glowStrong}`,
//                   transition:   'transform 0.2s ease, box-shadow 0.2s ease',
//                   fontFamily:   'inherit',
//                   letterSpacing: '0.01em',
//                   marginTop:    4,
//                 }}
//                 onMouseEnter={e => {
//                   if (!loading) {
//                     e.currentTarget.style.transform = 'translateY(-2px)'
//                     e.currentTarget.style.boxShadow = `0 12px 32px rgba(184,169,255,0.55)`
//                   }
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.transform = 'translateY(0)'
//                   e.currentTarget.style.boxShadow = loading ? 'none' : `0 8px 24px ${C.glowStrong}`
//                 }}
//               >
//                 {loading ? (
//                   <span style={{
//                     display: 'inline-block',
//                     width: 18, height: 18,
//                     border: '2px solid rgba(255,255,255,0.4)',
//                     borderTopColor: '#fff',
//                     borderRadius: '50%',
//                     animation: 'spin 0.7s linear infinite',
//                   }} />
//                 ) : (
//                   <>
//                     Sign In
//                     <ArrowRight size={16} />
//                   </>
//                 )}
//               </button>
//             </form>

//             {/* Divider */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '28px 0' }}>
//               <div style={{ flex: 1, height: '1px', background: C.border }} />
//               <span style={{ fontSize: 12, color: C.muted, fontWeight: 500 }}>or continue with</span>
//               <div style={{ flex: 1, height: '1px', background: C.border }} />
//             </div>

//             {/* Social buttons */}
//             {/* <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
//               <SocialBtn icon={Chrome}  label="Google" onClick={() => {}} />
//               <SocialBtn icon={Github}  label="GitHub" onClick={() => {}} />
//               <SocialBtn icon={Twitter} label="Twitter" onClick={() => {}} />
//             </div> */}

//             {/* Create account */}
//             <p style={{ textAlign: 'center', fontSize: 13, color: C.muted, margin: 0 }}>
//               Don&apos;t have an account?{' '}
//               <a
//                 href="#"
//                 style={{ color: C.violet, fontWeight: 600, textDecoration: 'none' }}
//                 onMouseEnter={e => e.target.style.textDecoration = 'underline'}
//                 onMouseLeave={e => e.target.style.textDecoration = 'none'}
//               >
//                 Create account
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ── Responsive: hide left panel on narrow screens ── */}
//       <style>{`
//         @media (max-width: 900px) {
//           .lux-login > div:first-child { display: none !important; }
//           .lux-login > div:last-child  { width: 100% !important; }
//         }
//         @media (max-width: 480px) {
//           .lux-login > div:last-child  { padding: 24px 16px !important; }
//         }
//       `}</style>
//     </>
//   )
// }

// export default LuxuryLoginPage


/**
 * LuxuryLoginPage.jsx
 * Tailwind CSS Version
 */

import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { ROUTES } from '../../constants/routes'

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  TrendingUp,
  ShoppingBag,
  Star,
} from 'lucide-react'

/* ───────────────────────────────────────────── */

const analyticsCards = [
  {
    label: 'Revenue',
    value: '$84.2K',
    delta: '+18%',
    icon: TrendingUp,
    color: 'bg-violet-100 text-violet-700',
  },
  {
    label: 'Orders',
    value: '3,241',
    delta: '+9%',
    icon: ShoppingBag,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    label: 'Avg Rating',
    value: '4.9 ★',
    delta: '+0.2',
    icon: Star,
    color: 'bg-purple-100 text-purple-700',
  },
]

/* ───────────────────────────────────────────── */

const Blob = ({ className }) => (
  <div
    className={`absolute rounded-full blur-[90px] opacity-50 animate-blob ${className}`}
  />
)

const Particle = ({ className, delay = 0 }) => (
  <div
    className={`absolute w-1 h-1 rounded-full bg-violet-500 opacity-40 animate-pulse ${className}`}
    style={{ animationDelay: `${delay}s` }}
  />
)

/* ───────────────────────────────────────────── */

const GlassInput = ({
  icon: Icon,
  label,
  type,
  value,
  onChange,
  name,
  placeholder,
  required,
}) => {
  const [focused, setFocused] = useState(false)
  const [show, setShow] = useState(false)

  const isPassword = type === 'password'
  const inputType = isPassword ? (show ? 'text' : 'password') : type

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-[11px] uppercase tracking-[0.12em] font-semibold text-zinc-500"
      >
        {label}
      </label>

      <div
        className={`
          relative flex items-center rounded-2xl border transition-all duration-300
          ${
            focused
              ? 'border-violet-300 bg-violet-50 shadow-[0_0_0_4px_rgba(196,181,253,0.25)]'
              : 'border-zinc-200 bg-zinc-50'
          }
        `}
      >
        <Icon
          size={16}
          className={`absolute left-4 ${
            focused ? 'text-violet-600' : 'text-zinc-400'
          }`}
        />

        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent outline-none py-3.5 pl-11 pr-12 text-sm text-zinc-800 placeholder:text-zinc-400"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-4 text-zinc-400 hover:text-zinc-700 transition"
          >
            {show ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
    </div>
  )
}

/* ───────────────────────────────────────────── */

const LuxuryLoginPage = () => {
  const { login } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || ROUTES.DASHBOARD

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [remember, setRemember] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  const handleChange = (e) =>
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')

    if (!form.email || !form.password) {
      setError('Please fill in all fields.')
      return
    }

    try {
      setLoading(true)

      await login(form.email, form.password)

      navigate(from, { replace: true })
    } catch (err) {
      setError(err.message || 'Invalid credentials.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* GOOGLE FONT */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');

          * {
            font-family: 'DM Sans', sans-serif;
          }

          .lux-heading {
            font-family: 'Playfair Display', serif;
          }

          @keyframes blob {
            0% {
              transform: translate(0px,0px) scale(1);
            }
            100% {
              transform: translate(20px,-30px) scale(1.08);
            }
          }

          .animate-blob {
            animation: blob 8s ease-in-out infinite alternate;
          }
        `}
      </style>

      <div className="min-h-screen bg-[#F4F4F7] flex overflow-hidden relative">
        {/* LEFT SIDE */}
        <div
          className={`
            hidden lg:flex flex-1 relative overflow-hidden
            flex-col justify-center
            px-16
            bg-gradient-to-br
            from-[#EDEAFF]
            via-[#F4F4F7]
            to-[#EBF9F3]
            transition-all duration-700
            ${
              mounted
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }
          `}
        >
          {/* BLOBS */}
          <Blob className="w-[420px] h-[420px] bg-violet-300 top-[-100px] left-[-100px]" />

          <Blob className="w-[300px] h-[300px] bg-emerald-300 bottom-[-60px] right-[-60px]" />

          <Blob className="w-[200px] h-[200px] bg-violet-500 top-[50%] left-[55%]" />

          {/* PARTICLES */}
          <Particle className="top-[10%] left-[8%]" />
          <Particle className="top-[30%] left-[20%]" delay={0.4} />
          <Particle className="top-[70%] left-[10%]" delay={1} />
          <Particle className="top-[80%] left-[30%]" delay={0.7} />
          <Particle className="top-[55%] left-[45%]" delay={1.5} />

          {/* BRAND */}
          <div className="relative z-10 mb-14">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="
                  w-12 h-12 rounded-2xl
                  bg-gradient-to-br from-violet-300 to-violet-700
                  flex items-center justify-center
                  shadow-[0_10px_30px_rgba(139,92,246,0.35)]
                "
              >
                <Sparkles size={22} className="text-white" />
              </div>

              <span className="text-xl font-bold tracking-tight text-zinc-900">
                Aromalytics
              </span>
            </div>
          </div>

          {/* HERO */}
          <div className="relative z-10 max-w-xl mb-14">
            <h1 className="lux-heading text-6xl leading-tight font-bold text-zinc-900 mb-5">
              Luxury Scent
              <br />

              <span className="bg-gradient-to-r from-violet-700 to-violet-300 bg-clip-text text-transparent">
                Intelligence
              </span>
            </h1>

            <p className="text-zinc-500 text-[15px] leading-7 max-w-md">
              Premium analytics for your fragrance empire. Real-time
              insights, luxury-grade performance.
            </p>
          </div>

          {/* CARDS */}
          <div className="relative z-10 flex flex-col gap-4 max-w-md">
            {analyticsCards.map((card) => {
              const Icon = card.icon

              return (
                <div
                  key={card.label}
                  className="
                    backdrop-blur-2xl
                    bg-white/70
                    border border-white/50
                    rounded-3xl
                    p-5
                    shadow-xl
                    flex items-center gap-4
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <div
                    className={`
                      w-12 h-12 rounded-2xl
                      flex items-center justify-center
                      ${card.color}
                    `}
                  >
                    <Icon size={20} />
                  </div>

                  <div className="flex-1">
                    <div className="text-xs text-zinc-500 font-medium mb-1">
                      {card.label}
                    </div>

                    <div className="text-xl font-bold text-zinc-900">
                      {card.value}
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-600">
                    {card.delta}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`
            w-full lg:w-[520px]
            flex items-center justify-center
            px-5 sm:px-8 py-10
            transition-all duration-700
            ${
              mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }
          `}
        >
          <div
            className="
              w-full max-w-[440px]
              bg-white/80
              backdrop-blur-3xl
              border border-white/60
              rounded-[32px]
              p-8 sm:p-10
              shadow-[0_20px_70px_rgba(0,0,0,0.08)]
            "
          >
            {/* HEADER */}
            <div className="flex flex-col items-center mb-10">
              <div
                className="
                  w-16 h-16 rounded-3xl
                  bg-gradient-to-br from-violet-300 to-violet-700
                  flex items-center justify-center
                  shadow-[0_15px_35px_rgba(139,92,246,0.35)]
                  mb-5
                "
              >
                <Sparkles size={28} className="text-white" />
              </div>

              <h2 className="lux-heading text-3xl font-bold text-zinc-900 mb-2">
                Welcome back
              </h2>

              <p className="text-sm text-zinc-500">
                Sign in to your Aromalytics dashboard
              </p>
            </div>

            {/* DEMO */}
            <div
              className="
                bg-violet-100/60
                border border-violet-200
                rounded-2xl
                px-4 py-3
                text-sm text-violet-700
                mb-7
              "
            >
              <strong>Admin:</strong> admin@app.com / admin123
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <GlassInput
                icon={Mail}
                label="Email Address"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />

              <GlassInput
                icon={Lock}
                label="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />

              {/* REMEMBER */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-zinc-500 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) =>
                      setRemember(e.target.checked)
                    }
                    className="accent-violet-600 w-4 h-4"
                  />

                  Remember me
                </label>

                <a
                  href="#"
                  className="text-violet-700 font-medium hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* ERROR */}
              {error && (
                <div
                  className="
                    bg-red-50
                    border border-red-200
                    rounded-2xl
                    px-4 py-3
                    text-sm text-red-500
                  "
                >
                  ⚠ {error}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="
                  mt-2
                  w-full
                  h-[56px]
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-700
                  via-violet-400
                  to-violet-700
                  bg-[length:200%_100%]
                  text-white
                  font-semibold
                  flex items-center justify-center gap-2
                  shadow-[0_12px_30px_rgba(139,92,246,0.35)]
                  hover:-translate-y-1
                  hover:shadow-[0_18px_40px_rgba(139,92,246,0.45)]
                  transition-all duration-300
                "
              >
                {loading ? (
                  <div className="w-5 h-5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={17} />
                  </>
                )}
              </button>
            </form>

            {/* DIVIDER */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-zinc-200" />

              <span className="text-xs font-medium text-zinc-400">
                or continue with
              </span>

              <div className="flex-1 h-px bg-zinc-200" />
            </div>

            {/* FOOTER */}
            <p className="text-center text-sm text-zinc-500">
              Don&apos;t have an account?{' '}
              <a
                href="#"
                className="text-violet-700 font-semibold hover:underline"
              >
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LuxuryLoginPage