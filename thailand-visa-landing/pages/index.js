import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Thailand Visa — Fast, Clear, Trusted</title>
        <meta name="description" content="Simple, modern assistance for Thailand visas — tourist, retirement, work, digital nomad, education. Clear steps and fast support."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <main className="container">
        <header className="nav">
          <div className="logo">THA•Visa</div>
          <nav>
            <a href="#types">Visa types</a>
            <a href="#how">How it works</a>
            <a href="#contact" className="cta">Get started</a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-left">
            <h1>Visa to Thailand — made simple</h1>
            <p className="lead">Clear steps, modern guidance, and trusted resources for tourist, work, retirement, education and digital nomad visas.</p>
            <div className="actions">
              <a className="btn primary" href="#contact">Start application</a>
              <a className="btn ghost" href="#types">See visa types</a>
            </div>
          </div>
          <div className="hero-right">
            <img alt="Bangkok skyline" src="https://images.unsplash.com/photo-1508261305667-3a0e9f5c9f7f?w=1200&q=80&auto=format&fit=crop" />
          </div>
        </section>

        <section id="types" className="grid">
          <h2>Common visa categories</h2>
          <div className="cards">
            <article><h3>Tourist Visa (TR)</h3><p>Short-term stay for tourism: single or multiple entry options.</p></article>
            <article><h3>Visa Exemption</h3><p>Many nationalities can enter visa-free for short stays; check eligibility.</p></article>
            <article><h3>Non-Immigrant B (Work)</h3><p>For salaried work or business in Thailand — requires employer sponsorship.</p></article>
            <article><h3>Non-Immigrant O (Retirement/Family)</h3><p>Retirees and family joiners — proof of funds/relationship required.</p></article>
            <article><h3>Education (ED)</h3><p>For students enrolled in Thai institutions — letter of acceptance required.</p></article>
            <article><h3>Smart Visa / Digital Nomad</h3><p>Options for highly skilled workers, investors and remote professionals.</p></article>
          </div>
        </section>
      </main>
    </>
  )
}
