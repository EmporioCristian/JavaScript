console.group('Cuadrado')
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCudrado = ladoCuadrado*ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCudrado,
});

function calcularCuadrado(lado){
    return{
        perimetro: lado*4,
        area: lado*lado,
    }
}
console.groupEnd('Cuadrado')

console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo =5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) /2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
})

function calcularTriangulo(lado1, lado2, base, altura){
    return{
        perimetro: lado1+lado2+base,
        area: (base*altura)/2,
    }
}
console.groupEnd('Triangulo')

console.group('Circulo')

const radioCirculo = 3;
const diametroCirculo =  radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo + PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
})

console.groupEnd('Circulo')