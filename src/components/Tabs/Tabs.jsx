import { useState } from "react";
import './Tabs.css'

function Tabs() {

    // Estado `activeTab`: Controla qual aba está ativa no momento e inicialmente, a aba "home" está ativa.
    const [activeTab, setActiveTab] = useState("home");
  
  
    const renderContent = () => {
        switch (activeTab) {
            case "home":
                return <h1>Você está na Home</h1>; // Conteúdo da aba "Home"
            case "about":
                return <h1>Você está na About</h1>; // Conteúdo da aba "About"
            case "contact":
                return <h1>Você está na Contact</h1>; // Conteúdo da aba "Contact"
            default:
                return null; // Caso nenhuma aba corresponda
        }
    };

    // Randeriza um menu de navegação com botões para cada aba e um contêiner que exibe o conteúdo da aba ativa
    return (
        <div>
            <nav>
                <button className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab("home")}>Home</button>
                <button className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab("about")}>About</button>
                <button className={activeTab === 'contact' ? 'active' : ''} onClick={() => setActiveTab("contact")}>Contact</button>
            </nav>

            <div>{renderContent()}</div>
        </div>
    );
}

export default Tabs;