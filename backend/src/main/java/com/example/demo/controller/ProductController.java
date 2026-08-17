 package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Product;
import com.example.demo.service.ProductService; 
import org.springframework.web.bind.annotation.RequestMethod;


@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RestController
public class ProductController {
	@Autowired
	private ProductService productservice;
	@PostMapping("/saveproduct")
	public ResponseEntity<?> saveProduct(@RequestBody Product product) {
	    return new  ResponseEntity<> (productservice.saveProduct(product),HttpStatus.CREATED);  
	}
	@GetMapping("/")
	public ResponseEntity<?> getAllProducts() {
		return new  ResponseEntity<> (productservice.getAllProducts(),HttpStatus.OK);
	}
	@GetMapping("/product/{id}")
	public ResponseEntity<?> getProductByid(@PathVariable Integer id){
		return new  ResponseEntity<> (productservice.getProductById(id),HttpStatus.OK);
		
	}
	@DeleteMapping("/deleteProduct/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
	    return new ResponseEntity<>(productservice.deleteProduct(id), HttpStatus.OK);
	}

	@PutMapping("/editProduct/{id}") // <-- change from @PostMapping to @PutMapping
	public ResponseEntity<?> editproduct(@RequestBody Product product, @PathVariable Integer id) {
	    return new ResponseEntity<>(productservice.editProduct(product, id), HttpStatus.CREATED);
	}

	


}
