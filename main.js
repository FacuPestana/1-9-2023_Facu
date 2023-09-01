function cuadrado (num)
{
   return num * num 
}

function cubo (num)
{
    return num * num * num
}

function OperacionA (x)
{
    let resultado = cuadrado (x) - x - 10
    return resultado
}

function OperacionB (x)
{
    let resultado = (x-3)*2
    return resultado
}

function OperacionC (x)
{
    let resultado = (x) * cuadrado(x) + 20
    return resultado
}

function OperacionD (x)
{
    let resultado = (x/2) +5
    return resultado 
}

function OperacionE (x)
{
    let resultado = (x^3+x^2+10)
    return resultado
}

function OperacionF (x)
{
    let resultado = ((x*10)*5)
    return resultado
}