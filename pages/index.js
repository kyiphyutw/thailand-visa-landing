export default function Home() {
  return (
    <main style={{
      fontFamily: 'Inter, system-ui, sans-serif',
      background: 'linear-gradient(135deg, #0078ff, #00c6ff)',
      color: 'white',
      minHeight: '100vh',
      margin: 0,
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Thailand Visa Made Simple 🇹🇭
      </h1>
      <p style={{ maxWidth: 600, marginBottom: '2rem', fontSize: '1.1rem' }}>
        Apply for tourist, education, or business visas easily. Fast processing,
        expert help, and real-time updates.
      </p>
      <a href="https://www.issacompass.com/visas" target="_blank" rel="noreferrer"
         style={{
           background: '#fff',
           color: '#0078ff',
           padding: '0.8rem 1.4rem',
           borderRadius: '8px',
           textDecoration: 'none',
           fontWeight: 'bold'
         }}>
        Explore Visa Options
      </a>
    </main>
  );
}
