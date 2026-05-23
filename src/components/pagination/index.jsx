// /**
//  * Pagination.jsx
//  * ------------------------------------------------------
//  * Modern Reusable Pagination Component
//  * Tailwind CSS + Lucide React
//  */

// import {
//   ChevronLeft,
//   ChevronRight,
//   MoreHorizontal,
// } from "lucide-react";

// const Pagination = ({
//   page = 1,
//   totalPages = 1,
//   onPageChange = () => {},
// }) => {
//   // ======================================================
//   // PREV
//   // ======================================================

//   const handlePrev = () => {
//     if (page > 1) {
//       onPageChange(page - 1);
//     }
//   };

//   // ======================================================
//   // NEXT
//   // ======================================================

//   const handleNext = () => {
//     if (page < totalPages) {
//       onPageChange(page + 1);
//     }
//   };

//   // ======================================================
//   // PAGE GENERATOR
//   // ======================================================

//   const generatePages = () => {
//     const pages = [];

//     // SMALL PAGES

//     if (totalPages <= 5) {
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(i);
//       }

//       return pages;
//     }

//     // LARGE PAGES

//     if (page <= 3) {
//       return [1, 2, 3, 4, "...", totalPages];
//     }

//     if (page >= totalPages - 2) {
//       return [
//         1,
//         "...",
//         totalPages - 3,
//         totalPages - 2,
//         totalPages - 1,
//         totalPages,
//       ];
//     }

//     return [
//       1,
//       "...",
//       page - 1,
//       page,
//       page + 1,
//       "...",
//       totalPages,
//     ];
//   };

//   const pages = generatePages();

//   // ======================================================
//   // UI
//   // ======================================================

//   return (
//     <div
//       className="
//         flex flex-wrap items-center
//         justify-center gap-2
//       "
//     >
//       {/* PREV BUTTON */}

//       <button
//         onClick={handlePrev}
//         disabled={page === 1}
//         className="
//           flex h-10 w-10 items-center
//           justify-center rounded-full
//           border border-[#ECECF2]
//           bg-white text-[#6B7280]
//           shadow-sm transition-all duration-200
//           hover:bg-[#F7F7FA]
//           hover:text-[#111827]
//           disabled:cursor-not-allowed
//           disabled:opacity-40
//         "
//       >
//         <ChevronLeft size={16} />
//       </button>

//       {/* PAGE BUTTONS */}

//       {pages.map((p, index) => {
//         // DOTS

//         if (p === "...") {
//           return (
//             <div
//               key={index}
//               className="
//                 flex h-10 w-10 items-center
//                 justify-center
//                 text-[#9CA3AF]
//               "
//             >
//               <MoreHorizontal size={16} />
//             </div>
//           );
//         }

//         // PAGE

//         return (
//           <button
//             key={p}
//             onClick={() => onPageChange(p)}
//             className={`
//               h-10 w-10 rounded-full
//               text-[13px] font-semibold
//               transition-all duration-200
//               ${
//                 page === p
//                   ? `
//                     bg-gradient-to-r
//                     from-[#8B7CFF]
//                     to-[#B8A9FF]
//                     text-white
//                     shadow-[0_6px_18px_rgba(139,124,255,0.35)]
//                   `
//                   : `
//                     border border-[#ECECF2]
//                     bg-white text-[#6B7280]
//                     hover:bg-[#F7F7FA]
//                     hover:text-[#111827]
//                   `
//               }
//             `}
//           >
//             {p}
//           </button>
//         );
//       })}

//       {/* NEXT BUTTON */}

//       <button
//         onClick={handleNext}
//         disabled={page === totalPages}
//         className="
//           flex h-10 w-10 items-center
//           justify-center rounded-full
//           border border-[#ECECF2]
//           bg-white text-[#6B7280]
//           shadow-sm transition-all duration-200
//           hover:bg-[#F7F7FA]
//           hover:text-[#111827]
//           disabled:cursor-not-allowed
//           disabled:opacity-40
//         "
//       >
//         <ChevronRight size={16} />
//       </button>
//     </div>
//   );
// };


// export default Pagination;



/**
 * Pagination.jsx
 * Fixed & enhanced reusable pagination component
 * Tailwind CSS + Lucide React
 */

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const Pagination = ({
  page = 1,
  totalPages = 1,
  onPageChange = () => {},
  showInfo = false,
  totalItems = 0,
  itemsPerPage = 10,
}) => {
  const handlePrev = () => page > 1 && onPageChange(page - 1);
  const handleNext = () => page < totalPages && onPageChange(page + 1);

  const generatePages = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (page <= 3) return [1, 2, 3, 4, "...", totalPages];
    if (page >= totalPages - 2)
      return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", page - 1, page, page + 1, "...", totalPages];
  };

  const pages = generatePages();

  const startItem = Math.min((page - 1) * itemsPerPage + 1, totalItems);
  const endItem = Math.min(page * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
      {/* Optional info */}
      {showInfo && totalItems > 0 && (
        <p className="text-[12px] text-[#9AA0B4]">
          Showing{" "}
          <span className="font-bold text-[#111827]">{startItem}–{endItem}</span>{" "}
          of{" "}
          <span className="font-bold text-[#111827]">{totalItems}</span>
        </p>
      )}

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {/* PREV */}
        <button
          onClick={handlePrev}
          disabled={page === 1}
          aria-label="Previous page"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ECECF2] bg-white text-[#6B7280] shadow-sm transition-all duration-200 hover:bg-[#F7F7FA] hover:text-[#111827] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={15} />
        </button>

        {/* PAGES */}
        {pages.map((p, index) =>
          p === "..." ? (
            <div
              key={`dots-${index}`}
              className="flex h-9 w-9 items-center justify-center text-[#9CA3AF]"
            >
              <MoreHorizontal size={15} />
            </div>
          ) : (
            <button
              key={`page-${p}`}
              onClick={() => onPageChange(p)}
              aria-label={`Page ${p}`}
              aria-current={page === p ? "page" : undefined}
              className={`h-9 w-9 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                page === p
                  ? "bg-gradient-to-r from-[#8B7CFF] to-[#B8A9FF] text-white shadow-[0_4px_14px_rgba(139,124,255,0.4)]"
                  : "border border-[#ECECF2] bg-white text-[#6B7280] hover:bg-[#F7F7FA] hover:text-[#111827]"
              }`}
            >
              {p}
            </button>
          )
        )}

        {/* NEXT */}
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          aria-label="Next page"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ECECF2] bg-white text-[#6B7280] shadow-sm transition-all duration-200 hover:bg-[#F7F7FA] hover:text-[#111827] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;