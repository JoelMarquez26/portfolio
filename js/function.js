document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el elemento del texto que queremos mostrar
    var textoMostrado = document.getElementById("texto-mostrado");
    // Texto que se escribirá gradualmente
    var textoAEscribir = `<!DOCTYPE html> 
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>PORTFOLIO</title>
        </head>
        <body> 
            <div class="developer">
               <h1 class="username" style="color: #7373737c; person-size:20px">
                <span class="name"> 
                    Joel Márquez 
                </span>
               </h1>
            </div>
        </body>
 </html>`;


    // Función para mostrar el texto con animación de aparición
    function mostrarTexto() {
        textoMostrado.innerHTML = ""; // Limpiamos el contenido
        escribirTexto(textoAEscribir, 0); // Llamamos a la función para escribir el texto

    }

    // Función para escribir el texto gradualmente
    function escribirTexto(texto, indice) {
        if (indice < texto.length) {
            textoMostrado.innerHTML += texto.charAt(indice);
            indice++;
            setTimeout(function() {
                escribirTexto(texto, indice);
            }, 20); // Ajusta este valor para controlar la velocidad de escritura
        }
    }

    // Mostrar el texto después de un cierto tiempo (por ejemplo, 1 segundo)
    setTimeout(mostrarTexto, 500); // 1000 milisegundos = 1 segundo
});


// Define una lista de palabras de bienvenida en diferentes idiomas
var palabrasBienvenida = ["Hello", "Hola", "Hallo","Salut", "Ciao"];

// Obtiene el elemento de texto de bienvenida
var welcomeText = document.querySelector('.welcome-text');

// Variable para seguir la posición actual en el array de palabras de bienvenida
var indicePalabra = 0;

// Función para cambiar la palabra de bienvenida en diferentes idiomas
function cambiarPalabraBienvenida() {
    // Actualiza el texto con la palabra en el idioma actual
    welcomeText.style.opacity = 0; // Cambia la opacidad a 0 para que se desvanezca gradualmente

    setTimeout(function() {
        welcomeText.textContent = palabrasBienvenida[indicePalabra]; // Actualiza el texto con la nueva palabra
        welcomeText.style.opacity = 1; // Restaura la opacidad a 1 para que aparezca gradualmente
    }, 500); // Espera 500 milisegundos antes de actualizar el texto para que la transición funcione correctamente

    // Incrementa el índice para mostrar la siguiente palabra en el siguiente clic
    indicePalabra++;

    // Si el índice es mayor o igual a la longitud del array, reinicia el índice a 0
    if (indicePalabra >= palabrasBienvenida.length) {
        indicePalabra = 0;
    }
}

// Llama a la función inicialmente para mostrar la primera palabra de bienvenida
cambiarPalabraBienvenida();

// Configura un intervalo para cambiar la palabra automáticamente cada 2 segundos
setInterval(cambiarPalabraBienvenida, 3000); // 2000 milisegundos = 2 segundos






document.addEventListener("DOMContentLoaded", function() {
    var enlacesMenu = document.querySelectorAll(".boton-menu2");

    // Función para verificar qué sección está en la vista
    function verificarSeccionVisible() {
        var secciones = document.querySelectorAll("section");
        var viewportHeight = window.innerHeight;
        var currentSectionId = null;

        secciones.forEach(function(seccion) {
            var rect = seccion.getBoundingClientRect();

            // Verifica si alguna parte de la sección está en la vista
            if (rect.top < viewportHeight && rect.bottom > 0) {
                if (!currentSectionId || rect.top < document.querySelector("#" + currentSectionId).getBoundingClientRect().top) {
                    currentSectionId = seccion.getAttribute("id");
                }
            }
        });

        if (currentSectionId) {
            enlacesMenu.forEach(function(enlace) {
                if (enlace.getAttribute("href") === "#" + currentSectionId) {
                    enlace.classList.add("activo");
                } else {
                    enlace.classList.remove("activo");
                }
            });
        }
    }

    window.addEventListener("scroll", verificarSeccionVisible);
    verificarSeccionVisible(); // Para aplicar la clase activa inicialmente
});


// --------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function() {
    var logos = document.querySelectorAll(".logitos i"); // Obtener todos los logos

    // Definir los colores originales
    var colores = {
        "logo-html": "#E34F26", // HTML5
        "logo-css": "#1572B6", // CSS3
        "logo-js": "#F7DF1E", // JavaScript
        "logo-figma": "#F24E1E", // Figma
        "logo-php": "#8892BE" // PHP
    };

    // Función para cambiar gradualmente el color de los logos de lenguajes
    function cambiarColor() {
        logos.forEach(function(logo) {
            var id = logo.getAttribute("id");
            var colorOriginal = colores[id]; // Obtener el color original del logo
            var colorActual = getComputedStyle(logo).color; // Obtener el color actual del logo
            var colorActualHex = rgbToHex(colorActual); // Convertir el color actual a formato hexadecimal
            if (colorActualHex === "#737373") { // Si el color actual es gris, cambia al color original
                logo.style.color = colorOriginal;
            } else { // Si el color actual es el original, cambia a gris
                logo.style.color = "#737373";
            }
        });
        setTimeout(cambiarColor, 4000); // Llamar a la función para cambiar el color cada 3 segundos
    }

    // Convertir color RGB a hexadecimal
    function rgbToHex(rgb) {
        var match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(match[1]) + hex(match[2]) + hex(match[3]);
    }

    // Iniciar el cambio de color
    cambiarColor();
});


//-------------------------------------------------------------------------------

window.addEventListener("scroll", function() {
    var menuIzquierdo = document.getElementById("menu-izquierda");
    var secciones = document.querySelectorAll("section");
    var primeraSeccion = secciones[0]; // Primera sección (índice 0)

    var primerRect = primeraSeccion.getBoundingClientRect();
    if (primerRect.bottom <= 0) {
        menuIzquierdo.style.visibility = "visible"; // Muestra el menú a partir de la segunda sección
    } else {
        menuIzquierdo.style.visibility = "hidden"; // Oculta el menú en la sección principal
    }
});

//----------------------quitar el fixed del menu derecho
window.addEventListener("scroll", function() {
    var menuDerecho = document.getElementById("menu-vertical");
    var primeraSeccion = document.getElementById("home"); // Cambia "home" al ID de tu primera sección

    // Obtiene la posición vertical actual de desplazamiento
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Verifica si la posición actual está dentro de la primera sección
    if (scrollTop < primeraSeccion.offsetHeight) {
        menuDerecho.classList.remove("fixed"); // Quita la clase "fixed" si está dentro de la primera sección
    } else {
        menuDerecho.classList.add("fixed"); // Agrega la clase "fixed" si está fuera de la primera sección
    }
});

// ------------ Cambiar entre blanco-negro el color de los botones dependiendo del color de la section ---------------------------------

window.addEventListener("scroll", function() {
    var botonesMenu = document.querySelectorAll(".boton-menu2");
    var terceraSeccion = document.getElementById("proyectos"); 

    // Obtiene la posición vertical actual de desplazamiento
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Verifica si la posición actual está dentro de la tercera sección
    if (terceraSeccion.offsetTop <= scrollTop && scrollTop < terceraSeccion.offsetTop + terceraSeccion.offsetHeight) {
        botonesMenu.forEach(function(boton) {
            boton.classList.add("tercera-section"); // Agrega una clase específica para la tercera sección
        });
    } else {
        botonesMenu.forEach(function(boton) {
            boton.classList.remove("tercera-section"); // Remueve la clase específica si no está en la tercera sección
        });
    }
});








// Escuchar el evento click del botón
document.getElementById("btnSubir").addEventListener("click", function() {
    // Hacer scroll suavemente hacia la parte superior de la página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", function() {
    var btnSubir = document.getElementById("btnSubir");
    var primeraSeccion = document.getElementById("home"); // Cambia "home" al ID de tu primera sección

    // Obtiene la posición vertical actual de desplazamiento
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Verifica si la posición actual está dentro de la primera sección
    if (scrollTop >= primeraSeccion.offsetHeight) {
        btnSubir.style.display = "block"; // Muestra el botón si está fuera de la primera sección
    } else {
        btnSubir.style.display = "none"; // Oculta el botón si está dentro de la primera sección
    }
});









// Clase para colocar fondo al abrir modal
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var projectInfo = document.getElementById("project-info");
    var closeBtn = document.querySelector(".close-btn");
   
    var body = document.body;

    document.querySelectorAll(".proyecto-img").forEach(function(img) {
        img.addEventListener("click", function() {
            // var info = img.getAttribute("data-info");
            // projectInfo.innerHTML = info;
            modal.style.display = "block";
            body.classList.add("modal-open");
            document.querySelector(".proyec").classList.add("blur-background");
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        body.classList.remove("modal-open");
        document.querySelector(".proyec").classList.remove("blur-background");
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.querySelector(".proyec").classList.remove("blur-background");
        }
    });
});


// Mostrar proyectos con su informacion e imagen unicas

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var projectInfo = document.getElementById("project-info");
    var projectImage = document.getElementById("imagen-project");
    var closeBtn = document.querySelector(".close-btn");
    var body = document.body;

    // Información de los proyectos
    var projectData = {
        "info-project1": {
            title: "Bitiby 'Table4All'",
            description: "Este proyecto nace con la visión de crear una comunidad más justa y sostenible, a través de la innovación tecnológica y la empatía social . Se desarrolló una plataforma web que sirva como herramienta para la gestión y coordinación de un grupo de riders que participan de forma voluntaria para entregar comida a los mas necesitados. ",
            imageUrl: "assets/img/logo-bitiby.png",
            languages: "HTML, CSS, JavaScript, PHP",
            herramientas: "Laravel, VUE, Figma",
            link: ""
        },
        "info-project2": {
            title: "Laia",
            description: "Laia viaja por 3 paises, superando pruebas e iluminando lugares❤️",
            imageUrl: "assets/img/logoLaia.png",
            languages: "HTML, CSS, JavaScript, PHP",
            link: "http://cientifiksenjoc.byethost4.com/?i=1"
        },
        "info-project3": {
            title: "Proyecto 3",
            description: "Este es el Proyecto 3, desarrollado con HTML, CSS y JavaScript.",
            imageUrl: "assets/img/imagen_prueba.png",
            languages: "HTML, CSS, JavaScript, PHP",
            link: "https://example.com/proyecto3"
        }
    };

    document.querySelectorAll(".proyecto-img").forEach(function(img) {
        img.addEventListener("click", function() {
            var infoKey = img.getAttribute("data-info");
            var info = projectData[infoKey];

            // Update modal content
            projectInfo.innerHTML = `
                <h3>${info.title}</h3>
                <p>${info.description}</p>
                <p>Lenguajes: ${info.languages}</p>
                <p>Herramientas: ${info.herramientas}</p>
                <p><a href="${info.link}" class="project-link" target="_blank"><i class="fa-solid fa-circle-plus"></i></a></p>
                
            `;
            projectImage.style.backgroundImage = `url(${info.imageUrl})`;

            modal.style.display = "block";
            body.classList.add("modal-open");
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        body.classList.remove("modal-open");
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.classList.remove("modal-open");
        }
    });
});


//     // Cambiar el color de fondo mientras se hace scroll
//     var seccionProyectos = document.getElementById("proyectos");
//     var seccionContacto = document.getElementById("contacto");

//     window.addEventListener("scroll", function() {
//         var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         var proyectosOffset = seccionProyectos.offsetTop;
//         var contactoOffset = seccionContacto.offsetTop;
//         var proyectosHeight = seccionProyectos.offsetHeight;
//         var windowHeight = window.innerHeight;

//         // Comienza el degradado después de 150vh
//         if (scrollTop >= proyectosOffset - windowHeight + 150 * windowHeight / 100) {
//             var scrollPercentage = (scrollTop - proyectosOffset + 150 * windowHeight / 100) / (proyectosHeight + windowHeight - 150 * windowHeight / 100);
//             scrollPercentage = Math.min(scrollPercentage, 1); // Ensure it does not go beyond 1
//             var bgColorValue = Math.floor(255 * scrollPercentage);
//             var bgColor = `rgb(${bgColorValue}, ${bgColorValue}, ${bgColorValue})`;
//             seccionProyectos.style.backgroundColor = bgColor;
//             menuButtons.forEach(function(button) {
//                 button.style.backgroundColor = bgColor;
//             });
//         } else {
//             seccionProyectos.style.backgroundColor = "black";
//             menuButtons.forEach(function(button) {
//                 button.style.backgroundColor = "black";
//             });
//         }

//         // Ocultar el menú izquierdo al llegar a la sección de contacto
//         if (scrollTop >= contactoOffset - windowHeight) {
//             menuIzquierda.style.display = "none";
//         } else {
//             menuIzquierda.style.display = "block";
//         }
//     });
// });


var seccionProyectos = document.getElementById("proyectos");
var seccionContacto = document.getElementById("contacto");
var menuIzquierda = document.querySelector(".menu-izquierda");
var menuButtons = document.querySelectorAll(".menu-izquierda a");

window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    var contactoOffset = seccionContacto.offsetTop;
    
    var windowHeight = window.innerHeight;



    // Ocultar el menú izquierdo al llegar a la sección de contacto
    if (scrollTop >= contactoOffset - windowHeight) {
        menuIzquierda.style.display = "none";
    } else {
        menuIzquierda.style.display = "block";
    }
});



// copiar correo
document.addEventListener("DOMContentLoaded", function() {
    var copiarTexto = document.querySelector(".copiar");
    var checkIcon = document.querySelector(".fa-circle-check");
    var correoElectronico = "joedmu26@gmail.com"; // Reemplaza con tu correo electrónico real

    copiarTexto.addEventListener("click", function() {
        // Crear un elemento de texto temporal para copiar
        var tempInput = document.createElement("input");
        tempInput.value = correoElectronico;
        document.body.appendChild(tempInput);
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // Para móviles

        try {
            document.execCommand("copy");
            // Ocultar el texto después de 500ms
            setTimeout(function() {
                copiarTexto.classList.add("hidden");
            }, 100);
            // Mostrar el ícono de verificación después de 1000ms (1 segundo)
            setTimeout(function() {
                checkIcon.classList.add("visible");
            }, 500);
        } catch (err) {
            console.error("Error al copiar el correo electrónico", err);
        }

        // Eliminar el elemento de texto temporal
        document.body.removeChild(tempInput);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const titlePro = document.querySelector('.title-proyectos');
    const intro = document.querySelector('.intro-proyectos');
    const titleSkills = document.querySelector('.title-skills');
    const mi = document.querySelector('.title-sobre-mi');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    observer.observe(titlePro);
    observer.observe(intro);
    observer.observe(titleSkills);
    observer.observe(mi);
});

document.addEventListener("DOMContentLoaded", function() {
    const projectImgs = document.querySelectorAll('.proyecto-img');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    projectImgs.forEach((img, index) => {
        img.classList.add(index % 2 === 0 ? 'left' : 'right');
        observer.observe(img);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var textSobreMi = document.querySelector(".text-sobre-mi");

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY + window.innerHeight;
        var elementPosition = textSobreMi.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition > elementPosition) {
            textSobreMi.classList.add("scroll-animation");
        }
    });
});

// CAMBIAR LA IMAGEN DE MINI LOGO
document.addEventListener("DOMContentLoaded", function() {
    var logoImg = document.getElementById("logo-img");

    // Imagenes para los diferentes estados
    var normalSrc = "assets/svg/LOGO MINI.svg";
    var hoverSrc = "assets/svg/LOGO MINI-AZUL.svg";

    // Cambia la imagen al pasar el ratón por encima
    logoImg.addEventListener("mouseover", function() {
        logoImg.classList.add("hover");
        setTimeout(function() {
            logoImg.src = hoverSrc;
            logoImg.classList.remove("hover");
        }, 300); // 300ms matches the CSS transition duration
    });

    // Cambia la imagen al quitar el ratón de encima
    logoImg.addEventListener("mouseout", function() {
        logoImg.classList.add("hover");
        setTimeout(function() {
            logoImg.src = normalSrc;
            logoImg.classList.remove("hover");
        }, 300); // 300ms matches the CSS transition duration
    });
});

document.addEventListener("scroll", function() {
    var scrollTop = window.scrollY;
    var section = document.querySelector(".proyectos");
    var backgroundText = document.querySelector(".background-text");
    var sectionHeight = section.offsetHeight;
    var opacity = Math.min(scrollTop / sectionHeight, 1); // Asegúrate de que la opacidad no supere 1
    backgroundText.style.color = `rgba(0, 0, 0, ${0.1 + (opacity * 1.9)})`; // Incrementa la opacidad del 0.1 al 1
});








  
  
  
  
  


