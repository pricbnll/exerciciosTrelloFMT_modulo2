import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Contact from '../pages/Contact'
// import CardBikes from '../pages/CardBikes'
import "../pages/Contact.css";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("O que você precisa?");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log('handle submit')
    const form = {
      name,
      phone,
      email,
      message,
    };
    console.log("Formulário a ser enviado: ", form);

    // Resetando os campos de entrada
    setName("");
    setPhone("");
    setEmail("");
    setMessage("O que você precisa?");
  }

  function handleFocus() {
    if (message === "O que você precisa?") {
      setMessage("");
    }
  }

  return (
    <>
      <Header></Header>

      {/* <CardBikes></CardBikes> */}
      
      {/* <Contact></Contact> */}

      <section aria-label="Formulary">
        <form className="form">
          <div className="form-group inline">
            <div>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phone">Telefone</label>
              <input
                type="text"
                placeholder="(21) 9999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group column">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="contato@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message">Mensagem</label>
              <textarea
                rows={5}
                type="text"
                name="message"
                value={message}
                onFocus={handleFocus}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className="button" onClick={(e) => handleSubmit(e)}>
              ENVIAR MENSAGEM
            </button>
            {/* este (e) deve estar presente senão não chama console.log */}
          </div>
        </form>
      </section>

      <Footer></Footer>
    </>
  );
}

export default App;
