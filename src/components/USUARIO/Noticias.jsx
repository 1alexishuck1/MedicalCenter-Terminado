import React, { useState, useEffect } from 'react';


import NoticiaIndiviual from './NoticiaIndividual';
import './styles/News.css';

const Noticias = () => {

    // Hook para guardar las noticias
    const [noticias, setNoticias] = useState([]);
        
    const mostrarNoticias = async () => {
        const response = await fetch("http://localhost:4000/noticias");
        const data = await response.json();
        setNoticias(data);
    }

    useEffect(() => {
        mostrarNoticias();
    }, []);

    return (
        <div className='container-principal-news'>
            {
            noticias.map( noticia => {
                return <NoticiaIndiviual
                    noticia={noticia}
                    key={noticia.id} />

            })
            }
        </div>
    );
}

export default Noticias;