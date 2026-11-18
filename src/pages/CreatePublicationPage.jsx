export function CreatePublicationPage() {
  return (
    <main className="container">
      <section className="form-panel">
        <h1>Publicar artículo</h1>
        <p className="form-subtitle">
          POST /api/publications // Vende lo que ya no usas en excelente calidad.
        </p>

        <form>
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              id="title"
              type="text"
              className="input"
              placeholder="Ej: Chaqueta de jean Levi’s talla M"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              className="textarea"
              placeholder="Describe el estado, detalles y qué incluye..."
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price">Precio (COP)</label>
              <input id="price" type="number" className="input" placeholder="120000" />
            </div>

            <div className="form-group">
              <label htmlFor="category">Categoría</label>
              <select id="category" className="select" defaultValue="ropa">
                <option value="ropa">ROPA</option>
                <option value="tecnologia">TECNOLOGÍA</option>
                <option value="hogar">HOGAR</option>
                <option value="deportes">DEPORTES</option>
                <option value="libros">LIBROS</option>
                <option value="accesorios">ACCESORIOS</option>
                <option value="otros">OTROS</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="condition">Estado físico</label>
              <select id="condition" className="select" defaultValue="excelente">
                <option value="nuevo">NUEVO</option>
                <option value="como_nuevo">COMO NUEVO</option>
                <option value="excelente">EXCELENTE</option>
                <option value="bueno">BUENO</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="imageUrl">URL de imagen</label>
              <input
                id="imageUrl"
                type="url"
                className="input"
                placeholder="https://..."
              />
            </div>
          </div>

          <button type="submit" className="btn btn-yellow">
            Publicar ahora
          </button>
        </form>
      </section>
    </main>
  );
}
