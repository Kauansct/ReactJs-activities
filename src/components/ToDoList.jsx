import { useEffect, useState } from "react";

function ToDoList() {
    const [task, setTask] = useState(() => {
        const savedTasks = localStorage.getItem("task"); // Obtém tarefas do localStorage
        return savedTasks ? JSON.parse(savedTasks) : []; // Converte de JSON para array ou usa um array vazio
    });

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(task)); // Salva as tarefas no localStorage
    }, [task]);

    function addTask() {
        const newTask = document.getElementById("task").value; // Obtém o valor do input
        if (newTask.trim() !== "") { // Verifica se o valor não está vazio
            setTask([...task, newTask]); // Adiciona a nova tarefa à lista
            document.getElementById("task").value = ""; // Limpa o campo de entrada
        } else {
            alert("Por favor, insira uma tarefa válida."); // Alerta se o input estiver vazio
        }
    }

    function removeTask(index) {
        const newTasks = [...task]; // Cria uma cópia da lista de tarefas
        newTasks.splice(index, 1); // Remove a tarefa no índice especificado
        setTask(newTasks); // Atualiza o estado com a nova lista
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>

            {/* Campo de entrada para a tarefa */}
            <input type="text" id="task" placeholder="Digite sua tarefa" />

            {/* Botão para adicionar tarefa */}
            <button onClick={() => addTask()}>Adicionar</button>

            {/* Lista de tarefas */}
            <ul>
                {task.map((task, index) => (
                    <li key={index}>
                        {/* Exibe o texto da tarefa */}
                        {task}

                        {/* Botão para remover a tarefa */}
                        <button onClick={() => removeTask(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList