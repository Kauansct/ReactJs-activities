import { useEffect, useState } from "react";

function BackgroundColor() {
    // Estado `cor` controla se a cor de fundo deve ser alterada e quando `true`, a cor de fundo será modificada
    const [ cor, setCor ] = useState(false)

    useEffect(() => {
        if (cor) {
            // Gera uma cor aleatória em formato hexadecimal
            document.body.style.backgroundColor =
                "#" + Math.floor(Math.random() * 16777215).toString(16);

            // Reseta o estado para evitar mudanças contínuas
            setCor(false);
        }
    }, [cor]); // Dependência para executar o efeito quando `cor` mudar

    // Exibe um botão centralizado que, ao ser clicado, altera a cor de fundo.
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <button onClick={() => setCor(true)}>Mudar cor</button>
        </div>
    );
}

export default BackgroundColor;
