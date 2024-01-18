import './Carrousel.css'

export const Carrousel = () =>{
    return (
      <div className='promos-carrousel'>
        <div className="promos">
          <div className="promo-uno">
              <p> <span> 3 cuotas sin interés </span> con tarjetas bancarias. </p>
          </div>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide mt-5 mb-5 bg-white" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="1500">
                <img src="https://dormie-alloy.000webhostapp.com/uploads/cuaderno-caritas.webp" className="d-block w-50 " height={200} alt="Cuaderno Caritas"/>
              </div>
              <div className="carousel-item" data-interval="1000">
                <img src="https://dormie-alloy.000webhostapp.com/uploads/cuaderno-mariposas.jpg" className="d-block w-50" height={200} alt="Cuaderno Mariposas"/>
              </div>
              <div className="carousel-item" data-interval="1000">
                <img src="https://dormie-alloy.000webhostapp.com/uploads/marcadores-liso-pastel.jpeg" className="d-block w-50"  height={200} alt="Marcadores pastel"/>
              </div>
              <div className="carousel-item" data-interval="1000">
                <img src="https://dormie-alloy.000webhostapp.com/uploads/ser-marcadores-tropical.webp" className="d-block w-50"  height={200} alt="Marcadores tropical"/>
              </div>
              <div className="carousel-item" data-interval="1000">
                <img src="https://dormie-alloy.000webhostapp.com/uploads/lapices-pastel-faber.jpg" className="d-block w-50"  height={200} alt="Lapices de colores"/>
              </div>
              <div className="carousel-item" data-interval="1000">
                <img src="https://dormie-alloy.000webhostapp.com/uploads/1705260303152-agenda-snoopy.png" className="d-block w-50"  height={200} alt="Agenda Snoopy"/>
              </div>
              <div className="carousel-item" data-interval="1000">
                <img src="https://dormie-alloy.000webhostapp.com/uploads/1705252858278-agenda-perros.webp" className="d-block w-50"  height={200} alt="Agenda perritos"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only"> Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </button>
        </div>
      <div className="promos">
          <div className="promo-dos">
           <p> <span>Envio gratis </span> en compras mayores a $25.000 </p>
          </div> 
      </div>
</div>
)
}

