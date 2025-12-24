import { useEffect, useRef } from "react";

export const HexGrid = ({ theme }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height;
    let animationFrameId;
    let time = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const drawHex = (x, y, r) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + r * Math.cos(angle);
        const hy = y + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.stroke();
    };

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      const r = 30;
      const h = r * Math.sqrt(3);
      const dx = r * 1.5;
      const dy = h;

      const rows = Math.ceil(height / dy) + 2;
      const cols = Math.ceil(width / dx) + 2;

      const isDark = theme === "dark";
      const baseStroke = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.06)";

      const highlightR = isDark ? 56 : 2;
      const highlightG = isDark ? 189 : 132;
      const highlightB = isDark ? 248 : 199;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          let x = col * dx;
          let y = row * dy;
          if (col % 2 === 1) y += dy / 2;

          const distX = x - mouseRef.current.x;
          const distY = y - mouseRef.current.y;
          const dist = Math.sqrt(distX * distX + distY * distY);

          const maxDist = 350;
          const proximity = Math.max(0, 1 - dist / maxDist);

          const breathe = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5;

          if (proximity > 0) {
            ctx.strokeStyle = `rgba(${highlightR}, ${highlightG}, ${highlightB}, ${0.1 + (proximity * 0.5)})`;
            ctx.lineWidth = 1 + (proximity * 1.5) + (breathe * 0.5);
          } else {
            ctx.strokeStyle = baseStroke;
            ctx.lineWidth = 1 + (breathe * 0.2);
          }

          drawHex(x, y, r);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};
