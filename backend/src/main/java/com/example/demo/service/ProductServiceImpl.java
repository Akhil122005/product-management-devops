package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	private ProductRepository productrep;

	@Override
	public Product saveProduct(Product product) {
		
		return productrep.save(product);
	}

	@Override
	public List<Product> getAllProducts() {
		
		return productrep.findAll();
	}

	@Override
	public Product getProductById(Integer id) {
		
		return productrep.findById(id).get();
	}


	@Override
	public String  deleteProduct(Integer id) {
		Product p=productrep.findById(id).get();
		if(p!=null)
		{
			productrep.delete(p);
			return "Product Deleted Sucessfully";
		}
		return "SMTH Worng un server";
		
	}

	@Override
	public Product editProduct(Product product, Integer id) {
		Product p=productrep.findById(id).get();
		p.setProductName(product.getProductName());
		p.setDescription(product.getDescription());
		p.setPrice(product.getPrice());
		p.setStatus(product.getStatus());
		return productrep.save(p);
	}
	

}
