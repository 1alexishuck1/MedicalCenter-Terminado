import React from 'react';

const MpServer = () => {

    // SDK de Mercado Pago
    const mercadopago = require("mercadopago");
    // Agrega credenciales
    mercadopago.configure({
    access_token: "TEST-6681852449549527-011114-6e1298bcd02883483764079ad1bb0677-323174271",
    });

    // Crea un objeto de preferencia
    let preference = {
        items: [
        {
            title: "Turno",
            unit_price: 100,
            quantity: 1, 
            id: '',
            category_id: '',
            currency_id: 'ARS',
            description: '',
        },
        ],
        back_urls: {
            success: "https://www.success.com",
            failure: "http://www.failure.com",
            pending: "http://www.pending.com"
        }
    };
    
    mercadopago.preferences
        .create(preference)
        .then(function (response) {
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
        })
        .catch(function (error) {
        console.log(error);
        });

    return (  
        <>
        </>
    );
}
 
export default MpServer;