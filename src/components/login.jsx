import { useState } from "react";
import "../style.css";
import dog from "/dog.png";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { translations } from "../utils/translation";

function Login() {
    const fundo = { 
    backgroundImage: "url('./imgfundo.png')",
    backgroundSize: "70%",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat" ,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lang, setLang] = useState("pt");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Digite um e-mail válido!");
      return;
    }
    if (senha.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres!");
      return;
    }
    alert("E-mail e senha válidos!");
  };

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  const t = translations[lang];

  return (
    <div style={fundo}>
    <div id="caixa-maior">
      <div class="container text-center">
        <div class="" id="caixa" className="p-3 row ">
          <div class="col">
            <img className="dog" alt="Dog" src={dog} />
          </div>
          <div class="col">
            <div className="caixa-menor">
                <div className="d-flex justify-content-end">
                    <select value={lang} onChange={handleLangChange} id="idiomas">
                    </select>
                </div>
                <div >
                    <h2 id="titulo">{t.title}</h2>
                    <p className="subtitulo" data-translate="description">{t.description}</p>
                </div>
              <form onSubmit={handleSubmit} id="loginForm">
                <div>
                  <input
                  className="form-control p-3"
                    placeholder="dog@gmail.com"
                    type="email"
                    id="email"
                    value={email}
                   onChange={(e) => setEmail(e.target.value)}
                  />
                  <input className="form-control p-3"
                    placeholder="********"
                    type="password"
                    id="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <div>
                    <a className="linksenha" href="#">
                      {t.senha}
                    </a>
                  </div>
                </div>

                <div className="conta-div d-flex justify-content-center flex-column">
                  <button className="btnlogin p-3 rounded w-100">{t.buttonlogin}</button>
                  <a className="linkconta" href="#">
                    {t.buttonconta} 
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Login;