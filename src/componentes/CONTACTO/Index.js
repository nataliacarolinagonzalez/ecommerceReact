import { useEffect } from 'react'
import { useState } from 'react'

import './Index.css'
import { Form } from './Form'

export function Index(props) {
    const { titulo: enunciado } = props             // destructuring Object con alias
   
    const [form, setForm] = useState({
        nombre: '',
        tel: '',
        email: '',
        comentario: '',
        condiciones: ''
    })
    
    
    function borrarForm() {
        setForm({
            nombre: '',
            tel: '',
            email: '',
            comentario: '',
            condiciones: ''
        })
    }
    
    useEffect(() => {
        console.log('Componente Index Contacto (montado)')
        
        return () => {
            console.log('Componente Index Contacto (desmontado)')
        }
    },[])

    function onChange(e) {
        const { type, id, value, checked } = e.target
        console.log(type, value, checked, id)
        setForm({ ...form, [id]: type === 'checkbox' ? checked : value })
    }


    function formInvalid() {
        const f = form
        const formNoValido =
            !/^[a-zA-Z0-9\. ñáéíóúÑÁÉÍÓÚ]{3,50}$/.test(f.nombre) ||
            !/^\d{10}$/.test(f.tel) ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) ||
            /* !f.comentario */ 
            !/^[a-zA-Z0-9\. ñáéíóúÑÁÉÍÓÚ?¿!¡,;.-_]{3,350}$/.test(f.comentario)
            
            return formNoValido
        
    }

    function validarNombre(){
        const f = form
        const noValidoNombre =!/^[a-zA-Z0-9\. ñáéíóúÑÁÉÍÓÚ]{3,50}$/.test(f.nombre)
        return noValidoNombre
    }
    
    function validarEmail(){
        const f = form
        const noValidoEmail =!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)
        return noValidoEmail
    }
    function validarTel(){
        const f = form
        const noValidoTel =!/^\d{10}$/.test(f.tel) 
        return noValidoTel
    }
    function validarComentario(){
        const f = form
        const noValidoComentario =!/^[a-zA-Z0-9\. ñáéíóúÑÁÉÍÓÚ?¿!¡,;.-_]{3,350}$/.test(f.comentario)
        return noValidoComentario
    }

    return (
        <div className="Contacto">
            <div>
                {/* <h3>Componente {enunciado}</h3>
                <hr /> */}
                <h1>- Contacto -</h1>
                <div id="como-llegar">
                    <h3>Como llegar</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.617968202805!2d-58.47433729015398!3d-34.56322697285599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb687817e2439%3A0xec33f1bfd02cd95!2sRoque%20P%C3%A9rez%202671%2C%20C1430FBC%20CABA!5e0!3m2!1ses-419!2sar!4v1695862577252!5m2!1ses-419!2sar" style= {{width:'100%', height:'150', border:0, borderRadius:'0.5em', loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>  
                </div>
                <Form
                        form={form}
                        onChange={onChange}
                        invalid={formInvalid()}
                        nombreInvalid={validarNombre()}
                        emailInvalid = {validarEmail()}
                        telInvalid = {validarTel()}
                        comentarioInvalid = {validarComentario()}
                        borrarForm = {borrarForm}
                    
                
                />

                {/* <div id="formulario">
                    <form action="https://formspree.io/f/mvonjkay" target="_blank" method="post">
                            <legend>Formulario de Contacto</legend>
                            <label for="nombre">Nombre y Apellido: *</label>
                            <input id="nombre" name="nombre" type="text"/>
                            <label for="tel">Teléfono *:</label>
                            <input id="tel"  name="tel" type="tel" placeholder="Código de área y número"/>
                            <label for="email">E-mail: *</label>
                            <input id="email" name="email" type="email" placeholder="Ej: mail@gmail.com" /> 
                            <label for="acercaDe">Comentarios</label>
                            <textarea name="acercaDe" id="acercaDe" cols="20" rows="10" maxLength="300" placeholder="Escribí tu consulta"></textarea>   
                            <input className="pie-input" id="condiciones" name="condiciones" value="acepta" type="checkbox" />
                            <label className="pie-input ml-2" for="condiciones">Acepto las condiciones*</label>
                            <p>*: campo obligatorio.</p>
                            <div id="pie-button">
                                <button>Enviar</button>
                                <button  type="reset" className="pie-input ml-3"> Restablecer</button> 
                            </div>
                    </form> 
                </div> */} 

            </div>
        </div>
    )
}