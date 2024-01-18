import { useEffect } from 'react'

import './Index.css'

export function Index(props) {
    const { titulo: enunciado } = props             // destructuring Object con alias

    useEffect(() => {
        console.log('Componente Index Nosotros (montado)')
        
        return () => {
            console.log('Componente Index Nosotros (desmontado)')
        }
    },[])

    return (
        <div className="Nosotros">
            <div >
                {/* <h3>Componente {enunciado}</h3>
                <hr /> */}
                <h1>- Nosotros -</h1>
                <div className="caja-nosotros">
                    <img id="animacion-logo" src="./IMG/logo.png" alt=""></img>
                    <div className="texto">
                        <p>Somos una empresa 100% nacional, con más de 40 años de trayectoria en la comercialización de artículos de librería, escolar y artística.</p>
                        <p>Contamos con nuestra sucursal cita en la CABA, y nuestro E-commerce para satisfacer la demanda de nuestros clientes en todo el país.</p>
                        <p>Ofrecemos las mejores marcas, el más amplio stock y atención personalizada tanto presencial como a través de nuestro Whatsapp.</p>
                        <p>Gracias por tu visita!!!</p>
                    </div>
                    {/* <img id="animacion-logo" src="./IMG/logo.png" alt=""></img> */}
                </div>
                
                </div>
        </div>
    )
}