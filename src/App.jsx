
import { useState } from 'react';
import './App.css'
import ProductCard from './productCart.jsx';

function App() {
  const data = [
    {
    ProductImage : "https://i.pinimg.com/736x/67/48/7e/67487ee324a5b45474b3630909cc17c8.jpg",
    ProductName : "Nike",
    productPrice:"$40.00 - $80.00"
  },
  {
    ProductImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLtjIhjS_lxsoXLJdChLUjQ3_RBKFj3XODtCCCcFe_K4PRXUxnQE0S_U3marSkPA9dpU&usqp=CAU",
    ProductName : "Adidas",
    productPrice:"$20.00 - $18.00"
  },
  {
    ProductImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkuZfjsFXU6CJubmD9tL--DheInCwvOsBzcg&usqp=CAU",
    ProductName : "Puma",
    productPrice:"$50.00 - $25.00"
  },
  {
    ProductImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzN32Ahvrq_eO1cO0gByafn_yvLExE15KqARlUU7GxYMef-XtToxecKpBqXqrtdppoVe0&usqp=CAU",
    ProductName : "Reebok",
    productPrice:"$40.00"
  },
  {
    ProductImage : "data:image/jpeg;base64,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",
    ProductName : "Sparx",
    productPrice:"$20.00 - $18.00"
  },
  {
    ProductImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJT6PgIj6qsa1cn9-DsnDFaRlADxA8NQmX_C7knkW9hMEJ3iZrOD89xOIrysxcN818eA&usqp=CAU",
    ProductName : "Fila",
    productPrice:"$25.00 - $20.00"
  },
];
 
const [Product, setProduct] = useState([]);
const[inCart, setInCart] = useState(0);

//dummy dely
setTimeout(()=>{
  setProduct(data)
},1000)

  return (

    <div className='app'>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Shopping Cart</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">All Product</a>
          <a class="dropdown-item" href="#">Popular items</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">New Arrival</a>
        </div>
      </li>
    </ul>
    <div className='cart-comp'>
        <h1 className='cart'>Cart 
        <span class="badge badge-pill badge-dark">{inCart}</span>
        </h1>
      </div>
  </div>
</nav>

      <div class="container-fluid">
        <h1 className='container1'>Shop in style</h1>
        <h4 className='container2'>With this shop hompeage template</h4>
      </div>

      <div className='cart-area'>
        {
          Product?.map((prod, idx)=>(
            <ProductCard
              key={idx}
             ProductImg={prod.ProductImage}
             ProductName={prod.ProductName}
             productPrice={prod.productPrice}
             inCart={inCart}
             setInCart={setInCart}
            />
          ))
        }  
      </div>
    </div>
  ); 
}
export default App





