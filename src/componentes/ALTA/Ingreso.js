import './Ingreso.css'
import { ObtenerFoto } from './ObtenerFoto'

export default function Ingreso(props) {

    const { nombre, precio, stock, marca, categoria, detalles, foto, envio } = props.producto
    const { onChange, onSubmit, editarID, invalid, nombreInvalid, marcaInvalid, precioInvalid, stockInvalid, categoriaInvalid, detallesInvalid, enviarUrlImagen } = props
   

    return (
        <div className="Ingreso">
            <form onSubmit={onSubmit} >
                <legend>Formulario de Alta de Productos</legend>
                {/* ------- Campo nombre ------- */}
                <div className="form-group">
                    <label htmlFor="nombre">nombre*</label>
                    <input type="text" id="nombre" className="form-control mb-0" value={nombre} onChange={onChange} />
                    <div className="alert alert-transparent p-0" role="alert">
                        {nombreInvalid?"Ingrese al menos 3 caractéres ":"OK"}
                    </div>
                </div>

                {/* ------- Campo precio ------- */}
                <div className="form-group">
                    <label htmlFor="precio">precio*</label>
                    <input type="number" id="precio" className="form-control mb-0" value={precio} onChange={onChange} />
                    <div className="alert alert-transparent p-0" role="alert">
                        {precioInvalid?"Ingresar sólo números, mínimo 3 digitos.":"OK"}
                    </div>
                </div>

                {/* ------- Campo stock ------- */}
                <div className="form-group">
                    <label htmlFor="stock">stock*</label>
                    <input type="number" id="stock" className="form-control mb-0" value={stock} onChange={onChange} />
                    <div className="alert alert-transparent p-0" role="alert">
                        {stockInvalid?"Ingresar sólo números.":"OK"}
                    </div>
                </div>

                {/* ------- Campo marca ------- */}
                <div className="form-group">
                    <label htmlFor="marca">marca*</label>
                    <input type="text" id="marca" className="form-control mb-0" value={marca} onChange={onChange} />
                    <div className="alert alert-transparent p-0" role="alert">
                        {marcaInvalid?"Ingrese al menos 3 caractéres ":"OK"}
                    </div>
                </div>

                {/* ------- Campo categoria ------- */}
                <div className="form-group">
                    <label htmlFor="categoria">categoria*</label>
                    <input type="text" id="categoria" className="form-control mb-0" value={categoria} onChange={onChange} />
                    <div className="alert alert-transparent p-0" role="alert">
                        {categoriaInvalid?"Ingrese al menos 3 caractéres ":"OK"}
                    </div>
                </div>

                {/* ------- Campo detalles ------- */}
                <div className="form-group">
                    <label htmlFor="detalles">detalles*</label>
                    <input type="text" id="detalles" className="form-control mb-0" value={detalles} onChange={onChange} />
                    <div className="alert alert-transparent p-0" role="alert">
                        {detallesInvalid?"Ingrese al menos 3 caractéres ":"OK"}
                    </div>
                </div>

                {/* ------- Campo foto ------- */}
                <div className="form-group">
                    <label htmlFor="foto">foto*</label>
                    <input type="text" id="foto" className="form-control mb-0" value={foto} onChange={onChange} />
                </div>

                {/* Zona de obtención de la foto del producto */}
                <ObtenerFoto enviarUrlImagen={enviarUrlImagen}/>

                {/* ------- Campo envio ------- */}
                <div className="form-group form-check">
                    <input type="checkbox" id="envio" className="form-check-input mb-0" checked={envio} onChange={onChange} />
                    <label htmlFor="envio">envio*</label>
                </div>
                <p className='legenda'>* campo obligatorio.</p>

                {/* ----- botón de envío ------ */}
                <div id="pie-button">
                    <button disabled={invalid} className={`btn-${editarID?'envioOK':'envioNO'} mt-3 mb-5`}>
                        { editarID? 'Actualizar' : 'Enviar' }
                    </button>
                    {/* <button disabled={invalid} className="btn-danger mt-3 mb-5">
                        { editarID? 'Actualizar' : 'Enviar' }
                    </button> */}
                </div>
            </form>
        </div>

    )
}