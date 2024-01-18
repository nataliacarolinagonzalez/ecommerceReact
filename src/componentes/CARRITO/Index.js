import { useContext, useEffect, useState } from 'react'

import Modal from 'react-bootstrap/Modal';
import './Index.css'

import { Tabla } from './Tabla'
import { enviarCarrito, getPreference } from '../Servicios/carrito'

import './pago.js'
import { Wallet } from '@mercadopago/sdk-react'
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { contextoCarrito } from '../../contextoCarrito.js';



export function Index(props) {
    let location = useLocation()
    console.log(location)     

    const {search} = useLocation()
    const [carrito, setCarrito] = useContext(contextoCarrito)
    const [ compraStatus, setCompraStatus ] = useState({payment_id: 'null', status: 'null', merchant_order_id: 'null'})

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {
        console.log('Componente Index Carrito (montado)')
        
        return () => {
            console.log('Componente Index Carrito (desmontado)')
        }
    }, [])

   
    function borrarAll() {
        setCarrito([])
        handleClose()
    }

    function borrarID(id) {
        const carritoClon = [...carrito]
        const index = carritoClon.findIndex(p => p.id === id)
        carritoClon.splice(index,1)
        setCarrito(carritoClon)
    }
    
    function incrementarCantID(id) {
        const carritoClon = [...carrito]
        const producto = carritoClon.find(p => p.id === id)
        if(producto.cantidad < producto.stock) {
            producto.cantidad++
            setCarrito(carritoClon)
        }
    }
    
    function decrementarCantID(id) {
        const carritoClon = [...carrito]
        const producto = carritoClon.find(p => p.id === id)
        if(producto.cantidad > 1) {
            producto.cantidad--
            setCarrito(carritoClon)
        }
    }

    async function pedir(compra) {
        console.log('pedir')

        const carritoEnviado = await enviarCarrito({compra: compra, pedido: carrito})
        console.log('compra', compra)
        console.log('carrito',carritoEnviado)
        setCarrito([])
    }
  
    const customization = {
        texts: {
            action: 'pay',
            valueProp: 'security_safety'
        },
        visual: {
            buttonBackground: 'default',
            borderRadius: '6px',
        },     
    }
    
   
    
    //https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/checkout-customization/user-interface/auxiliary-callbacks#editor_2
    const onReady = async () => {
        console.log('onReady')
/*  */
        /* const queryParameters = new URLSearchParams(window.location.search) */
        const queryParameters = new URLSearchParams(search)
        console.log(queryParameters)
        const compraParam = {}
        compraParam.payment_id = queryParameters.get('payment_id') || 'null'
        compraParam.status = queryParameters.get('status') || 'null'
        compraParam.merchant_order_id = queryParameters.get('merchant_order_id') || 'null'
        console.log(compraParam)
        
        if(compraParam.payment_id !== 'null' && compraParam.status !== 'null' && compraParam.merchant_order_id !== 'null') {
            if(compraParam.status !== compraStatus.status) {
                setCompraStatus(compraParam)

                if(compraParam.status === 'approved' || compraParam.status === 'pending') {
                    await pedir(compraParam)
                    setTimeout(() => {
                        window.location.href = '/'
                    },8000)
                }
            }
        }
    }

    const onError = () => {
        console.log('onError')
    }

    const onSubmit = () => {
        console.log('onSubmit')

        return new Promise((resolve, reject) => {
            getPreference(carrito)
                /* .then(rta => {
                    const response = rta.data
                    resolve(response.preferenceId)
                }) */
                .then(({data:response}) => {
                    console.log(response)
                    resolve(response.preferenceId)
                })                
                .catch(error => {
                    reject(error)
                })
        })
    }  

    function subtotal__carrito (cantidad, precio){
        /* let subtotal = (cantidad*precio).toFixed(2) */
        let subtotal = cantidad*precio
        return subtotal
    }

    function total__carrito (){
        let total = 0
        carrito.forEach(p => {
            total+=p.precio*p.cantidad
        })
       /*  return total.toFixed(2) */
        return total
    }

    /* function cantidad__carrito(cantidad){
        let cantCarrito = carrito.reduce((acc, p) => {
            return acc + p.cantidad
        }, 0)
        return cantCarrito
    } */

    return (
        <div className="Carrito">
            <>
            <Modal className='text-dark' show={show} onHide={handleClose}>
                {/*  <Modal.Header closeButton>
                     <Modal.Title></Modal.Title>
                 </Modal.Header> */}
                <Modal.Body>
                    ¿Desea eliminar el contenido del carrito?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="danger" onClick={borrarAll}>Aceptar</Button>
                </Modal.Footer>
            </Modal>
            

                <div className="carrito">
                    <h1>- Carrito de compras -</h1>
                   
                    {
                        compraStatus.status !== 'null' &&
                            <div className={`alert compra alert-${compraStatus.status === 'approved'? 'success' : compraStatus.status === 'pending'? 'dark':'danger'} w-50 `}>
                                <h4 style={{textAlign:'justify'}}><b>{compraStatus.status === 'approved' || compraStatus.status === 'pending'? 'Hemos recibido su pedido. Gracias por su compra!' : 'Su pago fue rechazado, puede intentarlo nuevamente.'}</b></h4>
                                <hr />
                                <ul>
                                    <li><h6><b>Operación #</b> {compraStatus.payment_id}</h6></li>
                                    <li><h6 style={{textAlign:'justify'}}><b>Estado: </b>  {compraStatus.status === 'approved'? 'Aprobado' : compraStatus.status === 'pending'? 'Pendiente. Se envió un mail con toda la información para completar el pago.' : 'Rechazado'}</h6></li>
                                    {/* <li><h6><b>Número de pedido:</b> {compraStatus.merchant_order_id}</h6></li> */}
                                </ul>
                            </div>
                    }

                    <br />
                    {carrito.length === 0 && <h6 className='alert alert-dark' style={{width:'50%'}}>El carrito está vacio</h6>}
                    {carrito.length > 0 &&
                        <>                     
                            <Tabla 
                                carrito={carrito} 
                                borrarID={borrarID}
                                incrementarCantID={incrementarCantID}
                                decrementarCantID={decrementarCantID}
                                subtotal__carrito={subtotal__carrito}
                                total__carrito={total__carrito}                             
                             
                                
                            />
                            <div id="wallet_container">
                                <Wallet 
                                    customization={customization}
                                    onReady={onReady}
                                    onError={onError}
                                    onSubmit={onSubmit}
                                />
                                {/* <Wallet initialization={{ preferenceId: '73927731-1c2bc5eb-f4ab-452e-a7d6-96556ab247ef' }} /> */}
                            </div>
                            <div id='pie-button'>
                                {/* <button className="carrito__pedir" onClick={
                                    () => {handleShow(); pedir()}}>Pedir</button> */}
                                <button className="carrito__borrar ml-2" onClick= {handleShow}>Vaciar Carrito</button>
                                

                            </div>
                        </>
                    }
                </div>
            </>
        </div>
    )
}


