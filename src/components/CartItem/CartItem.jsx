import React from 'react'

export default function CartItem({id, name, quantity, price}) {

  
  return (
    <article className="CardCartItem">
      <header className="HeaderCartItem">
        <h2 className="ItemHeaderCartItem">{name}</h2>
      </header>
      <section className="ContainerItemCartItem">
        <p className="ItemCartItem">Cantidad: {quantity}</p>
        <p className="ItemCartItem">Precio x unidad: $ {price}</p>
      </section>
      <footer className="ItemFooterCartItem">
        <p className="InfoCartItem">Subtotal: $ {price * quantity}</p>

      </footer>
    </article>
  )
}
