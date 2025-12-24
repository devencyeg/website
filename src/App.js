import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HexGrid } from "./components/HexGrid";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { SimplePage } from "./components/SimplePage";
import { translations } from "./i18n/translations";
import { useLanguage } from "./hooks/useLanguage";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [lang, setLang] = useLanguage();
  const [theme, toggleTheme] = useTheme();
  const t = translations[lang];

  return (
    <Router>
      <div className="app" dir={lang === "ar" ? "rtl" : "ltr"}>
        <HexGrid theme={theme} />
        <Navbar lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />

        <Routes>
          <Route path="/" element={<Home t={t} lang={lang} />} />
          <Route path="/about" element={<SimplePage title={t.nav.about} content="Content..." />} />
          <Route path="/terms" element={<SimplePage title={t.nav.terms} content="Content..." />} />
        </Routes>

        <footer style={{ padding: "40px", textAlign: "center", borderTop: "1px solid rgba(125,125,125,0.1)", marginTop: "auto" }}>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{t.footer.rights}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
