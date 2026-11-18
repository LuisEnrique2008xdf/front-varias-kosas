import { Link } from 'react-router-dom';

export function RegisterPage() {
  return (
    <main className="container">
      <section className="form-panel">
        <h1>Registro de usuario</h1>
        <p className="form-subtitle">
          POST /api/auth/register // Crea tu perfil de comprador y vendedor.
        </p>

        <form>
          <div className="form-group">
            <label htmlFor="reg-name">Nombre completo</label>
            <input
              id="reg-name"
              type="text"
              className="input"
              placeholder="Jaime Zapata"
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-email">Correo electrónico</label>
            <input
              id="reg-email"
              type="email"
              className="input"
              placeholder="jaime@variaskosas.co"
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-password">Contraseña</label>
            <input
              id="reg-password"
              type="password"
              className="input"
              placeholder="Mínimo 6 caracteres"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="reg-phone">Teléfono (opcional)</label>
              <input
                id="reg-phone"
                type="text"
                className="input"
                placeholder="3001234567"
              />
            </div>

            <div className="form-group">
              <label htmlFor="reg-city">Ciudad (opcional)</label>
              <input
                id="reg-city"
                type="text"
                className="input"
                placeholder="Medellín"
              />
            </div>
          </div>

          <div className="hero-actions">
            <button type="submit" className="btn btn-yellow">
              Registrarse
            </button>
            <Link to="/login" className="btn btn-white">
              Ya tengo cuenta
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
