
console.log('Script.js está cargado');

const containers = [
    "container1-cuerpo1",
    "container2-cuerpo1",
    "container3-cuerpo1"
];

let currentIndex = 0;

function rotateDivs() {
    console.log('Rotating divs');

    // Obtener el contenedor actual y el siguiente
    const currentContainer = document.getElementById(containers[currentIndex]);
    const nextIndex = (currentIndex + 1) % containers.length;
    const nextContainer = document.getElementById(containers[nextIndex]);

    // Hacer desaparecer el contenedor actual
    currentContainer.classList.remove('visible');

    // Hacer aparecer el siguiente contenedor
    nextContainer.classList.add('visible');

    // Actualizar el índice actual
    currentIndex = nextIndex;
}




const nextButton = document.querySelector('.carousel-control-next');

function clickNext() {
  nextButton.click();
}

setInterval(clickNext, 2000); // Cambia el intervalo a 2000 ms (2 segundos)










document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('c8-contenedor1');
    const servicios = document.querySelectorAll('#c8-servicio');
    const puntos = document.querySelectorAll('#c8-puntos');

    contenedor.addEventListener('mouseover', function() {
        contenedor.classList.add('background-white');
        servicios.forEach(function(servicio) {
            servicio.classList.add('text-white');
        });
        puntos.forEach(function(punto) {
            punto.classList.add('c8-puntos-blancos');
        });
    });

    contenedor.addEventListener('mouseout', function() {
        contenedor.classList.remove('background-white');
        servicios.forEach(function(servicio) {
            servicio.classList.remove('text-white');
        });
        puntos.forEach(function(punto) {
            punto.classList.remove('c8-puntos-blancos');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('c8-contenedor2');
    const servicios = document.querySelectorAll('#c82-servicio');
    const puntos = document.querySelectorAll('#c82-puntos');

    contenedor.addEventListener('mouseover', function() {
        contenedor.classList.add('background-white2');
        servicios.forEach(function(servicio) {
            servicio.classList.add('text-white');
        });
        puntos.forEach(function(punto) {
            punto.classList.add('c82-puntos-blancos');
        });
    });

    contenedor.addEventListener('mouseout', function() {
        contenedor.classList.remove('background-white2');
        servicios.forEach(function(servicio) {
            servicio.classList.remove('text-white');
        });
        puntos.forEach(function(punto) {
            punto.classList.remove('c82-puntos-blancos');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('c8-contenedor3');
    const servicios = document.querySelectorAll('#c83-servicio');
    const puntos = document.querySelectorAll('#c83-puntos');

    contenedor.addEventListener('mouseover', function() {
        contenedor.classList.add('background-white3');
        servicios.forEach(function(servicio) {
            servicio.classList.add('text-white');
        });
        puntos.forEach(function(punto) {
            punto.classList.add('c83-puntos-blancos');
        });
    });

    contenedor.addEventListener('mouseout', function() {
        contenedor.classList.remove('background-white3');
        servicios.forEach(function(servicio) {
            servicio.classList.remove('text-white');
        });
        puntos.forEach(function(punto) {
            punto.classList.remove('c83-puntos-blancos');
        });
    });
});













// script.js
document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector("#c1-titulo1");
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Ajusta según sea necesario
    };
  
    // Función de callback para el Intersection Observer
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Añadir clase visible cuando está en el viewport
        } else {
          entry.target.classList.remove("visible"); // Eliminar clase visible cuando no está en el viewport
        }
      });
    };
  
    // Crear el Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
    // Observar el elemento #cuerpo2-contenedor
    if (target) {
      observer.observe(target);
    }
  });
  








// script.js
document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector("#cuerpo2-contenedor1-d3-s1");

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Ajusta según sea necesario
  };

  // Función de callback para el Intersection Observer
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Añadir clase visible cuando está en el viewport
      } else {
        entry.target.classList.remove("visible"); // Eliminar clase visible cuando no está en el viewport
      }
    });
  };

  // Crear el Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Observar el elemento #cuerpo2-contenedor
  if (target) {
    observer.observe(target);
  }
});







// script.js
document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector("#cuerpo2-contenedor1-d3-s1");

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Ajusta según sea necesario
  };

  // Función de callback para el Intersection Observer
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Añadir clase visible cuando está en el viewport
      } else {
        entry.target.classList.remove("visible"); // Eliminar clase visible cuando no está en el viewport
      }
    });
  };

  // Crear el Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Observar el elemento #cuerpo2-contenedor
  if (target) {
    observer.observe(target);
  }
});













  
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector("#row-cuerpo1");
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Ajusta según sea necesario
    };
  
    // Función de callback para el Intersection Observer
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Añadir clase visible cuando está en el viewport
        } else {
          entry.target.classList.remove("visible"); // Eliminar clase visible cuando no está en el viewport
        }
      });
    };
  
    // Crear el Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
    // Observar el elemento #cuerpo2-contenedor
    if (target) {
      observer.observe(target);
    }
  });
  









  window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbarcito");
    if (window.scrollY > 50) {  // Cambia 50 por el valor que prefieras
        navbarcito.style.backgroundColor = "black"; 
    } else {
        navbarcito.style.backgroundColor = "white"; // Fondo original
    }
  });






  document.addEventListener("DOMContentLoaded", function () {
    const botoncito1 = document.getElementById("botoncito2");
    
    // Alterna la clase 'active' en el botón cada 1 segundo
    setInterval(() => {
        botoncito1.classList.toggle("active");
    }, 1000); // Cambia el intervalo a 1000 ms (1 segundo)
});