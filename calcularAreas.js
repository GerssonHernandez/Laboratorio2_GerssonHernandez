//Crear funcion para llamar funciones y calcular el area

let calcSurface= (figure)=>{
    const surfaces =require('./surfaces.js');

    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    //Validar la figura a calcular

    switch (figure) {
        case 'cuadrado':
            process.stdout.write('Por favor ingrese le lado de un cuadrado:');
            process.stdin.on('data',(chunk) =>{
                let side=parseFloat(chunk);
                let surface =surfaces.cuadrado(side);
                process.stdout.write('La superficie del caudrado es '+surface+' metros cuadrados\n');
                process.stdin.destroy();

            });
            break;
    case 'triangulo':
        process.stdout.write('Por favor ingrese la base y la altura de un triangulo, separado por un espacio');
        process.stdin.on('data',(chunk)=>{
                let baseAndHeight =chunk.split(' ');
                let base =parseFloat(baseAndHeight[0]);
                let height= parseFloat(baseAndHeight[1]);
                let surface=surfaces.triangulo(base,height);
                process.stdout.write('La superfice del triangulo es: '+surface+' metros cuadrados\n');
                process.stdin.destroy();

        })
        break;
     
        case 'rectangulo':
                process.stdout.write('Por favor ingrese la base y la altura de un rectangulo, separado por un espacio ');
                process.stdin.on('data',(chunk)=>{
                        let baseAndHeight =chunk.split(' ');
                        let base =parseFloat(baseAndHeight[0]);
                        let height= parseFloat(baseAndHeight[1]);
                        let surface=surfaces.rectangulo(base,height);
                        process.stdout.write('La superfice del rectangulo es: '+surface+' metros cuadrados\n');
                        process.stdin.destroy();
        
                }) 
        break;

        case 'circulo':
            process.stdout.write('Por favor ingrese el radio de un circulo');
            process.stdin.on('data',(chunk) =>{
                let radio=parseFloat(chunk);
                let surface =surfaces.circulo(radio);
                process.stdout.write('La superficie del caudrado es '+surface+' metros cuadrados\n');
                process.stdin.destroy();

            });
            break;

         case 'elipse':
                    process.stdout.write('Por favor ingrese el radio 1 y el radio 2 , separado por un espacio ');
                    process.stdin.on('data',(chunk)=>{
                            let baseAndHeight =chunk.split(' ');
                            let base =parseFloat(baseAndHeight[0]);
                            let height= parseFloat(baseAndHeight[1]);
                            let surface=surfaces.elipse(base,height);
                            process.stdout.write('La superficie de elipse es: '+surface+' metros cuadrados\n');
                            process.stdin.destroy();
            
                    })
                    break;
        default:
            break;
    }
}
calcSurface(process.argv[2]);
process.on('exit',()=> {
    process.stdout.write('Hasta Luego!\n');
});