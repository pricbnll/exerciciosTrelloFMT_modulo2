import './Header.css'

function Header () {
    return (
        <>
        <div className="header p-rl-20"> {/* "header p-l-500 p-r-500" */}

            <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="Logo Bikcraft" />
            
            <ul>
                <li>Bicicletas</li>
                <li>Seguros</li>
                <li>Contato</li>
            </ul>

        </div>

        </>
    )
}

export default Header