let hora = document.getElementById("hours")
let minutos = document.getElementById("minutes")
let segundos = document.getElementById("seconds")


const tiempo =() => { 
    let data = new Date();
    hora.innerHTML = data.getHours();  
    minutos.innerHTML = ": " + data.getMinutes(); 
    segundos.innerHTML = ": " +data.getSeconds(); 
}

setInterval(tiempo,1000); 


let dia = document.getElementById("day")
let mes = document.getElementById("month")
let anio = document.getElementById("year")

const fecha =() => {
    let data = new Date();
    dia.innerHTML = data.getDate();  
    mes.innerHTML = "- " +( data.getMonth() +1); 
    anio.innerHTML = "- " + data.getFullYear(); 

}

console.log(fecha());


let diaDeHoy = document.getElementById("dia")

const elDiaDeHoyEs = () => {
    let data = new Date();
    diaDeHoy.innerHTML = data.getDay();

    if (data.getDay() === 1 ){
        diaDeHoy.innerHTML = "Lunes"
    }else if (data.getDay() === 2 ){
        diaDeHoy.innerHTML = "Martes"
    }else if (data.getDay() === 3 ){
        diaDeHoy.innerHTML = "Miercoles"
    }else if (data.getDay() === 4 ){
        diaDeHoy.innerHTML = "Jueves"
    }else if (data.getDay() === 5 ){
        diaDeHoy.innerHTML = "Viernes"
    }else if (data.getDay() === 6){
        diaDeHoy.innerHTML = "Sabado"
    }else if (data.getDay() === 7 ){
        diaDeHoy.innerHTML = "Domingo"}
    }

console.log(elDiaDeHoyEs());