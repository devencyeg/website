import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

export const Navbar = ({ lang, setLang, theme, toggleTheme }) => {
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
        background: theme === 'dark' ? "rgba(5, 10, 24, 0.9)" : "rgba(255, 255, 255, 0.95)",
        borderBottom: "1px solid rgba(125,125,125,0.1)",
        transition: "background 0.3s"
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src="/logo.svg" alt="Devency Logo" style={{ height: "32px", width: "auto" }} />
      </Link>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{
            background: "rgba(125,125,125,0.1)",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer",
            fontSize: "1rem",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "all 0.2s"
          }}
        >
          {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
        </button>

        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          aria-label={lang === "en" ? 'Switch to Arabic' : 'Switch to English'}
          style={{
            background: "transparent",
            border: "1px solid rgba(125,125,125,0.2)",
            fontSize: "1.5rem",
            padding: "0",
            borderRadius: "999px",
            cursor: "pointer",
            height: "36px",
            width: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          title={lang === "en" ? "Switch to Arabic" : "Switch to English"}
        >
          <img
            src={lang === "en" ? "/ar.svg" : "/en.svg"}
            alt={lang === "en" ? "Arabic flag" : "English flag"}
            style={{ height: "24px", width: "auto", borderRadius: "999px" }}
          />
        </button>
      </div>
    </nav>
  );
};
