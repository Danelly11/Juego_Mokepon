const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById ("boton-fuego")
const botonAgua = document.getElementById ("boton-agua")
const botonTierra = document.getElementById ("boton-tierra")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")


let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputSquartle 
let inputBulbasaur 
let inputCharmander 
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor (nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Squartle = new Mokepon ("Squartle", "./Assets/Hipodogue.png", 5)
let Bulbasaur = new Mokepon ("Bulbasaur", "./Assets/Capipepo.png", 5)
let Charmander = new Mokepon ("Charmander", "./Assets/Ratigueya.png", 5)

Squartle.ataques.push(
    {nombre: "Agua", id: "boton-agua"},
    {nombre: "Agua", id: "boton-agua"},
    {nombre: "Agua", id: "boton-agua"},
    {nombre: "Fuego", id: "boton-fuego"},
    {nombre: "Tierra", id: "boton-tierra"},
)

Bulbasaur.ataques.push(
    {nombre: "Tierra", id: "boton-tierra"},
    {nombre: "Tierra", id: "boton-tierra"},
    {nombre: "Tierra", id: "boton-tierra"},
    {nombre: "Fuego", id: "boton-fuego"},
    {nombre: "Agua", id: "boton-agua"},
)

Charmander.ataques.push(
    {nombre: "Fuego", id: "boton-fuego"},
    {nombre: "Fuego", id: "boton-fuego"},
    {nombre: "Fuego", id: "boton-fuego"},
    {nombre: "Agua", id: "boton-agua"},
    {nombre: "Tierra", id: "boton-tierra"},
)

mokepones.push(Squartle,Bulbasaur,Charmander)

function iniciarJuego() {    
    sectionSeleccionarAtaque.style.display = "none"

    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = ` 
        <input type="radio" name="mascota" id=${Mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${Mokepon.nombre} >
            <p>${Mokepon.nombre} </p>
            <img src=${Mokepon.foto} alt=${Mokepon.nombre} >
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputSquartle = document.getElementById("Squartle")
    inputBulbasaur = document.getElementById("Bulbasaur")
    inputCharmander = document.getElementById("Charmander")
    
    })

    sectionReiniciar.style.display = "none"    
    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)
    
    botonFuego.addEventListener("click",ataqueFuego)    
    botonAgua.addEventListener("click",ataqueAgua)    
    botonTierra.addEventListener("click",ataqueTierra)
    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {    
    sectionSeleccionarMascota.style.display = "none"    
    sectionSeleccionarAtaque.style.display = "flex"    
    
    if (Mokepon.nombre) {
        spanMascotaJugador.innerHTML ="Squartle"
    } else if (Mokepon.nombre) {
        spanMascotaJugador.innerHTML ="Bulbasaur"
    } else if (Mokepon.nombre) {
        spanMascotaJugador.innerHTML ="Charmander"
    } else {
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo ()
}

function seleccionarMascotaEnemigo () {
    let mascotaAleatoria = aleatorio (1,3)    

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Squartle"
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Bulbasaur"
    } else {
        spanMascotaEnemigo.innerHTML = "Charmander"
    }
}

function ataqueFuego () {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua () {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra () {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    combate()
}

function combate () {   
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE")
        vidasEnemigo--
         spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTE")
        vidasEnemigo--
         spanVidasEnemigo.innerHTML = vidasEnemigo
    } else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas ()
}

function revisarVidas (){
    if (vidasEnemigo == 0 ){
        crearMensajeFinal ("FELICITACIONES Ganaste :)")
    } else if (vidasJugador == 0){
        crearMensajeFinal ("Lo siento Perdiste :(")
    } 
}

function crearMensaje (resultado) {
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal (resultadoFinal) {    
    sectionMensajes.innerHTML = resultadoFinal
    
    botonFuego.disabled = true    
    botonAgua.disabled = true    
    botonTierra.disabled = true
    
    sectionReiniciar.style.display = "flex"
}

function reiniciarJuego () {
    location.reload()
}

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load",iniciarJuego)
