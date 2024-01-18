import { useContext, useEffect } from 'react'

import './Index.css'

import { TablaFavoritos } from './Tabla'
import { useLocalStorage } from '../Hooks/useLocalStore'
import { contextoCarrito } from '../../contextoCarrito'



export function Index(props) {
    const [carrito, setCarrito] = useContext(contextoCarrito)
    console.log(carrito)

    const [favoritos, setFavoritos] = useLocalStorage('favoritos', [])

    useEffect(() => {
        console.log('Componente Index Favoritos (montado)')

        return () => {
            console.log('Componente Index Favoritos (desmontado)')
        }
    }, [])

    
    function borrarAllFavoritos() {
        setFavoritos([])
    }

    function borrarIDFavoritos(id) {
        const favoritosClon = [...favoritos]
        const index = favoritosClon.findIndex(p => p.id === id)
        favoritosClon.splice(index,1)
        setFavoritos(favoritosClon)
    }
    
    function enviarFavCart(id){
        console.log('id',id)
        console.log('fav', favoritos)
        
        const fav = favoritos.find(f => f.id === id)
        console.log(fav)

        const carritoClon = [...carrito]

        let fC = carritoClon.find(favC => favC.id === fav.id)
        if(!fC) {
            fav.cantidad = 1
            carritoClon.push(fav)
        }
        setCarrito(carritoClon)
        borrarIDFavoritos(id)
    }

   
    return (
        <div className="Favoritos bg-white">
            <div>
                {/* <h3>Componente {enunciado}</h3>
                <hr /> */}

                <div className="favoritos">
                    <h1>- Productos favoritos -</h1>
                    <br /><br />

                    {favoritos.length === 0 && <h6 className='alert alert-dark' style={{width:'50%'}}>No tenés productos favoritos</h6>}
                    {favoritos.length > 0 &&
                        <>
                            <TablaFavoritos 
                                favoritos={favoritos} 
                                borrarIDFavoritos={borrarIDFavoritos}
                                enviarFavCart={enviarFavCart}
                            />
                            <div id='pie-button'>
                                {/* <button className="favoritos__pedir"  onClick={pedirFavoritos}>Pedir</button> */}
                                <button   className="favoritos__borrar ml-3" onClick={borrarAllFavoritos}>Borrar</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}