// Importação de dependências e recursos
import { useState } from "react";
import tigre from '../../assets/images/tigre.jpg'; // Caminho da imagem do tigre
import furao from '../../assets/images/furao.jpg'; // Caminho da imagem do furão
import arara from '../../assets/images/arara.webp'; // Caminho da imagem da arara
import './ImageGallery.css'; // Estilos específicos para o componente
import Modal from "./Modal"; // Importação do componente Modal

function ImageGallery() {
    const [images] = useState([tigre, furao, arara]) // Contém a lista de imagens disponíveis na galeria
    const [openModal, setOpenModal] = useState(false) // Indica se o modal está aberto ou fechado e inicialmente definido como `false` (fechado).
    const [selectedImage, setSelectedImage] = useState(null) // Armazena a imagem atualmente selecionada para exibição no modal e inicialmente definido como `null`

    return(
        
        // Exibe um título, a galeria de imagens e o modal
        <div className="image-gallery">
            <div>
                <h1>Galeria de imagens</h1>
            </div>
            <div>
                <button onClick={() => {setOpenModal(true); setSelectedImage(images[0])}}><img className="btn-image" src={images[0]} alt="tigre" /></button>
                <button onClick={() => {setOpenModal(true); setSelectedImage(images[1])}}><img className="btn-image" src={images[1]} alt="furao" /></button>
                <button onClick={() => {setOpenModal(true); setSelectedImage(images[2])}}><img className="btn-image" src={images[2]} alt="arara" /></button>
            </div>
            <div>
                <Modal isOpen={openModal} setIsOpen={setOpenModal} image={selectedImage}/>
            </div>
        </div>
    )
}

export default ImageGallery