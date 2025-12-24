export const SimplePage = ({ title, content }) => (
  <div className="container" style={{ padding: "150px 20px", minHeight: "80vh" }}>
    <h1 style={{ marginBottom: "30px", fontWeight: "600" }}>{title}</h1>
    <div style={{ whiteSpace: "pre-line", lineHeight: "1.8", color: "var(--text-secondary)" }}>{content}</div>
  </div>
);
