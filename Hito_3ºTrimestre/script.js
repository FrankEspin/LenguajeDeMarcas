
document.addEventListener('DOMContentLoaded', () => {
    const comunidadSelect = document.getElementById('comunidad');
    const localidadSelect = document.getElementById('localidad-select');
    const buscarButton = document.getElementById('buscar');
  
    // Función para obtener los datos del clima
    const obtenerClima = async (comunidad, localidad) => {
      try {
        const respuesta = await fetch(`https://www.el-tiempo.net/api/json/municipio/{$comunidad}/${localidad}`);
        const datos = await respuesta.json();
        console.log(datos);
  
        // Mostrar la temperatura, humedad y demás datos en la página
        document.getElementById("fecha").innerHTML=data.fecha;
        document.getElementById("temperatura_actual").innerHTML=data.temperatura_actual;
        document.getElementById("viento").innerHTML=data.viento;
      } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
      }
    };
  
    // Evento del botón de buscar
    buscarButton.addEventListener('click', () => {
      const comunidad = comunidadSelect.value;
      const localidad = localidadSelect.value;
      obtenerClima(comunidad, localidad);
    });
  });
