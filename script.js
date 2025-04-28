let listaDeTarefas = []

const $listaTarefas = $("#listaTarefas")
const $inputTarefa = $("#inputTarefa")
const $campoMensagem = $("#mensagem")

function adicionarTarefa() {
    let tarefa = $inputTarefa.val().trim()
    
    const mensagemErro = "Por favor, insira uma tarefa!"
    const mensagem = "Tarefa adicionada com sucesso!"
    
    if (tarefa === "") {
        $campoMensagem.text(mensagemErro).css("color", "red")
        return
    }
    
    $campoMensagem.text(mensagem).css("color", "green")
    listaDeTarefas.push(tarefa)
    console.log(listaDeTarefas)
    
    renderTarefas()
    $inputTarefa.val("")
}

function renderTarefas() {
    $listaTarefas.empty()

    listaDeTarefas.forEach(tarefa => {
        $listaTarefas.append(`
            <div class="tarefa">
                <li>
                    <span>${tarefa}</span>
                </li>
                <div class="area-botoes">
                    <button class="remover" data-tarefa="${tarefa}">Remover</button>
                    <button class="editar" data-tarefa="${tarefa}">Editar</button>
                </div>
            </div>
        `)
    })
}

function removerTarefa(tarefa) {
    listaDeTarefas = listaDeTarefas.filter(item => item !== tarefa)
    renderTarefas()
    $campoMensagem.text("Tarefa removida com sucesso!").css("color", "green")
}

function editarTarefa(tarefa) {
    let novaTarefa = prompt("Digite a nova tarefa:", tarefa)

    if (!novaTarefa || novaTarefa.trim() === "") {
        $campoMensagem.text("Por favor, insira uma tarefa!").css("color", "red")
        return
    }

    listaDeTarefas = listaDeTarefas.map(item => item === tarefa ? novaTarefa : item)
    renderTarefas()
    $campoMensagem.text("Tarefa editada com sucesso!").css("color", "green")
}

function limparLista() {
    listaDeTarefas = []
    $listaTarefas.empty()
    $campoMensagem.text("Lista limpa com sucesso!").css("color", "green")
}

// Delegando os eventos (fora das funções)
$(document).on('click', '.remover', function() {
    const tarefa = $(this).data('tarefa')
    removerTarefa(tarefa)
})

$(document).on('click', '.editar', function() {
    const tarefa = $(this).data('tarefa')
    editarTarefa(tarefa)
})
