import './cardPerfil.css'
import Perfil from '../../../../public/img/perfil.jpeg'
import Face from '../../../../public/img/faces.jpeg'

function CardPerfil() {
    return ( 
        <>
            <section className='perfil-nuevo'>
                <div className="contenedor-perfil-nuevo">
                    <img src={Perfil} alt="Imagen de Fondo" className="imagen-fondo-nuevo"/>
                    <img src={Face} alt="Imagen de Perfil" className="imagen-perfil-nuevo"/>
                </div>
                <div className='contenedor-texto-perfil-nuevo'>
                    <h3>Joanna Rosenbaum</h3>
                    <p>Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.</p>
                </div>
                <div className='contenedor-publico-nuevo'>
                    <div className='contenedor-publicacion-nuevo'>
                        <h3 className='margen-nuevo'>24</h3>
                        <p>Publicaciones</p>
                    </div>
                    <div className='contenedor-articulo-nuevo'>
                        <h3 className='margen-nuevo'>136</h3>
                        <p>Artículos</p>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CardPerfil;
