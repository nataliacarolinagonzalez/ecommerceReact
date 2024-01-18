import './Index.css'
import { useForm } from '@formspree/react';

export function Form(props) {
    const { nombre, tel, email, comentario, condiciones } = props.form
    const { onChange, invalid, nombreInvalid, telInvalid, emailInvalid, comentarioInvalid} = props

    const [state, handleSubmit] = useForm("xkndwgvq");
    if (state.succeeded) {
        return  <h4 className='alert alert-dark mt-5' style={{width:'100%', fontSize:'1em'}}>Su consulta ha sido enviada. Responderemos a la brevedad.</h4>

    }
    return (
        <div className="Form">
            <div id="formulario">
                <form onSubmit={handleSubmit}>
                        <legend>Formulario de Contacto</legend>
                        <label htmlFor="nombre">Nombre: *</label>
                        <input id="nombre"  className='mb-0' name="nombre" type="text" value={nombre} onChange={onChange}/>
                        <div className="alert alert-transparent p-0" role="alert">
                            {nombreInvalid?"Ingrese al menos 3 caractéres ":"OK"}
                        </div>
                        <label htmlFor="tel">Teléfono *:</label>
                        <input id="tel" className='mb-0' name="tel" type="tel" placeholder="Código de área y número" value={tel} onChange={onChange}/>
                        <div className="alert alert-transparent p-0" role="alert">
                            {telInvalid?"Ingrese un número de teléfono válido.":"OK"}
                        </div>
                        <label htmlFor="email">E-mail: *</label>
                        <input id="email" className='mb-0' name="email" type="email" placeholder="Ej: mail@gmail.com" value={email} onChange={onChange}/> 
                        <div className="alert alert-transparent p-0" role="alert">
                            {emailInvalid?"Ingrese un email válido. ":"OK"}
                        </div>
                        <label htmlFor="comentario">Comentarios</label>
                        <textarea name="comentario" className='mb-0' id="comentario" cols="20" rows="10" placeholder="Escribí tu consulta" value={comentario} onChange={onChange}></textarea>
                        <div className="alert alert-transparent p-0" role="alert">
                            {comentarioInvalid?"Ingrese su consulta. Máximo 350 caractéres. ":"OK. Máximo 350 caractéres"}
                        </div>  
                        <input className="pie-input" id="condiciones" name="condiciones" value="acepta" type="checkbox" checked={condiciones} onChange={onChange} />
                        <label className="pie-input ml-2" htmlFor="condiciones">Acepto las condiciones*</label>
                        <p>*: campo obligatorio.</p>
                        <div id="pie-button">
                            <button disabled={ () => {invalid(); state.submitting()}}>Enviar</button>
                            <button  type="reset" className="pie-input ml-3"> Restablecer</button> 
                        </div>
                </form> 
            </div> 
        </div> 
    )
}




/* action="https://formspree.io/f/mvonjkay" target="_blank" method="post" */