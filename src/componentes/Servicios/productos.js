import axios from "axios"

/* const URL_API_PRODUCTOS = 'https://6570da2a09586eff66420aae.mockapi.io/productos/' */

const URL_API_PRODUCTOS = process.env.NODE_ENV === 'production'
                                    ? '/api/productos/'
                                    : `http://localhost:${process.env.REACT_APP_PORT_SRV_DEV}/api/productos/`


const proxyProducto = producto => {
    const handler = {
        get: function(target, prop, receiver) {
            //console.log(target, prop, receiver)

            if(prop === 'id') {
                const id = target._id
                target.id = id
                return id
            }

            return Reflect.get(...arguments)
        }
    }

    return new Proxy(producto, handler)
}

const eliminarPropiedad = (obj, prop) => {
    const objClon = {...obj}
    delete objClon[prop]
    return objClon
}

export async function obtenerProductos() {
    try {
        const { data:productosLeidos } = await axios.get(URL_API_PRODUCTOS)
        const productosLeidosProxy = productosLeidos.map(producto => proxyProducto(producto))
        return productosLeidosProxy
    }
    catch(error) {
        console.error('ERROR GET AXIOS:', error.message)
        return []
    }
}

export async function guardarProducto(producto) {
    try {
        const { data:productoGuardado } = await axios.post(URL_API_PRODUCTOS, producto)
        return proxyProducto(productoGuardado)
    }
    catch(error) {
        console.error('ERROR POST AXIOS:', error.message)
        return {}
    }
}


export async function actualizarProducto(id,producto) {
    try {
        const productoSin_ID = eliminarPropiedad(eliminarPropiedad(producto,'_id'),'id')
        console.log(productoSin_ID)

        const { data:productoActualizado } = await axios.put(URL_API_PRODUCTOS+id, productoSin_ID)
        return proxyProducto(productoActualizado)
    }
    catch(error) {
        console.error('ERROR PUT AXIOS:', error.message)
        return {}
    }
}

export async function borrarProducto(id) {
    try {
        const { data:productoEliminado } = await axios.delete(URL_API_PRODUCTOS+id)
        return proxyProducto(productoEliminado)
    }
    catch(error) {
        console.error('ERROR DELETE AXIOS:', error.message)
        return {}
    }
}