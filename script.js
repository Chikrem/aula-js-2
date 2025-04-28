// array para armazenar as tarefas (declarado fora da função)
let listaDeTarefas = []

const listaTarefas = document.getElementById("listaTarefas")
const inputTarefa = document.getElementById("inputTarefa")
const campoMensagem = document.getElementById("mensagem")

// Se listaDeTarefas estiver vazia

function adicionarTarefa() {
    //recebe valor do input do usuário
    let tarefa = inputTarefa.value.trim()
    
    const mensagemErro = "Por favor, insira uma tarefa!"
    const mensagem = "Tarefa adicionada com sucesso!"
    
    
    //checa se o input está vazio
    if (tarefa === "") {
        campoMensagem.textContent  = mensagemErro
        campoMensagem.style.color = "red"
        return
    } 
    
    //mensagem de tarefa adicionada com sucesso
    campoMensagem.textContent = mensagem
    campoMensagem.style.color = "green"
    listaDeTarefas.push(tarefa) // adiciona a tarefa ao array
    console.log(listaDeTarefas)
    
    //cria novo item (li) e insere na (lista ul)
    renderTarefas()
    
    //limpa o input do usuário
    inputTarefa.value = "" 
}

function renderTarefas() {
    
    listaTarefas.innerHTML = "" // limpa a lista ul antes de adicionar a nova tarefa
    
    listaDeTarefas.forEach(tarefa => {

        listaTarefas.innerHTML += `
        <div class="tarefa">
        <li>
        <span>${tarefa}</span>
        </li>
        <div class="area-botoes">
        <button class="remover" onclick="removerTarefa('${tarefa}')">Remover</button>
        <button class="editar" onclick="editarTarefa('${tarefa}')">Editar</button>
        </div>
        </div>
        `
    });
}

function removerTarefa(tarefa) {
    //remove a tarefa do array
    listaDeTarefas = listaDeTarefas.filter(item => item !== tarefa)
    console.log(listaDeTarefas)
    
    //renderiza a lista novamente
    renderTarefas()
    
    campoMensagem.textContent = "Tarefa removida com sucesso!"
    campoMensagem.style.color = "green"
}

function editarTarefa(tarefa) {
    //pega o valor do input
    let novaTarefa = prompt("Digite a nova tarefa:", tarefa)
    
    //verifica se o input não está vazio
    if (novaTarefa.trim() === "") {
        campoMensagem.textContent = "Por favor, insira uma tarefa!"
        campoMensagem.style.color = "red"
        return
    }
    
    //substitui a tarefa antiga pela nova
    listaDeTarefas = listaDeTarefas.map(item => item === tarefa ? novaTarefa : item)
    
    //renderiza a lista novamente
    renderTarefas()
    
    campoMensagem.textContent = "Tarefa editada com sucesso!"
    campoMensagem.style.color = "green"
}

function limparLista() {
    listaDeTarefas = []
    listaTarefas.innerHTML = ""
    campoMensagem.textContent = "Lista limpa com sucesso!"
    campoMensagem.style.color = "green"
}
