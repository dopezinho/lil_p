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

    Listar() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for(let i = 0; i < this.arrayProdutos.length; i++) {

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].precoProduto;
            let imagem = document.createElement('img')
            imagem.src = 'trash.png'
            td_del.appendChild(imagem)            

        }
    }
}

var product = new Produtinho();