import { useState } from "react";
import "../styles/Hero.css";

function Hero() {
  const [message, setMessage] = useState(
    "Welcome to my React Portfolio"
  );

  return (
    <section id="home" className="hero">
      <div>
        <h1>Frontend Developer</h1>

        <p>{message}</p>

        <button
          onClick={() =>
            setMessage("Thanks for visiting my portfolio!")
          }
        >
          Click Me
        </button>
      </div>
    </section>
  );
}

export default Hero;