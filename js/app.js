/*5- Crea una clase llamada Persona:
Propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
Metodos:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece 
la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
 */

class Persona{
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #añoNacimiento;

    constructor(nombre,edad,sexo,peso,altura,añoDeNacimiento){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#añoNacimiento = añoDeNacimiento;
        this.#dni = this.generarDNI();
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }
    get edad(){
        return this.#edad;
    }
    set edad(nuevaEdad){
        this.#edad = nuevaEdad;
    }
    get dni(){
        return this.#dni;
    }
    set dni(nuevoDni){
        this.#dni = nuevoDni;
    }
    get sexo(){
        return this.#sexo;
    }
    set sexo(cambioDeSexo){
        this.#sexo = cambioDeSexo;
    }
    get peso(){
        return this.#peso;
    }
    set peso(pesoActualizado){
        this.#peso = pesoActualizado;
    }
    get altura(){
        return this.#altura;
    }
    set altura(nuevaAltura){
        this.#altura = nuevaAltura;
    }
    get añoDeNacimiento(){
        return this.#añoNacimiento;
    }
    set añoDeNacimiento(añoCorregido){
        this.#añoNacimiento = añoCorregido;
    }

    mostrarGeneracion(){
        if(this.añoDeNacimiento >= 1994 && this.añoDeNacimiento <=2010){
            document.write(`<p>${this.nombre} pertenece a la generación Z, y su razgo caracteristico es la irreverencia 😋</p>`)
        }
        if(this.añoDeNacimiento >= 1981 && this.añoDeNacimiento <=1993){
            document.write(`<p>${this.nombre} pertenece a la generación Y (Millennials), y su razgo caracteristico es la frustración 😥</p>`)
        }
        if(this.añoDeNacimiento >= 1969 && this.añoDeNacimiento <=1980){
            document.write(`<p>${this.nombre} pertenece a la generación X, y su razgo caracteristico es la Obsesión por el exito 😎</p>`)
        }
        if(this.añoDeNacimiento >= 1949 && this.añoDeNacimiento <=1968){
            document.write(`<p>${this.nombre} pertenece a la generación Baby Boom, y su razgo caracteristico es la Ambición 🤑</p>`)
        }
        if(this.añoDeNacimiento >= 1930 && this.añoDeNacimiento <=1948){
            document.write(`<p>${this.nombre} pertenece a la generación Silent, y su razgo caracteristico es la Austeridad 😐</p>`)
        }
    }
    esMayor(){
        if(this.edad >= 18){
            document.write(`<p>${this.nombre} es mayor de edad</p>`);
        }else{
            document.write(`<p>${this.nombre} es menor de edad</p>`);
        }
    }
    mostrarDatos(){
        document.write(`<h2> Datos de ${this.nombre}</h2>`)
        document.write(`<ul>
                <li>Edad: ${this.edad}</li>
                <li>DNI: ${this.dni}</li>
                <li>sexo: ${this.sexo}</li>
                <li>Peso: ${this.peso} kg</li>
                <li>Altura: ${this.altura} cm</li>
                <li>Año de nacimiento: ${this.añoDeNacimiento}</li>
            </ul>`)
    }
    generarDNI(){
        this.dni= Math.floor(Math.random()*90000000)+10000000;
        return this.dni;
    }
}

 
const datosPersona = (e) => {
 e.preventDefault();
 console.log('***** DATOS DE LA PERSONA*****')
 const nombre = document.querySelector('#nombre').value;
 console.log('Nombre:',nombre);
 const edad = document.querySelector('#edad').value;
 console.log('Edad:',edad);
 const sexo = document.querySelector('#sexo').value;
 console.log(sexo);
 const peso = document.querySelector('#peso').value;
 console.log('Peso:',peso);
 const altura = document.querySelector('#altura').value;
 console.log('Altura:',altura);
 const nacimiento = document.querySelector('#año').value;
 console.log('Año de nacimiento:', nacimiento);
 //creo objeto persona
 const persona = new Persona(nombre,edad,sexo,peso,altura,nacimiento);
 console.log(persona);
 const dni = persona.generarDNI();
 console.log('DNI:',dni);
 formulario.style.display = 'none';
 //obtener el div
 const div= document.querySelectorAll('div');
 console.log(div);
 //el que necesito es 2 y el 10
 const articuloDatos = document.createElement('article');
 div[2].insertBefore(articuloDatos,div[10])
 const newH2= document.createElement('h2');
 newH2.textContent= 'Datos de la Persona'
 articuloDatos.appendChild(newH2);
 const newNombre = document.createElement('p');
 newNombre.textContent= nombre;
 const newEdad = document.createElement('p');
 newEdad.innerHTML= 'Edad: '+ edad;
 const newSexo = document.createElement('p');
 newSexo.textContent=sexo;
 const newPeso = document.createElement('p');
 newPeso.innerHTML= 'Peso: '+peso+'Kg';
 const newAltura = document.createElement('p');
 newAltura.innerHTML= 'Altura: '+altura+'Cm';
 const newAnio = document.createElement('p');
 newAnio.textContent= 'Año de nacimiento',nacimiento;
 const newDni = document.createElement('p');
 newDni.textContent= dni;
 //Agrego todos los hijos
 articuloDatos.appendChild(newNombre);
 articuloDatos.appendChild(newEdad);
 articuloDatos.appendChild(newSexo);
 articuloDatos.appendChild(newPeso);
 articuloDatos.appendChild(newAltura);
 articuloDatos.appendChild(newAnio);
 articuloDatos.appendChild(newDni);
}


//Obtener el formulario
const formulario = document.querySelector('form');
formulario.addEventListener('submit',datosPersona);