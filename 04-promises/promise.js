function construir(muroAConstruir) {
  console.log("Muro Construyendo");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muroAConstruir.estaConstruido = true;
      //
      if (muroAConstruir.estaConstruido) {
        resolve(muroAConstruir);
      } else {
        reject("No se puede construir el muro");
      }
    }, 2000);
  });
}

function aplanar(muroAAplanar) {
  console.log("Aplanando el Muro");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muroAAplanar.estaAplanado = true;
      //
      if (muroAAplanar.estaAplanado) {
        resolve(muroAAplanar);
      } else {
        reject("No se puede aplanar el muro");
      }
    }, 2000);
  });
}

function pintar(muroAPintar) {
  console.log("Pintando el muro");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muroAPintar.estaPintado = true;
      // si es falso
      if (!muroAPintar.estaPintado) {
        reject("No se puede pintar el muro");
        return; //salida temprana
      } else {
        resolve(muroAPintar);
      }
    }, 3000);
  });
}

const muro = {
  estaConstruido: false,
  estaAplanado: false,
  estaPintado: false,
};

construir(muro)
  .then((muroConstruido) => {
    console.log("Muro Construido: ", muroConstruido);

    aplanar(muroConstruido)
      .then((muroAplanado) => {
        console.log("Muro Aplanado: ", muroAplanado);

        pintar(muroAplanado)
          .then((muroPintado) => {
            console.log("Muro Pintado: ", muroPintado);
          })
          .catch((error) => {
            console.log("Error al Pintar: ", error);
          });
      })
      .catch("Error al Aplanar: ", muroAplanado);
  })
  .catch((error) => {
    console.log("Error al Construir: ", error);
  });

//async= marca una funcion como asincrona
//await= esperar la ejecución de una promesa

//para usar await necesitamos una funcion a la que marcaremos como asincrona
// las funciones que marquemos como asincronas por defecto nos va a regresar una promesa

async function main() {
  const muroConstruido = await construir(muro);
  console.log("Muro Construido: ", muroConstruido);
  const muroAplanado = await aplanar(muroConstruido);
  console.log("Muro Aplanado: ", muroAplanado);
  const muroPintado = await pintar(muroAplanado);
  console.log("Muro pintado: ", muroPintado);
}

main()
  .then(() => {
    console.log("todo chido");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

/*
    1.Pasar el proceso de inscripción de codemia a promesas y para ejecutarlas
    va a ser con then y catch y despues con async y await
    2.consumir el modulo del file system pero ahora con las promesas
    */
