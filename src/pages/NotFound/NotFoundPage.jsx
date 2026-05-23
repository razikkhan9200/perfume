// import { Link } from "react-router-dom";
// import { ROUTES } from "../../constants/routes";

// const NotFoundPage = () => (
//   <div
//     className="min-h-screen bg-bg flex flex-col items-center justify-center
//                   text-center px-8"
//   >
//     <div className="text-[80px] mb-4 font-black text-text">404</div>
//     <h1 className="text-text text-[28px] font-bold m-0 mb-2">Page Not Found</h1>
//     <p className="text-muted text-[15px] m-0 mb-8 max-w-sm">
//       The page you're looking for doesn't exist or has been moved.
//     </p>
//     <Link
//       to={ROUTES.DASHBOARD}
//       className="bg-accent text-white no-underline px-6 py-3
//                  rounded-md font-semibold text-sm
//                  hover:bg-indigo-500 transition-colors duration-200"
//     >
//       ← Back to Dashboard
//     </Link>
//   </div>
// );

// export default NotFoundPage;


import { Link } from "react-router-dom";

import {
  ArrowLeft,
  LogIn,
  SearchX,
} from "lucide-react";

import { motion } from "framer-motion";

import { ROUTES } from "../../constants/routes";

const NotFoundPage = () => {
  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        overflow-hidden bg-[#F5F7FB]
        px-6 py-10
      "
    >
      {/* Animated Background */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute left-[-120px] top-[-120px]
          h-[280px] w-[280px] rounded-full
          bg-[#CFC5FF]/40 blur-3xl
        "
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute bottom-[-120px] right-[-120px]
          h-[280px] w-[280px] rounded-full
          bg-[#B8A9FF]/40 blur-3xl
        "
      />

      {/* Main Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          relative z-10 w-full max-w-[560px]
          rounded-[32px] border border-white/70
          bg-white/90 p-10 text-center
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          backdrop-blur-xl
        "
      >
        {/* Floating Icon */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="
            mx-auto mb-6 flex h-20 w-20
            items-center justify-center rounded-full
            bg-gradient-to-br from-[#CFC5FF] to-[#B8A9FF]
            shadow-lg
          "
        >
          <SearchX size={34} className="text-white" />
        </motion.div>

        {/* 404 */}

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="
            bg-gradient-to-r from-[#8B7CFF] to-[#B8A9FF]
            bg-clip-text text-[90px] font-black
            leading-none text-transparent
          "
        >
          404
        </motion.h1>

        {/* Heading */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
          className="
            mt-3 text-[30px] font-extrabold
            tracking-[-0.03em] text-[#111827]
          "
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
            duration: 0.5,
          }}
          className="
            mx-auto mt-4 max-w-[420px]
            text-[15px] leading-7 text-[#6B7280]
          "
        >
          The page you are looking for might have
          been removed, renamed, or is temporarily
          unavailable.
        </motion.p>

        {/* Login Button */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
          className="mt-10 flex justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to={ROUTES.LOGIN}
              className="
                flex items-center gap-2 rounded-2xl
                bg-gradient-to-r from-[#8B7CFF] to-[#B8A9FF]
                px-6 py-3 text-sm font-semibold
                text-white no-underline
                shadow-lg transition-all duration-300
                hover:shadow-xl
              "
            >
              <LogIn size={16} />
              Go to Login
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Text */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 0.6,
          }}
          className="
            mt-10 flex items-center justify-center
            gap-2 text-[13px] text-[#9CA3AF]
          "
        >
          <ArrowLeft size={14} />

          <span>
            Please check the URL and try again
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;