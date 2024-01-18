import { useContext, useEffect, useState } from 'react'

import './Index.css'

import { obtenerProductos } from '../Servicios/productos'
import { Card } from './Card'
import { useLocalStorage } from '../Hooks/useLocalStore'
import { Carrousel } from './Carrousel'
import { contextoCarrito } from '../../contextoCarrito'




export function Index(props) {
    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useContext(contextoCarrito)
    const [favoritos, setFavoritos] = useLocalStorage('favoritos', [])
    

    
    useEffect(() => {
        console.log('Componente Index Inicio (montado)')

        async function pedir() {
            const productos = await obtenerProductos()
            console.log(productos)
            setProductos(productos)
        }
        pedir()

        return () => {
            console.log('Componente Index Inicio (desmontado)')
        }
    }, [])


    function agregarCarritoID(id) {
        console.log('agregarCarritoID', id)

        const producto = productos.find(p => p.id === id)
        console.log(producto)

        const carritoClon = [...carrito]

        let pC = carritoClon.find(prodC => prodC.id === producto.id)
        if(!pC) {
            producto.cantidad = 1
            carritoClon.push(producto)
        }
        else {
            pC.cantidad++
        }
        setCarrito(carritoClon)
        
    }


    function agregarFavoritosID(id) {
        console.log('agregarFavoritosID', id)

        const producto = productos.find(p => p.id === id)
        //console.log(producto)

        const favoritosClon = [...favoritos]
        //console.log(favoritosClon)

        let pC = favoritosClon.find(prodC => prodC.id === producto.id)
        if(!pC) {
            /* producto.cantidad = 1 */
            favoritosClon.push(producto)
        }
        else {
            console.log("borrar de favoritos")

        }
        setFavoritos(favoritosClon)
    }

    






    return (
        <div className="Inicio">
            
                {/* <h3>Componente {enunciado}</h3>
                <hr /> */}
                <Carrousel/> 

                <div className="inicio">
                    <div className="section-cards">
                        <div className="section-cards-header">
                            <h1>- Listado de productos -</h1>
                        </div>
                        <br /><br />
                        <div className="cards-container">
                            { productos.map( (producto, index) => 
                                    <Card 
                                        key={index} 
                                        producto={producto} 
                                        agregarCarritoID={agregarCarritoID}
                                        agregarFavoritosID={agregarFavoritosID}
                                        
                                    />
                                )
                            }
                        </div>

                    </div>
                </div>
            
        </div>
    )
}