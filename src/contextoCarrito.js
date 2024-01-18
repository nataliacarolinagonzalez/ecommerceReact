import { createContext } from "react";
import { useLocalStorage } from "./componentes/Hooks/useLocalStore";


export const contextoCarrito = createContext(null)

export const CarritoProvider = ({children}) => {

    
    const [carrito, setCarrito] = useLocalStorage('carrito', [])

    return (
    <contextoCarrito.Provider value={[carrito, setCarrito]}>
        {children}
    </contextoCarrito.Provider>)


}