import { useState, useEffect } from "react";

function ViewportInfo() {
  const [altura, setAltura] = useState(0);
  const [largura, setLargura] = useState(0);

  useEffect(() => {
    const atualizarTamanhos = () => {
      const h = window.innerHeight;
      const w = window.innerWidth;
      setAltura(h);
      setLargura(w);
      document.documentElement.style.setProperty('--vh', `${h * 0.01}px`);
    };

    atualizarTamanhos();
    window.addEventListener("resize", atualizarTamanhos);
    return () => window.removeEventListener("resize", atualizarTamanhos);
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Altura da viewport:</h1>
      <p style={{ fontSize: "2rem", color: "#007bff" }}>{altura}px</p>

      <h1>Largura da viewport:</h1>
      <p style={{ fontSize: "2rem", color: "#28a745" }}>{largura}px</p>
    </div>
  );
}

export default ViewportInfo;