import "./Footer.css"

export default function Footer() {
  let currentYear = new Date().getFullYear();
  
  return (
    <section id="footer" className="bg-dark py-5 text-center text-white">
      <p>Copyright &copy; {currentYear}</p>
      <p>
        By <a href="https://www.karlcereno.com">Karl Cereno</a>
      </p>
    </section>
  );
}
