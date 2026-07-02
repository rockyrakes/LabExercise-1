import { useEffect, useState } from 'react';
import { fetchProducts, fetchFilterOptions } from '../api/products';
import FilterSidebar from '../components/FilterSidebar';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';

export default function Shop() {
  const [filters, setFilters] = useState({
    category: '', brand: '', minPrice: '', maxPrice: '',
    rating: '', sort: '', search: '', page: 1, limit: 12,
  });
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [filterOptions, setFilterOptions] = useState({ categories: [], brands: [], priceRange: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFilterOptions().then(setFilterOptions);
  }, []);

  useEffect(() => {
    setLoading(true);
    const cleanFilters = Object.fromEntries(Object.entries(filters).filter(([_, v]) => v !== ''));
    fetchProducts(cleanFilters).then((data) => {
      setProducts(data.products);
      setTotalPages(data.totalPages);
      setLoading(false);
    });
  }, [filters]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value, page: 1 }));
  };

  return (
    <div className="shop-container">
      <FilterSidebar filterOptions={filterOptions} filters={filters} updateFilter={updateFilter} />
      <div className="main-content">
        <div className="results-bar">
          <span>{products.length} products</span>
          <select value={filters.sort} onChange={(e) => updateFilter('sort', e.target.value)}>
            <option value="">Sort: Newest</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
        {loading ? <p className="loading">Loading products...</p> : <ProductList products={products} />}
        <Pagination
          currentPage={filters.page}
          totalPages={totalPages}
          onPageChange={(page) => setFilters((prev) => ({ ...prev, page }))}
        />
      </div>
    </div>
  );
}