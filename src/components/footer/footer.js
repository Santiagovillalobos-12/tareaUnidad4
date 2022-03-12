import "./footer.css";

export const Footer = () => {
  return (
    <footer className="containerFooter">
      <div className="containerImg">
        <img src="img/logo.png" alt=""></img>
      </div>
      <div className="footerCategories">
        <h4>Categorias</h4>
        <ul className="footerListCategories">
          <li>Celulares</li>
          <li>Drones</li>
          <li>Sonido</li>
          <li>Video</li>
          <li>Perifericos</li>
        </ul>
      </div>
      <div className="footerContact">
        <h4>Contactenos</h4>
        <p>Lunes - Viernes</p>
        <p>8am - 6pm</p>
        <p>01-800-000-000</p>
      </div>
      <div className="footerSocial">
        <h4>Redes Sociales</h4>
        <ul className="footerListSocial">
          <li>
            <img src="/img/facebook.png" alt=""></img>
            <p>Facebook</p>
          </li>
          <li>
            <img src="/img/instagram.png" alt=""></img>
            <p>Instagram</p>
          </li>
          <li>
            <img src="/img/twitter.png" alt=""></img>
            <p>Twitter</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};
