import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Contact from '../pages/Contact'
// import CardBikes from '../pages/CardBikes'
import "../pages/Contact.css"

function App() {
  // const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    const form = {
      name,
      phone,
      email,
      message,
    };
    console.log("Formulário a ser enviado: ", form);
  }

  return (
    <>
      <Header></Header>

      {/* <CardBikes></CardBikes> */}
      {/* <Contact></Contact> */}

      <section className="input">
        <form className="user-contact">
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="phone">Telefone</label>
            <input
              type="text"
              placeholder="(21) 9999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="email">
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
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
              o que você precisa?
            </textarea>
          </div>

          <button onClick={() => handleSubmit()}>ENVIAR MENSAGEM</button>
        </form>
      </section>

      <Footer></Footer>
    </>
  );
}

export default App;
