import { useState, useEffect } from "react";

function Timer(){
    // Estado para armazenar os segundos que o temporizador já contou
    const [segundos, setSegundos] = useState(0);
    
    // Estado para armazenar o ID do intervalo retornado pelo setInterval
    const [intervalId, setIntervalId] = useState(null);
    
    useEffect(() => {
        // Inicia um intervalo que incrementa o contador a cada segundo
        const interval = setInterval(() => {
            setSegundos((prevSeconds) => prevSeconds + 1); // Atualiza os segundos
        }, 1000);

        // Armazena o ID do intervalo no estado
        setIntervalId(interval);

        // Limpa o intervalo quando o componente for desmontado
        return () => clearInterval(interval);
    }, []);

    function stopTimer(){
        clearInterval(intervalId) // para o intervalo
    }

    function resetTimer(){
        setSegundos(0) // reseta os segundos
    }

    //Exibe o temporizador e dois botões: um para pausar e outro para resetar o temporizador
    return (
        <div id="exerc-area">
            <p>Temporizador: {segundos} segundos</p>
            <div>
                <button onClick={stopTimer}>Parar</button>
                <button onClick={resetTimer}>Resetar</button>  
            </div>
            
        </div>
    )
}

export default Timer