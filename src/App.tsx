import React,{useState,useEffect} from 'react';
import {Iproducts,ITags} from './models'
import './App.css';
function App()
{

  let [products,setProducts]=useState([])
  let [tags,setTags]=useState([])
  let [search,setsearch]=useState("")

  useEffect(function(){
    fetch("http://localhost:4000/products")
    .then((res:any) =>res.json())
    .then(d=>setProducts(d))

    fetch("http://localhost:4000/tags")
    .then((res:any) =>res.json())
    .then(d=>setTags(d))

    
    
  },[])


  const handleChange =(e:KeyboardEvent) =>{
    setsearch(e.target.value)
  }  

  return <div>
    <header>
      <a href="">home</a>
      <a href="">login</a>
      <a href="">signup</a>
      <a href="">cart</a>
      <a href="">orders</a>
      <a href="">profile</a>
      <a href="">checkout</a>
      <a href="">logout</a>
    </header>
    <main>
      <div className="left">
        {tags.map((x:ITags) =>
            <p>
              {x.t}
              <span>{x.c}</span>
            </p>
         )}
      </div>
      <div className="right">
        <div className="filters">
          <button>id</button>
          <button>old</button>
          <button>new</button>
          <button>rating</button>
          <button>discount</button>
          <input onChange={handleChange} placeholder="search..." />
        </div>
        <div className="products">
          <div className="products">
            {products.map((x:Iproducts) =>
                <div className="item">
                  <img src={require("./"+x.image)} alt=""/>
                  <div>{x.title}</div>
                  <div>{x.old}</div>
                  <div>{x.new}</div>
                  <div>{x.rating}</div>
                  <div>{x.discount}</div>
                  <div>{x.tags}</div>
                  <div>add to cart</div>
                </div>
             )}
          </div>
        </div>
      </div>
    </main>
    <footer>
      crafted by <span>Lalit</span>
    </footer>
  </div>  
}
export default App;

