import Articulos from '../../Components/Pages/Articulos/Articulos'
import CardPerfil from '../../Components/Pages/Perfil/CardPerfil'
import CrearPublicacion from '../../Components/Pages/Publicar/CrearPublicacion'
import Header from '../../Components/Pages/header/Header'

import './Feed.css'


function Feed() {
    return ( 
        <>
            <Header/>
            <section className='Feed'>
                <CardPerfil/>
                <CrearPublicacion/>
                <Articulos/>
            </section>
        </>
     );
}

export default Feed;