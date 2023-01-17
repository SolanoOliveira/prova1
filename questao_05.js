class Venda {
    constructor(id,quantidade,preco) {  
            this.id = id;
            this.quantidade = quantidade;
            this.preco = preco;
    }
    getValorTotal(){
        return this.preco * this.quantidade
    }
    getid(){
        return this.id
    }
    
    setid(id){
        this.id = id
    }
    
    getquantidade(){
        return this.quantidade
    }
    
    setquantidade(quantidade){
        this.quantidade = quantidade
    }
    
    getpreco(){
        return this.preco
    }
    
    setpreco(preco){
        this.preco = preco
    }
}

var v1 = new Venda(1,1,1)
var v2 = new Venda(2,2,2)

console.log(v1. getValorTotal())
console.log(v2. getValorTotal())