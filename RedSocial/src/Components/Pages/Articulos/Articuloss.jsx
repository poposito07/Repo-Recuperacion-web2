import CardArticulo from '../../ui/articulo/CardArticulo';
import '../Articulos/Articuloss.css';
function Articuloss() {
    return ( 
    <>
        <section className='Articuloq'>
        <div className='contenedor-articulo'>
                    <h2 className='marg'>Artículos recientes</h2>
                    <p>Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.</p>
                    <CardArticulo
                        username={'Cary Johs'}
                        text={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'}
                        imageUrl={'../../public/img/robot.png'}
                    />
                    <CardArticulo
                        username={'Cary Johs'}
                        text={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'}
                        imageUrl={'../../public/img/web.png'}
                    />
                    <CardArticulo
                        username={'Cary Johs'}
                        text={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'}
                        imageUrl={'../../public/img/humano.png'}
                        
                    />
                </div>
        </section>
    </>
    );
}

export default Articuloss;