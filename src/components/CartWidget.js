import carrito from './carrito.png';
import  './CartWidget.css';


function CartWidget() {
  return (
    <div className='carro'>
      <a href="/"> <img src={carrito} alt="carrito"></img></a> 
      
    </div>
  )
}

export default CartWidget
