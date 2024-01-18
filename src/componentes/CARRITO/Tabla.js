
import { Link } from 'react-router-dom'
import './Tabla.css'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


export const Tabla = props => {

    const { carrito, borrarID, incrementarCantID, decrementarCantID, subtotal__carrito, total__carrito} = props
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [borrar, setBorrar] = useState(false)
    
    function borrarInd(id) {
        if(id) {
            setBorrar(id)
            handleShow()
        }
    }

    async function goBorrar() {
        const id = borrar
        borrarID(id)
        handleClose()
    }

    return (
        <div >
            
            <Modal className='text-dark' show={show} onHide={handleClose}>
                {/*  <Modal.Header closeButton>
                     <Modal.Title></Modal.Title>
                 </Modal.Header> */}
                <Modal.Body>
                    ¿Desea eliminar este articulo del carrito?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="danger" onClick={goBorrar}>Aceptar</Button>
                </Modal.Footer>
            </Modal>
                            
            <div className=" TablaCarrito ">
                <table className=" table table-responsive">
                   
                   {/*  <thead>
                        <tr>
                            <th>#</th>
                            <th>nombre</th>
                            <th>precio</th>
                            <th>marca</th>
                            <th>foto</th>
                            <th>cantidad</th>
                            <th>acciones</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr/>
                            <td className='sin-borde'></td>
                            <td className='sin-borde'></td>
                            <td className='sin-borde'></td>
                            <td className='sin-borde'></td>
                            <td className='sin-borde'></td>
                            <td className='sin-borde'></td>
                            <td><Link to={"/"} className='seguir-compra'>Seguir comprando</Link></td>
                        <tr/>
                        {
                            carrito.map((producto, index) =>
                                <tr key={index}>
                                    
                                    {/* <td>{producto.id}</td> */}
                                    <td><img width="100px" src={producto.foto} alt={"foto de " + producto.nombre} /></td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.detalles}</td>
                                    {/* <td>{producto.marca}</td> */}
                                    <td>${producto.precio}</td>
                                    <td className='btn-cantidades'>
                                        {producto.cantidad}
                                        <button className='btn-dec' onClick={() => decrementarCantID(producto.id)}>-</button>
                                        <button className='btn-inc' onClick={() => incrementarCantID(producto.id)}>+</button>
                                    </td>
                                    <td>${subtotal__carrito(producto.cantidad, producto.precio)}</td>

                                    <td>
                                        <button className='btn-borrar' onClick={() => {borrarInd(producto.id); /* borrarID(producto.id) */}}>Borrar</button>
                                    </td> 
                                </tr>
                                )
                        }
                        <tr/>
                            <td className='sin-borde'></td>
                            <td className='sin-borde'></td>
                            <td className='sin-borde'></td>
                            <td className='sin-borde'></td>
                            <td className='total'>Total</td>
                            <td className='total'>${total__carrito()}</td>
                        <tr/>
                    </tbody>
                    
                </table>
            </div>
        </div>
    )
}
