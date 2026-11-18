import { MyPublicationsGrid } from '../components/MyPublicationsGrid.jsx';

export function MyPublicationsPage() {
  return (
    <main className="container">
      <section className="hero">
        <span className="hero-tag">MI CUENTA // MEDELLÍN</span>
        <h1>JAIME ZAPATA</h1>
        <p>jaime@variaskosas.co // TEL: 3001234567</p>
      </section>

      <MyPublicationsGrid />
    </main>
  );
}
