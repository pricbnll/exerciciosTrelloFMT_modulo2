import './Footer.css'

function Footer() {
    return (
        <>
        <footer  className="footer "> {/* footer  p-l-500 p-r-300 */}
                     
            <img className="p-rl-20" src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="Logo Bikcraft" />
        
            <div className='contact'>
                <h3>CONTATO</h3>
                <ul>
                    <li>+55 21 9999-9999</li>
                    <li>contato@bikcraft.com</li>
                    {/* linha */}
                    <hr className="separator"/>
                    <li>Rua Ali Perto, 42 - Botafogo</li>
                    <li>Rio de Janeiro - RJ</li>
                    {/* linha */}
                    <hr className="separator"/>
                </ul>          
                  
                <div className="social-midia">
                    <a href="./">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram.svg" alt="Logotipo do Instagram" />
                    </a>
                    <a href="./">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook.svg" alt="Logotipo do Facebook" />
                    </a>
                    <a href="./">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube.svg   " alt="Logotipo do Youtube" />
                    </a>
                   
                </div>
            </div>

            <nav>
                <h3>INFORMAÇÕES</h3>
                <ul>
                    <li>Bicicletas</li>
                    <li>Seguros</li>
                    <li>Contato</li>
                    <li>Termos e Condições</li>
                </ul>
            </nav>
            <p className="p-rl-20">Bikcraft © Alguns direitos reservados.</p>
        </footer>
        </>
    )
}

export default Footer