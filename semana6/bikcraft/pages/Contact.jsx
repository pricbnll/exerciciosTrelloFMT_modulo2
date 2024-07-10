import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(){
    const form = {
      name,
      phone,
      email,
      message
    }
    console.log('Dados do usuário:', { name, phone, email, message }); 
    
    //posso colocar ('Dados do usuario:', {form}) ??????
  }


  return (
    <>
      <main>
        {/* <div className="title">
          <h3>RESPOSTAS EM ATÉ 24H</h3>
          <h2>
            nosso contato<span>.</span>
          </h2>
        </div>

        <div className="contact-container">
          <section>
            <h3>Loja Online</h3>
            <div className="contact-address">
              <img src="" alt="Ponteiro de localização" />
              <p>Rua Ali Perto, 35</p>
              <p>Rio de Janeiro - RJ</p>
              <p>Brasil - Terra - Vita Láctea</p>
            </div>

            <div className="contact-emails">
              <img src="" alt="Figura da carta" />
              <p>contato@bikcraft.com</p>
              <p>assistencia@bikcraft.com</p>
            </div>

            <div className="contact-phone">
              <img src="" alt="Figura do telefone" />
              <p>+55 21 9999-9999</p>
            </div>

            <div className="social-midia">
              <a href="./">
                <img
                  src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram.svg"
                  alt="Logotipo do Instagram"
                />
              </a>
              <a href="./">
                <img
                  src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook.svg"
                  alt="Logotipo do Facebook"
                />
              </a>
              <a href="./">
                <img
                  src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube.svg   "
                  alt="Logotipo do Youtube"
                />
              </a>
            </div>
          </section> */}

          <section className="input">
            <form className="user-contact">
              <div>
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder="Seu nome" value= {name} onChange= {(e) => setName(e.target.value)} />
        
                <label htmlFor="phone">Telefone</label>
                <input type="text" placeholder="(21) 9999-9999" value= {phone} onChange= {(e) => setPhone(e.target.value)} />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="contato@email.com" value= {email} onChange= {(e) => setEmail(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="message">Mensagem</label>
                <textarea type="text"name="message" value= {message} onChange= {(e) => setMessage(e.target.value)}>o que você precisa?</textarea>
              </div>
              
              <button onClick={() => handleSubmit()}>ENVIAR MENSAGEM</button>
            </form>
          </section>
        {/* </div> */}
      </main>
    </>
  );
}

export default Contact;