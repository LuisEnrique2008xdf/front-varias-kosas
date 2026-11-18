import { Link } from 'react-router-dom';

export function PublicationGrid() {
  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">Catálogo general (4)</h2>
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
            <span>Jaime Zapata // Medellín</span>
            <Link to="/publicacion" className="btn btn-yellow btn-sm">
              Ver
            </Link>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80"
                alt="Audífonos Sony WH-1000XM4"
                className="card-img"
              />
              <span className="card-status">disponible</span>
            </div>

            <div className="card-body">
              <div className="card-meta">
                <span className="badge badge--dark">tecnologia</span>
                <span className="badge">como_nuevo</span>
              </div>
              <h3 className="card-title">AUDÍFONOS SONY WH-1000XM4</h3>
              <p className="card-desc">
                En caja original con cable y estuche rígido. Cancelación de ruido y batería al 100%.
              </p>
              <div className="card-price">$650.000</div>
            </div>
          </div>

          <div className="card-footer">
            <span>Laura Gómez // Bogotá</span>
            <Link to="/publicacion" className="btn btn-yellow btn-sm">
              Ver
            </Link>
          </div>
        </article>

        <article className="card">
          <div>
            <div className="card-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80"
                alt="Lámpara de escritorio industrial"
                className="card-img"
              />
              <span className="card-status">disponible</span>
            </div>

            <div className="card-body">
              <div className="card-meta">
                <span className="badge badge--dark">hogar</span>
                <span className="badge">excelente</span>
              </div>
              <h3 className="card-title">LÁMPARA DE ESCRITORIO INDUSTRIAL</h3>
              <p className="card-desc">
                Estructura metálica negra mate, incluye bombillo cálido LED. Cero rayones.
              </p>
              <div className="card-price">$85.000</div>
            </div>
          </div>

          <div className="card-footer">
            <span>Carlos Ruiz // Cali</span>
            <Link to="/publicacion" className="btn btn-yellow btn-sm">
              Ver
            </Link>
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
            <span>Jaime Zapata // Medellín</span>
            <Link to="/publicacion" className="btn btn-yellow btn-sm">
              Ver
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
