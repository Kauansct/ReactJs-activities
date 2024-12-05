import { useState } from "react"
import { useNavigate } from "react-router-dom"
//// Importação de dependências necessárias para o funcionamento do componente

function LoginForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // Declarações de estados para os campos do formulário

    const navigate = useNavigate()
    // Declaração de hook para navegação

    function handleSubmit(event) {
        event.preventDefault()
        // Previne o comportamento padrão do formulário

        console.log("Dados enviados:", { name, email, password })
        // Imprime os dados enviados no console

        navigate("/welcome", { state: { name, email, password } })
        // Navega para a rota "/welcome" e passa os dados como estado

        setName("")
        setEmail("")
        setPassword("")
        // Limpa os campos do formulário

        alert("Dados enviados com sucesso!")
        // Exibe uma mensagem de sucesso
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            {/* Renderização do campo de nome */}

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {/* Renderização do campo de email */}

            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {/* Renderização do campo de senha */}

            <button type="submit">Enviar</button>
        </form>
    )
}

export default LoginForm