import './Footer.css'

import { NavLink } from "react-router-dom";


export const Footer = () => {

    return(
        <div>
            <footer className='bg-dark'>
                <div id="info-gral-footer">
                    <div className="info">
                        <h4>Información</h4>
                        <ul>
                            <li><NavLink to="#">¿Cómo comprar?</NavLink></li>
                            <li><NavLink to="#">Preguntas Frecuentes</NavLink></li>
                            <li><NavLink to="#">Pagos</NavLink></li>
                            <li><NavLink to="#">Promociones</NavLink></li>
                            <li><NavLink to="#">Cambios y devoluciones</NavLink></li>
                        </ul>
                    </div>
                    <div className="contacto">
                        <h4>Contacto</h4>
                        <ul>
                            <li><img src="./IMG/telefono.png" alt="Teléfono"/>  11-1130-0000</li>
                            <li><img src="./IMG/mail.png" alt="Mail"/><NavLink to="mailto:info@libreriapanchita.com.ar">  info@libreriapanchita.com.ar</NavLink></li>
                            <li> <img src="./IMG/ubicacion.png" alt="Ubicación"/>  Av. Libertador 153</li>
                        </ul>
                    </div>
                    <div className="suscripcion">
                        <h4>Suscribite al Newsletter</h4>
                        <input type="email" placeholder="mimail@mail.com"></input>
                        <input type="submit" value="Suscribirme"></input>
                        <div className="redes">
                            <h4>Seguinos</h4>
                            <NavLink to="http://www.facebook.com" target="_blank"><img src="./IMG/FB.png" alt="FB"/></NavLink>
                            <NavLink to="http://www.instagram.com" target="_blank"><img src="./IMG/IG.png" alt="IG"/></NavLink>
                            <NavLink to="http://www.twitter.com" target="_blank"><img src="./IMG/X.png" alt="Twitter"/></NavLink>
                        </div>
                    </div>
                </div> 
                <div className="copy">
                    <p>© 2023 CG.</p>
                </div>   
            </footer>
            <div className="btn-whatsapp">
                <NavLink to="http://www.whatsapp.com" target="_blank"><img src="./IMG/whatsapp.png" alt="Whatsapp"/></NavLink>
            </div>
        </div>

)
}