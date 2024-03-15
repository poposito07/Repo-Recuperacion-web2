import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import faces from '../../../../public/img/faces.jpeg';
import Images from '../../../../public/img/perfil.jpeg';
import perfilH from '../../../../public/img/perfilH.jpeg';
import Header from '../../../Components/Pages/header/Header';
import Articuloss from '../../Pages/Articulos/Articuloss';
import CrearPublicacionn from '../../Pages/Publicar/CrearPublicacionn';
import '../input/Image.css';
import '../publicacion/Perfil.css';

function Perfil() {
    return ( 
        <>
            <Header />
            <div className="imagen-foto">
                <img src={faces} alt="overlay" className="overlay-image" />
            </div>
            <section className='body'>
                <div className='body-left'>
                    <div className='container-left'>
                        <div className='container-pefil'>
                            <img src={Images} alt="Perfil" />
                        </div>
                        <div className='contenido-info'>
                            <div className='informacion-left'>
                                <h2 className='text'>Joanna Rosenbaum</h2>
                                <h5 className='text'>Ing. Sistemas de la información</h5>
                                <h6 className='text'>Chiapas, México</h6>
                                <article className='redes'>
                              <ul>
                                <li>
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <span><a href="https://instagram.com/JoannaRose">@JoannaRose</a></span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <span><a href="https://facebook.com/JoannaRose">/JoannaRose</a></span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faTwitter} />
                                    <span><a href="https://twitter.com/JoannaRose">@JoannaRose</a></span>
                                </li>
                            </ul>
                              </article>
                           </div>
                            <div className='contenedor-intereses'>
                                <h4 className='text2'>Intereses</h4>
                                <ul className='contenedor-Lista'>
                                    <li className='seccion'>Materias</li>
                                    <li className='seccion'>Deportes</li>
                                    <li className='seccion'>Comida</li>
                                    <li className='seccion'>Hobbies</li>
                                    <li className='seccion'>Peliculas/series</li>
                                </ul>
                            </div>
                        </div>
                        <section className='seccion-infor'>
                            <div className='Conten'>
                                <h2>Acerca de mí</h2>
                                <p>Figma ipsum component variant main layer. Reesizing undo figjam align inspect. Ipsum layer stroke slice frame italic background. Bold boolean duplicate layout overflow. Scale draft ipsum main background figma selection. Star ellipse comment figma content draft. Figma main main arrange strikethrough. List slice pixel ellipse figjam text. Arrow line variant boolean device star hand comment layer. Device shadow pixel comment scale figjam bold library font group. Arrow style slice reesizing underline prototype. Comment move underline arrange style slice move reesizing pixel.</p>
                            </div>
                            <div className='Seccion-Amigos'>
                                <div className='info-amigos'>
                                    <h4 className='margin0'>Amigos</h4>
                                    <h6 className='margin00'>123 amigos <a href='#'>Buscar amigos</a></h6>
                                </div>
                                <div className='contenedor-amigos'>
                                    <img className='imagen' src={faces} alt="Amigo" />
                                    <div className='texto'>
                                        <h4 className='margin0'>Joan Rosenbaum</h4>
                                        <h6 className='margin00'>Ing. Sistemas computacionales</h6>
                                    </div>
                                </div>
                                <div className='contenedor-amigos'>
                                    <img className='imagen' src={perfilH} alt="Amigo" />
                                    <div className='texto'>
                                        <h4 className='margin0'>Joan Rosenbaum</h4>
                                        <h6 className='margin00'>Lic. Marketing</h6>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <CrearPublicacionn/>
                    </div>
                </div>
                <Articuloss/>
                {}
            </section>
        </>
     );
}
export default Perfil;
