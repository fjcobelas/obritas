import React, {useState} from 'react';
import swal from 'sweetalert';


    const ItemCount = ({stock, initial, onAdd}) => {
        const [count, setCount] = useState(initial)
      
        const handleAdd = () => {
          if (count < stock) {
            setCount(count + 1)
            
            
          } else {
              swal("No hay stock suficiente", "", "error");
          } 
      
        }
      
        const handleSubtract = () => {
          if (count > initial) {
            setCount(count - 1)
            
            
          }
        }
      
      const handleOnAdd = () => {
              swal(count + " items agregados al carrito", "", "success");
          } 
      
  return (
    <div>
        <h1>compra tu obra</h1>
        <br />   
    <div>
        <div> 
            <button onClick={handleSubtract}>-</button>
            <span>  {count}  </span>
            <button onClick={handleAdd}>+</button>
        </div>
        <br />
        <div>
            <button onClick={handleOnAdd}>Agregar al carrito</button>
        </div>  
    </div>
    </div>
  )
}

export default ItemCount