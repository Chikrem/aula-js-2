// array para armazenar as tarefas (declarado fora da função)
let listaDeTarefas = []

const listaTarefas = document.getElementById("listaTarefas")
const inputTarefa = document.getElementById("inputTarefa")
const campoMensagem = document.getElementById("mensagem")

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
        const novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    })
}
