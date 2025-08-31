import heroImg from '@/assets/hero.jpg';
import BasicButton from '../atoms/BasicButton';

export default function BannerHero() {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover the New Season Collection
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Premium jackets crafted for comfort and style.
        </p>
        <BasicButton variant="primary" size="lg">
          Shop Now
        </BasicButton>
      </div>
    </section>
  );
}
