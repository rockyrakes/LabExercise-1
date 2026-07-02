import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  if (!products.length) return <p className="no-products">No products found. Try adjusting your filters.</p>;
  return (
    <div className="product-grid">
      {products.map((p) => <ProductCard key={p._id} product={p} />)}
    </div>
  );
}