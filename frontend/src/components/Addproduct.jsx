import React from 'react'
import { useState } from 'react';
import ProductService from '../service/Product.service';

const Addproduct = () => {  

  const [product, setProduct] = useState({
    productName: '',
    description: '',
    price: '',
    status: ''

  });
  const[msg , setMsg] = useState("");
  const handleChange = (e) => {
    const  value  = e.target.value
    setProduct({ ...product, [e.target.name]: value });
  };

  const productregister = (e) => {
    e.preventDefault();
    console.log(product);
    const productService = new ProductService();
    // Here you would typically call a service to save the product
    productService.saveProduct(product).then(response => {
      console.log("Product saved successfully", response.data);
      setMsg("Product added successfully!",msg);
      setProduct({
        productName: '',
        description: '',
        price: '',
        status: ''
      });
    }).catch(error => {
      console.error("There was an error saving the product!", error);
    });
  };
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'> 
            <div className='card mt-5'>
              <div className='card'>
                <div className='card-header fs-3 text-center'>
                  Add Product
                </div>
              {msg && <div className='alert alert-success'>{msg}</div>}
              <div className='card-body'>
                <form onSubmit={(e)=> productregister(e)}>
                  <div className='mb-3'>
                    <label htmlFor='productName' className='form-label'>Product Name</label>
                    <input type='text' className='form-control' name='productName' 
                    onChange={(e)=>handleChange(e)} 
                    value={product.productName}
                    />
                  </div>
                  <div className='mb-3'>
                    <label >Product Description</label>
                    <input className='form-control' name='description' type='text' onChange={(e)=>handleChange(e)} value={product.description}></input>
                  </div>
                  <div className='mb-3'>
                    <label >Product Price</label>
                    <input type='number' className='form-control' name='price' onChange={(e)=>handleChange(e)} value={product.price}></input>
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='status' className='form-label'>Status</label>
                    <input type='text' className='form-control' name='status' onChange={(e)=>handleChange(e)} value={product.status}></input>
                  </div>
                  <button type='submit' className='btn btn-primary'>Add Product</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Addproduct
