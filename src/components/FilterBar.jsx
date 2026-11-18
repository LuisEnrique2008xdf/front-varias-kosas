export function FilterBar() {
  return (
    <section className="filter-bar">
      <div className="filter-pills">
        <span className="pill pill--active">Todas</span>
        <span className="pill">Ropa</span>
        <span className="pill">Tecnología</span>
        <span className="pill">Hogar</span>
        <span className="pill">Deportes</span>
        <span className="pill">Libros</span>
        <span className="pill">Accesorios</span>
        <span className="pill">Otros</span>
      </div>

      <form className="search-box">
        <input
          type="text"
          className="input"
          placeholder="Buscar chaqueta, sony, lámpara..."
        />
        <button type="submit" className="btn btn-yellow btn-sm">
          Buscar
        </button>
      </form>
    </section>
  );
}
