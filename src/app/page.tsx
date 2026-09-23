export default function Home() {
  return (
    <main style={{ minHeight: '100vh', padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.2rem', color: '#fff' }}>
            W
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.5px' }}>Witz</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span className="badge badge-success">● Ready for Railway</span>
          <a
            href="https://github.com/tiagoeks/Witz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub Repo
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', margin: '4rem 0 6rem 0' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <span className="badge">🚀 Project Initialized</span>
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '1.5rem' }}>
          Bem-vindo ao projeto <span className="gradient-text">Witz</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto 2.5rem auto', lineHeight: '1.6' }}>
          Sua aplicação Next.js / React está configurada e integrada com o GitHub.
          Pronta para deploy automático e contínuo no Railway!
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#features" className="btn-primary">
            Explorar Recursos
          </a>
          <a
            href="https://railway.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Acessar Railway
          </a>
        </div>
      </section>

      {/* Grid Status & Features */}
      <section id="features" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🐙</div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>GitHub Sync</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Repositório conectado a <code>github.com/tiagoeks/Witz</code>. Toda alteração na branch main acionará builds no Railway.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚂</div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>Railway Integration</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Configuração simples e suporte nativo a Next.js / Node.js. O Railway gerenciará HTTPS, variáveis de ambiente e escalabilidade.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>Next.js App Router</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Arquitetura moderna com TypeScript, Server Components, rotas de API otimizadas e renderização ultra rápida.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: '8rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Witz. Desenvolvido por Tiago Ekstein.
      </footer>
    </main>
  );
}
