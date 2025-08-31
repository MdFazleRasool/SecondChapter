import ProductGrid from '@/shared/components/organisms/ProductGrid';

export default function Collection() {
  return (
    <main className="pt-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">All Jackets</h1>
      </div>
      <ProductGrid />
    </main>
  );
}
