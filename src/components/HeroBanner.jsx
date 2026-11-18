import { Link } from 'react-router-dom';

export function HeroBanner() {
  return (
    <section className="hero">
      <span className="hero-tag">SEGUNDA MANO // EXCELENTE CALIDAD</span>
      <h1>LO QUE YA NO USAS, ALGUIEN LO ESTÁ BUSCANDO.</h1>
      <p>
        Ropa, tecnología, hogar y lo que sea. Publica en segundos, vende directo y
        encuentra cosas verificadas en excelente estado.
      </p>
      <div className="hero-actions">
        <Link to="/publicar" className="btn btn-yellow">
          Publicar artículo
        </Link>
        <Link to="/mis-publicaciones" className="btn btn-black">
          Ver mis publicaciones
        </Link>
      </div>
    </section>
  );
}
