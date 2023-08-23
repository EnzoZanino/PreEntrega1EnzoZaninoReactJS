import { useState } from 'react'
import React from 'react'
import imgButton from '../../assets/img/carrito-de-supermercado.png'

const CartWidget = () => {

    // const ContenedorComprando = document.querySelector(.contenedorComprando)

    const [contadorCarrito, setContadorCarrito] = useState(0)

    return (
        <div className='contenedorCarrito'>
            <button onClick={() => setContadorCarrito((contador) => contador + 1)} className='buttonCarrito'>
            <span className='material-symbols-outlined'>shopping_cart</span>
            <p className='numeroCarrito'>{/* {contadorCarrito} */} 0</p>
            </button>
            <div className='contenedorComprando'/>
        </div>
    )
}

export default CartWidget

{/* <button className='buttonCarrito'><img src={ imgButton } alt='ImagenCarrito' /><div className='numeroCarrito'>{contadorCarrito}</div></button> */}