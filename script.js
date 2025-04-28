function adicionarTarefa() {

    //recebe valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    const campoMensagem = document.getElementById("mensagem")

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


    //cria novo item (li) e insere na (lista ul)
    const listaTarefas = document.getElementById("listaTarefas")
    const novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefa
    listaTarefas.appendChild(novaTarefa)

    //limpa o input do usuário
    inputTarefa.value = ""
}
