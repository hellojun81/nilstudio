import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface NavigationProps {
  isMobile?: boolean;
  menuOpen?: boolean;
  setMenuOpen?: (open: boolean) => void;
  textColor: string;
}

const Navigation: React.FC<NavigationProps> = ({ isMobile = false, menuOpen = false, setMenuOpen = () => {}, textColor }) => {
  return (
    <nav style={{ paddingRight: isMobile ? "0" : "30px"}}>
      {isMobile ? (
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "transparent", border: "none", fontSize: "2rem", color: textColor }}>
          ☰
        </button>
      ) : (
        <ul style={{ display: "flex", gap: "15px", listStyle: "none", padding: 0, margin: 0 }}>
          {["Space", "Guide", "Equipment", "Archives", "Location"].map((item) => (
            <li key={item}>
              <a href={`/${item.toLowerCase()}`} style={{ color: textColor, textDecoration: "none", fontSize: "1rem" }}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
      {menuOpen && isMobile && (
        <div style={{ position: "absolute", top: "60px", right: "20px", background: "rgba(0,0,0,0.8)", padding: "10px", borderRadius: "5px" }}>
          <ul style={{ listStyle: "none", padding: 0, textAlign: "right", margin: 0 }}>
            {["Space", "Guide", "Equipment", "Archives", "Location"].map((item) => (
              <li key={item} style={{ marginBottom: "10px" }}>
                <a href={`/${item.toLowerCase()}`} style={{ color: "white", textDecoration: "none", fontSize: "1rem" }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // 현재 페이지가 "/"(홈)인지 확인
  const isHome = location.pathname === "/";
  const textColor = isHome ? "white" : "black";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "0" : "20px", // 모바일에서는 0, PC에서는 20px
        textAlign: "center",
        zIndex: 10,
        backgroundColor: isHome ? "transparent" : "white", // 홈에서는 투명, 그 외에는 흰색 배경
        boxShadow: isHome ? "none" : "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginLeft: "20px", color: textColor }}>
        <a href="/" style={{ color: textColor, textDecoration: "none" }}>Nil Studio</a>
      </h1>
      <Navigation isMobile={isMobile} menuOpen={menuOpen} setMenuOpen={setMenuOpen} textColor={textColor} />
    </header>
  );
};

export default Header;
