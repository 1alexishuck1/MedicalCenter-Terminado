import React from 'react';
import { Link } from "react-router-dom";


const NoticiaIndiviual = ({ noticia }) => {

    const { titulo, descripcion, img, id} = noticia;

    const loadImage = imageName => (require(`./assets/${imageName}`));

    return (  
        <>
            <div className="container-news">
                <div className="card-news">
                    <img src={loadImage(img)} alt={titulo}/>
                    <div className="text-container">
                        <h3>{titulo}</h3>
                        <p>{descripcion}</p>
                            <Link to={`/getNewsDetail/${id}`  }>
                                <div className="boton">
                                    <button>Seguir leyendo</button>
                                </div>
                            </Link>
                    </div>
                </div>
        </div>
        </>
    );
}
 
export default NoticiaIndiviual;