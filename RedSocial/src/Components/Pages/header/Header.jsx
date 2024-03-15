import { Link } from 'react-router-dom';
import Engranaje from '../../../../public/img/engranaje.png';
import Button from '../../ui/boton/Button';
import Input from '../../ui/input/Input';
import './header.css';

function Header() {
    return ( 
        <>
            <nav className='Header'>
                <div className='izquierda'>
                    <h2 className='logo'>CampusLink</h2>
                    <Input tipo="text" placeholder="Buscar" altura={37} ancho={40} />
                    <Button ancho="10" altura="38" borderRadius="3px" color="#C5C5C5" colorLetra="#000000">Inicio</Button>
                    <Button ancho="10" altura="38" borderRadius="3px" color="#C5C5C5" colorLetra="#000000">Grupos</Button>
                    <Button ancho="10" altura="38" borderRadius="3px" color="#C5C5C5" colorLetra="#000000">Articulos</Button>
                    <Button ancho="14" altura="38" borderRadius="3px" color="#C5C5C5" colorLetra="#000000">Comunicados</Button>
                </div>
                <div className='derecha'>
                <Link to="/perfil">
                        <Button ancho="90" altura="8" borderRadius="3px" color="#C5C5C5" colorLetra="#000000">Mi Perfil</Button>
                    </Link>
                    <Button ancho="25" altura="65" borderRadius="3px" color="#C5C5C5" colorLetra="#000000"><Link to="/"><img className='rueda' src={Engranaje} alt="Imagen de la tarjeta" /></Link></Button>
                </div>
            </nav>
        </>
     );
}

export default Header;