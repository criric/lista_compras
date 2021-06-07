var itens = [];

var adicionar = document.querySelector("input[type=submit]");

adicionar.addEventListener("click", ()=>{
    var nome_produto = document.querySelector("input[name=nome_produto]");
    var preco_produto = document.querySelector("input[name=valor_produto]");
    
    itens.push({
        nome: nome_produto.value,
        valor: preco_produto.value
    });

    let lista = document.querySelector(".lista-produtos");
    let soma = 0;
    lista.innerHTML = "";

    itens.map(function(val){  
        soma+=parseFloat(val.valor);
        lista.innerHTML+=`
        <div class = "lista-produtos-single">
            <h3 class="produto"><span>`+val.nome+`</span></h3>
            <h3 class="preço"><span>R$`+val.valor+`</span></h3>
        </div>
        `;
    })

    

    soma = soma.toFixed(2);
    nome_produto.value = "";
    preco_produto.value = "";

    let somaProduto = document.querySelector(".soma-produto h1");
        somaProduto.innerHTML = "Total: R$"+soma;
})

document.querySelector("button[name=limpar]")
.addEventListener("click", ()=>{
    itens = [];
    document.querySelector(".lista-produtos").innerHTML = '';
    document.querySelector(".soma-produto h1").innerHTML = 'Total: '
})


/*
<div class = "lista-produtos">
    <div class = "lista-produtos-single">
        <h3 class="produto"><span>Produto</span></h3>
        <h3 class="preço"><span>Preço</span></h3>
</div>
*/