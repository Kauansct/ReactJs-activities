import { useState, useEffect } from "react";

function SimpleCounter() {
    const [count, setCount] = useState(() => {
        const countSave = localStorage.getItem('count');
        // adiciona o count em uma constante 
        return countSave ? parseInt(countSave) : 0;
        // retorna o countSave ou 0
    })

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);
    // armazena o count

    function increase() {
        setCount(count + 1)
    }
    // funções para incrementar

    function decrease() {
        setCount(count - 1)
    }
    // funções para decrementar

    if (count < 0) {
        setCount(0)
        
    }    
    // se o count for menor que 0 ele vai zerar

    return (
        <div style={{ display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    flexDirection: 'column' }}>
                    {/* centraliza o conteudo */}
            <div>
                <p id="count">Contador: {count}</p>
                {/* exibe o count */}
            </div>
            <div>
                <button onClick={() => decrease()}>Decrementar</button>
                <button onClick={() => increase()}>Incrementar</button>
                {/* exibe os botões de incrementar e decrementar */}
            </div>
            
        </div>
    );
}

export default SimpleCounter;