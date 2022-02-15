/* Proceso inscripcion kodemia
1. Entrevista 
2. La oferta
3. Inscripción
4. Asistir a clases
*/

const koder = {
    tomoEntrevista: false,
    adquirioLaOferta: false,
    pagoInscripción: false,
    asistioAClases: false
}
/////entrevista
function tomarEntrevista (entrevistaAKoder, callback) {
    setTimeout(() => {
        let error = null
        entrevistaAKoder.estaEntrevistado = true
        if(entrevistaAKoder.estaEntrevistado === false){
            error = "no tomo entrevista"
        }
        callback(error, entrevistaAKoder)
    },3000)
}
///oferta
function recibioOferta (ofertaAKoder, callback) {
    setTimeout(() => {
        let error = null
        ofertaAKoder.estaOfertado = true
        if(ofertaAKoder.estaOfertado === false){
            error = "no recibio oferta"
        }
        callback(error, ofertaAKoder)
    },3000)
}
///inscripscion
function pagarInscripción (pagoKoder, callback) {
    setTimeout(() => {
        let error = null
        pagoKoder.estaPagado = true
        if(pagoKoder.estaPagado === false){
            error = "no pago inscripción"
        }
        callback(error, pagoKoder)
    },3000)
}
///asistir a clase
function asistioAClase(asistioKoder, callback) {
    setTimeout(() => {
        let error = null
        asistioKoder.estaAsistido = true
        if(asistioKoder.estaAsistido=== false){
            error = "no asistio a clase"
        }
        callback(error,asistioKoder)
    },3000)
}

tomarEntrevista(koder, (error,entrevistaAKoder) => {
    if (error) {
        console.error('Error: ',error)
        return
    }
    console.log("EntrevistaKoder: ", entrevistaAKoder)
    recibioOferta(koder, (error,ofertaAKoder) => {
        if (error) {
            console.error('Error: ',error)
            return
        }
        console.log("OfertaAKoder: ", ofertaAKoder)
        pagarInscripción(koder, (error,pagoKoder) => {
            if (error) {
                console.error('Error: ',error)
                return
            }
            console.log("PagoDeKoder: ", pagoKoder)
            asistioAClase(koder, (error,asistioKoder) => {
                if (error) {
                    console.error('Error: ',error)
                    return
                }
                console.log("EntrevistaKoder: ", asistioKoder)
            })
        })
    })
})