// App.tsx
import React from "react";

interface Promo {
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const promos: Promo[] = [
  {
    title: "GET A 10% DISCOUNT ON PAYDAY WEEK",
    description: "Buy Online",
    image: "Burger3.png",
    bgColor: "#222"
  },
  {
    title: "BUY 1 COKE GET MORE FREE 1 COKE",
    description: "Buy Online",
    image: "cocacola.png",
    bgColor: "#222"
  }
];

const App: React.FC = () => {
  return (
    <div style={{ background: "#111", color: "#fff", fontFamily: "Arial, sans-serif", minHeight: "100vh", padding: "0 0 40px 0" }}>
      <header style={{ display: "flex", alignItems: "center", padding: "24px", background: "#181818" }}>
        <img src="Burger1.png" alt="Burger" style={{ height: "240px" }} />
        <div style={{ marginLeft: "32px" }}>
          <h1 style={{ margin: "0 0 16px 0", fontSize: "2rem" }}>ENJOY BURGER MAKE YOUR TUMMY HAPPY</h1>
          <p style={{ margin: "0 0 16px 0", fontSize: "1rem", maxWidth: "460px" }}>
            Whether you’re craving familiar favorites or exploring culinary innovations, burgers come in a remarkable range of styles.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src="Delicious.png" alt="Delicious" style={{ width: "24px", height: "24px" }} />
              Delicious
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src="fresh.png" alt="Fresh" style={{ width: "24px", height: "24px" }} />
              Fresh
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src="organic.png" alt="Organic" style={{ width: "24px", height: "24px" }} />
              Organic
            </div>
          </div>
          <a href="#" style={{ display: "inline-block", marginTop: "20px", background: "#ffd700", color: "#222", padding: "10px 22px", borderRadius: "6px", textDecoration: "none" }}>
            Learn more
          </a>
        </div>
      </header>

      <section style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "40px 0" }}>
        <a href="#" style={{ background: "#ffd700", color: "#222", borderRadius: "8px", textAlign: "center", width: "160px", padding: "18px 0", boxShadow: "0 2px 12px #2222" }}>
          <img src="Burger2.png" alt="Food" style={{ width: "100px" }} /> <br /> Food<br />Buy Online
        </a>
        <a href="#" style={{ background: "#1db954", color: "#fff", borderRadius: "8px", textAlign: "center", width: "160px", padding: "18px 0", boxShadow: "0 2px 12px #2222" }}>
          <img src="potato .png" alt="Snack" style={{ width: "100px" }} /> <br /> Snack<br />Buy Online
        </a>
        <a href="#" style={{ background: "#e55353", color: "#fff", borderRadius: "8px", textAlign: "center", width: "160px", padding: "18px 0", boxShadow: "0 2px 12px #2222" }}>
          <img src="juice.png" alt="Beverage" style={{ width: "100px" }} /> <br /> Beverage<br />Buy Online
        </a>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "26px", marginBottom: "40px" }}>
        {promos.map((promo, idx) => (
          <div key={idx} style={{ background: promo.bgColor, color: "#fff", borderRadius: "12px", padding: "28px 24px", width: "340px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 2px 14px #2223" }}>
            <img src={promo.image} alt="" style={{ width: "80px", borderRadius: "50%" }} />
            <div>
              <h3 style={{ fontSize: "1.1rem", margin: "0 0 12px 0" }}>{promo.title}</h3>
              <a href="#" style={{ background: "#ffd700", color: "#222", padding: "8px 16px", borderRadius: "7px", textDecoration: "none", fontWeight: "bold" }}>{promo.description}</a>
            </div>
          </div>
        ))}
      </section>

      <section style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "40px" }}>
        <img src="Burger4.png" alt="Burger Stack" style={{ width: "290px", borderRadius: "16px", boxShadow: "0 2px 18px #2221" }} />
        <div>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "14px", lineHeight: "1.3" }}>FIND YOUR BRST TASTED FOOD AND DRINK JUST IN ONE PLACE</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px 0" }}>
            <li style={{ marginBottom: "6px" }}>Best price</li>
            <li style={{ marginBottom: "6px" }}>Best service</li>
            <li style={{ marginBottom: "6px" }}>Fresh ingredient</li>
            <li style={{ marginBottom: "6px" }}>Health Protocol</li>
          </ul>
          <a href="#" style={{ background: "#ffd700", color: "#222", padding: "8px 22px", borderRadius: "10px", textDecoration: "none" }}>About us</a>
        </div>
      </section>
    </div>
  );
};

export default App;
