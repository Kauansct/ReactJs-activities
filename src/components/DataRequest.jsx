import React, { useEffect, useState } from "react";

const PostList = () => {
    const [posts, setPosts] = useState([]); // Armazena os dados da lista de posts recebidos da API.
    const [loading, setLoading] = useState(true); // Indica se os dados ainda estão sendo carregados e inicialmente definido como `true` 
    const [error, setError] = useState(null); // Armazena mensagens de erro caso a requisição falhe

    

    useEffect(() => {
        // Função assíncrona para buscar os posts
        const fetchPosts = async () => {
            try {
                // Faz a requisição para a API
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();

                // Atualiza o estado com os dados recebidos
                setPosts(data);
            } catch (error) {
                // Atualiza o estado com a mensagem de erro
                setError(error.message);
            } finally {
                // Define o estado de carregamento como falso
                setLoading(false);
            }
        };

        fetchPosts(); // Chama a função para buscar os dados
    }, []); // Array de dependências vazio para executar apenas uma vez


    if (loading) {
        return <p>Carregando posts...</p> //Exibe uma mensagem de carregamento enquanto os dados não chegam.
    }

    if (error) {
        return <p>Erro: {error}</p> // Exibe uma mensagem de erro caso a requisição falhe
    }

    // Exibe o título e o corpo de cada post em uma lista
    // OBS: Se apresentar o erro net::ERR_CONNECTION_RESET, ao inspecionar o HTML desse codigo, recomendo seguir o link: https://youtu.be/NAdhaWR2TJI?si=pPmpuiukfImr8y_7 para resolver o problema
    
    return (
        <div>
            <h1>Lista de Posts</h1>
            <ul>
                {posts.map((post) => (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;