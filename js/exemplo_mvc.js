// MODELO
let usuarios = [
    { id: 1, nome: "João", email: "joao@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" }
];

function modeloListar() {
    return usuarios;
}

function modeloBuscar(id) {
    return usuarios.find(u => u.id === id);
}

function modeloAdicionar(nome, email) {
    let novo = {
        id: usuarios.length + 1,
        nome: nome,
        email: email
    };
    usuarios.push(novo);
    return novo;
}

function modeloRemover(id) {
    let index = usuarios.findIndex(u => u.id === id);
    if (index >= 0) {
        usuarios.splice(index, 1);
        return true;
    }
    return false;
}

// VISÃO
function visaoMenu() {
    console.log("1 - Listar usuários");
    console.log("2 - Buscar usuário");
    console.log("3 - Adicionar usuário");
    console.log("4 - Remover usuário");
    console.log("0 - Sair");
}

function visaoListar(usuarios) {
    console.log("\n--- USUÁRIOS ---");
    if (usuarios.length === 0) {
        console.log("Nenhum usuário");
    } else {
        for (let u of usuarios) {
            console.log(`${u.id} - ${u.nome} (${u.email})`);
        }
    }
}

function visaoUsuario(usuario) {
    if (usuario) {
        console.log(`\nID: ${usuario.id}`);
        console.log(`Nome: ${usuario.nome}`);
        console.log(`Email: ${usuario.email}`);
    } else {
        console.log("\nUsuário não encontrado!");
    }
}

function visaoMensagem(texto) {
    console.log(`\n${texto}`);
}

// CONTROLE
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function controlePerguntar(texto) {
    return new Promise((resolve) => {
        rl.question(texto, resolve);
    });
}

async function controleIniciar() {
    let opcao = -1;
    
    while (opcao !== 0) {
        visaoMenu();
        opcao = parseInt(await controlePerguntar("Escolha: "));
        
        if (opcao === 1) {
            
            let lista = modeloListar();
            visaoListar(lista);
        }
        else if (opcao === 2) {
            
            let id = parseInt(await controlePerguntar("ID: "));
            let usuario = modeloBuscar(id);
            visaoUsuario(usuario);
        }
        else if (opcao === 3) {
            
            let nome = await controlePerguntar("Nome: ");
            let email = await controlePerguntar("Email: ");
            
            if (nome && email) {
                let novo = modeloAdicionar(nome, email);
                visaoMensagem(`Usuário ${novo.nome} adicionado!`);
            } else {
                visaoMensagem("Nome e email são obrigatórios!");
            }
        }
        else if (opcao === 4) {
            
            let id = parseInt(await controlePerguntar("ID: "));
            let usuario = modeloBuscar(id);
            
            if (usuario) {
                visaoUsuario(usuario);
                let confirmar = await controlePerguntar("Remover? (s/n): ");
                
                if (confirmar.toLowerCase() === 's') {
                    modeloRemover(id);
                    visaoMensagem("Usuário removido!");
                } else {
                    visaoMensagem("Cancelado!");
                }
            } else {
                visaoMensagem("Usuário não encontrado!");
            }
        }
        else if (opcao === 0) {
            visaoMensagem("Até logo!");
        }
        else {
            visaoMensagem("Opção inválida!");
        }
    }
    
    rl.close();
}

// INICIAR
controleIniciar();