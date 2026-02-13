function calcularTotal(){

    const verifica01 = document.getElementById('valor01').value;
    const verifica02 = document.getElementById('valor02').value;

    

    if (isNaN(verifica01) || isNaN(verifica02)) {
        alert("Preencha todos os campos")
        
    }else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>

            <li>Valor Item Comprado: <span> ${v1} </span> </li>
            <li>Quantidade: <span>${v2}</span> </li>       
            <li>O Valor total da compra é de:  = <span>${v1 * v2}</span> </li>
        </ul>
        `
    }

};

function juros(){

    const verifica01 = document.getElementById('valor01').value;
    const verifica02 = document.getElementById('valor02').value;

    
    if (isNaN(verifica01) || isNaN(verifica02)) {
        alert("Preencha todos os campos")
        
    }else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>

            <li>Preço total: <span> ${v1} </span> </li>
            <li>Seu desconto: <span>${v2}</span> </li>       
            <li>Valor final com juros:  = <span>${((v1 * v2) / 100) + v1}</</span> </li>
        </ul>
        `
    }

};

function desconto(){

    const verifica01 = document.getElementById('valor01').value;
    const verifica02 = document.getElementById('valor02').value;

    
    if (isNaN(verifica01) || isNaN(verifica02)) {
        alert("Preencha todos os campos")
        
    }else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>

            <li>Preço total: <span> ${v1} </span> </li>
            <li>Seu desconto: <span>${v2}</span> </li>       
            <li>Com o desconto da compra o valor é:  = <span>${(v1 * v2) / 100}</</span> </li>
        </ul>
        `
    }

};

function comissao(){

    const verifica01 = document.getElementById('valor01').value;
    const verifica02 = document.getElementById('valor02').value;

    
    if (isNaN(verifica01) || isNaN(verifica02)) {
        alert("Preencha todos os campos")
        
    }else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>

            <li>Comissão calculada: <span> ${v1} </span> </li>
            <li>Valor 02: <span>${v2}</span> </li>       
            <li>Valor da comissão:  = <span>${v1 / v2}</</span> </li>
        </ul>
        `
    }

};

function lucro(){

    const verifica01 = document.getElementById('valor01').value;
    const verifica02 = document.getElementById('valor02').value;

    
    if (isNaN(verifica01) || isNaN(verifica02)) {
        alert("Preencha todos os campos")
        
    }else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `
        <ul>

            <li>Valor 02: <span> ${v1} </span> </li>
            <li>Valor 01: <span>${v2}</span> </li>       
            <li>O lucro da compra é de:  = <span>${v1 - v2}</</span> </li>
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


