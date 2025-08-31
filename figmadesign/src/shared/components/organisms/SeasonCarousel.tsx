import jacket1 from '@/assets/products/jacket-1.jpg';
import jacket2 from '@/assets/products/jacket-2.jpg';
import jacket3 from '@/assets/products/jacket-3.jpg';

const products = [
  { id: 1, name: 'Winter Jacket 1', image: jacket1 },
  { id: 2, name: 'Winter Jacket 2', image: jacket2 },
  { id: 3, name: 'Winter Jacket 3', image: jacket3 },
];

export default function SeasonCarousel() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Season Highlights</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300">
          {products.map((p) => (
            <div
              key={p.id}
              className="min-w-[250px] bg-white shadow rounded-lg overflow-hidden"
            >
              <img src={p.image} alt={p.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-gray-500 text-sm">New Arrival</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
