import {  useNavigate, useParams } from "react-router-dom";
import { getSaintById } from "../helpers/getSaintById";
import '../../style/SaintPage.css'
import { FaChevronLeft } from "react-icons/fa";
import { NotFound } from "./NotFound";


export const SaintPage = () => {

    const { id } = useParams();
    // hook navegación
    const navigate = useNavigate();

    const saint = getSaintById( id );

    //  pagina anterior 
    const onNavigateBack = () => {
        navigate(-1);
    }

    if ( !saint ) {
        return <NotFound />
    }

    return (
        <>


        <div className="body">
    <main>
      <nav className="main-menu">
        
            <button
                    onClick={onNavigateBack}>
              
              <FaChevronLeft  className="nav-icon"/>
              <span className="nav-text">Regresar</span>
            </button>
      </nav>

      <section className="content">
        <div className="left-content">
          <div className="activities">
            <div className="user-info">
            <div className="icon-container">
            </div>
            <h1>{saint.saint} de {saint.caballero}</h1>
            <img src={ saint.image } />
          </div>


            <div className="activity-container">
              <div className="image-container img-one">
                <img src={ saint.image } alt={ saint.saint }/>
                <div className="overlay">
                  <h3>Saint</h3>
                </div>
              </div>

              <div className="image-container img-two">
                <img src={ saint.img } alt={ saint.saint } />
                <div className="overlay">
                  <h3>Cloth</h3>
                </div>
              </div>

            </div>
          </div>

          <div className="left-bottom">
            <div className="weekly-schedule">
              <h1>Perfil</h1>
              <div className="calendar">
                <div className="day-and-activity activity-one">
                  <div className="day">
                    <h5>Nombre</h5>
                  </div>
                  <div className="activity">
                    <h2>{saint.saint}</h2>
                    
                  </div>
                </div>

                <div className="day-and-activity activity-two">
                  <div className="day">
                    <h5>Caballero</h5>
                  </div>
                  <div className="activity">
                    <h2>{saint.caballero}</h2>
                    
                  </div>
                </div>

                <div className="day-and-activity activity-three">
                  <div className="day">
                    <h5>Signo</h5>
                  </div>
                  <div className="activity">
                    <h2>{saint.signo}</h2>
                  </div>
                </div>

                  <div className="day-and-activity activity-four">
                    <div className="day">
                      <h5>Rango</h5>
                      
                    </div>
                    <div className="activity">
                      <h2>{saint.rango}</h2>
                    </div>
                  </div>
              </div>
            </div>

            <div className="personal-bests">

            <div className="day-and-activity activity-one">
                  <div className="day">
                    <h5>Armaduras</h5>
                  </div>
                  <div className="activity">
                    <h2>{saint.armaduras}</h2>
                    
                  </div>
                </div>

                <div className="day-and-activity activity-two">
                  <div className="day">
                    <h5>Entrenamiento</h5>
                  </div>
                  <div className="activity">
                    <h2>{saint.entrenamiento}</h2>
                    
                  </div>
                </div>

                <div className="day-and-activity activity-three">
                  <div className="day">
                    <h5>Maestro</h5>
                  </div>
                  <div className="activity">
                    <h2>{saint.maestro}</h2>
                  </div>
                </div>

                  <div className="day-and-activity activity-four">
                    <div className="day">
                      <h5>Nacimiento</h5>
                      
                    </div>
                    <div className="activity">
                      <h2>{saint.lugar_nacimiento}</h2>
                    </div>
                  </div>
        
            </div>
          </div>
        </div>

      </section>
    </main>
  </div>

        </>
    )
}
