document.addEventListener("DOMContentLoaded", function () {

    if(!vericarLogado()) {
        window.location.href = "login.html"
    }
    let usuarios = JSON.parse(localStorage.getitem("usuarios")) || [];

    const lista = document.getElementById("listaUsuarios");

    if(usuarios.length === 0){
        
        const li = document.createElement("li")
        li.textContent = "Nenhum usuário cadastrado";
        lista.appendChild(li);


    }else{
        usuarios.forEach(usuario => {
            const li = document.createElement("li")

            li.textContent = usuario.nome + " - " + usuario.email;

            lista.appendChild(li);
        });
    }
    onCadastrarClick();
});


function voltar(){
    window.location.href = "login-html";
    logout();
}

function onCadastrarClick(){
    const element = document.getElementById("btn-listar");
    element.classList.remove("btn-aba");
    element.classList.add("btn-aba-selecionado");
    document.getElementById("btn-cadastar").classList.add("btn-aba");
    document.getElementById("bnt-cadastar").classList.romove("btn-aba-selecionado");

    const listaCadastrados = document.getElementById("container-lista");
    listaCadastrados.style.display = "none";
}
function onCadastrarClick(){
    const element = document.getElementById("btn-cadastrar");
    element.classList.romove("btn-aba");
    element.classList.add("btn-aba-selecionado");
    document.getElementById("btn-listar").classList.add("btn-aba");
    document.getElementById("btn-listar").classList.romove("btn-aba-selecionado");

    const listaCadastrados = document.getElementById("container-cadastro");
    containerCadastro.style.display = "flex";
}

function cadastrarAtleta(event){
    event.preventDefault();


    let nome = getElementValue("input-nome-atleta");
    let nacionalidade = getElementValue("input-nacionalidade");
    let dtNascimento = getElementValue("input-dtNascimento");
    let cpf = getElementValue("input-cpf")
    let modalidade = getElementValue("input-modalidade");
    let genero = getElementValue("input-genero");
    let categoria = getElementValue("input-categoria");
    let peso = getElementValue("input-peso");
    let altura = getElementValue("input-altura");
    let tipoSanguineo = getElementValue("input-tipoSanguineo");
    let alergias = getElementValue("input-alergias");
    let historico = getElementValue("input-historico");

    const atleta = {
        nome: nome,
        nacionalidade: nacionalidade,
        dtNascimento: dtNascimento,
        cpf: cpf,
        modalidade: modalidade,
        genero: genero,
        categoria: categoria,
        peso: peso,
        altura: altura,
        tipoSanguineo: tipoSanguineo,
        alergias: alergias,
        historico: historico
    };

    let atletas = JSON.parse(localStorage.getItem("atletas")) || [];

    atletas.push(atleta);

    localStorage.setItem("atletas", JSON.stringify(atletas));

    setElementText("mensagem","Dados do " + nome + "cadastrados!");
    setElementDisplay("overlay","flex");
    resetFormCadastroAtleta();
}

function resetFormCadastroAtleta(){
    document.getElementById("container-cadastro").reset();
}

function abrirPerfil() {
    let menu = document.getElementById("perfil");
    if(menu.style.display != "flex")
        setElementDisplay("perfil", "flex");
}

function fecharPerfil() {
    setElementDisplay("perfil", "none");
}

function carregarTabela(){
    let atletas = JSON.parse(localStorage.getItem("atletas")) || [];

    let body = document.getElementById("tabela-atletas-body");

    if (atletas.length === 0) {
        body.innerHTML = "<tr><td colspan='12'> Nenhum Atleta Encontrado. </td></tr>";

    } else {

        body.innerHTML = atletas.map(function(atleta) {
            let htmlBody = "<tr>" +
            "<td>"+ atleta.nome + "</td>" +
            "<td>"+ atleta.nacionalidade + "</td>" +
            "<td>"+ atleta.dtNascimento + "</td>" +
            "<td>"+ atleta.cpf + "</td>" +
            "<td>"+ atleta.modalidade + "</td>" +
            "<td>"+ atleta.genero + "</td>" +
            "<td>"+ atleta.categoria + "</td>" +
            "<td>"+ atleta.peso + "</td>" +
            "<td>"+ atleta.altura + "</td>" +
            "<td>"+ atleta.tipoSanguineo + "</td>" +
            "<td>"+ atleta.alergias + "</td>" +
            "<td>"+ atleta.historico + "</td>" +
            "</tr>";
            return htmlBody;
        }).join("");
    }
}
