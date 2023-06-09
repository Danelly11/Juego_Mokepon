const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")

const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanFotoJugador = document.getElementById("imagen-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanFotoEnemigo = document.getElementById("imagen-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const imagenAtaqueJugador = document.getElementById("ataque-imagen-jugador")

const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")
const imagenAtaqueEnemigo = document.getElementById("ataque-imagen-enemigo")


let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputSquartle 
let inputBulbasaur 
let inputCharmander 
let mascotaJugador
let mascotaAleatoria
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
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

class imagen {
    constructor (nombre1, foto1) {
        this.nombre1 = nombre1
        this.foto1 = foto1
    }
}

let imagenAtaqueFuego = new imagen("Fuego", "./Assets/Fuego.png")
let imagenAtaqueAgua = new imagen("Agua", "./Assets/Agua.png")
let imagenAtaqueTierra= new imagen ("Tierra", "./Assets/Tierra.png") 

let Squartle = new Mokepon ("Squartle", "./Assets/Hipodogue.png", 5,)
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
    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {    
    sectionSeleccionarMascota.style.display = "none"    
    sectionSeleccionarAtaque.style.display = "flex"    
    
    if (inputSquartle.checked) {        
        mascotaJugador = inputSquartle.id
        spanFotoJugador.innerHTML = `<img src=${Squartle.foto} alt=${Squartle.nombre} id= "mascota-jugador-imagen">`                   
    } else if (inputBulbasaur.checked) {        
        mascotaJugador = inputBulbasaur.id
        spanFotoJugador.innerHTML = `<img src=${Bulbasaur.foto} alt=${Bulbasaur.nombre} id= "mascota-jugador-imagen">`
    } else if (inputCharmander.checked) {        
        mascotaJugador = inputCharmander.id
        spanFotoJugador.innerHTML = `<img src=${Charmander.foto} alt=${Charmander.nombre} id= "mascota-jugador-imagen">`
    } else {
        alert("Selecciona una mascota")
    }    
    extraerAtaques (mascotaJugador)
    seleccionarMascotaEnemigo ()
}

function extraerAtaques (mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }        
    }   
    mostrarAtaques(ataques)
}

function mostrarAtaques (ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = ` 
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>        
        `
        contenedorAtaques.innerHTML +=ataquesMokepon
    })

    botonFuego = document.getElementById ("boton-fuego")
    botonAgua = document.getElementById ("boton-agua")
    botonTierra = document.getElementById ("boton-tierra")
    botones = document.querySelectorAll(".BAtaque")        
}

function secuenciaAtaque () {
    
    botones.forEach((boton) => {        
        boton.addEventListener("click", (e) => { 
            console.log(e.target.textContent)         
            if (e.target.textContent === "Fuego") {
                ataqueJugador.push("FUEGO")                                
                boton.style.background = "#FFE5CA"
                boton.disabled = true
                imagenAtaqueJugador.innerHTML = `<img src=${imagenAtaqueFuego.foto1} alt=${imagenAtaqueFuego.nombre1} id= "ataque-imagen-jugador">`  
            } else if (e.target.textContent === "Agua") {
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = "#FFE5CA"
                boton.disabled = true
                imagenAtaqueJugador.innerHTML = `<img src=${imagenAtaqueAgua.foto1} alt=${imagenAtaqueAgua.nombre1} id= "ataque-imagen-jugador">`  
            } else { 
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador) 
                boton.style.background = "#FFE5CA" 
                boton.disabled = true
                imagenAtaqueJugador.innerHTML = `<img src=${imagenAtaqueTierra.foto1} alt=${imagenAtaqueTierra.nombre1} id= "ataque-imagen-jugador">`
            } 
            ataqueAleatorioEnemigo ()
        })        
    })    
}


function seleccionarMascotaEnemigo () {
    mascotaAleatoria = aleatorio (0, mokepones.length -1)    
      
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques   
    spanFotoEnemigo.innerHTML = `<img src=${mokepones[mascotaAleatoria].foto} alt=${mokepones[mascotaAleatoria].nombre} id= "mascota-enemigo-imagen">`
    secuenciaAtaque ()
}

function ataqueAleatorioEnemigo() {   
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("FUEGO")
        imagenAtaqueEnemigo.innerHTML = `<img src=${imagen[ataqueAleatorio].foto1} alt=${imagen[ataqueAleatorio].nombre1} id= "ataque-imagen-enemigo">`        
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push("AGUA")
    } else {
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea (){
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}


function combate () {   
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] == ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")            
        } else if (ataqueJugador[index] == "FUEGO" && ataqueEnemigo[index] == "TIERRA") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador            
        } else if (ataqueJugador[index] == "AGUA" && ataqueEnemigo[index] == "FUEGO") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] == "TIERRA" && ataqueEnemigo[index] == "AGUA") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas ()
}

function revisarVidas (){
    if (victoriasJugador == victoriasEnemigo ){
        crearMensajeFinal ("Esto fue un EMPATE")
    } else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal ("FELICITACIONES Ganaste :)")        
    } else {
        crearMensajeFinal ("Lo siento Perdiste :(")
    }
}

function crearMensaje (resultado) {
    let nuevoAtaqueDelJugador = document.createElement("p")    
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    /*nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador*/
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal (resultadoFinal) {    
    sectionMensajes.innerHTML = resultadoFinal
    
   
    
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego () {
    location.reload()
}

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load",iniciarJuego)
