export default function Home() {
  return (
    <main style={{
      fontFamily: "Inter, sans-serif",
      backgroundColor: "#f8f9fa",
      color: "#1c1c1c",
      padding: "0",
      margin: "0"
    }}>
      {/* Hero Section */}
      <section style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "90vh",
        background: "linear-gradient(135deg, #0078ff, #00c6ff)",
        color: "#fff",
        padding: "2rem"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Thailand Visa Made Simple</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
          Apply for tourist, education, or business visas with ease. Fast processing, expert help, and updates in real-time.
        </p>
        <a 
          href="https://www.issacompass.com/visas"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#fff",
            color: "#0078ff",
            padding: "0.8rem 1.5rem",
            borderRadius: "30px",
            marginTop: "1.5rem",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Check Visa Options →
        </a>
      </section>

      {/* Info Section */}
      <section style={{
        padding: "4rem 2rem",
        textAlign: "center",
        backgroundColor: "#fff"
      }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Why Choose Us?</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto", color: "#555" }}>
          We’re an AI-powered travel service helping people around the world apply for visas to Thailand quickly and safely.
          Whether you're coming for tourism, study, or business — we guide you every step of the way.
        </p>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "2rem",
          gap: "1.5rem"
        }}>
          {[
            { title: "Tourist Visa", desc: "Short stays for travel and holidays." },
            { title: "Education Visa", desc: "Study or take courses in Thailand." },
            { title: "Business Visa", desc: "Attend meetings or work remotely." }
          ].map((item, index) => (
            <div key={index} style={{
              backgroundColor: "#f1f3f5",
              borderRadius: "12px",
              width: "280px",
              padding: "1.5rem",
              textAlign: "left",
              boxShadow: "0 3px 6px rgba(0,0,0,0.1)"
            }}>
              <h3>{item.title}</h3>
              <p style={{ color: "#666" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        backgroundColor: "#0078ff",
        color: "#fff",
        textAlign: "center",
        padding: "3rem 2rem"
      }}>
        <h2>Ready to Start Your Visa Journey?</h2>
        <p>Let’s make your Thailand experience unforgettable.</p>
        <a 
          href="mailto:info@thailandvisaservice.com"
          style={{
            display: "inline-block",
            backgroundColor: "#fff",
            color: "#0078ff",
            padding: "0.8rem 1.5rem",
            borderRadius: "25px",
            marginTop: "1rem",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Contact Us →
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "1.5rem",
        backgroundColor: "#f1f3f5",
        color: "#555"
      }}>
        © {new Date().getFullYear()} Thailand Visa Services — Built with ❤️ using Next.js & Vercel
      </footer>
    </main>
  );
}
