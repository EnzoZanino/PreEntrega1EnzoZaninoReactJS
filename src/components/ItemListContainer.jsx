import React from 'react'

import imgTeclado from '../assets/img/mouse.jpg'
import imgMouse from '../assets/img/teclado.jpg'
import imgPC from '../assets/img/pc.jpg'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className='titulo-greeting'>{greeting}</h1>
            <div className='itemListContainer container-prod'>
                <div className='product-item'>
                    <img src={ imgTeclado } alt="Teclado"/>
                    <h3>Teclado Gamer</h3>
                    <p>Teclado mecanico con luces RGB</p>
                    <span className='price'>$7500</span>
                </div>
                <div className='product-item'>
                    <img src={ imgMouse } alt="Mouse"/>
                    <h3>Mouse Gamer</h3>
                    <p>Mouse con cable mallado y luces RGB</p>
                    <span className='price'>$4500</span>
                </div>
                <div className='product-item'>
                    <img src={ imgPC } alt="PC"/>
                    <h3>PC Gamer</h3>
                    <p>PC con grafica RTX 3070 TI y procesador i7-1165g7</p>
                    <span className='price'>$65000</span>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer