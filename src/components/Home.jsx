import { useState } from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "./TypewriterEffect";
import { BlueprintCard } from "./BlueprintCard";
import { ProcessTimeline } from "./ProcessTimeline";

export const Home = ({ t, lang }) => {
  const [formStatus, setFormStatus] = useState(null); // null | 'submitting' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <div style={{ position: "relative" }}>

      {/* HERO */}
      <section style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "80px 20px 40px"
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            minHeight: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px"
          }}>
            <h1 style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: "700",
              marginBottom: "1rem",
              lineHeight: "1.2",
              textAlign: "center"
            }}>
              <span className="accent-text-gradient" style={{ padding: "0 0.1em" }}><TypewriterEffect text={t.hero.headline} /></span>
            </h1>
          </div>

          <p style={{
            fontSize: "1.2rem",
            color: "var(--text-secondary)",
            maxWidth: "700px",
            margin: "0 auto 2rem",
            lineHeight: "1.6"
          }}>
            {t.hero.subheadline}
          </p>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <a href="#contact" style={{ textDecoration: "none" }}>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 6px 20px 0 rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "16px 36px",
                  fontSize: "1rem",
                  background: "var(--accent-primary)",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  borderRadius: "6px",
                  fontWeight: "600",
                  boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)",
                  transition: "box-shadow 0.3s"
                }}
              >
                {t.hero.cta}
              </motion.button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 20px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <span style={{ color: "var(--accent-primary)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.9rem" }}>Expertise</span>
            <h2 style={{ fontSize: "2.5rem", marginTop: "10px" }}>{t.services.title}</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: "24px"
          }}>
            {t.services.items.map((item, i) => (
              <BlueprintCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "100px 20px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <span style={{ color: "var(--accent-primary)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.9rem" }}>Methodology</span>
            <h2 style={{ fontSize: "2.5rem", marginTop: "10px" }}>{t.process.title}</h2>
          </div>
          <ProcessTimeline steps={t.process.steps} lang={lang} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "120px 20px" }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>{t.contact.title}</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>{t.contact.description}</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="form-input-row">
              <input
                name="name"
                placeholder={t.contact.form.name}
                required
                disabled={formStatus === 'submitting'}
                style={{
                  flex: 1,
                  background: "var(--bg-secondary)",
                  border: "1px solid rgba(125,125,125,0.1)",
                  padding: "18px",
                  color: "var(--text-primary)",
                  borderRadius: "6px",
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  minHeight: "44px"
                }}
              />
              <input
                name="email"
                type="email"
                placeholder={t.contact.form.email}
                required
                disabled={formStatus === 'submitting'}
                style={{
                  flex: 1,
                  background: "var(--bg-secondary)",
                  border: "1px solid rgba(125,125,125,0.1)",
                  padding: "18px",
                  color: "var(--text-primary)",
                  borderRadius: "6px",
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  minHeight: "44px"
                }}
              />
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder={t.contact.form.message}
              required
              disabled={formStatus === 'submitting'}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid rgba(125,125,125,0.1)",
                padding: "16px",
                color: "var(--text-primary)",
                borderRadius: "6px",
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                resize: "vertical"
              }}
            />

            <motion.button
              whileHover={formStatus !== 'submitting' ? { scale: 1.01 } : {}}
              whileTap={formStatus !== 'submitting' ? { scale: 0.99 } : {}}
              disabled={formStatus === 'submitting'}
              style={{
                background: formStatus === 'submitting' ? "var(--text-secondary)" : "var(--text-primary)",
                color: "var(--bg-primary)",
                border: "none",
                padding: "18px",
                cursor: formStatus === 'submitting' ? "not-allowed" : "pointer",
                fontWeight: "600",
                borderRadius: "6px",
                marginTop: "10px",
                fontSize: "1rem",
                opacity: formStatus === 'submitting' ? 0.7 : 1
              }}
            >
              {formStatus === 'submitting' ? 'Sending...' : t.contact.form.submit}
            </motion.button>

            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid var(--accent-primary)",
                  borderRadius: "6px",
                  padding: "16px",
                  textAlign: "center",
                  color: "var(--accent-primary)",
                  fontWeight: "500"
                }}
              >
                ✓ Thank you! We'll be in touch soon.
              </motion.div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};
