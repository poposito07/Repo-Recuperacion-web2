import React from 'react';
import './cardArticulo.css';

function CardArticulo({ username, text, imageUrl }) {
    return (
        <section className="contenedor-articulo-distinto">
            <div className='contenedor-imagen'>
                {imageUrl && <img src={imageUrl} alt="Imagen del artículo" className="imagen-articulo" />}
            </div>
            <div className='contenedor-informacion-unico'>
                <h3 className='espaciado-diferente'>{username}</h3>
                <p className='espaciado-diferente'>{text}</p>
                <button className="boton-ver-mas-otro">Ver más</button>

            </div>
        </section>
    );
}

export default CardArticulo;