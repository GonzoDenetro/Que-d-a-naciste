const año = document.getElementById('año')
const mes = document.getElementById('mes')
const dia = document.getElementById('dia')
const button = document.getElementById('boton')
const resultado = document.getElementById('result')

button.addEventListener('click', diasVivo)

function transformarMes(mes){
    switch (mes) {
        case 1:
            return 0
        case 2:
            return 1
        case 3:
            return 2
        case 4:
            return 3
        case 5:
            return 4
        case 6:
            return 5
        case 7:
            return 6
        case 8:
            return 7
        case 9:
            return 8
        case 10:
            return 9
        case 11:
            return 10
        case 12:
            return 11
        default:
            alert('Ese mes no existe')
            break;
    }
}

function diasVivo(){
    const year = Number(año.value)
    let month = Number(mes.value)
    const day = Number(dia.value)

    const fecha_usuario = new Date(year, month, day)
    const fecha_actual = new Date()

    if(month > 12 || day > 31 || year > fecha_actual.getFullYear(new Date())){
        if(month > 12){
            alert('Ese mes no existe')
        }
        if(day > 31){
            alert('Ese día no existe')
        }
        if(year > fecha_actual.getFullYear(new Date())){
            alert('Todavia no llegamos a ese año')
        }
    }
    else {
    month = transformarMes(month)
    
    //console.log(fecha_actual.getFullYear(new Date()))
    resultado.innerHTML =operacionDeDiasVivo(fecha_actual, fecha_usuario)    
    }
}

function operacionDeDiasVivo(fecha1, fecha2){
    const diferencia = Math.abs(fecha1 - fecha2)
    const undDia = 1000 * 60 * 60 * 24
    return Math.floor(diferencia / undDia)
}

/* const hoy = new Date()
                         // Año Mes Día             
const nacimiento = new Date(2002, 9, 14)

console.log(diasVivo(hoy, nacimiento)) */