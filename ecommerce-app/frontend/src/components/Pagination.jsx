export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button key={p} className={p === currentPage ? 'active' : ''} onClick={() => onPageChange(p)}>
          {p}
        </button>
      ))}
    </div>
  );
}