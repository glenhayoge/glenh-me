import Link from 'next/link'; // Import Link from 'next/link' for client-side navigation
export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const prevPage = currentPage > 1;
  const nextPage = currentPage < totalPages;
  return (
    <div className="pt-8 pb-8 space-y-2 md:space-y-5">
      <nav className="flex justify-between">
        <button onClick={() => onPageChange(currentPage - 1)} className="cursor-auto disabled:opacity-50 flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" disabled={!prevPage}>
        <svg className="w-3.5 h-3.5 mr-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
    </svg>
          Previous
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button onClick={() => onPageChange(currentPage + 1)} className="cursor-auto disabled:opacity-50 flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" disabled={!nextPage}>
          Next
          <svg className="w-3.5 h-3.5 ml-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
        </button>
      </nav>
    </div>
  );
}

