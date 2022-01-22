// usando a notação literal
const obj1 = {}
console.log(obj1)

// objeto em JS
console.log(typeof Object,'/', typeof new Object)
const obj2 = new Object 
console.log(obj2)

//Funções construtoras 
function Produto(nome, preco, desc){
    /*O this nesse contexto deixa as variáveis/funcoes 
    associadas visíveis fora do bloco da funcao*/
    this.nome = nome
    this.getPrecoDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoDesconto(),'/',p2.getPrecoDesconto())

//Funcao Factory, uma funcao, que retorna um objeto com os dados passados por parâmetros, pode ser usado infinitas vezes
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/ 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(),'/', f2.getSalario())

/* Object.create cria um novo objeto , 
utilizando um outro objecto existente como protótipo para o novo objeto a ser criado.*/

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma famosa funcao que retorta Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)