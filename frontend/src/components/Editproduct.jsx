import {useState } from 'react';
import ProductService from '../service/Product.service';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Editproduct = () => {
  const [product, setProduct] = useState({
    id: '',
    productName: '',
    description: '',
    price: '',
    status: ''

  });
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("Product ID:", id);
  useEffect(() => {
    const productService = new ProductService();
    productService.getProductById(id).then(response => {
      setProduct(response.data);
    }).catch(error => {
      console.error("There was an error fetching the product!", error);
    });
  }, [id]);
  const[msg , setMsg] = useState("");
  const handleChange = (e) => {
    const  value  = e.target.value
    setProduct({ ...product, [e.target.name]: value });
  };
  const productEdit = (e) => {
    e.preventDefault();
    console.log(product);
    const productService = new ProductService();
    productService.editProduct(id,product).then(response => {
      navigate('/');
      console.log("Product saved successfully", response.data);
      setMsg("Product edited successfully!");
      setProduct({
        id: '',
        productName: '',
        description: '',
        price: '',
        status: ''
      });
    }).catch(error => {
      console.error("There was an error while editing the product!", error);
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
                  Edit Product
                </div>
              {msg && <div className='alert alert-success'>{msg}</div>}
              <div className='card-body'>
                <form onSubmit={(e)=> productEdit(e)}>
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
                  <button type='submit' className='btn btn-primary'>Edit Product</button>
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

export default Editproduct
