import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (    
        <div className="exerc-area">
            <h1 className="title">Home</h1>
            <ul className="browser">
                <li><button className="exerc-btn" onClick={() => navigate("/simpleCounter")}>1 - Contador Simples</button></li>
                <li><button className="exerc-btn" onClick={() => navigate("/BackgroundColor")}>2 - Alteração de Cor de Fundo</button></li>
                <li><button className="exerc-btn" onClick={() => navigate("/ToDoList")}>3 - Lista de Tarefas</button></li>
                <li><button className="exerc-btn" onClick={() => navigate("/Timer")}>4 - Temporizador com useEffect</button></li>
                <li><button className="exerc-btn" onClick={() => navigate("/listfilter")}>5 - Filtro de Lista</button></li>
                <li><button className="exerc-btn" onClick={() => navigate("/form")}>6 - Formulário de Registro</button></li>
                <li><button className="exerc-btn" onClick={() => navigate("/dataRequest")}>7 - Aplicação de Requisição de Dados</button></li>
                <li><button className="exerc-btn" onClick={() => navigate("/ImageGallery")}>8 - Galeria de Imagens</button></li>
                <li><button className="exerc-btn" onClick={() => navigate("/TimerWithInterval")}>9 - Timer com Intervalo e Alerta</button></li>
                <li><button className="exerc-btn" onClick={() => navigate("/Tabs")}>10 - Tabs Navegáveis</button></li>
            </ul>
            
        </div>
    );
}

export default Home