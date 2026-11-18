import { Link } from 'react-router-dom';

export function MyPublicationsGrid() {
  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">Mis publicaciones (2)</h2>
        <Link to="/publicar" className="btn btn-yellow btn-sm">
          + Nueva publicación
        </Link>
      </div>

      <div className="grid">
        <article className="card">
          <div>
            <div className="card-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80"
                alt="Chaqueta denim Levi's talla M"
                className="card-img"
              />
              <span className="card-status">disponible</span>
            </div>

            <div className="card-body">
              <div className="card-meta">
                <span className="badge badge--dark">ropa</span>
                <span className="badge">excelente</span>
              </div>
              <h3 className="card-title">CHAQUETA DENIM LEVI’S TALLA M</h3>
              <p className="card-desc">
                Usada dos veces, sin detalles ni manchas. Tela gruesa original en excelente calidad.
              </p>
              <div className="card-price">$120.000</div>
            </div>
          </div>

          <div className="card-footer">
            <Link to="/editar" className="btn btn-white btn-sm">
              Editar
            </Link>
            <button type="button" className="btn btn-danger btn-sm">
              Eliminar
            </button>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80"
                alt="Teclado mecánico Keychron K2"
                className="card-img"
              />
              <span className="card-status">vendido</span>
            </div>

            <div className="card-body">
              <div className="card-meta">
                <span className="badge badge--dark">tecnologia</span>
                <span className="badge">como_nuevo</span>
              </div>
              <h3 className="card-title">TECLADO MECÁNICO KEYCHRON K2</h3>
              <p className="card-desc">
                Switches brown, retroiluminado, conexión Bluetooth y USB-C. Impecable.
              </p>
              <div className="card-price">$290.000</div>
            </div>
          </div>

          <div className="card-footer">
            <Link to="/editar" className="btn btn-white btn-sm">
              Editar
            </Link>
            <button type="button" className="btn btn-danger btn-sm">
              Eliminar
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
