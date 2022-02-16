//Proceso de Inscripció kodemia con then y catch

function entrevista(entrevistaDeKoder) {
    console.log("Entrevistando a Koder")
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            entrevistaDeKoder.estaEntrevistado = true
            //
            if (entrevistaDeKoder.estaEntrevistado){
                resolve(entrevistaDeKoder)
            }else{
                reject("No se le puede entrevistar al koder")
            }
        },2000)
    })
}

function oferta(ofertaDeKoder) {
    console.log("Ofertando a el koder")
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            ofertaDeKoder.estaOfertado = true
            //
            if (ofertaDeKoder.estaOfertado){
                resolve(ofertaDeKoder)
            }else{
                reject("No se le puede ofertar a el koder")
            }
        },2000)
    })
}

function inscripcion(inscripcionDeKoder) {
    console.log("El koder se esta inscribiendo")
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            inscripcionDeKoder.estaInscrito = true
            // si es falso
            if (!inscripcionDeKoder.estaInscrito){
                reject("No se puede inscribir el koder")
                return//salida temprana
            }else{
                resolve(inscripcionDeKoder)
            }
        },3000)
    })
}

function asistencia(asistenciaDeKoder) {
    console.log("El koder esta asistiendo a clase")
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            asistenciaDeKoder.estaAsistiendo = true
            // si es falso
            if (!asistenciaDeKoder.estaAsistiendo){
                reject("No puede asistir el koder")
                return//salida temprana
            }else{
                resolve(asistenciaDeKoder)
            }
        },3000)
    })
}

const koder = {
    estaEntrevistado: false,
    estaOfertado: false,
    estaInscrito: false,
    estaAsistiendo : false,
  };

entrevista(koder)
    .then((koderEntrevistado) => {
        console.log("Koder Entrevistado: ", koderEntrevistado)
        
        oferta(koder)
            .then((koderOfertado) => {
                console.log("Koder Ofertado: ", koderOfertado)

                inscripcion(koder)
                    .then((koderInscrito) => {
                        console.log("Koder Inscrito: ", koderInscrito)

                        asistencia(koder)
                        .then((koderAsistiendo) => {
                            console.log("Koder Asistiendo: ", koderAsistiendo)
                        })
                        .catch((error) => {
                            console.log("Error al Asistir: ", error)
                        })
                    })
                    .catch((error) => {
                        console.log("Error al Inscribir: ", error)
                    })
            })
            .catch((error) => {
                console.log("Error al Ofertar: ", error)
            } )
    })
    .catch((error) => {
        console.log("Error al Entrevistar: ", error)
    });

    //2.Proceso de inscripción a kodemia con async y await

    async function koderAsync() {
        const koderEntrevistado = await entrevista(koder);
        console.log("Koder Entrevistado Async: ", koderEntrevistado);
        const koderOfertado = await oferta(koder);
        console.log("Koder Ofertado Async: ", koderOfertado);
        const koderInscrito = await inscripcion(koder);
        console.log("Koder Inscrito Async: ", koderInscrito);
        const koderAsistiendo = await asistencia(koder);
        console.log("Koder Asistiendo Async: ", koderAsistiendo);
    }

    koderAsync()
        .then(() => {
            console.log("Funciono koderAsync: ");
        })
        .catch((error) => {
            console.log("Error koderAsync: ", error);
        });

