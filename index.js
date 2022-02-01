
function resta (x,y)
{
    let resultado = x-y;
    return resultado;
}

console.log(resta(10,5));

function producto (x,y)
{
    let resultado = x*y;
    return resultado;
}

console.log(producto(5,5));

function division (x,y)
{
    let resultado = x/y;
    return resultado
}

console.log(division(50,10));

function cuadrado (x)
{
    let resultado = x**2;
    return resultado
}

console.log(cuadrado(5));

module.exports = {suma, resta, producto, division}