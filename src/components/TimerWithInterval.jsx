import { useState, useEffect } from "react"

function TimerWithInterval() {
    // Estado para armazenar o tempo restante em segundos
    const [segundos, setSegundos] = useState(0)

    // Estado para armazenar o ID do intervalo criado pelo `setInterval`
    const [intervalId, setIntervalId] = useState(null)

    // Estado para controlar se o temporizador está rodando
    const [isRunning, setIsRunning] = useState(false)

    // Estado para armazenar o valor do input do usuário
    const [inputValue, setInputValue] = useState(0)

    // Estado para controlar o texto do botão de iniciar/parar
    const [buttonText, setButtonText] = useState("Iniciar")
    
    useEffect(() => {
        if (isRunning && segundos > 0) {
            // Cria um intervalo para decrementar o contador
            const interval = setInterval(() => {
                setSegundos((prevSeconds) => prevSeconds - 1)
            }, 1000)

            // Armazena o ID do intervalo
            setIntervalId(interval)

            // Para o temporizador e exibe alerta quando chega a 0
            if (segundos === 0) {
                setIsRunning(false)
                setButtonText("Iniciar")
                alert("Tempo acabou!")
            }

            // Limpa o intervalo ao desmontar ou reiniciar o efeito
            return () => clearInterval(interval)
        }
    }, [isRunning, segundos])

    // Atualiza o valor do input conforme o usuário digita
    function handleInputChange(event) {
        setInputValue(event.target.value)
    }

    // Define o tempo inicial a partir do valor digitado pelo usuário
    function AddTime(){
        const time = parseInt(inputValue, 10)
        if (time > 0){
            setSegundos(time)
        }
        else{
            alert("Digite um valor válido")
        }
    }

    //Alterna entre iniciar e parar o temporizador
    function stopStartTimer(){
        if(!isRunning){
            setButtonText("Parar")
            setIsRunning(true)
        }
        else{
            clearInterval(intervalId)
            setButtonText("Iniciar")
            setIsRunning(false)
        }
    }

    // Reseta o temporizador para o valor inicial definido pelo usuário
    function resetTimer(){
        setSegundos(inputValue)
    }

    return (
        /**
            * Renderiza o temporizador com os controles
            * - Input para o usuário definir o tempo.
            * - Botão para adicionar tempo.
            * - Temporizador que exibe os segundos restantes.
            * - Botão para iniciar/parar.
            * - Botão para resetar.
        */
        <div>
            <input
                    type="number"
                    value={inputValue} 
                    onChange={handleInputChange} 
                    placeholder="Digite o tempo a ser cronometrado"
                />
            <button onClick={() => AddTime()}>Adicionar um tempo</button>
            <p>Timer: {segundos} segundos</p>
            <button id="start-stop" onClick={() => stopStartTimer()}>{buttonText}</button>
            <button onClick={() => resetTimer()}>Resetar</button>
        </div>
    )
}

export default TimerWithInterval