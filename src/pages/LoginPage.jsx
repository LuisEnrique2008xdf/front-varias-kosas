import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <main className="container">
      <section className="form-panel">
        <h1>Iniciar sesión</h1>
        <p className="form-subtitle">
          POST /api/auth/login // Accede para publicar, editar y eliminar tus kosas.
        </p>

        <form>
          <div className="form-group">
            <label htmlFor="login-email">Correo electrónico</label>
            <input
              id="login-email"
              type="email"
              className="input"
              placeholder="jaime@variaskosas.co"
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Contraseña</label>
            <input
              id="login-password"
              type="password"
              className="input"
              placeholder="••••••••"
            />
          </div>

          <div className="hero-actions">
            <button type="submit" className="btn btn-yellow">
              Entrar
            </button>
            <Link to="/register" className="btn btn-white">
              Crear cuenta
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
