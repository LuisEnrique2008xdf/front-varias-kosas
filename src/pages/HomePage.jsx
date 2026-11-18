import { HeroBanner } from '../components/HeroBanner.jsx';
import { FilterBar } from '../components/FilterBar.jsx';
import { PublicationGrid } from '../components/PublicationGrid.jsx';

export function HomePage() {
  return (
    <main className="container">
      <HeroBanner />
      <FilterBar />
      <PublicationGrid />
    </main>
  );
}
