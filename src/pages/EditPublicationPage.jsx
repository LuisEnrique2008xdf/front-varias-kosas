export function EditPublicationPage() {
  return (
    <main className="container">
      <section className="form-panel">
        <h1>Editar publicación</h1>
        <p className="form-subtitle">
          PATCH /api/publications/1 // Solo puedes modificar tus publicaciones.
        </p>

        <form>
          <div className="form-group">
            <label htmlFor="edit-title">Título</label>
            <input
              id="edit-title"
              type="text"
              className="input"
              defaultValue="CHAQUETA DENIM LEVI’S TALLA M"
            />
          </div>

          <div className="form-group">
            <label htmlFor="edit-description">Descripción</label>
            <textarea
              id="edit-description"
              className="textarea"
              defaultValue="Usada dos veces, sin detalles ni manchas. Tela gruesa original en excelente calidad."
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="edit-price">Precio (COP)</label>
              <input
                id="edit-price"
                type="number"
                className="input"
                defaultValue="120000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="edit-status">Estado de venta</label>
              <select id="edit-status" className="select" defaultValue="disponible">
                <option value="disponible">DISPONIBLE</option>
                <option value="vendido">VENDIDO</option>
                <option value="pausado">PAUSADO</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="edit-category">Categoría</label>
              <select id="edit-category" className="select" defaultValue="ropa">
                <option value="ropa">ROPA</option>
                <option value="tecnologia">TECNOLOGÍA</option>
                <option value="hogar">HOGAR</option>
                <option value="deportes">DEPORTES</option>
                <option value="libros">LIBROS</option>
                <option value="accesorios">ACCESORIOS</option>
                <option value="otros">OTROS</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="edit-condition">Estado físico</label>
              <select id="edit-condition" className="select" defaultValue="excelente">
                <option value="nuevo">NUEVO</option>
                <option value="como_nuevo">COMO NUEVO</option>
                <option value="excelente">EXCELENTE</option>
                <option value="bueno">BUENO</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="edit-imageUrl">URL de imagen</label>
            <input
              id="edit-imageUrl"
              type="url"
              className="input"
              defaultValue="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80"
            />
          </div>

          <button type="submit" className="btn btn-yellow">
            Guardar cambios
          </button>
        </form>
      </section>
    </main>
  );
}
