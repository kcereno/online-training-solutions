import "./Footer.scss";

export default function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <section className="text-center text-white footer-section center">
      <div className="my-auto">
        <p>Copyright &copy; {currentYear}</p>
        <p>
          By <a href="https://www.karlcereno.com">Karl Cereno</a>
        </p>
      </div>
    </section>
  );
}
