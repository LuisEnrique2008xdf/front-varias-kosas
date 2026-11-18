import { Link } from 'react-router-dom';

export function PublicationDetailPage() {
  return (
    <main className="container">
      <div className="section-header">
        <Link to="/" className="btn btn-white btn-sm">
          ← Volver al catálogo
        </Link>
      </div>

      <article className="detail-box">
        <div className="detail-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80"
            alt="Chaqueta denim Levi's talla M"
            className="detail-img"
          />
        </div>

        <div className="detail-info">
          <div className="card-meta">
            <span className="badge badge--dark">ropa</span>
            <span className="badge">excelente</span>
            <span className="badge">disponible</span>
          </div>

          <h1 className="card-title">CHAQUETA DENIM LEVI’S TALLA M</h1>
          <div className="card-price">$120.000</div>
          <p className="card-desc">
            Usada dos veces, sin detalles ni manchas. Tela gruesa original en excelente calidad.
          </p>

          <div className="seller-box">
            <strong>VENDEDOR:</strong> Jaime Zapata
            <br />
            <strong>CIUDAD:</strong> Medellín
          </div>

          <button type="button" className="btn btn-yellow">
            Contactar vendedor
          </button>
        </div>
      </article>
    </main>
  );
}
