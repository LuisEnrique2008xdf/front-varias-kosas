import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <header>
      <div className="ticker">
        VARIAS-KOSAS // SEGUNDA MANO EN EXCELENTE CALIDAD // ROPA // TECNOLOGÍA // HOGAR // COMPRA Y VENDE SIN RODEOS
      </div>
      <nav className="navbar">
        <Link to="/" className="brand">
          VARIAS-KOSAS
        </Link>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger-btn">
          ☰ MENÚ
        </label>

        <div className="nav-links">
          <Link to="/" className="nav-link">
            Explorar
          </Link>
          <Link to="/mis-publicaciones" className="nav-link">
            Mis publicaciones
          </Link>
          <Link to="/publicar" className="nav-link nav-link--black">
            + Publicar
          </Link>
          <Link to="/login" className="nav-link">
            Ingresar
          </Link>
          <Link to="/register" className="nav-link">
            Registrarse
          </Link>

          <Link to="/mis-publicaciones" className="user-chip">
            <span className="user-avatar">JZ</span>
            <span className="user-name">Jaime Zapata</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
