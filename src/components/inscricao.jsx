import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from "react";
import "../style.css";
import gato from "/gatofundo.png";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { translations } from "../utils/translation";

function Inscricao() {
  const fundo = { 
    backgroundImage: "url('./gatofundo.png')",
    backgroundSize: "70%",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lang, setLang] = useState("pt");

  const t = translations[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <div style={fundo}>
      <div id="caixa-maior">
        <div className="container text-center">
          <div id="caixa" className="p-3 row">
            <div className="col">
              <img className="dog" alt="Cat" src={gato} />
            </div>
            <div className="col">
              <div className="caixa-menor">
                <div className="d-flex justify-content-end mb-3">
                  <select value={lang} onChange={handleLangChange} className="form-select w-auto">
                    <option value="pt">🇧🇷</option>
                    <option value="en">🇺🇸</option>
                    <option value="es">🇪🇸</option>
                    <option value="fr"><img src=""/>🇫🇷</option>
                  </select>
                </div>
                <div>
                  <h2 id="titulo">{t.title}</h2>
                  <p className="subtitulo">{t.description}</p>
                </div>
                <form onSubmit={handleSubmit} id="loginForm">
                  <div className="mb-3">
                    <input className="form-control p-3 mb-2 border-dark-subtle" placeholder="Nome do Pet"
                      type="text" value={email}
                      onChange={(e) => setSenha(e.target.value)}/>
                    <input
                      className="form-control p-3 mb-2 border-dark-subtle" placeholder="dog@gmail.com"
                      type="email" value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input className="form-control p-3 mb-2 border-dark-subtle" placeholder="********"
                      type="password" value={senha}
                      onChange={(e) => setSenha(e.target.value)}/>

                    <div className="d-flex">
                        <input class="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                        <label class="form-check-label" for="checkDefault">Aceito os Termos e Condições</label>
                    </div>
                  </div>
                  <div className="conta-div d-flex justify-content-center flex-column">
                    <button className="btnlogin p-3 rounded w-100">Inscrever-se</button>
                    <div className="d-flex justify-content-center">
                      <a className="linkconta" href="#"> Voltar ao Login</a>
                      </div>
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

export default Inscricao;
