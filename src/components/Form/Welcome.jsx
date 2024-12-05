import { useLocation, useNavigate } from "react-router-dom";


function Welcome() {
    const location = useLocation()
    const navigate = useNavigate()
    // Declaração de hook para navegação
    
    const { name, email, password } = location.state
    // Extraindo os dados de estado do arquivo form.jsx

    return (
        <div>
            <h1>Boas Vindas {name}</h1>
            
            <h2>Informações do Usuário</h2>
            <p>Nome: {name}</p>
            <p>Email: {email}</p>
            <p>Senha: {password}</p>
            {/* Imprime os dados do usuário */}

            <button onClick={() => navigate("/")}>Voltar</button>
            {/* Botão para voltar ao formulário */}

        </div>
    )
}

export default Welcome