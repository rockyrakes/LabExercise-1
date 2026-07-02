export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h4>{product.name}</h4>
        <div className="product-brand">{product.brand}</div>
        <div className="product-price-row">
          <span className="product-price">${product.price}</span>
          <span className="product-rating">⭐ {product.rating}</span>
        </div>
      </div>
    </div>
  );
}