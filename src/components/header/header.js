import "./header.css";
import logo from "../../img/logo.png";

export const Header = () => {
  function changeTheme() {
    const body = document.querySelector("body");
    body.classList.toggle("toggleTheme");
  }

  return (
    <div className="header">
      <div className="containerImg" id="logo">
        <img src={logo} alt=""></img>
      </div>
      <div className="filters">
        <select name="" id="Cities">
          <option value="">Bogota</option>
          <option value="">Medellin</option>
          <option value="">Cali</option>
          <option value="">Cartagena</option>
          <option value="">Bucaramanga</option>
        </select>
        <select name="" id="Categories">
          <option value="">Celulares</option>
          <option value="">Drones</option>
          <option value="">Sonido</option>
          <option value="">Video</option>
          <option value="">Perifericos</option>
        </select>
      </div>
      <div className="containerSearch">
        <input type="text"></input>
        <button className="btnSearch">Buscar</button>
      </div>
      <div className="containerBtnTheme">
        <button
          className="btnTheme"
          onClick={() => {
            changeTheme();
          }}
        >
          Cambiar tema
        </button>
      </div>
      <div className="containerBtnAdd">
        <button className="btnAdd">Publicar</button>
      </div>
    </div>
  );
};

export default Header;
