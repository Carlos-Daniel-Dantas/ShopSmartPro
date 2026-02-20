
const input01 = document.getElementById('valor01')
const input02 = document.getElementById('valor02')
const resultado = document.getElementById('resultado')

//  terminado
function calcularTotal(){

    const v1 = parseFloat(input01.value)
    const v2 = parseFloat(input02.value)

    if (isNaN(v1) || isNaN(v2)) {

        resultado.style.display = 'flex'

        resultado.innerHTML = `
        <h2>Erro na validação<h2>

        <p>Por favor, preencha todos os campos com apenas números</p>
        `
    }else {

        total = v1 * v2

        resultado.style.display = 'flex'

        resultado.innerHTML = `
        <h2>Total da Compra<h2>
            <ul>
                <li>Você está adquirindo ${v2} unidade(s) com valor unitário de R$ ${v1.toFixed(2)}.</li>
                <li>Valor total da compra: R$ ${total.toFixed(2)}</li>
            </ul>
        `;
    };

};

//  terminado
function juros(){


    const v1 = parseFloat(input01.value)
    const v2 = parseFloat(input02.value)

    if (isNaN(v1) || isNaN(v2)) {

        resultado.style.display = 'flex'

        resultado.innerHTML = `
        <h2>Erro na validação<h2>

        <p>Por favor, preencha todos os campos com apenas números</p>
        `

        
    }else {

        juros_total = v1 + v2

        resultado.style.display = 'flex'

        resultado.innerHTML = `

        <ul>
            <li>Total da Compra</li>   
            <li> F oi aplicado um acréscimo de <span> ${v1} </span>% sobre o valor de R$<span> ${v2.toFixed(2)} </span></li>      
            <li>Valor final com juros: R$  <span> ${juros_total.toFixed(2)}</</span> </li>
        </ul>
        `
    }

};

// terminado
function desconto(){

    const v1 = parseFloat(input01.value)
    const v2 = parseFloat(input02.value)

    if (isNaN(v1) || isNaN(v2)) {

        resultado.style.display = 'flex'

        resultado.innerHTML = `
        <h2>Erro na validação<h2>

        <p>Por favor, preencha todos os campos com apenas números</p>
        `

    
    }else {

        descontov = (v2 / 100) * v1

        descontov2 = v1 - descontov

        resultado.style.display = 'flex'

        resultado.innerHTML = `

        <ul>

            <li>Total da Compra</li>   

            <li>Foi aplicado um desconto de <span> ${v1} </span>% sobre o valor de R$ <span> ${v2.toFixed(2)} </span></li>

            <li>Valor final com desconto: R$  <span> ${descontov2.toFixed(2)} </</span> </li>
        </ul>
        `
    }

};

function comissao(){

    const v1 = parseFloat(input01.value)
    const v2 = parseFloat(input02.value)

    if (isNaN(v1) || isNaN(v2)) {

        resultado.style.display = 'flex'

        resultado.innerHTML = `
        <h2>Erro na validação<h2>

        <p>Por favor, preencha todos os campos com apenas números</p>
        `

    }else {

        resultado.style.display = 'flex'
        resultado.innerHTML = `
        <ul>

            <li>Total da Compra</li>   

            <li> Comissão de <span>${v1}</span> % sobre uma venda de R$<span>${v2.toFixed(2)}</span> </li>       
            <li>Valor da comissão: R$ <span>${(v1 * v2) / 100 }</</span> </li>
        </ul>
        `
    }

};

function lucro(){

    const v1 = parseFloat(input01.value)
    const v2 = parseFloat(input02.value)

    if (isNaN(v1) || isNaN(v2)) {

        resultado.style.display = 'flex'

        resultado.innerHTML = `
        <h2>Erro na validação<h2>

        <p>Por favor, preencha todos os campos com apenas números</p>
        `

    }else {

        resultado.style.display = 'flex'

        resultado.innerHTML = `

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


