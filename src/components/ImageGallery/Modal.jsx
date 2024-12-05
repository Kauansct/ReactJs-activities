import close from '../../assets/images/close.png'; // Ícone de fechar o modal
import './ImageGallery.css'; // Estilos específicos para o modal e a galeria

function Modal({ isOpen, setIsOpen, image }) {
    // Retorna null se o modal não estiver aberto
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div id="modal">
                {/* Botão para fechar o modal */}
                <div>
                    <button
                        className="close-modal"
                        onClick={() => setIsOpen(false)}
                    >
                        <img id="close-icon" src={close} alt="Fechar modal" />
                    </button>
                </div>

                {/* Imagem ampliada exibida no modal */}
                <div>
                    <img id="modal-image" src={image} alt="Imagem ampliada" />
                </div>
            </div>
        </div>
    );
}

export default Modal