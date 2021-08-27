import React from 'react';
import firebase from 'firebase/app';
import { database } from '../../../services/firebase';

const OrdenDeCompra = ({ carrito, total, vaciarCarrito }) => {
    const realizarOrden = event => {
        event.preventDefault();

        //TOMO LOS DATOS DEL USUARIO
        const datosUsuario = {
            nombre: event.target.nombre.value,
            apellido: event.target.apellido.value,
            celular: event.target.celular.value,
            email: event.target.email.value,
        }
        //GENERO UNA NUEVA ORDEN
        const nuevaOrden = {
            comprador: datosUsuario,
            items: carrito,
            fecha: new Date(),
            total
        }

        const ordenes = database.collection('ordenes');

        // CREO LA ORDEN EN LA BASE DE DATOS
        let ordenId;
        ordenes
            .add(nuevaOrden)
            .then(respuesta => {
                ordenId = respuesta.id;
            })
            .catch(err => {
                alert(err)
            })

        // FILTRO LOS PRODUCTOS A CHEQUEAR SU EXISTENSIA
        const productosAChequear = database.collection('productos').where(
            firebase.firestore.FieldPath.documentId(),
            'in',
            carrito.map(producto => producto.producto.id)
        )

        // CHEQUEO QUE HAYAN SUFICIENTES PRODUCTOS EN EXISTENCIA
        productosAChequear.get().then(query => {

            const batch = database.batch();

            const productosSinStock = [];

            //REALIZO LA OPERACION DE COMPARAR CON EL STOCK
            query.docs.forEach((doc) => {
                //Busco el indice del item en el carrito
                let indexEnCarrito = nuevaOrden.items.findIndex(item => item.producto.id === doc.id)

                //Comparo el stock
                if (doc.data().stock >= nuevaOrden.items[indexEnCarrito].cantidad){

                    batch.update(doc.ref, {
                        stock: doc.data().stock - nuevaOrden.items[indexEnCarrito].cantidad,
                    });

                } else {
                    productosSinStock.push({ ...doc.data(), id: doc.id });
                }
            });

            // MUESTRO RESULTADO DE LA OPERACION
            if (productosSinStock.length === 0) {
                
                batch.commit().then(()=>{
                    alert('Orden creada con exito!\n ID: ' + ordenId);
                    vaciarCarrito();
                });

            } else {
                alert('ERROR: No hay suficientes unidades en stock de al menos 1 producto')
            }
        })
    }

    return (
        <form onSubmit={realizarOrden} className='orden-de-compra'>
            <label htmlFor='nombre' id='input-nombre'>Nombre:</label>
            <input type='text' id='nombre' placeholder='David' required />

            <label htmlFor='apellido' id='input-apellido'>Apellido:</label>
            <input type='text' id='apellido' placeholder='Arambulo' required />

            <label htmlFor='celular' id='input-celular'>Celular:</label>
            <input type='text' id='celular' placeholder='1112345678' minLength='10' maxLength='10' required />

            <label htmlFor='email' id='input-email'>E-mail:</label>
            <input type='email' id='email' placeholder='mail@mail.com' required />

            <button type='submit' className='orden-de-compra-submit btn-primario'>REALIZAR ORDEN</button>
        </form>
    )
}

export default OrdenDeCompra;
