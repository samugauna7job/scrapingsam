document.getElementById('miFormulario').addEventListener('submit', function (event) {
  event.preventDefault();

  const loaderFather = document.querySelector('.loaderFather');

  // Muestra el loader al enviar el formulario
  loaderFather.style.display = 'flex';

  const datos = {
    rut: document.getElementById('rut').value,
    password: document.getElementById('password').value
    // Agrega otras propiedades según sea necesario
  };

  fetch('/user', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(response => response.text())
    .then(data => {

      const jsonData = JSON.parse(data);
      const loaderFather = document.querySelector('.loaderFather');
      // Si hay datos, oculta el loader y procesa la información
      if (jsonData) {
        loaderFather.style.display = 'none';
        const contenedor = document.getElementById('contenedor');
        const contenedor2 = document.getElementById('contenedor2');
        const contenedor3 = document.getElementById('contenedor3');
        const contenedor4 = document.getElementById('contenedor4');

        //si es un objeto o si es un array
        if (Array.isArray(jsonData[0])) {
          jsonData[0].forEach(ele => {
            // Crea un div por cada objeto
            const nuevoDiv = document.createElement('div');
            // Agrega la información del objeto al div
            nuevoDiv.innerHTML = `<p>Representante legal: </p><p>Nombre: ${ele.nombre}</p><p>RUT: ${ele.rut}</p><p>Fecha: ${ele.fecha}</p>`;
            contenedor.appendChild(nuevoDiv);
          });
        } else {
          const nuevo = jsonData[0]
          const nuevoDiv = document.createElement('div');
          nuevoDiv.innerHTML = `<p>Representante legal: </p><p>Nombre: ${nuevo.nombre}</p><p>RUT: ${nuevo.rut}</p><p>Fecha: ${nuevo.fecha}</p>`;
          contenedor.appendChild(nuevoDiv);
        }

        const domicilio = jsonData[1].adress;
        const nuevoDiv1 = document.createElement('div');
        nuevoDiv1.innerHTML = `<p>Domicilio Titular: ${domicilio}</p>`;
        contenedor2.appendChild(nuevoDiv1);

        const actividad = jsonData[2]["Glosa descriptiva de actividades económicas"];
        const nuevoDiv2 = document.createElement('div');
        nuevoDiv2.innerHTML = `<p>Actividades Econòmicas: ${actividad}</p>`;
        contenedor3.appendChild(nuevoDiv2);
        const periodos = document.createElement('div');
        periodos.innerHTML = '<p>Periodos Tributarios Mensuales</p>';
        contenedor4.appendChild(periodos)
        const imagen = document.createElement("img");

        const imagenBase64 = jsonData[3].screenshot
        imagen.src = "data:image/png;base64," + imagenBase64;;
        contenedor4.appendChild(imagen);

      } else {
        // Si no hay datos, muestra el loader
        loaderFather.style.display = 'block';
      }
    })
    .catch(error => {
      console.error('Error al enviar el formulario:', error);
    })
    .finally(() => {
      // Oculta el loader después de procesar la respuesta
      loaderFather.style.display = 'none';
    });
});


//                    

/* -------------------------*/
const responseContainer = document.getElementById('responseContainer');

document.getElementById('fileUploadForm').addEventListener('submit',
  function (event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    console.log(file.name)
    if (file.name) {
      const formData = new FormData();
      formData.append('file', file);
      fetch('/upload', {
        method: 'POST',
        body: formData
      })
        .then(response => response)
        .then(data => {
          console.log(data)
          // Crea un div con el contenido del Excel
          // const excelDiv = document.createElement('div');
          // excelDiv.textContent = JSON.stringify(data);

          // // Añade el div al contenedor
          // responseContainer.innerHTML = '';
          // responseContainer.appendChild(excelDiv);
        })
        .catch(error => {
          console.error('Error en la solicitud:', error);
        });
    }
  })
