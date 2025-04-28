// array para armazenar as tarefas (declarado fora da função)
let listaDeTarefas = []

function adicionarTarefa() {
    //recebe valor do input do usuário
    const listaTarefas = document.getElementById("listaTarefas")
    const inputTarefa = document.getElementById("inputTarefa")
    const campoMensagem = document.getElementById("mensagem")
    let tarefa = inputTarefa.value.trim()

    listaTarefas.innerHTML = "" // limpa a lista antes de adicionar a nova tarefa

    //checa se o input está vazio
    if (tarefa === "") {
        const mensagemErro = "Por favor, insira uma tarefa!"
        campoMensagem.textContent  = mensagemErro
        campoMensagem.style.color = "red"
        return
    } 

    //mensagem de tarefa adicionada com sucesso
    const mensagem = "Tarefa adicionada com sucesso!"
    campoMensagem.textContent = mensagem
    campoMensagem.style.color = "green"
    listaDeTarefas.push(tarefa) // adiciona a tarefa ao array
    console.log(listaDeTarefas)

    //cria novo item (li) e insere na (lista ul)
    listaDeTarefas.forEach(tarefa => {
        const novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    });

    //limpa o input do usuário
    inputTarefa.value = ""
}
