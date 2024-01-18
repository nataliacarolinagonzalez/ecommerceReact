import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faHeart, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'

/* import Button from 'react-bootstrap/Button'; */
import Modal from 'react-bootstrap/Modal';

export const Card = props => {

    const {producto, agregarCarritoID, agregarFavoritosID } = props
    const [menuSelect, setMenuSelect] = useState(false);
    
    const toggleMenu = () => setMenuSelect(prevState => !prevState);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [btn, setBtn] = useState(false);
    const btnCarrito = () => setBtn(false);
    const btnFav = () => setBtn(true);
    
    
    return (
        <div className="Card">


            <Modal className='text-dark' show={show} onHide={handleClose}>
                {/*  <Modal.Header closeButton>
                     <Modal.Title></Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    {btn?"Producto agregado a favoritos":"Producto agregado al carrito "}                    
                </Modal.Body>
                {/* <Modal.Footer></Modal.Footer> */}
            </Modal>
                
            <section>
                <img src={producto.foto} alt="" />
                <p style={{fontVariant:"small-caps", paddingTop: '0.7em'}}>{producto.categoria}</p>
                <p className="nombre"><b>{producto.nombre}</b></p>
                <p>{producto.detalles}</p>
                <p className="precio">${producto.precio}</p>
                {/* <p><b>Stock: </b>{producto.stock}</p>
                <p><b>Marca: </b>{producto.marca}</p> */}               
                {/*  <p><b style={{color:'gold'}}>Envío: </b>{producto.envio? 'Si' : 'No'}</p> */}
                <div id='botones'>
                <button id='fav' onClick={
                    () => {agregarFavoritosID(producto.id);toggleMenu(); handleShow(); btnFav()}
                }> {menuSelect ? <FontAwesomeIcon className='iconos' icon={faHeart} style={{color:'#EF233C', fontSize: '1em', padding: '0.7em'}} ></FontAwesomeIcon> : <FontAwesomeIcon className='iconos' icon={farFaHeart} /* style={{color:'#EF233C', fontSize: '1em', padding: '0.7em'}} */></FontAwesomeIcon>}</button>
                <button id='cart' onClick={
                    () => {agregarCarritoID(producto.id); handleShow(); btnCarrito()}
                }><FontAwesomeIcon className='iconos' icon={faCartShopping} /* style={{color:'#EF233C', fontSize: '1em', padding: '0.7em'}} */></FontAwesomeIcon></button>
                </div>
            </section>
        </div>
    )
}





/* return (
    <div className="Card">


      <Modal className='text-dark' show={show} onHide={handleClose}>
      
        <Modal.Body>
            Producto agregado al carrito
        </Modal.Body>
        
      </Modal>
            
        <section>
            <img src={producto.foto} alt="" />
            <p style={{fontVariant:"small-caps"}}>{producto.categoria}</p>
            <p className="nombre"><b>{producto.nombre}</b></p>
            <p>{producto.detalles}</p>
            <p className="precio">${producto.precio}</p>
            
            <div id='botones'>
            <button id='cart' onClick={
                () => {agregarCarritoID(producto.id); handleShow()}
            }><FontAwesomeIcon icon={faCartShopping} style={{color:'#EF233C', fontSize: '20px', paddingLeft: '10px'}}></FontAwesomeIcon></button>
            <button id='fav' onClick={
                () => {agregarFavoritosID(producto.id);toggleMenu()}
            }> {menuSelect ? <FontAwesomeIcon icon={faHeart} style={{color:'#EF233C', fontSize: '20px', paddingLeft: '10px'}}></FontAwesomeIcon> : <FontAwesomeIcon icon={farFaHeart} style={{color:'#EF233C', fontSize: '20px', paddingLeft: '10px'}}></FontAwesomeIcon>}</button>
            </div>
        </section>
    </div>
) */


