function sumar(a, b) {
    console.log(a + b);
    }
    // 5
    sumar(2, 3);
    // NaN (undefined + undefined)
    sumar();
    // 3
    sumar(1, 2);
    // 3
    sumar(1, 2, 3, 4);
    // 12 174
    sumar('1', 2);
    // 12
    sumar(1, '2');
const sumar = function
        console.log (a + b);
    
    // 5
    sumar(2, 3);
const a = {
        f: function() {
        console.log('Hola');
        }
        };
        // invocación utilizando la notación punto
        a.f();
        // invocación utilizando la notación con corchetes
        a['f']();
        (function saludar() {
            console.log('Hola');
            })();
            // error
            saludar();
            function hacerAlgo(a, b) {
                this.a = a;
                175
                this.b = b;
                }
                // creación del objeto
                const b = new hacerAlgo(1,2);
                // error porque b es un objeto
                b();
                // 1
                console.log(b.a);
                // 2
                console.log(b.b);
                // undefined
                console.log(this.a);
                function hacerAlgo(a, b) {
                    this.a = a;
                    175
                    this.b = b;
                    }
                    // creación del objeto

                    const b = new hacerAlgo(1,2);
                    // error porque b es un objeto
                    b();
                    // 1
                    console.log(b.a);
                    // 2
                    console.log(b.b);
                    // undefined
// función normal
function funcion(altura) {
    return 5 * altura / 2;
    };
    // función de flecha
    const funcion1 = (altura) => {
    return 5 * altura / 2;
    };
    // forma simplificada de la función de flecha
    const funcion2 = altura => 5 * altura / 2;onsole.log(this.a);

    setTimeout(() => {
        console.log('Hola');
        setTimeout(() => {
        console.log('Adiós');
        }, 500);
        }, 1000)
        setTimeout(() => {
        console.log('Buenas dias');
        }, 100)
        console.log('Buenos tardes');
        setTimeout(() => {
            console.log('Esta instrucción se ejecuta después de 5 segundos');
            }, 5000);
            setInterval(() => {
            console.log('Esta instrucción se ejecuta cada 5 segundos');
            }, 5000);
            