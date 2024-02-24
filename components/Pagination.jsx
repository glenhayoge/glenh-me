import Link from 'next/link'; // Import Link from 'next/link' for client-side navigation

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const prevPage = currentPage > 1;
  const nextPage = currentPage < totalPages;

  return (
    <div className="pt-6 pb-8 space-y-2 md:space-y-5">
      <nav className="flex justify-between">
        <button onClick={() => onPageChange(currentPage - 1)} className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
          Previous
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button onClick={() => onPageChange(currentPage + 1)} className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
          Next
        </button>
      </nav>
    </div>
  );
}

