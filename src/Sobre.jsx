import {} from "react";
import "./Sobre.css";

function Sobre() {
  return (
    <>
      <div id="container-sobre">
        <div id="content1">
          <div id="top">
            <img
              src="./public/logo-desktops-amarelo.png"
              alt="Logo Desk{tops}"
            />
            <p>
              DeskTOPS é um grupo dedicado a desenvolver soluções tecnológicas
              que visam proteger e melhorar a qualidade de vida das pessoas, ao
              mesmo tempo em que preservam o meio ambiente. Seu objetivo é
              utilizar a tecnologia para construir um futuro mais seguro e
              sustentável.
            </p>
          </div>
            <h2>Integrantes</h2>
          <div className="integrantes">
            <div className="integrante"></div>
            <div className="integrante"></div>
            <div className="integrante"></div>
            <div className="integrante"></div>
            <div className="integrante"></div>
          </div>
          <div id="nomes">
            <p>Caíque Walter Silva</p>
            <p>Enricco Rossi</p>
            <p>Gabriel Marquez Trevisan</p>
            <p>Guilherme Nobre Bernardo</p>
            <p>Silvia Kavabata</p>
          </div>
        </div>
        <div id="content2">
          <h2>Sua região está alagada?</h2>
          <button>Descubra aqui</button>
        </div>
      </div>
    </>
  );
}
export default Sobre;