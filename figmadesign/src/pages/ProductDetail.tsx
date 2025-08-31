import { useParams } from 'react-router-dom';
import { products } from '@/shared/constants/products';
import ProductColorDots from '@/shared/components/molecules/ProductColorDots';
import BasicButton from '@/shared/components/atoms/BasicButton';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[500px] object-cover rounded-xl shadow"
      />
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg text-gray-700 mb-4">${product.price}</p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <ProductColorDots colors={product.colors} />
        <BasicButton variant="primary" size="lg" className="mt-6">
          Add to Cart
        </BasicButton>
      </div>
    </main>
  );
}
