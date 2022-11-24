const{
    multiplica,
    divide,
    sonIguales,
    tienenMismaLongitud,
    menosQueNoventa,
    mayorQueCincuenta,
    obtenerResto,
    esPar,
    esImpar,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    deEuroAdolar,
} = require("./index2.js");
describe('multiplica(x,y)',function(){
    it("Deberia devolver la multiplicacion de x*y", function(){
        expect(multiplica(5,8)).toBe(40);
        expect(multiplica(2,3)).toBe(6);
    });
});
describe('divide(x,y)',function(){
    it("Deberia devolver la division de x/y", function(){
        expect(divide(10,2)).toBe(5);
        expect(divide(8,2)).toBe(4);
    });
});
describe('sonIguales(x,y)',function(){
    it("Deberia devolver la igualdad true o false", function(){
        expect(sonIguales(4,4)).toBe(true);
        expect(sonIguales(6,2)).toBe(false);
    });
});
describe('tienenMismaLongitud(str1,str2)',function(){
    it("Deberia devolver la misma longitud str1 == str2", function(){
        expect(tienenMismaLongitud("hola","care")).toBe(true);
        expect(tienenMismaLongitud("carelia","huaman")).toBe(false);
    });
});
describe('menosQueNoventa(num)',function(){
    it("Deberia devolver true si es < que 90", function(){
        expect(menosQueNoventa(89)).toBe(true);
        expect(menosQueNoventa(91)).toBe(false);
    });
});

describe('mayorQueCincuenta(num)',function(){
    it("Deberia devolver true si es > que 50", function(){
        expect(mayorQueCincuenta(60)).toBe(true);
        expect(mayorQueCincuenta(40)).toBe(false);
    });
});

describe('obtenerResto(x, y)',function(){
    it("Deberia devolver el resto de x, y", function(){
        expect(obtenerResto(21,5)).toBe(1);
        expect(obtenerResto(60,7)).toBe(4);
    });
});

describe('esPar(num)',function(){
    it("Deberia devolver si el numero es par", function(){
        expect(esPar(2)).toBe(true);
        expect(esPar(3)).toBe(false);
    });
});

describe('esImpar(num)',function(){
    it("Deberia devolver si el numero es Impar", function(){
        expect(esImpar(5)).toBe(true);
        expect(esImpar(2)).toBe(false);
    });
});

describe('elevar(num, exponent)',function(){
    it("Deberia devolver la ponencia", function(){
        expect(elevar(2, 3)).toBe(8);
        expect(elevar(4, 3)).toBe(64);
    });
});

describe('redondearNumero(num)',function(){
    it("Deberia devolver el redondeo del numero", function(){
        expect(redondearNumero(20.49)).toBe(20);
        expect(redondearNumero(20.5)).toBe(21);
    });
});

describe('redondearHaciaArriba(num)',function(){
    it("Deberia devolver redondeando hacia arriba", function(){
        expect(redondearHaciaArriba(2.01)).toBe(3);
        expect(redondearHaciaArriba(2.99)).toBe(3);
    });
});
describe('numeroRandom()',function(){
    it("Deberia dar resultado aleatorio entre 0 y 1", function(){
        expect(typeof numeroRandom()).toBe('number');
        expect(numeroRandom()).toBeGreaterThanOrEqual(0);
        expect(numeroRandom()).toBeLessThan(1);
    });
});

describe('esPositivo(numero)',function(){
    it("Deberia dar resultado si el numero es positivo", function(){
        expect(esPositivo(3)).toBe(1);
        expect(esPositivo(-2)).toBe(-1);
        expect(esPositivo(0)).toBe(0);

    });
});

describe('combinarNombres(nombre,apellido)',function(){
    it("Deberia concatenar los dos strings", function(){
        expect(combinarNombres("carelia","huaman")).toBe("careliahuaman");
        expect(combinarNombres("michell","valenzuela")).toBe("michellvalenzuela");

    });
});
describe('obtenerSaludo(nombre)',function(){
    it("Deberia concatenar los dos strings", function(){
        expect(obtenerSaludo("Martin")).toBe("HolaMartin!");
        expect(obtenerSaludo("Fabiana")).toBe("HolaFabiana!");

    });
});
describe('obtenerAreaRectangulo(alto, ancho)',function(){
    it("Deberia concatenar los dos strings", function(){
        expect(obtenerAreaRectangulo(5,3)).toBe(15);
        expect(obtenerAreaRectangulo(4,2)).toBe(8);

    });
});
describe('retornarPerimetro(lado)',function(){
    it("Deberia concatenar los dos strings", function(){
        expect(retornarPerimetro(5)).toBe(20);
        expect(retornarPerimetro(10)).toBe(40);

    });
});
describe('deEuroAdolar(euro)',function(){
    it("Deberia concatenar los dos strings", function(){
        expect(deEuroAdolar(5)).toBe(6);
        expect(deEuroAdolar(50)).toBe(60);

    });
});
