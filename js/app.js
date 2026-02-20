const verifica01 = document.getElementById('valor01').value;
const verifica02 = document.getElementById('valor02').value;

function calcularTotal(){

    const v1 = parseFloat(verifica01.value)
    const v2 = parseFloat(verifica02.value)

    if (isNaN(v1) || isNaN(v2)) {
        resultado.innerHTML = `<P>Preencha todos os campo corretamente</P>`
        
    }else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>

            <li>Total da Compra</li>   
            <li> Você está adquirindo <span>${v1}</span> unidade(s) com valor unitario de R$ <span> ${ v1.toFixed(2) } </span> </li>
            <li>O Valor total da compra: R$  = <span> ${v1 * v2} </span> </li>
        </ul>
        `
    }

};

function juros(){

    const v1 = parseFloat(verifica01.value)
    const v2 = parseFloat(verifica02.value)
    
    if (isNaN(v1) || isNaN(v2)) {
        resultado.innerHTML = `<P>Preencha todos os campo corretamente</P>`
        
    }else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>
            <li>Total da Compra</li>   
            <li> F oi aplicado um acréscimo de <span> ${v1} </span>% sobre o valor de R$<span> ${v2.toFixed(2)} </span></li>      
            <li>Valor final com juros: R$ = <span> ${((v1 * v2) / 100) + v1}</</span> </li>
        </ul>
        `
    }

};

function desconto(){

    const v1 = parseFloat(verifica01.value)
    const v2 = parseFloat(verifica02.value)


    if (isNaN(v1) || isNaN(v2)) {
        resultado.innerHTML = `<P>Preencha todos os campo corretamente</P>`
    

        
    }else {

        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>

            <li>Total da Compra</li>   

            <li>Foi aplicado um desconto de <span> ${v1} </span>% sobre o valor de R$ <span> ${v2.toFixed(2)} </span></li>

            <li>Valor final com desconto: R$ = <span> ${(v1 * v2) / 100 } </</span> </li>
        </ul>
        `
    }

};

function comissao(){

    const v1 = parseFloat(verifica01.value)
    const v2 = parseFloat(verifica02.value)

    if (isNaN(v1) || isNaN(v2)) {
        resultado.innerHTML = `<P>Preencha todos os campo corretamente</P>`
        
    }else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>

            <li>Total da Compra</li>   

            <li> Comissão de <span>${v1}</span> % sobre uma venda de R$<span>${v2.toFixed(2)}</span> </li>       
            <li>Valor da comissão: R$ <span>${(v1 * v2) / 100 }</</span> </li>
        </ul>
        `
    }

};

function lucro(){

    const v1 = parseFloat(verifica01.value)
    const v2 = parseFloat(verifica02.value)
    
    if (isNaN(v1) || isNaN(v2)) {
        resultado.innerHTML = `<P>Preencha todos os campo corretamente</P>`
        
    }else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>

            <li>Lucro Obtido </li>
            <li>Preço da venda R$ <span>${v2.toFixed(2)} </span> | Custo R$ <span>${v2.toFixed(2)} </li>       
            <li>Resultado Financeiro R$ <span>${v2 - v1}</</span> </li>
        </ul>
        `
    }
 
};

function limpar(){

    resultado.style.display = 'none'
    // Limpar campos de valores
    v1.value = ''
    v2.value = ''

}


