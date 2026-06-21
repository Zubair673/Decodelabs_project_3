import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <h2>Contact Me</h2>

      <p>
        Email:
        <a href="mailto:zubair@example.com">
          zubair@example.com
        </a>
      </p>

      <p>
        Phone:
        <a href="tel:+923001234567">
          +92 300 1234567
        </a>
      </p>

      <p>
        GitHub:
        <a
          href="https://github.com/Zubair673"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/Zubair673
        </a>
      </p>

      <br />

      <p>© 2026 Zubair Portfolio</p>
    </footer>
  );
}

export default Footer;