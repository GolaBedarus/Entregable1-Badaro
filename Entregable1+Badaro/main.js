let titulo1 = "NUEVOS DROPS MUY PRONTO"
let titulo2 = "SUSCRIBITE AL NEWSLETTER PARA RECIBIR MAS NOTICIAS!"

for (let index = 1; index <= 2 ; index++) {
    if(index === 1 ){
        alert(titulo1)
    }else{
        alert(titulo2)
    }
    
}

let OpcionSiBuzo = "PLACEBO UTOPIA 2022 SEASON"
let OpcionSiBuzo2= "PLACEBO GUILTY PLEASURES 2023 EDITION"
let OpcionSiRemera= "PLACEBO BEACH SUMMER 2024 EDITION"
let OpcionSiRemera2= "PLACEBO CROP 2024 EDITION"


let opcion;
let bandera = true 

    do {
        opcion = prompt("Bienvenido a Placebo World! Para esta temporada, contamos con stock de Buzos y Remeras, por favor elija alguna de estas opciones para ver nuestras ofertas")
        if(opcion == "Buzos" || opcion == "Remeras"){
            bandera = false 
        }
    } while (bandera);

let OpcionElegida = prompt("Usted ha elegido la opcion " + opcion + ", Por favor, especifique su presupuesto ");


if(OpcionElegida == 20000 && opcion == "Buzos"){
    alert("Las opciones disponibles son: " + OpcionSiBuzo)
} else if (OpcionElegida == 30000 && opcion == "Buzos"){
    alert("Las opciones disponibles son: " + OpcionSiBuzo2)
} else if(OpcionElegida == 15000 && opcion == "Remeras"){
    alert("Las opciones disponibles son: " + OpcionSiRemera)
} else if(OpcionElegida == 20000 && opcion == "Remeras"){
    alert("Las opciones disponibles son: " + OpcionSiRemera2)
} else{
    alert("Disculpe, no poseemos ofertas para ese nivel de presupuesto")
}

let PreguntaDeCompra = confirm("¿Desea usted comprar este producto?")

let RegistroNombreUsuario = prompt("Para completar su compra, por favor registre un nombre de Usuario")

const NombreUsuarioArray = []
NombreUsuarioArray.push(RegistroNombreUsuario)

let RegistroPassword = prompt("Por favor ingrese una contraseña")

const PasswordArray = []
PasswordArray.push(RegistroPassword)

let RegistroEmail = prompt("Ingrese una direccion de correo electronico")

const EmailArray = []
EmailArray.push(RegistroEmail)

let AvisoFinal = confirm("Usted se ha registrado correctamente, ahora será redirigido a la página de compra")
