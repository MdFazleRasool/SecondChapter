import { products } from '@/shared/constants/products';
import ProductColorDots from '../molecules/ProductColorDots';
import { Link } from 'react-router-dom';

export default function ProductGrid() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              className="bg-white shadow rounded-lg overflow-hidden hover:scale-105 transition"
            >
              <img src={p.image} alt={p.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-2">${p.price}</p>
                <ProductColorDots colors={p.colors} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
