function puntoNumero(input){
    let valor = input.value.replace(/\./g, '');

    if(!isNaN(valor && valor !== '')){
        valor=valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    }

    input.value=valor;
}  
