import { useState } from "react";

function ListFilter() {
    // Estado `names`: Armazena a lista inicial de nomes.
    const [names] = useState([
        "Pedro", "José", "Jaques", "Maria", "Edu", "Eduarda",
        "Ana", "Codifica", "Hyago", "Joao", "Paulo", "Joaquim"
    ]);
    // Estado `filter`: Armazena o texto de filtro digitado pelo usuário.
    const [filter, setFilter] = useState("");

    // Função `handleFilterChange`: Atualiza o estado `filter` com o texto digitado pelo usuário.
    const handleFilterChange = (event) => {
        setFilter(event.target.value); 
    };

    // Filtra os nomes da lista com base no texto inserido pelo usuário(ignora maiúsculas e minúsculas).
    const filteredNames = names.filter((name) =>
        name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        // Exibe um campo de entrada para o filtro e exibe a lista de nomes filtrados.
        <div>
            <h1>Lista de Nomes</h1>
            <input type="text" value={filter} onChange={handleFilterChange}/>
            <ul>
                {filteredNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListFilter;