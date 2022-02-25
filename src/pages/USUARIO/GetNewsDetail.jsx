import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import "../../components/USUARIO/styles/NewsDetail.css";


import HeaderFuncional from '../../components/USUARIO/HeaderFuncional';
import Footer from '../../components/USUARIO/Footer';

const GetNewsDetail = () => { 
    
    let { id } = useParams();

    // Hook para guardar las noticias
    const [detalles, setDetalles] = useState([]);
    
    
    const mostrarDetalles = async () => {
        const response = await fetch(`http://localhost:4000/noticias/${id}`);
        const data = await response.json();
        setDetalles(data);
    }
    
    {console.log(detalles)}
    
    useEffect(() => {
        mostrarDetalles();
    }, []);

    
    
    const {titulo,descripcion,contenido,autor,img} = detalles;

    const loadImage = imageName => (require(`./assets/${imageName}`)); 

    return (
        <>
            <HeaderFuncional />
            <br /><br /><br />

            <div className='container-news'>
                <div className="news-container">
                    <h1>{titulo}</h1>

                    <hr></hr>
                    
                    <p>{descripcion}</p>
                
                    
                    <p>{contenido}</p>
                    <hr />
                    <h5>{autor}</h5>
                    
                </div>
            </div>

            <Footer />
        </>
    );
}

export default GetNewsDetail;