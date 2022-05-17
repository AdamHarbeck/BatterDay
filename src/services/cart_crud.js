import React from "react";

let cart = localStorage.getItem('userCart')

class CartCrud {
  get() {
    return cart;
  }
  add( item ) {
    // check if the item exists and sends to update if it does
    // the item will consist of a quantity and data
    cart.forEach(obj => {
      if(item.data.id === obj.data.id) {
        this.update(item.quantity, cart.indexOf(obj))
      }
    })
  }
  update(qty, index) {
    cart[index].quantity += qty;
    localStorage.setItem('userCart', cart);
  }
  deleteOne(id) {
    cart.forEach(obj => {
      if(obj.data.id === id) {
        cart.splice(cart.index(obj), 1);
        localStorage.setItem('userCart', cart);
      }
    })
  }
  deleteAll() {
    cart = [];
    localStorage.setItem('userCart', cart);
  }
}
export default new CartCrud;
