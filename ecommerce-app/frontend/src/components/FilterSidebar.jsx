export default function FilterSidebar({ filterOptions, filters, updateFilter }) {
  return (
    <aside className="sidebar">
      <h3>Category</h3>
      {filterOptions.categories.map((cat) => (
        <label key={cat} className="filter-option">
          <input type="radio" name="category" checked={filters.category === cat} onChange={() => updateFilter('category', cat)} />
          {cat}
        </label>
      ))}

      <h3>Brand</h3>
      {filterOptions.brands.map((brand) => (
        <label key={brand} className="filter-option">
          <input type="radio" name="brand" checked={filters.brand === brand} onChange={() => updateFilter('brand', brand)} />
          {brand}
        </label>
      ))}

      <h3>Price Range</h3>
      <div className="price-inputs">
        <input type="number" placeholder="Min" value={filters.minPrice} onChange={(e) => updateFilter('minPrice', e.target.value)} />
        <input type="number" placeholder="Max" value={filters.maxPrice} onChange={(e) => updateFilter('maxPrice', e.target.value)} />
      </div>

      <h3>Rating</h3>
      {[4, 3, 2, 1].map((r) => (
        <label key={r} className="filter-option">
          <input type="radio" name="rating" checked={filters.rating === String(r)} onChange={() => updateFilter('rating', String(r))} />
          {r}★ & up
        </label>
      ))}

      <button className="clear-btn" onClick={() => window.location.reload()}>Clear Filters</button>
    </aside>
  );
}