import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import ProductService from '../service/Product.service';
const Home = () => {
   
  const[products, setProducts] = useState([]);
  const[msg , setMsg] = useState("");
  
  useEffect(() => {
    init();
  }, []);
  const init=()=>{
    const productService = new ProductService();
    productService.getAllProducts().then((res) => {
      setProducts(res.data);
      console.log(res.data)
    }).catch((error) => {
      console.error("There was an error fetching the products!", error);
    });
  }
  const handleDelete = (id) => {
    const productService = new ProductService();
    productService.deleteProduct(id).then((res) => {
      setMsg("Product deleted successfully!");
      init();
    }).catch((error) => {
      console.error("There was an error deleting the product!", error);
    });
  }
  return (
    <>
      <div className='container mt-3' >
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className="card-header fs-3 text-center">
                <h4 className="card-title text-center">Product List</h4>
                {msg && <div className='alert alert-success'>{msg}</div>}
              </div>
              <div className='card-body'>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
      {products.map((product) => (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{product.price}</td>
          <td>{product.status}</td>
          <td>
            <Link to={`/Editproduct/${product.id}`} className="btn btn-sm btn-primary">Edit</Link>
            <button onClick={() => handleDelete(product.id)} className="btn btn-sm btn-danger ms-1">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
                </table>
            </div>
        </div>
    </div>
  </div>
 </div>
    </>
  )
}

export default Home
