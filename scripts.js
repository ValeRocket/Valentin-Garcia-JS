
function plazoFijo(numero1, numero2, numero3) {
    return numero1 * numero2 / numero3;
}

class Usuario {
     constructor (nombre, apellido, capital){
        this.nombre = nombre;
        this.apellido = apellido;
        this.capital = capital;
    }
}

let botonCalcular = document.querySelector("#botonCalcular");
botonCalcular.addEventListener("click", () => { 
    let capital = parseFloat(document.querySelector("#capital").value)
    let resultado = capital * plazoFijo(0.3, 30, 365); 
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;

    document.querySelector("#resultado").value = parseInt(resultado); 
    document.querySelector("#resultNombre").value = nombre;
    document.querySelector("#resultApellido").value = apellido;
    let vip = document.querySelector("#resultadoTotal").value = parseInt(capital + resultado);
        if(vip > 100000){
            let zonaVip = document.getElementById("zonaVip");
            zonaVip.innerHTML = "<h2 class =h2vip >Su capital supera los $100.000, puede acceder al SocialClub</h2> <button id=botonVip class=button>INGRESAR</button>"

            let sociosVip = []
            new Usuario()

            let botonVip = document.querySelector("#botonVip");
            botonVip.addEventListener("click", () => {
                const usuario1 = new Usuario(nombre, apellido,vip);
                swal({
                    title: "Bienvenido al SocialClub!",
                    text: "Vea sus datos en consola",
                    icon: "success",
                    button: "ACEPTAR",
                  });
                sociosVip.push(Usuario)
                console.log(usuario1)

                const almacenamiento = (nombre,apellido,capital) => {localStorage.setItem(nombre,apellido,capital)}
                almacenamiento("listaUsuarios" , JSON.stringify(usuario1))
                
                JSON.stringify(localStorage.getItem(usuario1))
            })
        }

        
    } 
)

