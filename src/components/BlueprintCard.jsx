import { motion } from "framer-motion";

export const BlueprintCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, borderColor: "var(--accent-primary)" }}
      style={{
        background: "var(--bg-secondary)",
        border: "1px solid rgba(125,125,125, 0.1)",
        padding: "30px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        height: "100%",
        transition: "border-color 0.3s"
      }}
    >
      <div style={{ fontSize: "1.5rem", color: "var(--accent-primary)" }}>{item.icon}</div>
      <h3 style={{ fontSize: "1.1rem", fontWeight: "600" }}>{item.title}</h3>
      <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.5" }}>{item.description}</p>
    </motion.div>
  );
};
