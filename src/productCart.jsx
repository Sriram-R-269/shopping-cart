import { useState } from 'react';

function ProductCard({ProductImg, ProductName,productPrice, inCart, setInCart}){

    const [show, setshow] = useState(true)
  
    const handleAdd = ()=>{
      // change the state of add to remove
      setshow(!show)
      setInCart(inCart + 1);
    }
    const handleRemove = ()=>{
      // change the state of remove to add
      setshow(!show)
      setInCart(inCart - 1);
    }
  
    return(
      <div className="card-component">
        <img src={ProductImg}/>
        <h3 className='component1'>{ProductName}</h3>
        <h4 className='component2'>{productPrice}</h4>
  
        {show === true ?
          <button onClick={handleAdd}>Add to Cart</button> :
        <button onClick={handleRemove}>Remove from Cart</button>
        }
  
      </div>
    )
  }
  export default ProductCard;