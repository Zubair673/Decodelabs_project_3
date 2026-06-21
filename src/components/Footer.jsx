import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <h2>Contact Me</h2>

      <p>
        Email:
        <a href="mailto:zubair@example.com">
          zubairzk2244@egmail.com
        </a>
      </p>

      <p>
        Phone:
        <a href="tel:+923248267995">
          +92 324 8267995
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