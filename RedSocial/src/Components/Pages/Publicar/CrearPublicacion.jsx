import a from '../../../../public/img/a.png'
import carlos from '../../../../public/img/carlos.png'
import check from '../../../../public/img/check.png'
import chino from '../../../../public/img/chino.png'
import Face from '../../../../public/img/faces.jpeg'
import l from '../../../../public/img/l.png'
import Perfil from '../../../../public/img/perfilH.jpeg'
import PostImage from '../../../../public/img/post.jpeg'
import s from '../../../../public/img/s.png'
import sam from '../../../../public/img/sam.png'
import web from '../../../../public/img/web.png'
import Button from '../../ui/boton/Button'
import Input from '../../ui/input/Input'
import Post from '../../ui/publicacion/Post'
import './crearPublicacion.css'

function CrearPublicacion() {
    return ( 
        <>
            <section className="publicacion-contenedor">
                <div className='publicacion-cuadro'>
                    <img className='publicacion-imagen-crear' src={Face}/>
                    <Input tipo="text" placeholder="Crear publicacion" altura={50} ancho={75} />
                    <button className='publicacion-boton-verificar'><img className='publicacion-imagen-verificar' src={check}/></button>
                </div>
                <div className='publicacion-botones'>
                    <Button ancho="25" altura="50" borderRadius="3px" color="#C5C5C5" colorLetra="#000000" tamañoLetra='70' margenDerecho='2'>Contenido multimedia</Button>
                    <Button ancho="15" altura="50" borderRadius="3px" color="#C5C5C5" colorLetra="#000000" tamañoLetra='70' margenDerecho='2'>Evento</Button>
                    <Button ancho="20" altura="50" borderRadius="3px" color="#C5C5C5" colorLetra="#000000" tamañoLetra='70' margenDerecho='2'>Escribir artículo</Button>
                </div>
                <Post image1={Perfil} text={'Joanna Rosenbaum'} text2={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={PostImage} number={10} number2={0} number3={2} />
                <Post image1={carlos} text={'Joanna Rosenbaum'} text2={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component..'} image2={web} number={10} number2={0} number3={2} />
                <Post image1={chino} text={'Joanna Rosenbaum'} text2={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={s} number={10} number2={0} number3={2} />
                <Post image1={sam} text={'Joanna Rosenbaum'} text2={'Figma ipsum component variant main layer. Prototype thumbnail opacity outline select image list invite selection scale. Bold clip follower overflow align inspect. Star star asset team arrow pixel pixel vector team. Pen object background overflow draft text. Clip draft hand flatten selection connection flows. Editor undo italic blur union arrow union strikethrough editor. Image clip thumbnail flatten select pencil plugin overflow. Overflow italic star distribute object. Flows editor fill hand align rectangle create duplicate pencil style. Library content component italic group. Pixel content rectangle connection vector outline figma follower. Main flatten rectangle fill overflow share. Shadow style editor overflow edit selection object undo.'}  number={10} number2={0} number3={2} />
                <Post image1={a} text={'Joanna Rosenbaum'} text2={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'} image2={l} number={10} number2={0} number3={2} />
            </section>
        </>
    );
    
}
export default CrearPublicacion;
