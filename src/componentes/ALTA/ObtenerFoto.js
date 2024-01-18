import { useState } from 'react'
import { enviarFormDataAjax } from '../Servicios/upload'
import './ObtenerFoto.css'
import { ProgressBar } from 'react-bootstrap'




export function ObtenerFoto(props) {
    const { enviarUrlImagen } = props

    const [valorInput, setValorInput] = useState('')
    const [porcentaje, setPorcentaje] = useState(0)
    const [urlFoto, setUrlFoto] = useState('')
    const [startSpinner, setStartSpinner] = useState(false)


    const enviarFoto = archivo => {
        //console.log(archivo)

        if(archivo?.type.includes('image')) {
            const data = new FormData()
            data.append('archivo', archivo)

            enviarFormDataAjax(data, porcentaje => {
                setPorcentaje(porcentaje)
                if(porcentaje === 100) setStartSpinner(true)
            }, url => {
                //console.log(url)
                setUrlFoto(url)
                enviarUrlImagen(url)
                setStartSpinner(false)

                setTimeout(() => {
                    setUrlFoto('')
                    setPorcentaje(0)
                },10000)
            })
        }
        else {
            console.error('El archivo no es una imágen!')
        }
    }

    const dragenter = e => {
        e.preventDefault()
        //console.log('dragenter')
    }

    const dragleave = e => {
        e.preventDefault()
        //console.log('dragleave')
    }

    const dragover = e => {
        e.preventDefault()
        //console.log('dragover')
    }

    const drop = e => {
        e.preventDefault()
        //console.log('drop')
        const archivo = e.dataTransfer.files[0]
        //console.log(archivo)
        enviarFoto(archivo)
    }

    const change = e => {
        const archivo = e.target.files[0]
        //console.log(archivo)
        enviarFoto(archivo)

        setValorInput('')
    }

    return (
        <div className="ObtenerFoto">
            <input id="archivo" type="file" value={valorInput} onChange={change} />
            <div 
                id="drop"
                onDragEnter={dragenter}
                onDragLeave={dragleave}
                onDragOver={dragover}
                onDrop={drop}
            >
                {
                    startSpinner &&
                        <div className="d-flex justify-content-center m-2">
                            <div className="spinner-border spin" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                }

               {/*  { porcentaje > 0 && <><progress min="0" max="100" value={porcentaje}></progress> <span>{porcentaje}%</span></> } */}
                <div className='progress-bar m-2'>
                    { porcentaje > 0 && <><ProgressBar min="0" max="100" style={{width:"100%"}} now={porcentaje} label={`${porcentaje}%`} /></> }
                </div>
        

                <img src={urlFoto} alt="" />
                <label htmlFor="archivo">Arrastre la foto aquí o haga click</label>
            </div>
        </div>
    )
}



