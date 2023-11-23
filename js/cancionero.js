document.addEventListener('DOMContentLoaded', function() {
    var titulosCanciones = document.querySelectorAll('.titulo-cancion');
  
    titulosCanciones.forEach(function(titulo) {
      titulo.addEventListener('click', function() {
        var cancion = this.parentElement;
        var letraCancion = cancion.querySelector('.letra-cancion');
  
        // Ocultar todas las letras antes de mostrar la seleccionada
        document.querySelectorAll('.letra-cancion').forEach(function(letra) {
          if (letra !== letraCancion) {
            letra.style.display = 'none';
          }
        });
  
        if (letraCancion.style.display === 'block') {
          letraCancion.style.display = 'none';
        } else {
          letraCancion.style.display = 'block';
        }
      });
    });
  });
  