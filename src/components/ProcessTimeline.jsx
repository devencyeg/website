import { motion } from "framer-motion";

export const ProcessTimeline = ({ steps, lang }) => {
  return (
    <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto", padding: "40px 0" }}>
      {/* Steps */}
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            gap: "40px",
            marginBottom: "60px",
            alignItems: "center"
          }}
        >
          {/* Number/Marker - Always first in DOM */}
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "2px solid var(--accent-primary)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            color: "var(--accent-primary)",
            flexShrink: 0,
            background: "var(--bg-primary)",
            zIndex: 2
          }}>
            {index + 1}
          </div>

          {/* Text Content */}
          <div style={{
            flex: 1,
            padding: "10px",
            textAlign: lang === "ar" ? "right" : "left"
          }}>
            <h4 style={{ fontSize: "1.2rem", marginBottom: "8px", fontWeight: "600" }}>{step.title}</h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.6" }}>{step.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
