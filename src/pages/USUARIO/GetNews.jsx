import React from 'react';
import HeaderFuncional from '../../components/USUARIO/HeaderFuncional';
import Footer from '../../components/USUARIO/Footer';
import Noticias from '../../components/USUARIO/Noticias';

import './styles/GetNews.css';



const GetNews = () => {
    return (
        <>
            <HeaderFuncional />
            <br />
            <div className='container-principal-news'>
                <Noticias />
            </div>
            <Footer />
        </>
    );
}

export default GetNews;