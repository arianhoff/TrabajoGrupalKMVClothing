import React from "react";
import Style from '../style/footerKMV.css';
import Imagen from '../assets/imagenfooter.png';
import logo from '../Logo.png';

const Footer = () => {
  return (
    <>
      <div className="div-global">
        <div className="derechos">
          <h4>Todos los derechos reservados / KMV Clothing / @2022</h4>
        </div>
        <div className="first-div">
          <div className="first-h2">
            <h2>Sobre nosotros</h2>
          </div>
          <div className="first-p">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              soluta asperiores nostrum consectetur quis consequuntur tempora
              repellendus adipisci minus explicabo odit quo voluptas atque amet
              officiis, aut hic nisi ea.
            </p>
          </div>
        </div>
        <div className="second-div">
          <div className="categories">
            <h2>Categorías</h2>
          </div>
          <div className="options">
            <ul>
              <li>
                <a href="">Zapatillas</a>
              </li>
              <li>
                <a href="">Pantalones</a>
              </li>
              <li>
                <a href="">Camperas</a>
              </li>
              <li>
                <a href="">Accesorios</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="third-div">
          <div className="contact">
            <h2>Contacto</h2>
          </div>
          <div className="datos">
            <ul>
              <li>Tel.: +54 3493-15400808</li>
              <li>KMVClothing@gmail.com</li>
            </ul>
          </div>
          <div className="box">
            <label for="Nombre">Email:</label>
            <br />
            <input
              className="ingreso"
              type="Nombre"
              placeholder="Ingrese su Email"
            />
            <button className="boton"> Enviar </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
