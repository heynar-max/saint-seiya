
import {  useNavigate, useParams } from "react-router-dom";
import { getSaintById } from "../helpers/getSaintById";
import '../../style/SaintPage.css'
import { FaChevronLeft } from "react-icons/fa";
import { NotFound } from "../../IU/components/NotFound";
import { useEffect } from "react";


export const SaintPage = () => {

    const { id } = useParams();
    // hook navegación
    const navigate = useNavigate();

    const saint = getSaintById( id );

    //  pagina anterior 
    const onNavigateBack = () => {
        navigate(-1);
    }

    // Asegurarse de que la página siempre cargue desde la parte superior
    useEffect(() => {
      window.scrollTo(0, 0);
  }, []); // [] se asegura de que solo se ejecute una vez al montar el componente

  if (!saint) {
      return <NotFound />
  }

    if ( !saint ) {
        return <NotFound />
    }

    
    return (
        <>
          <body>
            <section>
              <div className="saint_container">
                <div className="saint_header">
                  <div className="button-container">
                    <button className="close-btn circle-btn red"
                            onClick={onNavigateBack}
                    >
                        <FaChevronLeft  className="nav-icon"/>
                        <span className="nav-text">Regresar</span>
                        
                    </button>
                  </div>
                    <h1 className="saint_nombre">{saint.saint} de {saint.caballero}</h1>
                    <img className="imagen_perfil"
                        src={ saint.image }
                        alt="" />
                  </div>
                  <div className="saint_body about-container">
                    <div className="img-frame">
                      <img
                        src={ saint.image }
                        alt="" />
                    </div>
                    <div className="img-frame">
                      <img
                        src={ saint.img }
                        alt="" />
                    </div>

                    <div className="left-bottom">
                      <div className="hero-content">
                        <h1 className="saint_title">Saint</h1>
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
                      </div>

                      <div className="left-bottom">
                        <div className="hero-content">
                          <h1 className="saint_title">Cloth</h1>
                          <div className="calendar">
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
                  </div>
              </div>
            </section>
          </body>

        </>
    )
}
