import BannerHero from '@/shared/components/organisms/BannerHero';
import SeasonCarousel from '@/shared/components/organisms/SeasonCarousel';
import ProductGrid from '@/shared/components/organisms/ProductGrid';

export default function Home() {
  return (
    <main>
      <BannerHero />
      <SeasonCarousel />
      <ProductGrid />
    </main>
  );
}
