class Produtinho {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    Adicionai() {
        let product = this.leeDado()
        if(this.Validar(product) == true) {
            this.Salvar(product)
        }

        console.log(this.arrayProdutos)
        
    }

    leeDado() {
        let product = {}

        product.id = this.id;
        product.nomeProduto = document.getElementById('pdname').value
        product.precoProduto = document.getElementById('pdpreco').value

        return product
    }

    Validar(product) {
        let msg = '';

        if(product.nomeProduto == '') {
            msg += 'Insere certo o nome do produto ai garai \n'
        }

        if(product.precoProduto == '') {
            msg += 'Insere certo o preço do produto pou \n'
        }

        if(msg != '') {
            alert(msg)
            return false
        }

        return true
    }

    Salvar(product) {
        this.arrayProdutos.push(product)
        this.id++;

    }
}

var product = new Produtinho();