import React from 'react'

export default function CartItem({id, name, quantity, price}) {

  
  return (
    <article className="card border-light mb-3">
      <header className="HeaderCartItem">
        <h4 className="ItemHeaderCartItem">{name}</h4>
        <hr />
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
