import Comentario from '../../../../public/img/charla.png';
import Like from '../../../../public/img/corazon.png';
import Compartir from '../../../../public/img/participacion.png';
import './post.css';

function Post({ text, text2, image1, image2,number, number2, number3 }) {
    return (
        <section className="post-container">
        <div className="profile-title-container">
            <img className="profile-img" src={image1} alt="Imagen de perfil" />
            <h2>{text}</h2>
        </div>
        <div className='post-info-container'>
            <p>{text2}</p>
            <img className="content-img" src={image2} alt="Imagen de contenido" />
            <nav className="reactions-container">
                <div className='interaction'><img className='reaction-img' src={Like} alt="Me gusta" /><h6><b>{number}</b> <a href='#'>Me gusta</a></h6></div>
                <div className='interaction'><img className='reaction-img' src={Comentario} alt="Comentar" /> <h6><b>{number2}</b> <a href='#'>Comentarios</a></h6></div>
                <div className='interaction'><img className='reaction-img' src={Compartir} alt="Compartir" /> <h6><b>{number3}</b> <a href='#'>Compartir</a></h6></div>
            </nav>
        </div>
        <nav className='interaction-container'>
            <div className='post-interaction'><img className='reaction-img2' src={Like} alt="Me gusta" /><h5>Me gusta</h5></div>
            <div className='interaction-2-container'>
                <div className='post-interaction2'><img className='reaction-img2' src={Comentario} alt="Comentar" /><h5>Comentar</h5></div>
                <div className='post-interaction2'><img className='reaction-img2' src={Compartir} alt="Compartir" /><h5>Compartir</h5></div>
            </div>
        </nav>
    </section>
    
    );
}
export default Post;