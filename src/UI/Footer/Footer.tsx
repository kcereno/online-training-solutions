import "./Footer.css";

export default function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <section id="footer" className="bg-dark  text-center text-white">
      <div className="footer-content">
        <p>Copyright &copy; {currentYear}</p>
        <p>
          By <a href="https://www.karlcereno.com">Karl Cereno</a>
        </p>
      </div>
    </section>
  );
}
