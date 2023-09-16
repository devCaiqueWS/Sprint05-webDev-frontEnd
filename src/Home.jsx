import {} from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div id="container">
        <div id="background-home">
          <div>
            <h1>Sua região está alagada?</h1>
            <p>
              Descubra se onde está ou passará está sendo afetado pelas
              enchentes.
            </p>
            <button className="btn">Descubra aqui</button>
          </div>
        </div>
        <div id="form-login">
          <h1>FAÇA LOGIN</h1>
          <form action="">
            <div>
              <label htmlFor="nome">Nome de usuário</label>
              <br />
              <input type="text" id="nome" placeholder="Digite seu nome aqui" />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <br />
              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha aqui"
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div id="info">
          <div class="info-item">
            <h2>Enchentes em São Paulo</h2>
            <p>
              O problema das enchentes em São Paulo é causado por diversos
              fatores, como chuvas intensas, impermeabilidade do solo, problemas
              de drenagem, destinação incorreta do lixo, ocupação do solo e
              canalização de rios e canais. Esses fatores demonstram uma falta
              de planejamento urbano adequado, o que torna difícil acabar com o
              problema de forma definitiva.
            </p>
          </div>
          <div class="info-item">
            <h2>Problemas</h2>
            <p>
              As enchentes afetam diversas áreas em São Paulo, levando a
              problemas como inundação de casas e comércios, danos aos
              pertences, dificuldades de locomoção e até mesmo a contração de
              doenças. Esses problemas afetam negativamente os moradores e
              cidadãos que circulam na região.
            </p>
          </div>
          <button>Saiba mais sobre nosso projeto</button>
        </div>
      </div>
    </>
  );
}
export default Home;